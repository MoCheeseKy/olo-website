"use client";

import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

interface DeleteButtonProps {
  action: () => Promise<void>;
  title?: string;
  message?: string;
  buttonClass?: string;
}

export default function DeleteButton({
  action,
  title = "Konfirmasi Hapus",
  message = "Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.",
  buttonClass = "text-zinc-400 hover:text-red-400 transition-colors p-2 bg-white/5 rounded-md hover:bg-white/10"
}: DeleteButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <>
      <button 
        type="button" 
        onClick={() => setIsOpen(true)}
        className={buttonClass}
        title="Hapus"
      >
        <FiTrash2 />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
           <div className="bg-[#111322] border border-white/10 rounded-2xl p-6 w-full max-w-sm flex flex-col gap-4 shadow-2xl animate-fade-in">
             <h3 className="text-lg font-bold text-white">{title}</h3>
             <p className="text-sm text-zinc-400 font-light">{message}</p>
             <div className="flex justify-end gap-3 mt-4">
               <button 
                 onClick={() => setIsOpen(false)} 
                 disabled={isDeleting} 
                 className="px-5 py-2.5 text-sm font-bold text-zinc-300 bg-white/5 hover:bg-white/10 hover:text-white rounded-xl disabled:opacity-50 transition-colors"
               >
                 Batal
               </button>
               <button 
                 onClick={async () => {
                   setIsDeleting(true);
                   try {
                     await action();
                   } finally {
                     setIsOpen(false);
                     setIsDeleting(false);
                   }
                 }} 
                 disabled={isDeleting} 
                 className="px-5 py-2.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl disabled:opacity-50 transition-colors flex items-center gap-2"
               >
                 {isDeleting ? "Menghapus..." : "Ya, Hapus"}
               </button>
             </div>
           </div>
        </div>
      )}
    </>
  );
}
