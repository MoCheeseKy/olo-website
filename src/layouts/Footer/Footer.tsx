import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '@/components/_shared/Wrapper';

export function Footer() {
  return (
    <footer className='w-full bg-[#070707] text-white py-16 border-t border-zinc-900'>
      <Wrapper
        backgroundColor='bg-[#070707] text-white'
        className='flex flex-col md:flex-row md:justify-between gap-12 md:gap-8'
      >
        {/* Left Side: Logo & Copyright */}
        <div className='flex flex-col gap-4 max-w-xs justify-between md:min-h-[120px]'>
          <div className='flex items-center gap-1'>
            <Image
              src='/images/logo.svg'
              alt='OLO Logo'
              width={72}
              height={28}
              className='w-auto h-7 object-contain'
            />
          </div>
          <p className='text-[10px] md:text-xs text-zinc-500 tracking-wider font-medium uppercase mt-2'>
            &copy; 2024 OLO. LOREM IPSUM
          </p>
        </div>

        {/* Right Side: Columns */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 lg:gap-24'>
          {/* Column 1: Collection */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-xs md:text-sm font-bold tracking-widest text-[#0043ff]'>
              COLLECTION
            </h4>
            <div className='flex flex-col gap-3'>
              <Link
                href='/collection/sensation'
                className='text-xs md:text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-wider font-semibold'
              >
                SENSATION
              </Link>
              <Link
                href='/collection/ultra-thin'
                className='text-xs md:text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-wider font-semibold'
              >
                ULTRA-THIN
              </Link>
              <Link
                href='/collection/lorem'
                className='text-xs md:text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-wider font-semibold'
              >
                LOREM
              </Link>
            </div>
          </div>

          {/* Column 2: Support */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-xs md:text-sm font-bold tracking-widest text-[#0043ff]'>
              SUPPORT
            </h4>
            <div className='flex flex-col gap-3'>
              <Link
                href='/privacy'
                className='text-xs md:text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-wider font-semibold'
              >
                PRIVACY
              </Link>
              <Link
                href='/terms'
                className='text-xs md:text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-wider font-semibold'
              >
                TERMS
              </Link>
              <Link
                href='/kontak'
                className='text-xs md:text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-wider font-semibold'
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Column 3: Find Us */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-xs md:text-sm font-bold tracking-widest text-[#0043ff]'>
              FIND US
            </h4>
            <div className='flex flex-col gap-3'>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs md:text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-wider font-semibold'
              >
                INSTAGRAM
              </a>
              <a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs md:text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-wider font-semibold'
              >
                YOUTUBE
              </a>
              <a
                href='https://x.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs md:text-sm text-zinc-400 hover:text-white transition-colors duration-200 tracking-wider font-semibold'
              >
                X
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
