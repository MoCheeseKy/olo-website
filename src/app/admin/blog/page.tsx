export const dynamic = 'force-dynamic';
import Link from "next/link";
import { getBlogs, deleteBlog } from "@/app/actions/blog.action";
import { FiEdit, FiPlus } from "react-icons/fi";
import Image from "next/image";
import DeleteButton from "@/components/_shared/DeleteButton/DeleteButton";

export default async function AdminBlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-wide uppercase">Kelola Blog</h2>
          <p className="text-zinc-400 text-sm mt-1">Daftar semua artikel edukasi</p>
        </div>
        <Link
          href="/admin/blog/form"
          className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20"
        >
          <FiPlus />
          Tulis Artikel
        </Link>
      </div>

      <div className="bg-[#111322]/50 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-wider text-zinc-400">
            <tr>
              <th className="px-6 py-4 font-semibold">Artikel</th>
              <th className="px-6 py-4 font-semibold">Kategori</th>
              <th className="px-6 py-4 font-semibold">Tanggal</th>
              <th className="px-6 py-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-12 rounded-md bg-black/40 overflow-hidden border border-white/10">
                      <Image
                        src={blog.image || "/images/blog_couple.png"}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-white max-w-sm line-clamp-1">{blog.title}</p>
                      <p className="text-xs text-zinc-500">Oleh {blog.author}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-white/5 border border-white/10 text-zinc-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {blog.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-zinc-400 text-xs">
                  {new Date(blog.publishedDate).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/blog/form?id=${blog.id}`}
                      className="text-zinc-400 hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-md hover:bg-white/10"
                      title="Edit"
                    >
                      <FiEdit />
                    </Link>
                    <DeleteButton 
                      action={async () => {
                        "use server";
                        await deleteBlog(blog.id);
                      }} 
                    />
                  </div>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-zinc-500 text-sm">
                  Belum ada artikel. Silakan tulis artikel baru.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
