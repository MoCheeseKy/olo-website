import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/_shared/Wrapper";
import { Product, ProductType } from "@/generated/prisma/client";

type ProductWithType = Product & { type?: ProductType | null };

export function FeaturedProducts({ products = [] }: { products?: ProductWithType[] }) {
  if (products.length === 0) return null;

  return (
    <section className="w-full bg-[#070707] py-20 border-t border-zinc-900">
      <Wrapper backgroundColor="bg-transparent" className="flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-row items-end justify-between border-b border-zinc-900 pb-6">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#0043ff] uppercase">
              KOLEKSI
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide uppercase mt-1">
              BEST PRODUCT
            </h2>
          </div>
          <Link href="/produk?filter=best" className="text-[9px] md:text-xs font-bold tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-200 uppercase cursor-pointer select-none pb-1">
            KLIK UNTUK DETAIL
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {products.map((item) => (
            <Link
              href={`/produk/${item.id}`}
              key={item.id}
              className={`rounded-[28px] overflow-hidden bg-[#111322]/30 border ${item.isBestProduct ? 'border-white/10 border-t-2 border-t-[#004AC6]' : 'border-white/5'} flex flex-col group transition-all duration-300 hover:border-white/20 cursor-pointer relative`}
            >
              {item.isBestProduct && (
                <div className="absolute top-0 right-0 bg-[#004AC6] text-white text-[8px] font-bold uppercase tracking-[0.25em] py-2 px-4 rounded-bl-2xl z-20">
                  Best Choice
                </div>
              )}
              {/* Image Container with Glow Hover Effect */}
              <div className='relative aspect-square w-full bg-[#111322]/20 flex items-center justify-center p-8 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-60 z-0' />
                <div className="absolute w-32 h-32 rounded-full bg-blue-500/0 group-hover:bg-blue-500/5 blur-2xl transition-all duration-500 z-0" />
                <div className='relative w-44 h-44 sm:w-48 sm:h-48 z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>

              {/* Info Details */}
              <div className='p-6 flex flex-col items-center text-center gap-3 border-t border-white/5 bg-black/10 flex-grow'>
                {item.type && (
                  <span className='text-[9px] font-bold tracking-[0.25em] text-zinc-500 uppercase'>
                    {item.type.name}
                  </span>
                )}
                <h3 className="text-base font-bold tracking-wide text-white uppercase transition-colors duration-300 group-hover:text-blue-400">
                  {item.name}
                </h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-[240px] line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
