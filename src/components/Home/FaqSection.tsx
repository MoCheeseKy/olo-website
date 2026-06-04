"use client";

import Wrapper from "@/components/_shared/Wrapper";
import { Accordion } from "@/components/_shared/Accordion";

export function FaqSection() {
  return (
    <section className="w-full bg-[#070707] py-24 border-t border-zinc-900">
      <Wrapper backgroundColor="bg-transparent" className="flex flex-col gap-12 font-poppins">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center select-none gap-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            Pertanyaan Populer
          </h2>
          <p className="text-sm text-zinc-400 font-medium tracking-wide">
            Informasi lengkap seputar produk OLO
          </p>
        </div>

        {/* Accordions Wrapper */}
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 mt-4">
          <Accordion title="Apakah produk OLO aman digunakan?">
            Ya, seluruh produk OLO diproduksi dengan standar kualitas internasional yang ketat
            dan telah lulus uji laboratorium untuk memastikan keamanan serta kenyamanan maksimal
            selama penggunaan. Setiap kondom juga telah melalui uji elektronik 100% untuk
            mencegah kebocoran.
          </Accordion>

          <Accordion title="Bagaimana cara pemakaian kondom?">
            Buka kemasan secara hati-hati dari bagian tepi yang bergerigi (jangan gunakan gunting
            atau gigi). Pastikan gulungan berada di sisi luar. Tekan ujung kondom (wadah sperma)
            untuk membuang udara di dalamnya, letakkan di ujung penis yang telah ereksi, lalu
            buka gulungannya secara perlahan hingga menutupi pangkal penis.
          </Accordion>

          <Accordion title="Bagaimana cara memilih varian OLO yang tepat?">
            Sesuaikan dengan kebutuhan eksplorasi Anda dan pasangan. Jika Anda mengutamakan
            kelembapan alami dan hidrasi ekstra, pilihlah varian **Hyaluronic Acid**. Jika Anda
            menginginkan sentuhan yang sangat tipis dan intim layaknya kulit asli, gunakan varian
            **Ultra-Thin**. Untuk sensasi gesekan yang merangsang dan bervariasi, pilihlah varian
            **Bertekstur**.
          </Accordion>
        </div>
      </Wrapper>
    </section>
  );
}
