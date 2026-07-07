"use client";

import { useFormStatus } from "react-dom";
import { FiSave } from "react-icons/fi";
import { ReactNode } from "react";

interface SubmitButtonProps {
  children?: ReactNode;
  loadingText?: string;
  icon?: ReactNode;
  className?: string;
}

export default function SubmitButton({ 
  children = "Simpan Perubahan", 
  loadingText = "Menyimpan...",
  icon = <FiSave className="text-lg group-hover:scale-110 transition-transform" />,
  className = "w-full md:w-auto self-end bg-[#004AC6] hover:bg-[#003cb0] text-white py-4 px-8 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,74,198,0.3)] hover:shadow-[0_0_30px_rgba(0,74,198,0.5)] group disabled:opacity-50 disabled:cursor-not-allowed"
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      disabled={pending}
      className={className}
    >
      {!pending && icon}
      <span>{pending ? loadingText : children}</span>
    </button>
  );
}
