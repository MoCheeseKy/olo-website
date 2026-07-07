export const dynamic = 'force-dynamic';
import Link from "next/link";
import { getFaqs, deleteFaq } from "@/app/actions/faq.action";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";

export default async function AdminQnaPage() {
  const faqs = await getFaqs();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-wide uppercase">Kelola QnA</h2>
          <p className="text-zinc-400 text-sm mt-1">Daftar Pertanyaan Populer (FAQ) di Beranda.</p>
        </div>
        <Link
          href="/admin/qna/form"
          className="bg-[#004AC6] hover:bg-[#003cb0] text-white px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/20"
        >
          <FiPlus />
          Tambah QnA
        </Link>
      </div>

      <div className="bg-[#111322]/50 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-wider text-zinc-400">
            <tr>
              <th className="px-6 py-4 font-semibold">Urutan</th>
              <th className="px-6 py-4 font-semibold">Pertanyaan & Jawaban</th>
              <th className="px-6 py-4 font-semibold w-24">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {faqs.map((faq) => (
              <tr key={faq.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-bold text-zinc-400 align-top">{faq.order}</td>
                <td className="px-6 py-4">
                  <div className="font-bold text-white mb-2">{faq.question}</div>
                  <div className="text-xs text-zinc-400 line-clamp-2">{faq.answer}</div>
                </td>
                <td className="px-6 py-4 align-top">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/qna/form?id=${faq.id}`}
                      className="text-zinc-400 hover:text-blue-400 transition-colors p-2 bg-white/5 rounded-md hover:bg-white/10"
                      title="Edit"
                    >
                      <FiEdit />
                    </Link>
                    <form action={async () => {
                      "use server";
                      await deleteFaq(faq.id);
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
            {faqs.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-zinc-500 text-sm">
                  Belum ada QnA. Silakan tambah pertanyaan baru.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
