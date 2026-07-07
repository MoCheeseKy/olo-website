export const dynamic = 'force-dynamic';
import Link from "next/link";
import { getProductTypes, deleteProductType } from "@/app/actions/productType.action";
import { FiEdit, FiPlus } from "react-icons/fi";
import DeleteButton from "@/components/_shared/DeleteButton/DeleteButton";

export default async function AdminJenisProdukPage() {
  const types = await getProductTypes();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-wide uppercase">Kelola Jenis Produk</h2>
          <p className="text-zinc-400 text-sm mt-1">Daftar jenis produk untuk klasifikasi (seperti seri Kondom atau Aksesoris)</p>
        </div>
        <Link
          href="/admin/jenis-produk/form"
          className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20"
        >
          <FiPlus />
          Tambah Jenis
        </Link>
      </div>

      <div className="bg-[#111322]/50 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-wider text-zinc-400">
            <tr>
              <th className="px-6 py-4 font-semibold">Nama Jenis</th>
              <th className="px-6 py-4 font-semibold">Kategori Induk</th>
              <th className="px-6 py-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {types.map((type) => (
              <tr key={type.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-bold text-white uppercase">{type.name}</td>
                <td className="px-6 py-4">
                  <span className="bg-[#004AC6]/10 text-blue-400 border border-[#004AC6]/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {type.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/jenis-produk/form?id=${type.id}`}
                      className="text-zinc-400 hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-md hover:bg-white/10"
                      title="Edit"
                    >
                      <FiEdit />
                    </Link>
                    <DeleteButton 
                      action={async () => {
                        "use server";
                        await deleteProductType(type.id);
                      }} 
                    />
                  </div>
                </td>
              </tr>
            ))}
            {types.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-zinc-500 text-sm">
                  Belum ada jenis produk. Silakan tambah jenis baru.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
