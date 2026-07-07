import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiStar, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import { getProductById } from '@/app/actions/product.action';
import Wrapper from '@/components/_shared/Wrapper';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProductById(parseInt(id || '0'));

  if (!product) {
    return (
      <div className='min-h-screen bg-[#070707] text-white flex flex-col items-center justify-center font-poppins'>
        <h1 className='text-xl font-bold mb-4'>Produk tidak ditemukan</h1>
        <Link
          href='/produk'
          className='text-xs uppercase tracking-widest text-[#004AC6] border border-[#004AC6] hover:bg-[#004AC6] hover:text-white px-6 py-3 rounded-md transition-all duration-300'
        >
          Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <div className='w-full bg-[#070707] text-white min-h-screen pt-28 pb-24 font-poppins relative overflow-hidden'>
      {/* Background Glows */}
      <div className='absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10' />
      <div className='absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#3a0832]/5 blur-[120px] pointer-events-none -z-10' />

      <Wrapper backgroundColor='bg-transparent' className='flex flex-col gap-8'>
        {/* Navigation Breadcrumb & Back button */}
        <div className='flex flex-col gap-4'>
          <Link
            href='/produk'
            className='flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-400 hover:text-white transition-colors duration-200 uppercase self-start'
          >
            <FiArrowLeft className='text-sm' />
            <span>Kembali ke Katalog</span>
          </Link>

          <div className='text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase'>
            <span>HOME</span>
            <span className='mx-2'>/</span>
            <span>PRODUCTS</span>
            <span className='mx-2'>/</span>
            <span className='text-[#0043ff]'>{product.category}</span>
            <span className='mx-2'>/</span>
            <span className='text-zinc-300'>{product.name}</span>
          </div>
        </div>

        {/* Product Details Section */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-4'>
          {/* Left Column: Premium Visual Card */}
          <div className='lg:col-span-6 flex justify-center w-full'>
            <div className='relative w-full aspect-square rounded-[36px] overflow-hidden bg-gradient-to-br from-[#111322]/50 to-black/40 border border-white/5 p-12 flex items-center justify-center group shadow-2xl'>
              {/* Radial Highlight */}
              <div className='absolute inset-0 bg-radial-gradient from-blue-500/10 to-transparent opacity-60 pointer-events-none' />
              <div className='relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1'>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className='object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]'
                />
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & E-Commerce CTAs */}
          <div className='lg:col-span-6 flex flex-col gap-6 w-full'>
            <div className='flex flex-col gap-2.5'>
              {/* Category Badging */}
              <span className='bg-[#004AC6]/10 border border-[#004AC6]/30 text-blue-400 text-[10px] font-extrabold tracking-widest px-3 py-1.5 rounded-[4px] uppercase self-start'>
                {product.category}
              </span>

              {/* Title */}
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-black tracking-wide uppercase leading-tight text-white mt-1'>
                {product.name}
              </h1>


            </div>

            {/* Description */}
            <p className='text-xs sm:text-sm text-zinc-400 font-light leading-relaxed border-t border-white/5 pt-5'>
              {product.description}
            </p>

            {/* Product Features Section */}
            {product.features && (
              <div className='rounded-2xl bg-[#111322]/40 border border-white/5 p-6 flex flex-col gap-4 mt-2'>
                <h3 className='text-xs font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2'>
                  Fitur Unggulan
                </h3>
                <ul className='list-disc list-inside text-xs text-zinc-300 flex flex-col gap-2'>
                  {product.features
                    .split(/\n|,/)
                    .map((feature, idx) =>
                      feature.trim() ? (
                        <li key={idx}>{feature.trim()}</li>
                      ) : null,
                    )}
                </ul>
              </div>
            )}

            {/* Product Specifications Card */}
            {product.category === 'Kondom' &&
              (product.width ||
                product.length ||
                product.actualWidth ||
                product.thickness ||
                product.aroma ||
                product.material ||
                product.lubricant ||
                product.shape) && (
                <div className='rounded-2xl bg-[#111322]/40 border border-white/5 p-6 flex flex-col gap-4 mt-2'>
                  <h3 className='text-xs font-bold text-white uppercase tracking-wider border-b border-white/5 pb-2'>
                    Spesifikasi Produk
                  </h3>
                  <div className='grid grid-cols-2 gap-x-6 gap-y-3.5 text-xs'>
                    {product.width && (
                      <div className='flex flex-col gap-1'>
                        <span className='text-zinc-500 font-medium uppercase tracking-wider text-[10px]'>
                          Lebar Nominal
                        </span>
                        <span className='text-zinc-300 font-semibold'>
                          {product.width}
                        </span>
                      </div>
                    )}
                    {product.length && (
                      <div className='flex flex-col gap-1'>
                        <span className='text-zinc-500 font-medium uppercase tracking-wider text-[10px]'>
                          Panjang
                        </span>
                        <span className='text-zinc-300 font-semibold'>
                          {product.length}
                        </span>
                      </div>
                    )}
                    {product.actualWidth && (
                      <div className='flex flex-col gap-1'>
                        <span className='text-zinc-500 font-medium uppercase tracking-wider text-[10px]'>
                          Lebar
                        </span>
                        <span className='text-zinc-300 font-semibold'>
                          {product.actualWidth}
                        </span>
                      </div>
                    )}
                    {product.thickness && (
                      <div className='flex flex-col gap-1'>
                        <span className='text-zinc-500 font-medium uppercase tracking-wider text-[10px]'>
                          Tebal
                        </span>
                        <span className='text-zinc-300 font-semibold'>
                          {product.thickness}
                        </span>
                      </div>
                    )}
                    {product.aroma && (
                      <div className='flex flex-col gap-1'>
                        <span className='text-zinc-500 font-medium uppercase tracking-wider text-[10px]'>
                          Aroma
                        </span>
                        <span className='text-zinc-300 font-semibold'>
                          {product.aroma}
                        </span>
                      </div>
                    )}
                    {product.material && (
                      <div className='flex flex-col gap-1'>
                        <span className='text-zinc-500 font-medium uppercase tracking-wider text-[10px]'>
                          Bahan Dasar
                        </span>
                        <span className='text-zinc-300 font-semibold'>
                          {product.material}
                        </span>
                      </div>
                    )}
                    {product.lubricant && (
                      <div className='flex flex-col gap-1'>
                        <span className='text-zinc-500 font-medium uppercase tracking-wider text-[10px]'>
                          Pelumas
                        </span>
                        <span className='text-zinc-300 font-semibold'>
                          {product.lubricant}
                        </span>
                      </div>
                    )}
                    {product.shape && (
                      <div className='flex flex-col gap-1'>
                        <span className='text-zinc-500 font-medium uppercase tracking-wider text-[10px]'>
                          Bentuk
                        </span>
                        <span className='text-zinc-300 font-semibold'>
                          {product.shape}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

            {/* Purchase CTA Row */}
            <div className='flex flex-col gap-3.5 mt-2 border-t border-white/5 pt-5'>
              <span className='text-[10px] font-bold text-zinc-500 uppercase tracking-widest'>
                Miliki Sekarang di Official Store kami:
              </span>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {/* Shopee Button */}
                <a
                  href={product.shopeeUrl || 'https://shopee.co.id'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2 bg-[#EE4D2D] hover:bg-[#d83f20] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-xl shadow-lg transition-colors duration-300 cursor-pointer'
                >
                  <FiShoppingBag className='text-sm' />
                  <span>Beli di Shopee</span>
                </a>

                {/* Tokopedia Button */}
                <a
                  href={product.tokopediaUrl || 'https://tokopedia.com'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-2 bg-[#03AC0E] hover:bg-[#02910b] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 rounded-xl shadow-lg transition-colors duration-300 cursor-pointer'
                >
                  <FiShoppingBag className='text-sm' />
                  <span>Beli di Tokopedia</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
