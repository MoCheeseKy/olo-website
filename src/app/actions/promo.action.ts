import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { authenticateServerAction } from "@/lib/auth";

export async function getPromoCards() {
  try {
    return await db.promoCard.findMany({
      orderBy: { order: "asc" },
    });
  } catch (error) {
    console.error("Failed to get promo cards:", error);
    return [];
  }
}

export async function getPromoCardById(id: number) {
  try {
    return await db.promoCard.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Failed to get promo card ${id}:`, error);
    return null;
  }
}

export async function createPromoCard(data: {
  image: string;
  title: string;
  description: string;
  order?: number;
}) {
  try {
    await authenticateServerAction();
    const card = await db.promoCard.create({
      data: {
        image: data.image,
        title: data.title,
        description: data.description,
        order: data.order ? Number(data.order) : 0,
      },
    });
    revalidatePath("/admin/cta");
    revalidatePath("/");
    return { success: true, data: card };
  } catch (error: any) {
    console.error("Failed to create promo card:", error);
    return { success: false, error: error.message };
  }
}

export async function updatePromoCard(
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
    const card = await db.promoCard.update({
      where: { id },
      data: {
        ...data,
        order: data.order !== undefined ? Number(data.order) : undefined,
      },
    });
    revalidatePath("/admin/cta");
    revalidatePath("/");
    return { success: true, data: card };
  } catch (error: any) {
    console.error(`Failed to update promo card ${id}:`, error);
    return { success: false, error: error.message };
  }
}

export async function deletePromoCard(id: number) {
  try {
    await authenticateServerAction();
    await db.promoCard.delete({
      where: { id },
    });
    revalidatePath("/admin/cta");
    revalidatePath("/");
    return { success: true };
  } catch (error: any) {
    console.error(`Failed to delete promo card ${id}:`, error);
    return { success: false, error: error.message };
  }
}
