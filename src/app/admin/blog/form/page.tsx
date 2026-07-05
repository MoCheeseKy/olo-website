import { getBlogById, createBlog, updateBlog } from "@/app/actions/blog.action";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiSave } from "react-icons/fi";

export default async function AdminBlogFormPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const blogId = id ? parseInt(id) : null;
  const blog = blogId ? await getBlogById(blogId) : null;

  async function handleSave(formData: FormData) {
    "use server";
    
    const data = {
      title: formData.get("title") as string,
      category: formData.get("category") as string,
      image: formData.get("image") as string,
      description: formData.get("description") as string,
      author: formData.get("author") as string,
      content: formData.get("content") as string,
    };

    if (blogId) {
      await updateBlog(blogId, data);
    } else {
      await createBlog(data);
    }
    
    redirect("/admin/blog");
  }

  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div className="flex flex-col gap-2">
        <Link href="/admin/blog" className="text-xs text-zinc-500 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest font-semibold w-fit">
          <FiArrowLeft /> Kembali
        </Link>
        <h2 className="text-2xl font-bold tracking-wide uppercase mt-2">
          {blogId ? "Edit Artikel" : "Tulis Artikel Baru"}
        </h2>
      </div>

      <form action={handleSave} className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Judul Artikel *</label>
            <input required type="text" name="title" defaultValue={blog?.title || ""} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Kategori *</label>
            <input required type="text" name="category" defaultValue={blog?.category || ""} placeholder="Contoh: Edukasi Seks" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Penulis *</label>
            <input required type="text" name="author" defaultValue={blog?.author || "Admin OLO"} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">URL Gambar Cover *</label>
          <input required type="text" name="image" defaultValue={blog?.image || ""} placeholder="/images/blog_couple.png" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          <p className="text-[10px] text-zinc-500">Bisa gunakan path statis (misal: /images/...) atau URL eksternal.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Deskripsi Singkat (Excerpt) *</label>
          <textarea required name="description" defaultValue={blog?.description || ""} rows={2} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          <p className="text-[10px] text-zinc-500">Muncul di halaman daftar blog dan SEO.</p>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 mt-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest flex items-center justify-between">
            <span>Konten Artikel (Markdown) *</span>
            <span className="text-[10px] text-[#004AC6] font-normal lowercase tracking-normal">Gunakan format markdown (# Judul, **tebal**, dll)</span>
          </label>
          <textarea required name="content" defaultValue={blog?.content || ""} rows={16} className="bg-black/50 border border-white/10 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors font-mono leading-relaxed text-zinc-300" />
        </div>

        <div className="flex justify-end mt-4 pt-6 border-t border-white/10">
          <button type="submit" className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20">
            <FiSave className="text-lg" />
            Simpan Artikel
          </button>
        </div>
      </form>
    </div>
  );
}
