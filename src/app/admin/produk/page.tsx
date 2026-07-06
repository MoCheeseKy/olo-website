export const dynamic = 'force-dynamic';
import Link from "next/link";
import { getProducts, deleteProduct } from "@/app/actions/product.action";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import Image from "next/image";

export default async function AdminProdukPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const products = await getProducts(category);
  const title = category ? `Kelola ${category}` : "Kelola Produk";

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-wide uppercase">{title}</h2>
          <p className="text-zinc-400 text-sm mt-1">Daftar semua produk {category || "OLO"}</p>
        </div>
        <Link
          href={`/admin/produk/form${category ? `?category=${category}` : ''}`}
          className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20"
        >
          <FiPlus />
          Tambah Produk
        </Link>
      </div>

      <div className="bg-[#111322]/50 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-wider text-zinc-400">
            <tr>
              <th className="px-6 py-4 font-semibold">Produk</th>
              <th className="px-6 py-4 font-semibold">Kategori</th>
              <th className="px-6 py-4 font-semibold">Jenis</th>
              <th className="px-6 py-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-lg bg-black/40 p-2">
                      <Image
                        src={product.image || "/images/ads_product_1.png"}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white uppercase">{product.name}</p>
                      <p className="text-xs text-zinc-500 line-clamp-1 max-w-xs">{product.description}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-[#004AC6]/10 text-blue-400 border border-[#004AC6]/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {product.type ? (
                    <span className="bg-zinc-800 text-zinc-300 border border-zinc-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {product.type.name}
                    </span>
                  ) : (
                    <span className="text-zinc-600 text-xs">-</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/produk/form?id=${product.id}`}
                      className="text-zinc-400 hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-md hover:bg-white/10"
                      title="Edit"
                    >
                      <FiEdit />
                    </Link>
                    <form action={async () => {
                      "use server";
                      await deleteProduct(product.id);
                    }}>
                      <button
                        type="submit"
                        className="text-zinc-400 hover:text-red-400 transition-colors p-2 bg-white/5 rounded-md hover:bg-white/10"
                        title="Hapus"
                      >
                        <FiTrash2 />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-zinc-500 text-sm">
                  Belum ada produk. Silakan tambah produk baru.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
