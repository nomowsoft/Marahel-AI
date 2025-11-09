"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useTranslations, useLocale } from "next-intl";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_FILE_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
    "image/png",
    "text/plain",
];

export default function TalentCommunityForm() {
    const t = useTranslations("jobs");
    const locale = useLocale();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        nationality: "",
        countryOfResidence: "",
        degree: "",
        major: "",
        graduationYear: "",
        experienceLevel: "",
    });
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // تغيير الحقول النصية
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // تغيير الحقول المنسدلة
    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // رفع الملفات
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > MAX_FILE_SIZE) {
            toast.error(t("fileTooLarge"));
            e.target.value = "";
            return;
        }

        if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
            toast.error(t("invalidFileType"));
            e.target.value = "";
            return;
        }

        setResumeFile(file);
    };

    // إرسال النموذج
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {
            firstName,
            lastName,
            email,
            mobileNumber,
            nationality,
            countryOfResidence,
            degree,
            major,
            experienceLevel,
        } = formData;

        if (
            !firstName ||
            !lastName ||
            !email ||
            !mobileNumber ||
            !nationality ||
            !countryOfResidence ||
            !degree ||
            !major ||
            !experienceLevel
        ) {
            toast.error(t("fieldRequired"));
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error(t("invalidEmail"));
            return;
        }

        if (!/^[0-9+\-\s()]+$/.test(mobileNumber)) {
            toast.error(t("invalidPhone"));
            return;
        }

        if (!resumeFile) {
            toast.error(t("resumeRequired"));
            return;
        }

        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });
            formDataToSend.append("resume", resumeFile);

            const res = await fetch("/api/request_job", {
                method: "POST",
                body: formDataToSend,
            });

            const result = await res.json();

            if (result.success) {
                toast.success(t("formSuccess"));
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobileNumber: "",
                    nationality: "",
                    countryOfResidence: "",
                    degree: "",
                    major: "",
                    graduationYear: "",
                    experienceLevel: "",
                });
                setResumeFile(null);
                const fileInput = document.getElementById("resume") as HTMLInputElement;
                if (fileInput) fileInput.value = "";
            } else {
                toast.error(result.message || t("formError"));
            }
        } catch {
            toast.error(t("formError"));
        } finally {
            setIsSubmitting(false);
        }
    };

    // البيانات للقوائم المنسدلة
    const countries = [
        t("countries.usa"),
        t("countries.uk"),
        t("countries.canada"),
        t("countries.australia"),
        t("countries.germany"),
        t("countries.france"),
        t("countries.saudiArabia"),
        t("countries.uae"),
        t("countries.india"),
        t("countries.china"),
        t("countries.japan"),
        t("countries.brazil"),
        t("countries.mexico"),
        t("countries.southAfrica"),
        t("countries.other"),
    ];
    const degrees = [
        t("degrees.highSchool"),
        t("degrees.associate"),
        t("degrees.bachelor"),
        t("degrees.master"),
        t("degrees.phd"),
        t("degrees.professionalCert"),
    ];
    const majors = [
        t("majors.chemicalEngineering"),
        t("majors.mechanicalEngineering"),
        t("majors.electricalEngineering"),
        t("majors.civilEngineering"),
        t("majors.computerScience"),
        t("majors.businessAdmin"),
        t("majors.finance"),
        t("majors.marketing"),
        t("majors.humanResources"),
        t("majors.chemistry"),
        t("majors.other")
    ];
    const experienceLevels = [
        t("experience.entry"),
        t("experience.mid"),
        t("experience.senior"),
        t("experience.executive"),
        t("experience.freshGraduate"),
    ];
    const generateYears = () => {
        const currentYear = new Date().getFullYear();
        return Array.from({ length: 40 }, (_, i) => (currentYear - i).toString());
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={t("firstName")}
                    className="bg-background border border-primary h-12 rounded-xl text-white"
                />
                <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={t("lastName")}
                    className="bg-background border border-primary h-12 rounded-xl text-white"
                />
                <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("email")}
                    className="bg-background border border-primary h-12 rounded-xl text-white"
                />
                <Input
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder={t("mobileNumber")}
                    className="bg-background border border-primary h-12 rounded-xl text-white"
                />

                {/* Selects */}
                <Select
                    onValueChange={(val) => handleSelectChange("nationality", val)}
                    value={formData.nationality}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                >
                    <SelectTrigger className="bg-background border border-primary h-12 rounded-xl text-white">
                        <SelectValue placeholder={t("nationality")} />
                    </SelectTrigger>
                    <SelectContent>
                        {countries.map((c) => (
                            <SelectItem key={c} value={c}>
                                {c}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    onValueChange={(val) => handleSelectChange("countryOfResidence", val)}
                    value={formData.countryOfResidence}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                >
                    <SelectTrigger className="bg-background border border-primary h-12 rounded-xl text-white">
                        <SelectValue placeholder={t("countryOfResidence")} />
                    </SelectTrigger>
                    <SelectContent>
                        {countries.map((c) => (
                            <SelectItem key={c} value={c}>
                                {c}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    onValueChange={(val) => handleSelectChange("degree", val)}
                    value={formData.degree}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                >
                    <SelectTrigger className="bg-background border border-primary h-12 rounded-xl text-white">
                        <SelectValue placeholder={t("degree")} />
                    </SelectTrigger>
                    <SelectContent>
                        {degrees.map((d) => (
                            <SelectItem key={d} value={d}>
                                {d}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    onValueChange={(val) => handleSelectChange("major", val)}
                    value={formData.major}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                >
                    <SelectTrigger className="bg-background border border-primary h-12 rounded-xl text-white">
                        <SelectValue placeholder={t("major")} />
                    </SelectTrigger>
                    <SelectContent>
                        {majors.map((m) => (
                            <SelectItem key={m} value={m}>
                                {m}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    onValueChange={(val) => handleSelectChange("graduationYear", val)}
                    value={formData.graduationYear}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                >
                    <SelectTrigger className="bg-background border border-primary h-12 rounded-xl text-white">
                        <SelectValue placeholder={t("graduationYear")} />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                        {generateYears().map((y) => (
                            <SelectItem key={y} value={y}>
                                {y}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    onValueChange={(val) => handleSelectChange("experienceLevel", val)}
                    value={formData.experienceLevel}
                    dir={locale === "ar" ? "rtl" : "ltr"}
                >
                    <SelectTrigger className="bg-background border border-primary h-12 rounded-xl text-white">
                        <SelectValue placeholder={t("experienceLevel")} />
                    </SelectTrigger>
                    <SelectContent>
                        {experienceLevels.map((lvl) => (
                            <SelectItem key={lvl} value={lvl}>
                                {lvl}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* File Upload */}
            <div>
                <label className="text-foreground">{t("resume")}</label>
                <Input
                    id="resume"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    className="bg-background border border-primary h-12 rounded-xl text-white cursor-pointer"
                />
                {resumeFile && (
                    <p className="text-sm text-accent mt-1">
                        {t("selectedFile")}: {resumeFile.name}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary border border-primary h-12 rounded-xl text-xl hover:bg-primary/90"
            >
                {isSubmitting ? t("submitting") : t("submitApplication")}
            </Button>
        </form>
    );
}
