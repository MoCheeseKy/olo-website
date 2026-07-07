import Link from "next/link";
import { getPromoCards, deletePromoCard } from "@/app/actions/promo.action";
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";
import Image from "next/image";
import { PromoCard } from "@/generated/prisma/client";

export const metadata = {
  title: "Kelola Kartu Promo - Admin OLO",
};

export default async function AdminCtaPage() {
  const cards = await getPromoCards();
  const canAddMore = cards.length < 3;

  async function handleDelete(formData: FormData) {
    "use server";
    const id = Number(formData.get("id"));
    await deletePromoCard(id);
  }

  return (
    <div className="flex flex-col gap-10 max-w-5xl">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-wide uppercase">Kelola Kartu Promo</h2>
          <p className="text-zinc-400 text-sm mt-1">Kelola daftar kartu promosi / CTA yang tampil di halaman utama.</p>
        </div>
        {canAddMore && (
          <Link 
            href="/admin/cta/form" 
            className="bg-[#004AC6] text-white px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#003cb0] transition-colors shadow-lg shadow-blue-900/20"
          >
            <FiPlus className="text-lg" /> Tambah Kartu
          </Link>
        )}
      </div>

      {!canAddMore && (
        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 p-4 rounded-xl text-sm font-semibold flex items-center gap-3">
          Batas maksimal 3 kartu promo sudah tercapai.
        </div>
      )}

      <div className="bg-[#111322]/50 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-wider text-zinc-400">
            <tr>
              <th className="px-6 py-4 font-semibold">Urutan</th>
              <th className="px-6 py-4 font-semibold">Gambar</th>
              <th className="px-6 py-4 font-semibold">Konten (Judul & Deskripsi)</th>
              <th className="px-6 py-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {cards.map((card: PromoCard) => (
              <tr key={card.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4 font-bold text-zinc-400 align-top">{card.order}</td>
                <td className="px-6 py-4 align-top">
                  <div className="relative w-32 h-20 bg-black/40 rounded-lg border border-white/10 overflow-hidden flex-shrink-0">
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                  </div>
                </td>
                <td className="px-6 py-4 align-top">
                  <div className="flex flex-col gap-2">
                    <div className="font-bold text-white uppercase text-base">{card.title}</div>
                    <div className="text-xs text-zinc-400 line-clamp-3 max-w-lg leading-relaxed">{card.description}</div>
                  </div>
                </td>
                <td className="px-6 py-4 align-top">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/cta/form?id=${card.id}`}
                      className="text-zinc-400 hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-md hover:bg-white/10"
                      title="Edit"
                    >
                      <FiEdit2 />
                    </Link>
                    <form action={handleDelete}>
                      <input type="hidden" name="id" value={card.id} />
                      <button
                        type="submit"
                        className="text-zinc-400 hover:text-red-400 transition-colors p-2 bg-white/5 rounded-md hover:bg-white/10 cursor-pointer"
                        title="Hapus"
                      >
                        <FiTrash2 />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {cards.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-zinc-500 text-sm">
                  Belum ada kartu promo yang ditambahkan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
