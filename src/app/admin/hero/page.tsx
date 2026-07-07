export const dynamic = 'force-dynamic';
import Link from "next/link";
import { getHeroBanners, deleteHeroBanner } from "@/app/actions/hero.action";
import { FiEdit, FiPlus, FiImage } from "react-icons/fi";
import Image from "next/image";
import DeleteButton from "@/components/_shared/DeleteButton/DeleteButton";

export default async function AdminHeroPage() {
  const banners = await getHeroBanners();
  const canAddMore = banners.length < 3;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-wide uppercase">Kelola Hero Banner</h2>
          <p className="text-zinc-400 text-sm mt-1">Daftar banner di halaman utama. (Maksimal 3 Banner)</p>
        </div>
        {canAddMore && (
          <Link
            href="/admin/hero/form"
            className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20"
          >
            <FiPlus />
            Tambah Banner
          </Link>
        )}
      </div>

      {!canAddMore && (
        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 p-4 rounded-xl text-sm font-semibold flex items-center gap-3">
          <FiImage className="text-lg" />
          Batas maksimal 3 banner sudah tercapai. Hapus banner lama untuk menambahkan yang baru.
        </div>
      )}

      <div className="bg-[#111322]/50 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-wider text-zinc-400">
            <tr>
              <th className="px-6 py-4 font-semibold">Urutan</th>
              <th className="px-6 py-4 font-semibold">Banner</th>
              <th className="px-6 py-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {banners.map((banner) => (
              <tr key={banner.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-bold text-zinc-400">{banner.order}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    {banner.image && (
                      <div className="relative w-24 h-12 bg-white/5 rounded-lg border border-white/10 overflow-hidden flex-shrink-0">
                        <Image src={banner.image} alt={banner.title} fill className="object-cover" />
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-white uppercase">{banner.title}</div>
                      <div className="text-xs text-zinc-400 line-clamp-1 max-w-sm">{banner.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/hero/form?id=${banner.id}`}
                      className="text-zinc-400 hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-md hover:bg-white/10"
                      title="Edit"
                    >
                      <FiEdit />
                    </Link>
                    <DeleteButton 
                      action={async () => {
                        "use server";
                        await deleteHeroBanner(banner.id);
                      }} 
                    />
                  </div>
                </td>
              </tr>
            ))}
            {banners.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-zinc-500 text-sm">
                  Belum ada banner. Silakan tambah banner baru.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
