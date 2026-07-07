"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { authenticateServerAction } from "@/lib/auth";

export async function getSiteSettings() {
  try {
    const settings = await db.siteSetting.findMany();
    // Convert array of key-value pairs to object
    const settingsObj: Record<string, string> = {};
    settings.forEach((s) => {
      settingsObj[s.key] = s.value;
    });
    return settingsObj;
  } catch (error) {
    console.error("Failed to get site settings:", error);
    return {};
  }
}

export async function updateSiteSettings(data: Record<string, string>) {
  try {
    await authenticateServerAction();
    const promises = Object.keys(data).map((key) => 
      db.siteSetting.upsert({
        where: { key },
        update: { value: data[key] },
        create: { key, value: data[key] },
      })
    );
    await Promise.all(promises);
    revalidatePath("/", "layout"); // Revalidate entire layout to refresh settings everywhere
    return { success: true };
  } catch (error: any) {
    console.error("Failed to update site settings:", error);
    return { success: false, error: error.message };
  }
}
