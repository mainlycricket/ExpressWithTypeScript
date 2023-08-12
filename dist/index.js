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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT);
const MONGO_URI = String(process.env.MONGO_URI);
const connect_1 = require("./db/connect");
const studentsRoutes_1 = __importDefault(require("./routes/studentsRoutes"));
app.use(express_1.default.json());
app.get("/api/v1/", (req, res) => {
    res.send("Hello World from Express with TypeScript");
});
app.use("/api/v1/student", studentsRoutes_1.default);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.connectDB)(MONGO_URI);
        console.log(`Server is listening on port ${PORT}`);
    }
    catch (error) {
        console.error("Connection failed!");
    }
}));
