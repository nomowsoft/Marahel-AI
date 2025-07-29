'use client';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslations } from "next-intl";
import Image from "next/image";

const Contactus = () => {
  const t = useTranslations('ContactUs');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const website = 'marahel_ai';

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) =>
    /^\d{10}$/.test(phone);

  const handleContactUs = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !title || !message) {
      toast.error(t('filerequired'));
      return;
    }
    if (!isValidEmail(email)) {
      toast.error(t('invalidEmail'));
      return;
    }

    if (!isValidPhone(phone)) {
      toast.error(t('invalidPhone'));
      return;
    }

    const res = await fetch('/api/contact_us', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, phone, title, website }),
    });

    if (res.ok) {
      setShowModal(true);
      setName('');
      setEmail('');
      setPhone('');
      setTitle('');
      setMessage('');
    } else {
      toast.error(t('error'));
    }
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <section className="py-10 lg:py-32">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-white shadow-2xl rounded-lg py-6 px-10">
          <h1 className="text-primary text-center text-4xl font-extrabold">{t('title')}</h1>
          <form onSubmit={handleContactUs}>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="py-10">
                <div className="flex items-center py-5 px-6">
                  <Image src="/contactus/image1.svg" alt="..." width={50} height={20} />
                  <div className="mx-3 font-js">
                    <h1 className="text-xl text-primary font-extrabold font-doto2">{t('location')}</h1>
                    <p className="font-doto2">
                      8479 Al Mashaf, 3713  Ar Rabie Dist., Riyadh 13316 - KSA
                    </p>
                  </div>
                </div>
                <a href="mailto:info@marahel.com.sa" className="flex items-center py-5 px-6">
                  <Image src="/contactus/image2.svg" alt="..." width={50} height={20} />
                  <div className="mx-3 font-js">
                    <h1 className="text-xl text-primary font-extrabold font-doto2">{t('email')}</h1>
                    <p className="font-doto2">info@marahel.com.sa</p>
                  </div>
                </a>
                <a href="tel:+966534551191" className="flex items-center py-5 px-6">
                  <Image src="/contactus/image3.svg" alt="..." width={50} height={20} />
                  <div className="mx-3 font-js">
                    <h1 className="text-xl font-extrabold text-primary font-doto2">{t('phone')}</h1>
                    <p dir="rtl" className="font-doto2">947 377 548 966+</p>
                  </div>
                </a>
              </div>

              <div className="py-10">
                {[{
                  placeholder: t('name'), value: name, setValue: setName
                }, {
                  placeholder: t('email'), value: email, setValue: setEmail
                }, {
                  placeholder: t('phone'), value: phone, setValue: setPhone
                }, {
                  placeholder: t('address'), value: title, setValue: setTitle
                }, {
                  placeholder: t('message'), value: message, setValue: setMessage
                }].map((field, idx) => (
                  <div className="py-2" key={idx}>
                    <input
                      type="text"
                      className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                        placeholder:text-gray-500 text-gray-500 text-xl font-doto2 font-bold font-js w-full h-10 
                        focus:outline-none focus:border-b-primary focus:placeholder:text-primary focus:text-primary
                        hover:border-b-primary transition-all"
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={(e) => field.setValue(e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mx-2 bg-primary border border-primary py-4 px-16 rounded-md flex justify-center items-center"
              >
                <span className="mx-2 lg:text-2xl text-white">{t('send')}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl px-6 py-8 w-full max-w-sm text-center shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 left-4 text-primary text-2xl font-bold"
            >
              <Image src="/contactus/X.svg" alt="..." width={30} height={20} />
            </button>
            <h2 className="text-xl font-bold text-primary mb-2 mt-7">{t('successTitle')}</h2>
            <p className="text-gray-700 mb-6">
              {t('success')}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-primary text-white px-6 py-2 rounded-xl transition"
            >
              {t('ok')}
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Contactus;
