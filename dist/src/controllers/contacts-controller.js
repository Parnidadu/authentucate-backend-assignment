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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllContacts = exports.createContact = void 0;
const database_1 = __importDefault(require("../utils/database"));
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, phoneNumber, authorId } = req.body;
        const newContact = yield database_1.default.contacts.create({
            data: { name, phoneNumber, authorId },
        });
        res.json(newContact);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createContact = createContact;
const getAllContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allContacts = yield database_1.default.contacts.findMany();
        res.json(allContacts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getAllContacts = getAllContacts;
