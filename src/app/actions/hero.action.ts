"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { authenticateServerAction } from "@/lib/auth";

export async function getHeroBanners() {
  try {
    return await db.heroBanner.findMany({
      orderBy: { order: "asc" },
    });
  } catch (error) {
    console.error("Failed to get hero banners:", error);
    return [];
  }
}

export async function getHeroBannerById(id: number) {
  try {
    return await db.heroBanner.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Failed to get hero banner with id ${id}:`, error);
    return null;
  }
}

export async function createHeroBanner(data: {
  image: string;
  title: string;
  description: string;
  order: number;
}) {
  try {
    await authenticateServerAction();
    const count = await db.heroBanner.count();
    if (count >= 3) {
      return { success: false, error: "Maksimal 3 banner yang diizinkan." };
    }
    
    const banner = await db.heroBanner.create({
      data,
    });
    revalidatePath("/");
    revalidatePath("/admin/hero");
    return { success: true, data: banner };
  } catch (error: any) {
    console.error("Failed to create hero banner:", error);
    return { success: false, error: error.message };
  }
}

export async function updateHeroBanner(id: number, data: Partial<{
  image: string;
  title: string;
  description: string;
  order: number;
}>) {
  try {
    await authenticateServerAction();
    const banner = await db.heroBanner.update({
      where: { id },
      data,
    });
    revalidatePath("/");
    revalidatePath("/admin/hero");
    return { success: true, data: banner };
  } catch (error: any) {
    console.error(`Failed to update hero banner ${id}:`, error);
    return { success: false, error: error.message };
  }
}

export async function deleteHeroBanner(id: number) {
  try {
    await authenticateServerAction();
    await db.heroBanner.delete({
      where: { id },
    });
    revalidatePath("/");
    revalidatePath("/admin/hero");
    return { success: true };
  } catch (error: any) {
    console.error(`Failed to delete hero banner ${id}:`, error);
    return { success: false, error: error.message };
  }
}
