import Link from "next/link";
import { FiBox, FiFileText, FiHome } from "react-icons/fi";

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
              href="/admin/produk" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiBox className="text-lg" />
              Kelola Produk
            </Link>
            
            <Link 
              href="/admin/blog" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <FiFileText className="text-lg" />
              Kelola Blog
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
