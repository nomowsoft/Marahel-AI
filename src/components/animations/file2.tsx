"use client";
import React, { useEffect, useRef, useState } from "react";
import { Brain, FileText, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

type Msg = { id: number; role: "bot" | "question" | "answer"; text: string };

export const KnowledgeHubDemo = () => {
  const t = useTranslations("knowledgeHub");

  const [messages, setMessages] = useState<Msg[]>([]);
  const [isRunning, setIsRunning] = useState(true);
  const [typing, setTyping] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const demoFiles: string[] = t.raw("demoFiles");
  const qaPairs: { q: string; a: string }[] = t.raw("qaPairs");

  const pushMsg = (m: Msg) => setMessages((prev) => [...prev, m]);

  const typeOut = async (targetId: number, text: string, speed = 25) => {
    setTyping(true);
    let displayed = "";
    for (const ch of text) {
      displayed += ch;
      setMessages((prev) =>
        prev.map((m) => (m.id === targetId ? { ...m, text: displayed } : m))
      );
      await new Promise((r) => setTimeout(r, speed));
      scrollToBottom();
    }
    setTyping(false);
  };

  const scrollToBottom = () => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  const fakeUpload = async (filename: string) => {
    pushMsg({ id: Date.now() + Math.random(), role: "bot", text: t("uploading", { filename }) });
    setProgress(2);
    for (let p = 5; p <= 95; p += Math.floor(3 + Math.random() * 8)) {
      setProgress(p);
      await new Promise((r) => setTimeout(r, 120 + Math.random() * 200));
      scrollToBottom();
    }
    setProgress(100);
    await new Promise((r) => setTimeout(r, 400));
    pushMsg({ id: Date.now() + Math.random(), role: "bot", text: t("uploaded", { filename }) });
    setProgress(null);
  };

  const fakeAnalyze = async () => {
    const lastId = Date.now() + Math.random();
    pushMsg({ id: lastId, role: "bot", text: "" });
    await typeOut(lastId, t("analyzing"));
    await new Promise((r) => setTimeout(r, 900 + Math.random() * 800));
    pushMsg({ id: Date.now() + Math.random(), role: "bot", text: t("analysisDone") });
  };

  useEffect(() => {
    let cancelled = false;
    const runDemo = async () => {
      while (!cancelled && isRunning) {
        setMessages([]);
        pushMsg({ id: Date.now(), role: "bot", text: t("botAddFiles") });
        await new Promise((r) => setTimeout(r, 700));
        for (const f of demoFiles) {
          if (cancelled) break;
          pushMsg({ id: Date.now() + Math.random(), role: "bot", text: `${t("uploaded", { filename: f })}` });
          await fakeUpload(f);
        }
        if (cancelled) break;

        await fakeAnalyze();

        for (const pair of qaPairs) {
          if (cancelled) break;
          const qId = Date.now() + Math.random();
          pushMsg({ id: qId, role: "question", text: "" });
          await typeOut(qId, pair.q, 30);
          await new Promise((r) => setTimeout(r, 900));

          const aId = Date.now() + Math.random();
          pushMsg({ id: aId, role: "answer", text: "" });
          await typeOut(aId, pair.a, 22);
          await new Promise((r) => setTimeout(r, 1100));
        }

        pushMsg({ id: Date.now(), role: "bot", text: t("restart") });
        await new Promise((r) => setTimeout(r, 3000));
      }
    };
    runDemo();
    return () => { cancelled = true; };
  }, [isRunning]);

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-background/80 to-card/80 backdrop-blur-xl border border-border/30 rounded-2xl shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/30">
          <Brain className="w-6 h-6 text-primary" />
        </div>
        <div>
          <div className="font-bold text-foreground">{t("title")}</div>
          <div className="text-xs text-muted-foreground">{t("subtitle")}</div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setIsRunning((s) => !s)}
            className="text-xs px-2 py-1 rounded-md border border-border/30 bg-card/20"
          >
            {isRunning ? t("stop") : t("start")}
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="h-80 overflow-y-auto p-4 rounded-xl bg-background/40 border border-border/20 space-y-3"
      >
        {messages.map((m) => (
          <div key={m.id}>
            {m.role === "question" && (
              <div className="flex justify-start">
                <div className="flex-shrink-0 mr-2 mt-1">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <div className="bg-card/60 text-foreground px-3 py-2 rounded-lg max-w-[80%] shadow-sm">
                  {m.text || <span className="text-muted-foreground">...</span>}
                </div>
              </div>
            )}
            {m.role === "answer" && (
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg max-w-[80%] shadow-sm">
                  {m.text || <span className="text-primary/30">...</span>}
                </div>
              </div>
            )}
            {m.role === "bot" && (
              <div className="flex justify-start">
                <div className="bg-card/50 text-foreground px-3 py-2 rounded-lg max-w-[80%] shadow-sm flex items-center gap-3">
                  <div>{m.text || <span className="text-muted-foreground">...</span>}</div>
                  {typing && (
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {progress !== null && (
          <div className="mt-2">
            <div className="text-xs text-muted-foreground mb-1">
              {t("progress", { percent: Math.min(100, Math.round(progress)) })}
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                style={{ width: `${Math.min(100, progress)}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
