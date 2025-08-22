import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });

  const { name, description, price } = await req.json();
  const product = await prisma.product.create({ data: { name, description, price: parseFloat(price) } });

  return new Response(JSON.stringify(product), { status: 201, headers: { "Content-Type": "application/json" } });
}
