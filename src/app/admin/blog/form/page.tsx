import { getBlogById, createBlog, updateBlog } from "@/app/actions/blog.action";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiSave, FiEdit3, FiTag, FiUser } from "react-icons/fi";
import BlogContentInput from "./BlogContentInput";
import ImageInput from "./ImageInput";

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
    <div className="flex flex-col w-full max-w-5xl mx-auto font-poppins">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div className="flex flex-col gap-3">
          <Link 
            href="/admin/blog" 
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full w-fit transition-all duration-300"
          >
            <FiArrowLeft /> KEMBALI KE DAFTAR ARTIKEL
          </Link>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
            {blogId ? "Edit Artikel" : "Tulis Artikel Baru"}
          </h1>
        </div>
      </div>

      <form action={handleSave} className="flex flex-col lg:flex-row gap-8">
        
        {/* Main Editor Column */}
        <div className="flex-1 flex flex-col gap-8">
          
          {/* Title Input (Giant) */}
          <div className="flex flex-col gap-3">
            <input 
              required 
              type="text" 
              name="title" 
              defaultValue={blog?.title || ""} 
              placeholder="Judul Artikel Menarik..."
              className="bg-transparent border-none px-0 py-2 text-3xl md:text-5xl font-black uppercase tracking-wide text-white placeholder-zinc-700 focus:outline-none focus:ring-0 transition-colors" 
            />
          </div>

          {/* Description / Excerpt */}
          <div className="flex flex-col gap-3 bg-[#111111]/50 border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 relative z-10">
              <FiEdit3 className="text-blue-500" /> Deskripsi Singkat (Excerpt) *
            </label>
            <textarea 
              required 
              name="description" 
              defaultValue={blog?.description || ""} 
              placeholder="Tulis rangkuman singkat atau pengantar artikel ini..."
              rows={3} 
              className="bg-transparent border-none px-0 py-2 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none resize-none relative z-10 font-light leading-relaxed" 
            />
          </div>

          {/* Rich Text Editor */}
          <div className="flex flex-col gap-3 mt-4">
            <BlogContentInput defaultValue={blog?.content || ""} />
          </div>

        </div>

        {/* Sidebar Settings Column */}
        <div className="w-full lg:w-80 flex flex-col gap-6">
          
          <div className="bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-6 sticky top-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-4 mb-2">
              Pengaturan Artikel
            </h3>

            {/* Category */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <FiTag className="text-zinc-400" /> Kategori *
              </label>
              <input 
                required 
                type="text" 
                name="category" 
                defaultValue={blog?.category || ""} 
                placeholder="Misal: Edukasi Seks" 
                className="bg-black/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all" 
              />
            </div>

            {/* Author */}
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <FiUser className="text-zinc-400" /> Penulis *
              </label>
              <input 
                required 
                type="text" 
                name="author" 
                defaultValue={blog?.author || "Admin OLO"} 
                className="bg-black/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all" 
              />
            </div>

            {/* Cover Image */}
            <ImageInput defaultValue={blog?.image || ""} />

            {/* Submit Button */}
            <div className="mt-8">
              <button 
                type="submit" 
                className="w-full bg-[#004AC6] hover:bg-[#003cb0] text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,74,198,0.3)] hover:shadow-[0_0_30px_rgba(0,74,198,0.5)] group"
              >
                <FiSave className="text-lg group-hover:scale-110 transition-transform" />
                <span>Simpan Publikasi</span>
              </button>
            </div>

          </div>

        </div>
      </form>
    </div>
  );
}
