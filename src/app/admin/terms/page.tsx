import { getSiteSettings, updateSiteSettings } from "@/app/actions/setting.action";
import { redirect } from "next/navigation";
import BlogContentInput from "../blog/form/BlogContentInput";
import SubmitButton from "@/components/_shared/SubmitButton/SubmitButton";

export default async function AdminTermsPage() {
  const settings = await getSiteSettings();
  const termsContent = settings["terms_content"] || "";

  async function handleSave(formData: FormData) {
    "use server";
    const content = formData.get("content") as string;
    await updateSiteSettings({ terms_content: content });
    redirect("/admin/terms");
  }

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto font-poppins">
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
          Kelola Syarat & Ketentuan
        </h1>
        <p className="text-zinc-400 mt-2 text-sm">
          Edit konten halaman Syarat & Ketentuan di sini.
        </p>
      </div>

      <form action={handleSave} className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 bg-[#111111]/50 border border-white/5 rounded-2xl p-6">
          <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
            Konten Syarat & Ketentuan
          </label>
          <BlogContentInput defaultValue={termsContent} />
        </div>

        <SubmitButton>Simpan Perubahan</SubmitButton>
      </form>
    </div>
  );
}
