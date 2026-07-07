import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '@/components/_shared/Wrapper';
import { FiInstagram, FiPhone, FiMail, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import { getSiteSettings } from '@/app/actions/setting.action';

export async function Footer() {
  const settings = await getSiteSettings();

  return (
    <footer className='relative w-full bg-[#050505] text-white pt-24 pb-12 overflow-hidden border-t border-white/5'>
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#004AC6]/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#3a0832]/10 blur-[150px] rounded-full pointer-events-none translate-y-1/2" />

      <Wrapper
        backgroundColor='bg-transparent'
        className='flex flex-col gap-16 md:gap-20 relative z-10'
      >
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          
          {/* Left Side: Logo & Brand Info */}
          <div className='flex flex-col gap-6 max-w-sm'>
            <div className='flex items-center gap-1'>
              <Image
                src='/images/logo.svg'
                alt='OLO Logo'
                width={120}
                height={40}
                className='w-auto h-10 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]'
              />
            </div>
            <p className='text-sm text-zinc-400 leading-relaxed font-light'>
              Menghadirkan sensasi dan kenyamanan terbaik untuk setiap momen intim Anda. Diproduksi dengan standar kualitas tertinggi.
            </p>
          </div>

          {/* Right Side: Navigation Columns */}
          <div className='grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24'>
            
            {/* Column 1: Products */}
            <div className='flex flex-col gap-6'>
              <h4 className='text-xs font-black tracking-[0.2em] text-white uppercase'>
                Produk
              </h4>
              <div className='flex flex-col gap-4'>
                <Link
                  href='/produk?category=Kondom'
                  className='group flex items-center text-sm text-zinc-400 hover:text-white transition-all duration-300 w-fit'
                >
                  <span className='relative'>
                    Kondom
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#004AC6] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link
                  href='/produk?category=Pelumas'
                  className='group flex items-center text-sm text-zinc-400 hover:text-white transition-all duration-300 w-fit'
                >
                  <span className='relative'>
                    Pelumas
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#004AC6] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link
                  href='/produk?category=Aksesoris'
                  className='group flex items-center text-sm text-zinc-400 hover:text-white transition-all duration-300 w-fit'
                >
                  <span className='relative'>
                    Aksesoris
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#004AC6] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Column 2: Support */}
            <div className='flex flex-col gap-6'>
              <h4 className='text-xs font-black tracking-[0.2em] text-white uppercase'>
                Bantuan
              </h4>
              <div className='flex flex-col gap-4'>
                <Link
                  href='/privacy'
                  className='group flex items-center text-sm text-zinc-400 hover:text-white transition-all duration-300 w-fit'
                >
                  <span className='relative'>
                    Kebijakan Privasi
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#004AC6] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link
                  href='/terms'
                  className='group flex items-center text-sm text-zinc-400 hover:text-white transition-all duration-300 w-fit'
                >
                  <span className='relative'>
                    Syarat & Ketentuan
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#004AC6] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
                <Link
                  href='/kontak'
                  className='group flex items-center text-sm text-zinc-400 hover:text-white transition-all duration-300 w-fit'
                >
                  <span className='relative'>
                    Kontak
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#004AC6] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Column 3: Find Us */}
            <div className='flex flex-col gap-6 col-span-2 md:col-span-1'>
              <h4 className='text-xs font-black tracking-[0.2em] text-white uppercase'>
                Hubungi Kami
              </h4>
              <div className='flex flex-col gap-4'>
                <a
                  href={`https://instagram.com/${settings.instagram || "olocondom"}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-start gap-3 text-sm text-zinc-400 hover:text-white transition-all duration-300 w-fit'
                >
                  <span className="w-8 h-8 shrink-0 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#E1306C] group-hover:text-white transition-colors duration-300">
                    <FiInstagram className="text-sm" />
                  </span>
                  <div className="flex flex-col mt-1.5">
                    <span className="font-semibold text-white">Instagram</span>
                    <span className="text-xs line-clamp-1">@{settings.instagram || "olocondom"}</span>
                  </div>
                  <FiArrowUpRight className="text-xs shrink-0 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 mt-2" />
                </a>
                
                <a
                  href={`tel:${settings.telepon || "081234567890"}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-start gap-3 text-sm text-zinc-400 hover:text-white transition-all duration-300 w-fit'
                >
                  <span className="w-8 h-8 shrink-0 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                    <FiPhone className="text-sm" />
                  </span>
                  <div className="flex flex-col mt-1.5">
                    <span className="font-semibold text-white">Telepon</span>
                    <span className="text-xs line-clamp-1">{settings.telepon || "0812-3456-7890"}</span>
                  </div>
                  <FiArrowUpRight className="text-xs shrink-0 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 mt-2" />
                </a>

                <a
                  href={`mailto:${settings.email || "olocondom@gmail.com"}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-start gap-3 text-sm text-zinc-400 hover:text-white transition-all duration-300 w-fit'
                >
                  <span className="w-8 h-8 shrink-0 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D44638] group-hover:text-white transition-colors duration-300">
                    <FiMail className="text-sm" />
                  </span>
                  <div className="flex flex-col mt-1.5">
                    <span className="font-semibold text-white">Email</span>
                    <span className="text-xs line-clamp-1">{settings.email || "olocondom@gmail.com"}</span>
                  </div>
                  <FiArrowUpRight className="text-xs shrink-0 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 mt-2" />
                </a>

                <a
                  href={settings.alamat_link || "https://maps.google.com"}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-start gap-3 text-sm text-zinc-400 hover:text-white transition-all duration-300 w-fit'
                >
                  <span className="w-8 h-8 shrink-0 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#4285F4] group-hover:text-white transition-colors duration-300">
                    <FiMapPin className="text-sm" />
                  </span>
                  <div className="flex flex-col mt-1.5 max-w-[180px]">
                    <span className="font-semibold text-white">Alamat</span>
                    <span className="text-xs line-clamp-2">{settings.alamat || "Alamat belum diatur."}</span>
                  </div>
                  <FiArrowUpRight className="text-xs shrink-0 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 mt-2" />
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className='text-xs text-zinc-500 font-light tracking-wide'>
            &copy; {new Date().getFullYear()} OLO OFFICIAL. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-zinc-600 font-light tracking-wide">
            <span>Designed for Intimacy</span>
            <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
            <span>Made with Care</span>
          </div>
        </div>

      </Wrapper>
    </footer>
  );
}
