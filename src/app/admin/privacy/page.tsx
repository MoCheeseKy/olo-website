import { getSiteSettings, updateSiteSettings } from "@/app/actions/setting.action";
import { redirect } from "next/navigation";
import { FiSave } from "react-icons/fi";
import BlogContentInput from "../blog/form/BlogContentInput";

export default async function AdminPrivacyPage() {
  const settings = await getSiteSettings();
  const privacyContent = settings["privacy_content"] || "";

  async function handleSave(formData: FormData) {
    "use server";
    const content = formData.get("content") as string;
    await updateSiteSettings({ privacy_content: content });
    redirect("/admin/privacy");
  }

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto font-poppins">
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
          Kelola Privacy Policy
        </h1>
        <p className="text-zinc-400 mt-2 text-sm">
          Edit konten halaman kebijakan privasi di sini.
        </p>
      </div>

      <form action={handleSave} className="flex flex-col gap-8">
        <div className="flex flex-col gap-3 bg-[#111111]/50 border border-white/5 rounded-2xl p-6">
          <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
            Konten Kebijakan Privasi
          </label>
          <BlogContentInput defaultValue={privacyContent} />
        </div>

        <button 
          type="submit" 
          className="w-full md:w-auto self-end bg-[#004AC6] hover:bg-[#003cb0] text-white py-4 px-8 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,74,198,0.3)] hover:shadow-[0_0_30px_rgba(0,74,198,0.5)] group"
        >
          <FiSave className="text-lg group-hover:scale-110 transition-transform" />
          <span>Simpan Perubahan</span>
        </button>
      </form>
    </div>
  );
}
