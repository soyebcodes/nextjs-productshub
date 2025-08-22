import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, price } = body;

    if (!name || !description || !price) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const product = await prisma.product.create({
      data: { name, description, price: Number(price) },
    });

    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
