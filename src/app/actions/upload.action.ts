"use server";

import { authenticateServerAction } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

export async function uploadImageAction(formData: FormData) {
  try {
    await authenticateServerAction();

    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "Tidak ada file yang diunggah" };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniqueSuffix}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    
    // Ensure the upload directory exists
    const uploadDir = join(process.cwd(), "public", "uploads");
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    const filepath = join(uploadDir, filename);
    await writeFile(filepath, buffer);

    // Return the public URL
    const fileUrl = `/uploads/${filename}`;
    return { success: true, url: fileUrl };
  } catch (error: any) {
    console.error("Gagal mengunggah gambar:", error);
    return { success: false, error: error.message || "Gagal mengunggah gambar" };
  }
}
