import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma; // ✅ Exporting as default
