import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcryptjs";

// GET /api/clients — Listar todos os clientes
export async function GET() {
  try {
    const clients = await db.client.findMany({
      include: {
        events: {
          orderBy: { createdAt: "desc" },
          take: 1,
          select: {
            id: true,
            title: true,
            stage: true,
            createdAt: true,
            eventDate: true,
          },
        },
        _count: {
          select: { events: true, deliveries: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(clients);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    return NextResponse.json(
      { error: "Erro ao buscar clientes." },
      { status: 500 }
    );
  }
}

// POST /api/clients — Criar novo cliente
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      document,
      company,
      instagram,
      type,
      notes,
      driveFolder,
      portalEnabled,
      portalPassword,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nome e email são obrigatórios." },
        { status: 400 }
      );
    }

    // Verifica se email já existe
    const existing = await db.client.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Já existe um cliente com este email." },
        { status: 409 }
      );
    }

    // Hash da senha do portal se fornecida
    let hashedPortalPassword = null;
    if (portalPassword) {
      hashedPortalPassword = await hash(portalPassword, 12);
    }

    const client = await db.client.create({
      data: {
        name,
        email,
        phone: phone || null,
        document: document || null,
        company: company || null,
        instagram: instagram || null,
        type: type || "ONE_TIME",
        notes: notes || null,
        driveFolder: driveFolder || null,
        portalEnabled: portalEnabled || false,
        portalPassword: hashedPortalPassword,
      },
    });

    return NextResponse.json(client, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    return NextResponse.json(
      { error: "Erro ao criar cliente." },
      { status: 500 }
    );
  }
}
