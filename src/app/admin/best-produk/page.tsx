export const dynamic = 'force-dynamic';
import { getBestProducts, toggleBestProduct, getProducts } from "@/app/actions/product.action";
import { FiTrash2, FiPlus, FiStar } from "react-icons/fi";
import Image from "next/image";

export default async function AdminBestProdukPage() {
  const bestProducts = await getBestProducts();
  const allProducts = await getProducts();
  
  const availableProducts = allProducts.filter(p => !p.isBestProduct);
  const canAddMore = bestProducts.length < 3;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-wide uppercase">Kelola Best Product</h2>
          <p className="text-zinc-400 text-sm mt-1">
            Pilih maksimal 3 produk untuk ditampilkan sebagai Best Product di Beranda. 
            ({bestProducts.length}/3)
          </p>
        </div>
      </div>

      {canAddMore && availableProducts.length > 0 && (
        <div className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300 mb-4">Tambah Best Product</h3>
          <form action={async (formData: FormData) => {
            "use server";
            const productId = formData.get("productId") as string;
            if (productId) {
              await toggleBestProduct(parseInt(productId), true);
            }
          }} className="flex gap-4 items-end">
            <div className="flex flex-col gap-2 flex-grow">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Pilih Produk</label>
              <select name="productId" required className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                <option value="">-- Pilih Produk --</option>
                {availableProducts.map(p => (
                  <option key={p.id} value={p.id}>{p.name} ({p.category})</option>
                ))}
              </select>
            </div>
            <button type="submit" className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-5 py-3 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20 whitespace-nowrap h-[46px]">
              <FiPlus />
              Jadikan Best Product
            </button>
          </form>
        </div>
      )}

      {!canAddMore && (
        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 p-4 rounded-xl text-sm font-semibold flex items-center gap-3">
          <FiStar className="text-lg" />
          Maksimal 3 Best Product sudah terpenuhi. Hapus salah satu jika ingin mengganti.
        </div>
      )}

      <div className="bg-[#111322]/50 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-wider text-zinc-400">
            <tr>
              <th className="px-6 py-4 font-semibold">Produk</th>
              <th className="px-6 py-4 font-semibold">Kategori</th>
              <th className="px-6 py-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {bestProducts.map((product) => (
              <tr key={product.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-bold text-white uppercase flex items-center gap-4">
                  {product.image && (
                    <div className="relative w-12 h-12 bg-white/5 rounded-lg border border-white/10 overflow-hidden flex-shrink-0">
                      <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
                    </div>
                  )}
                  {product.name}
                </td>
                <td className="px-6 py-4">
                  <span className="bg-[#004AC6]/10 text-blue-400 border border-[#004AC6]/30 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <form action={async () => {
                    "use server";
                    await toggleBestProduct(product.id, false);
                  }}>
                    <button
                      type="submit"
                      className="text-zinc-400 hover:text-red-400 transition-colors p-2 bg-white/5 rounded-md hover:bg-white/10"
                      title="Hapus dari Best Product"
                    >
                      <FiTrash2 />
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {bestProducts.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-zinc-500 text-sm">
                  Belum ada Best Product yang dipilih.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
