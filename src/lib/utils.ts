import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

export function formatDateLong(date: Date | string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function timeAgo(date: Date | string): string {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  });
}

// Calcula temperatura do cliente baseado no último evento
export function getClientTemperature(lastEventDate: Date | null): {
  label: string;
  color: string;
  emoji: string;
} {
  if (!lastEventDate) {
    return { label: "Sem eventos", color: "text-gray-400", emoji: "⚪" };
  }

  const daysSinceLastEvent = Math.floor(
    (Date.now() - new Date(lastEventDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysSinceLastEvent <= 30) {
    return { label: "Ativo", color: "text-green-500", emoji: "🟢" };
  } else if (daysSinceLastEvent <= 90) {
    return { label: "Morno", color: "text-yellow-500", emoji: "🟡" };
  } else {
    return { label: "Frio", color: "text-red-500", emoji: "🔴" };
  }
}

// Gera link do WhatsApp com mensagem pré-formatada
export function getWhatsAppLink(message?: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5515996982353";
  const encodedMessage = encodeURIComponent(
    message || "Olá! Vim pelo site da LgiMorales e gostaria de saber mais sobre os serviços."
  );
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

// Labels em português para os enums
export const PIPELINE_STAGE_LABELS: Record<string, string> = {
  LEAD: "Lead",
  PROPOSAL: "Proposta",
  CONTRACT: "Contrato",
  PRODUCTION: "Produção",
  EDITING: "Edição",
  DELIVERY: "Entrega",
  DELIVERED: "Entregue",
  ARCHIVED: "Arquivado",
};

export const EVENT_TYPE_LABELS: Record<string, string> = {
  STRATEGY: "Estratégia Digital",
  SOCIAL_MEDIA: "Produção para Redes Sociais",
  POST_PRODUCTION: "Pós-Produção",
  EVENT_COVERAGE: "Cobertura de Eventos",
  PHOTO_SHOOT: "Ensaio Fotográfico",
  BRANDING: "Identidade Visual",
  SOCIAL_MGMT: "Gestão de Redes Sociais",
  OTHER: "Outros",
};

export const CLIENT_TYPE_LABELS: Record<string, string> = {
  MONTHLY: "Mensal",
  ONE_TIME: "Avulso",
};

export const PAYMENT_METHOD_LABELS: Record<string, string> = {
  PIX: "PIX",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  CASH: "Dinheiro",
  OTHER: "Outro",
};

export const INSTALLMENT_STATUS_LABELS: Record<string, string> = {
  PENDING: "Pendente",
  PAID: "Pago",
  OVERDUE: "Atrasado",
  CANCELLED: "Cancelado",
};

export const DELIVERY_TYPE_LABELS: Record<string, string> = {
  PHOTOS: "Fotos",
  VIDEO: "Vídeo",
  ALBUM: "Álbum Digital",
  RAW_FILES: "Arquivos Brutos",
  OTHER: "Outros",
};
