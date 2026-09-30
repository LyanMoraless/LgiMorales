// Seed script para popular o banco com dados de demonstração
// Executar: npx prisma db seed

import { db as prisma } from "../src/lib/db";
import { hash } from "bcryptjs";

async function main() {
  console.log("🌱 Iniciando seed do banco de dados...");

  // =====================
  // Admin padrão
  // =====================
  const adminPassword = await hash("admin123", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@lgimorales.com" },
    update: {},
    create: {
      name: "LGI Morales",
      email: "admin@lgimorales.com",
      passwordHash: adminPassword,
      role: "ADMIN",
    },
  });
  console.log(`✅ Admin criado: ${admin.email}`);

  // =====================
  // Clientes de demonstração
  // =====================
  const client1 = await prisma.client.upsert({
    where: { email: "joao@empresa.com" },
    update: {},
    create: {
      name: "João Silva",
      email: "joao@empresa.com",
      phone: "5515999999999",
      company: "Studio JS",
      instagram: "@studiojs",
      type: "MONTHLY",
      status: "ACTIVE",
      notes: "Cliente mensal — pacote de gestão de redes sociais + produção de conteúdo",
      portalEnabled: true,
      portalPassword: await hash("cliente123", 12),
    },
  });

  const client2 = await prisma.client.upsert({
    where: { email: "maria@coaching.com" },
    update: {},
    create: {
      name: "Maria Oliveira",
      email: "maria@coaching.com",
      phone: "5515988888888",
      company: "Maria Oliveira Coaching",
      instagram: "@mariacoach",
      type: "ONE_TIME",
      status: "ACTIVE",
      notes: "Ensaio de branding pessoal + estratégia digital",
      portalEnabled: true,
      portalPassword: await hash("cliente123", 12),
    },
  });

  const client3 = await prisma.client.upsert({
    where: { email: "carlos@fitness.com" },
    update: {},
    create: {
      name: "Carlos Mendes",
      email: "carlos@fitness.com",
      phone: "5515977777777",
      company: "CM Fitness",
      instagram: "@cmfitness",
      type: "MONTHLY",
      status: "ACTIVE",
      notes: "Produção de conteúdo fitness para Instagram e TikTok",
      portalEnabled: false,
    },
  });
  console.log(`✅ ${3} clientes criados`);

  // =====================
  // Eventos de demonstração
  // =====================
  const event1 = await prisma.event.create({
    data: {
      title: "Gestão de Redes Sociais - Setembro/2026",
      description: "Pacote mensal de gestão de redes sociais: 20 posts, 10 stories, 4 reels",
      type: "SOCIAL_MGMT",
      stage: "PRODUCTION",
      eventDate: new Date("2026-09-01"),
      contractDate: new Date("2026-08-25"),
      deliveryDate: new Date("2026-09-30"),
      totalValue: 2500,
      paymentMethod: "PIX",
      clientId: client1.id,
    },
  });

  const event2 = await prisma.event.create({
    data: {
      title: "Ensaio de Branding Pessoal",
      description: "Ensaio fotográfico para posicionamento digital: 40 fotos editadas + vídeo de 30s",
      type: "PHOTO_SHOOT",
      stage: "EDITING",
      eventDate: new Date("2026-09-15"),
      contractDate: new Date("2026-09-01"),
      deliveryDate: new Date("2026-10-05"),
      totalValue: 1800,
      paymentMethod: "CREDIT_CARD",
      location: "Estúdio LgiMorales",
      clientId: client2.id,
    },
  });

  const event3 = await prisma.event.create({
    data: {
      title: "Criação de Identidade Visual",
      description: "Logo, paleta de cores, tipografia, manual de marca",
      type: "BRANDING",
      stage: "PROPOSAL",
      totalValue: 3500,
      clientId: client3.id,
    },
  });

  const event4 = await prisma.event.create({
    data: {
      title: "Produção de Conteúdo - Agosto/2026",
      description: "Pacote mensal: 15 posts, 8 stories, 3 reels",
      type: "SOCIAL_MEDIA",
      stage: "DELIVERED",
      eventDate: new Date("2026-08-01"),
      contractDate: new Date("2026-07-28"),
      deliveryDate: new Date("2026-08-31"),
      deliveredAt: new Date("2026-08-29"),
      totalValue: 2000,
      paymentMethod: "PIX",
      clientId: client1.id,
    },
  });
  console.log(`✅ ${4} eventos criados`);

  // =====================
  // Parcelas de demonstração
  // =====================
  await prisma.installment.createMany({
    data: [
      {
        number: 1,
        value: 900,
        dueDate: new Date("2026-09-05"),
        paidAt: new Date("2026-09-05"),
        status: "PAID",
        eventId: event2.id,
      },
      {
        number: 2,
        value: 900,
        dueDate: new Date("2026-10-05"),
        status: "PENDING",
        eventId: event2.id,
      },
    ],
  });

  await prisma.installment.create({
    data: {
      number: 1,
      value: 2500,
      dueDate: new Date("2026-09-01"),
      paidAt: new Date("2026-09-01"),
      status: "PAID",
      eventId: event1.id,
    },
  });

  await prisma.installment.create({
    data: {
      number: 1,
      value: 2000,
      dueDate: new Date("2026-08-01"),
      paidAt: new Date("2026-08-01"),
      status: "PAID",
      eventId: event4.id,
    },
  });
  console.log(`✅ Parcelas criadas`);

  // =====================
  // Entregas de demonstração
  // =====================
  await prisma.delivery.create({
    data: {
      title: "Fotos do Ensaio de Branding - Prévia",
      description: "10 fotos em baixa resolução para aprovação",
      type: "PHOTOS",
      driveLink: "https://drive.google.com/drive/folders/exemplo",
      fileCount: 10,
      isPublished: true,
      eventId: event2.id,
      clientId: client2.id,
    },
  });

  await prisma.delivery.create({
    data: {
      title: "Conteúdo Agosto/2026 - Completo",
      description: "Posts, stories e reels do mês de agosto",
      type: "PHOTOS",
      driveLink: "https://drive.google.com/drive/folders/exemplo2",
      fileCount: 26,
      fileSize: "1.2 GB",
      isPublished: true,
      eventId: event4.id,
      clientId: client1.id,
    },
  });
  console.log(`✅ Entregas criadas`);

  // =====================
  // Portfólio de demonstração
  // =====================
  await prisma.portfolioItem.createMany({
    data: [
      {
        title: "Branding — Studio Fitness",
        description: "Identidade visual completa para academia boutique",
        category: "BRANDING",
        imageUrl: "/images/portfolio/placeholder-1.jpg",
        clientName: "Studio Fitness",
        sortOrder: 1,
      },
      {
        title: "Ensaio Corporativo — Tech Solutions",
        description: "Ensaio fotográfico da equipe para LinkedIn e site institucional",
        category: "PHOTO_SHOOT",
        imageUrl: "/images/portfolio/placeholder-2.jpg",
        clientName: "Tech Solutions",
        sortOrder: 2,
      },
      {
        title: "Conteúdo para Redes Sociais — Café Artesanal",
        description: "Produção mensal de fotos e vídeos para Instagram",
        category: "SOCIAL_MEDIA",
        imageUrl: "/images/portfolio/placeholder-3.jpg",
        clientName: "Café Artesanal",
        sortOrder: 3,
      },
      {
        title: "Estratégia Digital — Coach de Carreira",
        description: "Planejamento de conteúdo e posicionamento para profissional liberal",
        category: "STRATEGY",
        imageUrl: "/images/portfolio/placeholder-4.jpg",
        clientName: "Ana Rodrigues",
        sortOrder: 4,
      },
    ],
  });
  console.log(`✅ Portfólio criado`);

  // =====================
  // Depoimentos de demonstração
  // =====================
  await prisma.testimonial.createMany({
    data: [
      {
        clientName: "João Silva",
        clientRole: "CEO, Studio JS",
        content:
          "A LgiMorales transformou completamente minha presença digital. Desde que começamos a trabalhar juntos, meu engajamento no Instagram triplicou!",
        rating: 5,
        sortOrder: 1,
      },
      {
        clientName: "Maria Oliveira",
        clientRole: "Coach de Carreira",
        content:
          "Profissionalismo e criatividade em cada detalhe. O ensaio de branding ficou impecável e me ajudou a atrair os clientes certos.",
        rating: 5,
        sortOrder: 2,
      },
      {
        clientName: "Carlos Mendes",
        clientRole: "Personal Trainer, CM Fitness",
        content:
          "O conteúdo produzido é de altíssima qualidade. Meus alunos chegam dizendo que me encontraram pelo Instagram. Vale cada centavo!",
        rating: 5,
        sortOrder: 3,
      },
    ],
  });
  console.log(`✅ Depoimentos criados`);

  // =====================
  // Lead de demonstração
  // =====================
  await prisma.contactLead.create({
    data: {
      name: "Pedro Almeida",
      email: "pedro@nutricionista.com",
      phone: "5515966666666",
      message: "Olá! Sou nutricionista e gostaria de saber sobre produção de conteúdo para Instagram. Vocês têm pacotes mensais?",
      service: "Produção de conteúdo para redes sociais",
      status: "NEW",
    },
  });
  console.log(`✅ Lead de demonstração criado`);

  console.log("\n🎉 Seed concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
