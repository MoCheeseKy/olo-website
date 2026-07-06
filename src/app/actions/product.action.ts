"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { authenticateServerAction } from "@/lib/auth";

export async function getProducts(category?: string) {
  try {
    return await db.product.findMany({
      where: category ? { category } : undefined,
      include: { type: true },
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
      include: { type: true },
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
  typeId?: number | null;
}) {
  try {
    await authenticateServerAction();
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
  typeId?: number | null;
}>) {
  try {
    await authenticateServerAction();
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
    await authenticateServerAction();
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

export async function getBestProducts() {
  try {
    return await db.product.findMany({
      where: { isBestProduct: true },
      include: { type: true },
      take: 3,
      orderBy: { updatedAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to get best products:", error);
    return [];
  }
}

export async function toggleBestProduct(id: number, status: boolean) {
  try {
    await authenticateServerAction();
    
    // Validasi maksimal 3 produk jika menambahkan
    if (status) {
      const currentCount = await db.product.count({
        where: { isBestProduct: true },
      });
      if (currentCount >= 3) {
        return { success: false, error: "Maksimal hanya 3 Best Product." };
      }
    }

    const product = await db.product.update({
      where: { id },
      data: { isBestProduct: status },
    });
    revalidatePath("/admin/best-produk");
    revalidatePath("/produk");
    revalidatePath("/");
    return { success: true, data: product };
  } catch (error: any) {
    console.error(`Failed to toggle best product ${id}:`, error);
    return { success: false, error: error.message };
  }
}
