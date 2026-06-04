"use client";

import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiShoppingBag,
  FiArrowUpRight,
  FiCheckCircle,
} from "react-icons/fi";
import Wrapper from "@/components/_shared/Wrapper";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    gender: "Rahasia",
    whatsapp: "",
    catatan: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nama: "",
        email: "",
        gender: "Rahasia",
        whatsapp: "",
        catatan: "",
      });
    }, 4000);
  };

  const contactItems = [
    {
      icon: <FiMail className="text-xl text-zinc-300" />,
      label: "Email",
      value: "olocondom@gmail.com",
      link: "mailto:olocondom@gmail.com",
    },
    {
      icon: <FiPhone className="text-xl text-zinc-300" />,
      label: "Telepon",
      value: "0812-3456-7890",
      link: "tel:081234567890",
    },
    {
      icon: <FiMapPin className="text-xl text-zinc-300" />,
      label: "Alamat",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://maps.google.com",
    },
    {
      icon: <FiInstagram className="text-xl text-zinc-300" />,
      label: "Instagram",
      value: "@olocondom",
      link: "https://instagram.com/olocondom",
    },
    {
      icon: <FiShoppingBag className="text-xl text-zinc-300" />,
      label: "Shopee",
      value: "olocondom",
      link: "https://shopee.co.id/olocondom",
    },
    {
      icon: <FiShoppingBag className="text-xl text-zinc-300" />,
      label: "Tokopedia",
      value: "olocondom",
      link: "https://tokopedia.com/olocondom",
    },
  ];

  return (
    <div className="w-full bg-[#070707] text-white min-h-screen py-24 font-poppins relative overflow-hidden flex items-center justify-center">
      {/* Decorative Radial Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#3a0832]/5 blur-[120px] pointer-events-none -z-10" />

      {/* Background Watermark Title */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center select-none -z-10 pointer-events-none">
        <span className="text-7xl sm:text-9xl font-black tracking-[0.2em] text-[#111322]/20 uppercase">
          KONTAK
        </span>
      </div>

      <Wrapper backgroundColor="bg-transparent" className="w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-extrabold text-white tracking-wide">
                Hubungi Kami.
              </h1>
              <p className="text-sm text-zinc-400 font-medium tracking-wide">
                Butuh bantuan? Tim kami siap membantu.
              </p>
            </div>

            {/* List of Contact Cards */}
            <div className="flex flex-col gap-4">
              {contactItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-2xl bg-[#111322]/40 border border-white/5 hover:border-white/15 hover:bg-[#111322]/60 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-5">
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 transition-colors group-hover:bg-blue-600/10 group-hover:border-blue-500/20">
                      {item.icon}
                    </div>
                    {/* Texts */}
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                        {item.label}
                      </span>
                      <span className="text-xs text-zinc-400 font-light mt-0.5 line-clamp-1 max-w-[280px]">
                        {item.value}
                      </span>
                    </div>
                  </div>

                  {/* Link action indicator */}
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 transition-all duration-300 group-hover:border-white group-hover:text-white group-hover:bg-white/5">
                    <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Send Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-[#111322]/40 border border-white/5 p-8 md:p-10 flex flex-col gap-6 shadow-2xl relative overflow-hidden"
            >
              {isSubmitted && (
                <div className="absolute inset-0 bg-[#0c0c16]/95 z-30 flex flex-col items-center justify-center text-center p-6 animate-fade-in gap-3">
                  <FiCheckCircle className="text-5xl text-blue-500 animate-bounce" />
                  <h3 className="text-xl font-bold text-white">Pesan Terkirim!</h3>
                  <p className="text-sm text-zinc-400 max-w-xs font-light">
                    Terima kasih telah menghubungi kami. Tim kami akan segera menanggapi pesan Anda.
                  </p>
                </div>
              )}

              <h2 className="text-2xl font-bold text-white tracking-wide border-b border-white/5 pb-4">
                Kirim Pesan
              </h2>

              {/* Form Input fields */}
              <div className="flex flex-col gap-5">
                {/* Nama input */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Nama
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama Anda"
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    className="w-full bg-[#1b1c31]/30 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#1b1c31]/50 transition-all duration-300"
                  />
                </div>

                {/* Email input */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Masukkan email Anda"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1b1c31]/30 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#1b1c31]/50 transition-all duration-300"
                  />
                </div>

                {/* Gender & WhatsApp Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full bg-[#1b1c31]/35 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-[#1b1c31]/50 transition-all duration-300 cursor-pointer"
                    >
                      <option value="Rahasia" className="bg-[#111322] text-white">
                        Rahasia
                      </option>
                      <option value="Laki-laki" className="bg-[#111322] text-white">
                        Laki-laki
                      </option>
                      <option value="Perempuan" className="bg-[#111322] text-white">
                        Perempuan
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Nomor Whatsapp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 8123456789"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-[#1b1c31]/30 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#1b1c31]/50 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Catatan input */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Catatan
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Apa yang bisa kami bantu?"
                    value={formData.catatan}
                    onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                    className="w-full bg-[#1b1c31]/30 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:bg-[#1b1c31]/50 transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto md:self-end bg-[#004AC6] hover:bg-[#003cb0] text-white font-bold text-xs tracking-widest uppercase px-10 py-4 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all duration-300 cursor-pointer mt-4"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
