'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { FiSearch, FiStar } from 'react-icons/fi';
import Wrapper from '@/components/_shared/Wrapper';

import Link from 'next/link';
import { Product, ProductType } from '@/generated/prisma/client';
import { useSearchParams } from 'next/navigation';

type ProductWithType = Product & { type?: ProductType | null };

// Mock Reviews Data
const REVIEWS = [
  {
    id: 1,
    rating: 5,
    variant: 'OLO Ultra Thin',
    text: '"The Ultra Thin is amazing! Beneran berasa skin-to-skin dan gak ganggu sama sekali. Rekomen banget buat yang cari kenyamanan."',
    author: 'Andi K.',
  },
  {
    id: 2,
    rating: 5,
    variant: 'OLO Hyaluronic Acid',
    text: '"Beda banget sama produk lain. Extra lubricant-nya bikin nyaman banget, plus packaging-nya juga elegan. Bakal langganan."',
    author: 'Budi S.',
  },
  {
    id: 3,
    rating: 5,
    variant: 'OLO Ribbed G-Spot',
    text: '"Sensasinya luar biasa! Gerigi halusnya kasih experience baru. Keintiman jadi lebih seru."',
    author: 'Citra R.',
  },
];

const CATEGORIES = ['Semua', 'Kondom', 'Pelumas', 'Aksesoris'];

export default function ProdukClient({ products }: { products: ProductWithType[] }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const filterParam = searchParams.get('filter');

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(
    categoryParam && CATEGORIES.includes(categoryParam) ? categoryParam : 'Semua'
  );
  const [showOnlyBest, setShowOnlyBest] = useState(filterParam === 'best');

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    setShowOnlyBest(false);
  };

  // Filtering & Sorting Logic
  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === 'Semua' || product.category === activeCategory;
      const matchesBest = showOnlyBest ? product.isBestProduct : true;
      return matchesSearch && matchesCategory && matchesBest;
    });
    
    // Sort so that isBestProduct is always at the top
    return filtered.sort((a, b) => {
      if (a.isBestProduct && !b.isBestProduct) return -1;
      if (!a.isBestProduct && b.isBestProduct) return 1;
      return 0;
    });
  }, [searchQuery, activeCategory, showOnlyBest, products]);

  return (
    <div className='w-full bg-[#070707] text-white min-h-screen pb-24 font-poppins relative overflow-hidden'>
      {/* Decorative Radial Glows */}
      <div className='absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10' />
      <div className='absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-[#3a0832]/5 blur-[120px] pointer-events-none -z-10' />

      {/* Banner / Hero Section */}
      <section className='w-full pt-20 pb-16 relative'>
        <Wrapper
          backgroundColor='bg-transparent'
          className='flex flex-col items-center text-center'
        >
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 uppercase select-none'>
            PILIH SENSASIMU
          </h1>
          <p className='text-xs sm:text-sm text-zinc-400 font-light max-w-2xl mt-4 leading-relaxed tracking-wide'>
            Temukan varian OLO yang sempurna untuk pengalaman bercinta yang
            lebih intim, memuaskan, dan tak terlupakan. Dirancang untuk presisi
            dan kenyamanan maksimal.
          </p>

          {/* Search Input */}
          <div className='w-full max-w-xl mt-10 relative group'>
            <input
              type='text'
              placeholder='Cari varian OLO...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full bg-[#111322]/40 border border-white/10 rounded-full px-6 py-3.5 pl-14 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500/50 focus:bg-[#111322]/60 transition-all duration-300 shadow-lg'
            />
            <FiSearch className='absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 text-lg group-focus-within:text-blue-400 transition-colors duration-300' />
          </div>
        </Wrapper>
      </section>

      {/* Products Display Section */}
      <section className='w-full py-8'>
        <Wrapper
          backgroundColor='bg-transparent'
          className='flex flex-col gap-8'
        >
          {/* Header & Tabs */}
          <div className='flex flex-col gap-6 border-b border-zinc-950 pb-6'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <span className='text-[10px] font-bold tracking-[0.25em] text-[#0043ff] uppercase'>
                  HOME / PRODUCTS
                </span>
                <h2 className='text-2xl md:text-3xl font-extrabold tracking-wide uppercase mt-1'>
                  PRODUCT
                </h2>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className='flex flex-wrap gap-2.5 items-center'>
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#004AC6] text-white shadow-md shadow-blue-600/20'
                        : 'border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
              
              {/* Active Filter Indicator */}
              {showOnlyBest && (
                <button
                  onClick={() => setShowOnlyBest(false)}
                  className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider bg-[#004AC6]/20 border border-[#004AC6] text-blue-400 hover:bg-[#004AC6] hover:text-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer ml-2"
                  title="Hapus filter"
                >
                  BEST PRODUCTS <span className="text-sm leading-none">&times;</span>
                </button>
              )}
            </div>
          </div>

          {/* Dynamic Products Grid (3x4 Layout) */}
          {filteredProducts.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/produk/${product.id}`}
                  className={`rounded-[28px] overflow-hidden bg-[#111322]/30 border ${product.isBestProduct ? 'border-white/10 border-t-2 border-t-[#004AC6]' : 'border-white/5'} flex flex-col group transition-all duration-300 hover:border-white/20 cursor-pointer relative`}
                >
                  {product.isBestProduct && (
                    <div className="absolute top-0 right-0 bg-[#004AC6] text-white text-[8px] font-bold uppercase tracking-[0.25em] py-2 px-4 rounded-bl-2xl z-20">
                      Best Choice
                    </div>
                  )}
                  {/* Square Image Box Area */}
                  <div className='relative aspect-square w-full bg-[#111322]/20 flex items-center justify-center p-8 overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-60 z-0' />
                    {/* Visual Radial Glow */}
                    <div className="absolute w-32 h-32 rounded-full bg-blue-500/0 group-hover:bg-blue-500/5 blur-2xl transition-all duration-500 z-0" />
                    <div className='relative w-44 h-44 sm:w-48 sm:h-48 z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1'>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className='object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]'
                      />
                    </div>
                  </div>

                  {/* Product Details info */}
                  <div className='p-6 flex flex-col items-center text-center gap-3 border-t border-white/5 bg-black/10'>
                    {product.type && (
                      <span className='text-[9px] font-bold tracking-[0.25em] text-zinc-500 uppercase'>
                        {product.type.name}
                      </span>
                    )}
                    <h3 className='text-base font-bold tracking-wide text-white group-hover:text-blue-400 transition-colors duration-300 uppercase'>
                      {product.name}
                    </h3>
                    <p className='text-xs text-zinc-400 font-light leading-relaxed max-w-[240px] line-clamp-2'>
                      {product.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className='flex flex-col items-center justify-center py-20 text-center'>
              <p className='text-zinc-500 text-sm'>
                Tidak ada produk yang cocok dengan pencarian Anda.
              </p>
            </div>
          )}
        </Wrapper>
      </section>

      {/* Customer Reviews Section */}
      <section className='w-full py-20 border-t border-zinc-950 mt-12 bg-black/10'>
        <Wrapper
          backgroundColor='bg-transparent'
          className='flex flex-col gap-12'
        >
          {/* Reviews Header */}
          <div className='flex flex-col items-center text-center select-none gap-2'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-white tracking-wide'>
              Review Pelanggan
            </h2>
            <p className='text-sm text-zinc-400 font-medium tracking-wide'>
              Apa yang mereka katakan tentang pengalaman OLO
            </p>
          </div>

          {/* Reviews Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className='rounded-3xl bg-[#111322]/50 border border-white/5 p-8 flex flex-col gap-5 hover:border-white/10 transition-colors duration-300'
              >
                {/* Stars Rating */}
                <div className='flex gap-1 text-amber-500'>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FiStar key={i} className='fill-current' />
                  ))}
                </div>

                {/* Varian Tag */}
                <span className='text-xs font-bold tracking-wider text-[#004AC6] uppercase'>
                  {review.variant}
                </span>

                {/* Review Text */}
                <p className='text-xs sm:text-sm text-zinc-300 font-light leading-relaxed italic'>
                  {review.text}
                </p>

                {/* Author */}
                <span className='text-xs font-semibold text-zinc-500 mt-auto'>
                  {review.author}
                </span>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
