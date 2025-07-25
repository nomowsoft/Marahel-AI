'use client';
import { useState } from 'react';
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
  const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) =>
  /^05\d{8}$/.test(phone);

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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        title,
        message,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      toast.success(data.message);
      setName('');
      setEmail('');
      setPhone('');
      setTitle('');
      setMessage('');
    } else {
      const data = await res.json();
      toast.error(data.message);
    }
  };
  return (
    <section className="py-10 lg:py-32">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-white shadow-2xl rounded-lg py-6 px-10">
          <h1 className="text-primary text-center text-4xl font-extrabold">{t('title')}</h1>
          <form onSubmit={handleContactUs}>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="py-10">
                <div className="flex items-center py-5 px-6">
                  <div className="flex justify-center items-center rounded-md">
                    <Image src="/contactus/image1.svg" alt="..." width={50} height={20} />
                  </div>
                  <div className="mx-3 font-js">
                    <h1 className="text-xl text-primary font-extrabold font-doto2">{t('location')}</h1>
                    <p className="font-doto2">
                      8479 Al Mashaf, 3713  Ar Rabie Dist., Riyadh 13316 - KSA
                    </p>
                  </div>
                </div>
                <div className="flex items-center py-5 px-6">
                  <div className="flex justify-center items-center rounded-md">
                    <Image src="/contactus/image2.svg" alt="..." width={50} height={20} />
                  </div>
                  <div className="mx-3 font-js">
                    <h1 className="text-xl text-primary font-extrabold font-doto2">{t('email')}</h1>
                    <p className="font-doto2">
                      info@marahel.com.sa
                    </p>
                  </div>
                </div>
                <div className="flex items-center py-5 px-6">
                  <div className="flex justify-center items-centerrounded-md">
                    <Image src="/contactus/image3.svg" alt="..." width={50} height={20} />
                  </div>
                  <div className="mx-3 font-js">
                    <h1 className="text-xl font-extrabold text-primary font-doto2">{t('phone')}</h1>
                    <p dir="rtl" className="font-doto2">
                      947 377 548 966+
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-10">
                <div className="py-2">
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                    placeholder:text-gray-500 text-gray-500 text-xl font-doto2 font-bold font-js w-full h-10 
                    focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                    hover:border-b-primary transition-all"
                    placeholder={t('name')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="py-2">
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-doto2 font-bold font-js w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder={t('email')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="py-2">
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-doto2 font-bold font-js w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder={t('phone')}
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="py-2">
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-bold font-doto2 font-js w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder={t('address')}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="py-2">
                  <input
                    type="text"
                    className="border border-b-gray-500 border-r-white border-l-white border-t-white 
                  placeholder:text-gray-500 text-gray-500 text-xl font-doto2 font-bold font-js w-full h-10 
                  focus:outline-none focus:border-b-primary  focus:placeholder:text-primary focus:text-primary
                  hover:border-b-primary transition-all"
                    placeholder={t('message')}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mx-2 bg-primary border border-primary py-4 px-16 rounded-md flex justify-center items-center"
              >
                <span className="mx-2 lg:text-2xl text-white">
                  {t('send')}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contactus
