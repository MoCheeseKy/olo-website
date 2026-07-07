"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { authenticateServerAction } from "@/lib/auth";

export async function getFaqs() {
  try {
    return await db.faq.findMany({
      orderBy: { order: "asc" },
    });
  } catch (error) {
    console.error("Failed to get faqs:", error);
    return [];
  }
}

export async function getFaqById(id: number) {
  try {
    return await db.faq.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(`Failed to get faq with id ${id}:`, error);
    return null;
  }
}

export async function createFaq(data: {
  question: string;
  answer: string;
  order: number;
}) {
  try {
    await authenticateServerAction();
    const faq = await db.faq.create({
      data,
    });
    revalidatePath("/");
    revalidatePath("/admin/qna");
    return { success: true, data: faq };
  } catch (error: any) {
    console.error("Failed to create faq:", error);
    return { success: false, error: error.message };
  }
}

export async function updateFaq(id: number, data: Partial<{
  question: string;
  answer: string;
  order: number;
}>) {
  try {
    await authenticateServerAction();
    const faq = await db.faq.update({
      where: { id },
      data,
    });
    revalidatePath("/");
    revalidatePath("/admin/qna");
    return { success: true, data: faq };
  } catch (error: any) {
    console.error(`Failed to update faq ${id}:`, error);
    return { success: false, error: error.message };
  }
}

export async function deleteFaq(id: number) {
  try {
    await authenticateServerAction();
    await db.faq.delete({
      where: { id },
    });
    revalidatePath("/");
    revalidatePath("/admin/qna");
    return { success: true };
  } catch (error: any) {
    console.error(`Failed to delete faq ${id}:`, error);
    return { success: false, error: error.message };
  }
}
