"use client";

import { useState, useRef } from "react";
import { uploadImageAction } from "@/app/actions/upload.action";
import { FiImage, FiUploadCloud, FiLink, FiLoader } from "react-icons/fi";
import Image from "next/image";

interface ImageInputProps {
  defaultValue: string;
}

export default function ImageInput({ defaultValue }: ImageInputProps) {
  const [url, setUrl] = useState(defaultValue);
  const [mode, setMode] = useState<"url" | "upload">("url");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await uploadImageAction(formData);
      if (res.success && res.url) {
        setUrl(res.url);
        setMode("url"); // Switch back to URL mode to show the result
      } else {
        alert(res.error || "Gagal mengunggah gambar");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengunggah.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 border-t border-white/5 pt-6 mt-2">
      <div className="flex items-center justify-between">
        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
          <FiImage className="text-zinc-400" /> Gambar Cover *
        </label>
        
        {/* Toggle Mode */}
        <div className="flex items-center bg-black/50 rounded-lg p-1 border border-white/5">
          <button
            type="button"
            onClick={() => setMode("url")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all ${mode === "url" ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            <FiLink /> URL
          </button>
          <button
            type="button"
            onClick={() => setMode("upload")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all ${mode === "upload" ? "bg-white/10 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
          >
            <FiUploadCloud /> Upload
          </button>
        </div>
      </div>

      {mode === "url" ? (
        <input 
          required 
          type="text" 
          name="image" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://... atau /uploads/..." 
          className="bg-black/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all" 
        />
      ) : (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="bg-black/50 border border-dashed border-white/20 rounded-xl px-4 py-6 text-sm text-zinc-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-pointer flex flex-col items-center justify-center gap-2 text-center"
        >
          {isUploading ? (
            <>
              <FiLoader className="text-2xl animate-spin text-blue-500" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400">Mengunggah...</span>
            </>
          ) : (
            <>
              <FiUploadCloud className="text-2xl text-zinc-500" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Klik untuk memilih file dari komputer</span>
            </>
          )}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/*" 
            className="hidden" 
          />
        </div>
      )}

      {/* Hidden input to ensure the form submission always receives the URL even if the user stays on upload mode (though we switch back) */}
      {mode === "upload" && <input type="hidden" name="image" value={url} />}
      
      {/* Preview */}
      {url && mode === "url" && (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 mt-2 bg-[#0A0A0A]">
          <Image src={url} alt="Cover Preview" fill className="object-cover" />
        </div>
      )}
    </div>
  );
}
