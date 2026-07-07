import { getFaqById, createFaq, updateFaq } from "@/app/actions/faq.action";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import SubmitButton from "@/components/_shared/SubmitButton/SubmitButton";

export default async function AdminQnaFormPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const faqId = id ? parseInt(id) : null;
  const faq = faqId ? await getFaqById(faqId) : null;

  async function handleSave(formData: FormData) {
    "use server";
    
    const data = {
      question: formData.get("question") as string,
      answer: formData.get("answer") as string,
      order: parseInt(formData.get("order") as string) || 0,
    };

    if (faqId) {
      await updateFaq(faqId, data);
    } else {
      await createFaq(data);
    }
    
    redirect("/admin/qna");
  }

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div className="flex flex-col gap-2">
        <Link href="/admin/qna" className="text-xs text-zinc-500 flex items-center gap-2 hover:text-white transition-colors uppercase tracking-widest font-semibold w-fit">
          <FiArrowLeft /> Kembali
        </Link>
        <h2 className="text-2xl font-bold tracking-wide uppercase mt-2">
          {faqId ? "Edit QnA" : "Tambah QnA Baru"}
        </h2>
      </div>

      <form action={handleSave} className="bg-[#111322]/50 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Pertanyaan (Question) *</label>
          <input required type="text" name="question" defaultValue={faq?.question || ""} placeholder="Contoh: Apakah produk OLO aman digunakan?" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Jawaban (Answer) *</label>
          <textarea required name="answer" defaultValue={faq?.answer || ""} rows={4} placeholder="Jawaban..." className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Urutan (Order)</label>
          <input type="number" name="order" defaultValue={faq?.order || 0} className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
          <p className="text-[10px] text-zinc-500">Angka lebih kecil akan ditampilkan di posisi atas (0, 1, 2).</p>
        </div>

        <div className="flex justify-end mt-4 pt-6 border-t border-white/10">
          <SubmitButton>Simpan QnA</SubmitButton>
        </div>
      </form>
    </div>
  );
}
