import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const products = await db.product.findMany({
      where: {
        isBestProduct: true,
      },
      include: { type: true },
      take: 3,
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json({ success: true, data: products });
  } catch (error: any) {
    console.error("Failed to fetch best products:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data Best Product" },
      { status: 500 }
    );
  }
}
