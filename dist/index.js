"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./src/routes/user-routes"));
const contacts_routes_1 = __importDefault(require("./src/routes/contacts-routes"));
const search_routes_1 = __importDefault(require("./src/routes/search-routes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/api', search_routes_1.default);
app.use('/api', user_routes_1.default);
app.use('/api', contacts_routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
