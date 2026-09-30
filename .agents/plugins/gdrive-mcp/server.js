#!/usr/bin/env node

/**
 * LgiMorales - Google Drive MCP Server
 * Provides tools to manage client folders and deliveries.
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { google } from "googleapis";
import * as dotenv from "dotenv";

dotenv.config();

// Inicializa a API do Drive
// NOTA: Para funcionar localmente, a conta de serviço (GDRIVE_API_KEY) deve ser fornecida.
const drive = google.drive({ version: "v3", auth: process.env.GDRIVE_API_KEY });

const server = new Server(
  {
    name: "lgimorales-gdrive",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Registra as Ferramentas (Tools)
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "create_client_folder",
        description: "Cria uma pasta principal para um novo cliente no Google Drive da LgiMorales.",
        inputSchema: {
          type: "object",
          properties: {
            clientName: {
              type: "string",
              description: "Nome do cliente ou da empresa",
            },
          },
          required: ["clientName"],
        },
      },
      {
        name: "create_event_folder",
        description: "Cria uma subpasta para um evento específico dentro da pasta do cliente.",
        inputSchema: {
          type: "object",
          properties: {
            parentFolderId: {
              type: "string",
              description: "O ID da pasta principal do cliente no Drive",
            },
            eventName: {
              type: "string",
              description: "Nome do evento (ex: 'Gestao de Redes - Setembro 2026')",
            },
          },
          required: ["parentFolderId", "eventName"],
        },
      },
      {
        name: "get_folder_link",
        description: "Obtém o link de compartilhamento (visualização) de uma pasta para enviar ao cliente.",
        inputSchema: {
          type: "object",
          properties: {
            folderId: {
              type: "string",
              description: "O ID da pasta",
            },
          },
          required: ["folderId"],
        },
      }
    ],
  };
});

// Implementa a lógica das ferramentas
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "create_client_folder": {
        const { clientName } = args;
        // Mocked response for structural phase
        return {
          content: [
            {
              type: "text",
              text: `[ESTRUTURAL - MOCK] Pasta para o cliente '${clientName}' criada com sucesso.\nFolder ID: mock-folder-id-${Date.now()}`
            }
          ]
        };
      }

      case "create_event_folder": {
        const { parentFolderId, eventName } = args;
        // Mocked response for structural phase
        return {
          content: [
            {
              type: "text",
              text: `[ESTRUTURAL - MOCK] Subpasta '${eventName}' criada dentro do pai '${parentFolderId}'.\nFolder ID: mock-event-id-${Date.now()}`
            }
          ]
        };
      }

      case "get_folder_link": {
        const { folderId } = args;
        // Mocked response for structural phase
        return {
          content: [
            {
              type: "text",
              text: `[ESTRUTURAL - MOCK] Link de compartilhamento: https://drive.google.com/drive/folders/${folderId}?usp=sharing`
            }
          ]
        };
      }

      default:
        throw new Error(`Tool not found: ${name}`);
    }
  } catch (error) {
    return {
      content: [
        {
          type: "text",
          text: `Erro ao executar ferramenta: ${error.message}`
        }
      ],
      isError: true,
    };
  }
});

// Inicia o Servidor usando Transporte Stdio
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("LgiMorales GDrive MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
