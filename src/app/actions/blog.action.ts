"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getBlogs() {
  try {
    return await db.blog.findMany({
      orderBy: { publishedDate: "desc" },
    });
  } catch (error) {
    console.error("Failed to get blogs:", error);
    return [];
  }
}

export async function getBlogById(id: number) {
  try {
    return await db.blog.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Failed to get blog with id ${id}:`, error);
    return null;
  }
}

export async function createBlog(data: {
  title: string;
  category: string;
  image: string;
  description: string;
  author: string;
  content: string;
}) {
  try {
    const blog = await db.blog.create({
      data,
    });
    revalidatePath("/blog");
    revalidatePath("/admin/blog");
    return { success: true, data: blog };
  } catch (error: any) {
    console.error("Failed to create blog:", error);
    return { success: false, error: error.message };
  }
}

export async function updateBlog(id: number, data: Partial<{
  title: string;
  category: string;
  image: string;
  description: string;
  author: string;
  content: string;
}>) {
  try {
    const blog = await db.blog.update({
      where: { id },
      data,
    });
    revalidatePath("/blog");
    revalidatePath(`/blog/${id}`);
    revalidatePath("/admin/blog");
    return { success: true, data: blog };
  } catch (error: any) {
    console.error(`Failed to update blog ${id}:`, error);
    return { success: false, error: error.message };
  }
}

export async function deleteBlog(id: number) {
  try {
    await db.blog.delete({
      where: { id },
    });
    revalidatePath("/blog");
    revalidatePath("/admin/blog");
    return { success: true };
  } catch (error: any) {
    console.error(`Failed to delete blog ${id}:`, error);
    return { success: false, error: error.message };
  }
}
