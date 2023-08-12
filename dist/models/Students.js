"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const StudentsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Students name is required"],
        trim: true,
    },
}, { versionKey: false, timestamps: true });
const StudentsModel = mongoose_1.default.model("Student", StudentsSchema);
exports.default = StudentsModel;
