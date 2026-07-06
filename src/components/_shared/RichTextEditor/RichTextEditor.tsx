"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import { BubbleMenu } from '@tiptap/react/menus';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { useCallback, useState, useRef } from 'react';
import { 
  FiBold, 
  FiItalic, 
  FiList, 
  FiLink, 
  FiImage, 
  FiType,
  FiAlignLeft,
  FiUploadCloud
} from 'react-icons/fi';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-xl mx-auto my-6 max-w-full border border-white/10 shadow-2xl',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-400 underline decoration-blue-400/30 underline-offset-4 cursor-pointer hover:text-blue-300 transition-colors',
        },
      }),
      Placeholder.configure({
        placeholder: 'Mulai menulis ceritamu di sini...',
        emptyEditorClass: 'is-editor-empty',
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-invert prose-blue max-w-none focus:outline-none min-h-[500px] w-full text-zinc-300 leading-relaxed font-poppins',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);
    
    if (url === null) return;
    
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const addImageUrl = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('URL Gambar');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Using the same server action
      const { uploadImageAction } = await import("@/app/actions/upload.action");
      const res = await uploadImageAction(formData);
      
      if (res.success && res.url) {
        editor.chain().focus().setImage({ src: res.url }).run();
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

  if (!editor) {
    return (
      <div className="w-full min-h-[500px] bg-[#0A0A0A] rounded-2xl border border-white/5 animate-pulse flex items-center justify-center">
        <span className="text-zinc-600 text-sm font-semibold tracking-widest uppercase">Memuat Editor...</span>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-2xl bg-[#070707] border border-white/10 overflow-hidden shadow-2xl flex flex-col">
      
      {/* FIXED TOOLBAR - Clean and reliable */}
      <div className="sticky top-0 z-10 w-full bg-[#111111]/80 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center gap-1 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 pr-4 border-r border-white/10">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
            title="Heading 2"
          >
            <FiType className="text-lg" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={`p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center ${editor.isActive('paragraph') ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
            title="Paragraph"
          >
            <FiAlignLeft className="text-lg" />
          </button>
        </div>

        <div className="flex items-center gap-1 px-4 border-r border-white/10">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center ${editor.isActive('bold') ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
            title="Bold"
          >
            <FiBold className="text-lg" />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center ${editor.isActive('italic') ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
            title="Italic"
          >
            <FiItalic className="text-lg" />
          </button>
          <button
            type="button"
            onClick={setLink}
            className={`p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center ${editor.isActive('link') ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
            title="Link"
          >
            <FiLink className="text-lg" />
          </button>
        </div>

        <div className="flex items-center gap-1 pl-4">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center ${editor.isActive('bulletList') ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
            title="Bullet List"
          >
            <FiList className="text-lg" />
          </button>
          <button
            type="button"
            onClick={addImageUrl}
            className="p-2.5 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white transition-all duration-200 flex items-center justify-center"
            title="Tambah Gambar dari URL"
          >
            <FiImage className="text-lg" />
          </button>
          <button
            type="button"
            disabled={isUploading}
            onClick={() => fileInputRef.current?.click()}
            className={`p-2.5 rounded-lg transition-all duration-200 flex items-center justify-center ${isUploading ? 'text-blue-500 animate-pulse' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
            title="Upload Gambar"
          >
            <FiUploadCloud className="text-lg" />
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            accept="image/*" 
            className="hidden" 
          />
        </div>
      </div>

      {/* BUBBLE MENU - Muncul saat teks diblok */}
      {editor && (
        <BubbleMenu 
          editor={editor} 
          tippyOptions={{ duration: 150 }}
          className="flex bg-[#111111]/90 backdrop-blur-xl shadow-2xl shadow-black border border-white/10 rounded-xl overflow-hidden p-1 gap-1"
        >
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded-lg transition-colors ${editor.isActive('bold') ? 'text-blue-400 bg-white/10' : 'text-zinc-300 hover:bg-white/5'}`}
          >
            <FiBold />
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded-lg transition-colors ${editor.isActive('italic') ? 'text-blue-400 bg-white/10' : 'text-zinc-300 hover:bg-white/5'}`}
          >
            <FiItalic />
          </button>
          <button
            type="button"
            onClick={setLink}
            className={`p-2 rounded-lg transition-colors ${editor.isActive('link') ? 'text-blue-400 bg-white/10' : 'text-zinc-300 hover:bg-white/5'}`}
          >
            <FiLink />
          </button>
        </BubbleMenu>
      )}

      {/* EDITOR CONTENT AREA */}
      <div className="p-8 md:p-12 cursor-text" onClick={() => editor.commands.focus()}>
        <EditorContent editor={editor} />
      </div>
      
      {/* Tambahan custom CSS khusus untuk editor ini */}
      <style dangerouslySetInnerHTML={{ __html: `
        .tiptap p.is-editor-empty:first-child::before {
          color: #52525b;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
          font-style: italic;
        }
        .tiptap h1, .tiptap h2, .tiptap h3 {
          color: white;
          font-weight: 800;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .tiptap ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .tiptap li {
          margin-bottom: 0.5rem;
        }
      `}} />
    </div>
  );
}
