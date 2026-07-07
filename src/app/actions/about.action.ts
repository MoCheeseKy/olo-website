"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { authenticateServerAction } from "@/lib/auth";

export async function getAboutOffers() {
  try {
    return await db.aboutOffer.findMany({
      orderBy: { order: "asc" },
    });
  } catch (error) {
    console.error("Failed to get about offers:", error);
    return [];
  }
}

export async function getAboutOfferById(id: number) {
  try {
    return await db.aboutOffer.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Failed to get about offer ${id}:`, error);
    return null;
  }
}

export async function createAboutOffer(data: {
  image: string;
  title: string;
  description: string;
  order?: number;
}) {
  try {
    await authenticateServerAction();
    const offer = await db.aboutOffer.create({
      data: {
        image: data.image,
        title: data.title,
        description: data.description,
        order: data.order ? Number(data.order) : 0,
      },
    });
    revalidatePath("/admin/tentang-kami");
    revalidatePath("/tentang-kami");
    return { success: true, data: offer };
  } catch (error: any) {
    console.error("Failed to create about offer:", error);
    return { success: false, error: error.message };
  }
}

export async function updateAboutOffer(
  id: number,
  data: Partial<{
    image: string;
    title: string;
    description: string;
    order: number;
  }>
) {
  try {
    await authenticateServerAction();
    const offer = await db.aboutOffer.update({
      where: { id },
      data: {
        ...data,
        order: data.order !== undefined ? Number(data.order) : undefined,
      },
    });
    revalidatePath("/admin/tentang-kami");
    revalidatePath("/tentang-kami");
    return { success: true, data: offer };
  } catch (error: any) {
    console.error(`Failed to update about offer ${id}:`, error);
    return { success: false, error: error.message };
  }
}

export async function deleteAboutOffer(id: number) {
  try {
    await authenticateServerAction();
    await db.aboutOffer.delete({
      where: { id },
    });
    revalidatePath("/admin/tentang-kami");
    revalidatePath("/tentang-kami");
    return { success: true };
  } catch (error: any) {
    console.error(`Failed to delete about offer ${id}:`, error);
    return { success: false, error: error.message };
  }
}

// ========================
// ABOUT HISTORY ACTIONS
// ========================

export async function getAboutHistories() {
  try {
    return await db.aboutHistory.findMany({
      orderBy: { order: "asc" },
    });
  } catch (error) {
    console.error("Failed to get about histories:", error);
    return [];
  }
}

export async function getAboutHistoryById(id: number) {
  try {
    return await db.aboutHistory.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Failed to get about history ${id}:`, error);
    return null;
  }
}

export async function createAboutHistory(data: {
  year: string;
  title: string;
  description: string;
  order?: number;
}) {
  try {
    await authenticateServerAction();
    const history = await db.aboutHistory.create({
      data: {
        year: data.year,
        title: data.title,
        description: data.description,
        order: data.order ? Number(data.order) : 0,
      },
    });
    revalidatePath("/admin/tentang-kami");
    revalidatePath("/tentang-kami");
    return { success: true, data: history };
  } catch (error: any) {
    console.error("Failed to create about history:", error);
    return { success: false, error: error.message };
  }
}

export async function updateAboutHistory(
  id: number,
  data: Partial<{
    year: string;
    title: string;
    description: string;
    order: number;
  }>
) {
  try {
    await authenticateServerAction();
    const history = await db.aboutHistory.update({
      where: { id },
      data: {
        ...data,
        order: data.order !== undefined ? Number(data.order) : undefined,
      },
    });
    revalidatePath("/admin/tentang-kami");
    revalidatePath("/tentang-kami");
    return { success: true, data: history };
  } catch (error: any) {
    console.error(`Failed to update about history ${id}:`, error);
    return { success: false, error: error.message };
  }
}

export async function deleteAboutHistory(id: number) {
  try {
    await authenticateServerAction();
    await db.aboutHistory.delete({
      where: { id },
    });
    revalidatePath("/admin/tentang-kami");
    revalidatePath("/tentang-kami");
    return { success: true };
  } catch (error: any) {
    console.error(`Failed to delete about history ${id}:`, error);
    return { success: false, error: error.message };
  }
}
