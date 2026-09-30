import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/events — Listar todos os eventos
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get("clientId");
    const stage = searchParams.get("stage");

    const where: Record<string, unknown> = {};
    if (clientId) where.clientId = clientId;
    if (stage) where.stage = stage;

    const events = await db.event.findMany({
      where,
      include: {
        client: {
          select: { id: true, name: true, company: true },
        },
        installments: {
          orderBy: { number: "asc" },
        },
        _count: {
          select: { deliveries: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.error("Erro ao buscar eventos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar eventos." },
      { status: 500 }
    );
  }
}

// POST /api/events — Criar novo evento
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      type,
      stage,
      eventDate,
      contractDate,
      deliveryDate,
      totalValue,
      paymentMethod,
      location,
      driveFolder,
      notes,
      clientId,
      installments,
    } = body;

    if (!title || !type || !clientId) {
      return NextResponse.json(
        { error: "Título, tipo e cliente são obrigatórios." },
        { status: 400 }
      );
    }

    const event = await db.event.create({
      data: {
        title,
        description: description || null,
        type,
        stage: stage || "LEAD",
        eventDate: eventDate ? new Date(eventDate) : null,
        contractDate: contractDate ? new Date(contractDate) : null,
        deliveryDate: deliveryDate ? new Date(deliveryDate) : null,
        totalValue: totalValue || 0,
        paymentMethod: paymentMethod || null,
        location: location || null,
        driveFolder: driveFolder || null,
        notes: notes || null,
        clientId,
        // Criar parcelas junto com o evento
        ...(installments && installments.length > 0
          ? {
              installments: {
                createMany: {
                  data: installments.map(
                    (inst: { number: number; value: number; dueDate: string }) => ({
                      number: inst.number,
                      value: inst.value,
                      dueDate: new Date(inst.dueDate),
                      status: "PENDING",
                    })
                  ),
                },
              },
            }
          : {}),
      },
      include: {
        client: true,
        installments: true,
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar evento:", error);
    return NextResponse.json(
      { error: "Erro ao criar evento." },
      { status: 500 }
    );
  }
}
