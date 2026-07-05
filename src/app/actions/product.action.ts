"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getProducts() {
  try {
    return await db.product.findMany({
      orderBy: { id: "desc" },
    });
  } catch (error) {
    console.error("Failed to get products:", error);
    return [];
  }
}

export async function getProductById(id: number) {
  try {
    return await db.product.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Failed to get product with id ${id}:`, error);
    return null;
  }
}

export async function createProduct(data: {
  name: string;
  category: string;
  image: string;
  description: string;
  width?: string;
  length?: string;
  material?: string;
  lubricant?: string;
  shopeeUrl?: string;
  tokopediaUrl?: string;
}) {
  try {
    const product = await db.product.create({
      data,
    });
    revalidatePath("/produk");
    revalidatePath("/admin/produk");
    return { success: true, data: product };
  } catch (error: any) {
    console.error("Failed to create product:", error);
    return { success: false, error: error.message };
  }
}

export async function updateProduct(id: number, data: Partial<{
  name: string;
  category: string;
  image: string;
  description: string;
  width?: string;
  length?: string;
  material?: string;
  lubricant?: string;
  shopeeUrl?: string;
  tokopediaUrl?: string;
}>) {
  try {
    const product = await db.product.update({
      where: { id },
      data,
    });
    revalidatePath("/produk");
    revalidatePath(`/produk/${id}`);
    revalidatePath("/admin/produk");
    return { success: true, data: product };
  } catch (error: any) {
    console.error(`Failed to update product ${id}:`, error);
    return { success: false, error: error.message };
  }
}

export async function deleteProduct(id: number) {
  try {
    await db.product.delete({
      where: { id },
    });
    revalidatePath("/produk");
    revalidatePath("/admin/produk");
    return { success: true };
  } catch (error: any) {
    console.error(`Failed to delete product ${id}:`, error);
    return { success: false, error: error.message };
  }
}
