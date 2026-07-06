"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { authenticateServerAction } from "@/lib/auth";

export async function getProductTypes(category?: string) {
  try {
    const whereClause = category ? { category } : {};
    return await db.productType.findMany({
      where: whereClause,
      orderBy: { id: "desc" },
    });
  } catch (error) {
    console.error("Failed to get product types:", error);
    return [];
  }
}

export async function getProductTypeById(id: number) {
  try {
    return await db.productType.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Failed to get product type ${id}:`, error);
    return null;
  }
}

export async function createProductType(data: {
  name: string;
  category: string;
}) {
  try {
    await authenticateServerAction();
    const type = await db.productType.create({
      data,
    });
    revalidatePath("/admin/jenis-produk");
    return { success: true, data: type };
  } catch (error: any) {
    console.error("Failed to create product type:", error);
    return { success: false, error: error.message };
  }
}

export async function updateProductType(id: number, data: {
  name?: string;
  category?: string;
}) {
  try {
    await authenticateServerAction();
    const type = await db.productType.update({
      where: { id },
      data,
    });
    revalidatePath("/admin/jenis-produk");
    return { success: true, data: type };
  } catch (error: any) {
    console.error(`Failed to update product type ${id}:`, error);
    return { success: false, error: error.message };
  }
}

export async function deleteProductType(id: number) {
  try {
    await authenticateServerAction();
    await db.productType.delete({
      where: { id },
    });
    revalidatePath("/admin/jenis-produk");
    return { success: true };
  } catch (error: any) {
    console.error(`Failed to delete product type ${id}:`, error);
    return { success: false, error: error.message };
  }
}
