"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const searchController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query } = req.params;
        // Search for users by name or phone number
        const userResults = yield prisma.user.findMany({
            where: {
                OR: [
                    { name: { contains: query, mode: 'insensitive' } },
                    { phoneNumber: { contains: query } },
                ],
            },
            select: {
                id: true,
                name: true,
                phoneNumber: true,
            },
        });
        // Search for contacts by name or phone number
        const contactResults = yield prisma.contacts.findMany({
            where: {
                OR: [
                    { name: { contains: query, mode: 'insensitive' } },
                    { phoneNumber: { contains: query } },
                ],
            },
            select: {
                id: true,
                name: true,
                phoneNumber: true,
                isSpam: true
            },
        });
        res.json({ userResults, contactResults });
    }
    catch (error) {
        console.error('Error in searchController:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    finally {
        yield prisma.$disconnect();
    }
});
exports.searchController = searchController;
