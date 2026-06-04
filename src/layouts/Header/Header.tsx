import Image from 'next/image';
import Link from 'next/link';
import { FiGlobe, FiChevronDown, FiHelpCircle } from 'react-icons/fi';
import Wrapper from '@/components/_shared/Wrapper';

export function Header() {
  return (
    <header className='w-full bg-[#0a0a0a] text-white border-b border-zinc-900 sticky top-0 z-50'>
      <Wrapper
        backgroundColor='bg-[#0a0a0a] text-white'
        className='h-20 flex items-center justify-between'
      >
        {/* Logo */}
        <Link href='/' className='flex items-center gap-1'>
          <Image
            src='/images/logo.svg'
            alt='OLO Logo'
            width={72}
            height={28}
            className='w-auto h-7 object-contain'
          />
        </Link>

        {/* Center/Right Navigation */}
        <div className='flex items-center gap-8 lg:gap-12'>
          {/* Main Menu Links */}
          <nav className='hidden md:flex items-center gap-6 lg:gap-8'>
            <Link
              href='/'
              className='text-xs font-semibold tracking-wider text-zinc-300 hover:text-white transition-colors duration-200'
            >
              BERANDA
            </Link>
            <Link
              href='/produk'
              className='text-xs font-semibold tracking-wider text-zinc-300 hover:text-white transition-colors duration-200'
            >
              PRODUK
            </Link>
            <Link
              href='/blog'
              className='text-xs font-semibold tracking-wider text-zinc-300 hover:text-white transition-colors duration-200'
            >
              BLOG
            </Link>
            <Link
              href='/kontak'
              className='text-xs font-semibold tracking-wider text-zinc-300 hover:text-white transition-colors duration-200'
            >
              KONTAK
            </Link>
            <Link
              href='/tentang-kami'
              className='text-xs font-semibold tracking-wider text-zinc-300 hover:text-white transition-colors duration-200'
            >
              TENTANG KAMI
            </Link>
          </nav>

          {/* Right Action Items */}
          {/* <div className='flex items-center gap-5 lg:gap-6 border-l border-zinc-800 pl-5 lg:pl-6 text-zinc-300 text-xs font-semibold tracking-wider'>
            Language Switcher
            <button className='flex items-center gap-1.5 hover:text-white transition-colors duration-200 cursor-pointer'>
              <FiGlobe className='text-[14px]' />
              <span>ID</span>
              <FiChevronDown className='text-[12px] text-zinc-500' />
            </button>

            Help / Tentang Kami
            <Link
              href='/tentang-kami'
              className='flex items-center gap-1.5 hover:text-white transition-colors duration-200'
            >
              <span>TENTANG KAMI</span>
              <FiHelpCircle className='text-[14px] text-zinc-400' />
            </Link>
          </div> */}
        </div>
      </Wrapper>
    </header>
  );
}
