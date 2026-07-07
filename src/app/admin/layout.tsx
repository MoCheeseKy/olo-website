import Link from "next/link";
import { FiBox, FiFileText, FiHome, FiLogOut, FiList, FiStar, FiImage, FiHelpCircle, FiPhone, FiInfo } from "react-icons/fi";

export const metadata = {
  title: "Admin Dashboard - OLO Website",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `header, footer { display: none !important; }` }} />
      <div className="flex h-screen w-full bg-[#070707] text-white font-poppins overflow-hidden">
        
        {/* Sidebar */}
        <aside className="w-64 bg-[#111322] border-r border-white/10 flex flex-col hidden md:flex">
          <div className="p-6 border-b border-white/10">
            <h1 className="text-xl font-black uppercase tracking-widest text-white">
              OLO <span className="text-[#004AC6]">Admin</span>
            </h1>
          </div>
          
          <nav className="flex-1 p-4 flex flex-col gap-2">
            <Link 
              href="/admin/produk?category=Kondom" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiBox className="text-lg" />
              Kelola Kondom
            </Link>
            
            <Link 
              href="/admin/produk?category=Pelumas" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiBox className="text-lg" />
              Kelola Pelumas
            </Link>
            
            <Link 
              href="/admin/produk?category=Aksesoris" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiBox className="text-lg" />
              Kelola Aksesoris
            </Link>

            <Link 
              href="/admin/jenis-produk" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiList className="text-lg" />
              Kelola Jenis Produk
            </Link>

            <Link 
              href="/admin/best-produk" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiStar className="text-lg" />
              Kelola Best Product
            </Link>
            <Link 
              href="/admin/hero" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiImage className="text-lg" />
              Kelola Hero Banner
            </Link>

            <Link 
              href="/admin/blog" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiFileText className="text-lg" />
              Kelola Blog
            </Link>

            <Link 
              href="/admin/qna" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiHelpCircle className="text-lg" />
              Kelola QnA
            </Link>

            <Link 
              href="/admin/cta" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiStar className="text-lg" />
              Kelola CTA
            </Link>

            <Link 
              href="/admin/tentang-kami" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiInfo className="text-lg" />
              Kelola Tentang Kami
            </Link>

            <Link 
              href="/admin/privacy" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiInfo className="text-lg" />
              Kelola Privacy
            </Link>

            <Link 
              href="/admin/terms" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiInfo className="text-lg" />
              Kelola Terms
            </Link>

            <Link 
              href="/admin/kontak" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiPhone className="text-lg" />
              Pengaturan Kontak
            </Link>
          </nav>
          
          <div className="p-4 border-t border-white/10">
            <Link 
              href="/" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-[#004AC6] hover:bg-white/5 transition-colors"
            >
              <FiHome className="text-lg" />
              Kembali ke Web
            </Link>

            <form action={async () => {
              "use server";
              const { logoutAction } = await import("@/app/actions/auth.action");
              await logoutAction();
            }}>
              <button 
                type="submit"
                className="w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg text-sm font-semibold text-red-500/80 hover:text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <FiLogOut className="text-lg" />
                Logout
              </button>
            </form>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-y-auto relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none -z-10" />
          <div className="p-8">
            {children}
          </div>
        </main>

      </div>
    </>
  );
}
