'use client';

import { useState } from 'react';
import { loginAction } from '@/app/actions/auth.action';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);

    if (result.success) {
      router.push('/admin/produk');
    } else {
      setError(result.error || 'Gagal login.');
      setLoading(false);
    }
  }

  return (
    <div className='min-h-[100dvh] w-full flex font-poppins bg-[#030303] text-white overflow-hidden'>
      {/* LEFT PANEL - Image & Welcome Text (2/3 width on Desktop) */}
      <div className='hidden lg:flex lg:w-2/3 relative flex-col justify-between p-12 overflow-hidden border-r border-white/10'>
        {/* Background Image & Overlay */}
        <div className='absolute inset-0 z-0'>
          {/* We use a sleek abstract placeholder or dark image since we don't have a specific image yet. 
              Using a dark gradient for now, but leaving space for an actual image */}
          <div className='absolute inset-0 bg-gradient-to-br from-[#070707] via-[#111322] to-[#0A0A0A] z-0' />

          {/* Premium glows */}
          <div
            className='absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[150px] mix-blend-screen animate-pulse'
            style={{ animationDuration: '8s' }}
          />
          <div
            className='absolute bottom-[-10%] right-[10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[150px] mix-blend-screen animate-pulse'
            style={{ animationDuration: '10s' }}
          />

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        </div>

        {/* Top Left: Logo / Back Button */}
        <div className='relative z-10'>
          <Link
            href='/'
            className='inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition-colors'
          >
            <FiArrowLeft />
            <span className='text-sm font-semibold tracking-wider uppercase'>
              Kembali ke Beranda
            </span>
          </Link>
        </div>

        {/* Bottom Left: Welcome Text */}
        <div className='relative z-10 max-w-2xl'>
          <h2 className='text-5xl lg:text-7xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 mb-6'>
            OLO <br />
            <span className='text-blue-500'>Dashboard</span>
          </h2>
        </div>
      </div>

      {/* RIGHT PANEL - Form (1/3 width on Desktop, Full on Mobile) */}
      <div className='w-full lg:w-1/3 min-h-screen flex items-center justify-center relative bg-[#070707]'>
        {/* Subtle glow for right side */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-blue-900/5 blur-[100px] mix-blend-screen pointer-events-none' />

        <div className='w-full max-w-md px-8 py-12 relative z-10 flex flex-col justify-center'>
          {/* Mobile Back Button (Only visible on small screens) */}
          <Link
            href='/'
            className='lg:hidden absolute top-8 left-8 p-2 rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors'
          >
            <FiArrowLeft className='text-sm' />
          </Link>

          <div className='flex flex-col gap-2 mb-10 mt-6 lg:mt-0'>
            <h1 className='text-3xl font-black uppercase tracking-widest text-white'>
              Welcome <span className='text-blue-500 text-4xl'>.</span>
            </h1>
            <p className='text-sm text-zinc-500 font-medium tracking-wide'>
              Masukkan kredensial admin Anda
            </p>
          </div>

          {error && (
            <div className='bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold px-4 py-3 rounded-xl mb-6 flex items-center justify-center animate-in fade-in slide-in-from-top-2 duration-300'>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='relative group/input'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500' />
              <div className='relative flex items-center'>
                <FiUser className='absolute left-4 text-zinc-500 text-lg group-focus-within/input:text-blue-400 transition-colors duration-300' />
                <input
                  type='text'
                  name='username'
                  required
                  placeholder='Username'
                  className='w-full bg-[#111111] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-all duration-300 shadow-inner'
                />
              </div>
            </div>

            <div className='relative group/input mt-1'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-500' />
              <div className='relative flex items-center'>
                <FiLock className='absolute left-4 text-zinc-500 text-lg group-focus-within/input:text-blue-400 transition-colors duration-300' />
                <input
                  type='password'
                  name='password'
                  required
                  placeholder='Password'
                  className='w-full bg-[#111111] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-all duration-300 shadow-inner'
                />
              </div>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='relative w-full overflow-hidden bg-[#004AC6] hover:bg-[#003cb0] disabled:bg-zinc-800 text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 mt-6 shadow-[0_0_20px_rgba(0,74,198,0.3)] hover:shadow-[0_0_30px_rgba(0,74,198,0.5)] group/btn'
            >
              <span className='relative z-10 flex items-center justify-center gap-2'>
                {loading ? (
                  <>
                    <svg
                      className='animate-spin h-4 w-4 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Memverifikasi...
                  </>
                ) : (
                  'Sign In'
                )}
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]' />
            </button>
          </form>

          <div className='mt-12 text-center'>
            <p className='text-[10px] font-semibold text-zinc-600 uppercase tracking-widest'>
              &copy; 2026 OLO Official
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
