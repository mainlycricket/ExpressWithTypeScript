"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const studentsController_1 = require("../controllers/studentsController");
router.post("/", studentsController_1.createStudent);
router.get("/", studentsController_1.getStudents);
exports.default = router;
