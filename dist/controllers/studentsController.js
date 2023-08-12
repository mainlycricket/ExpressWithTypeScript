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
exports.getStudents = exports.createStudent = void 0;
const Students_1 = __importDefault(require("../models/Students"));
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const name = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.name;
    if (!(name === null || name === void 0 ? void 0 : name.trim())) {
        return res.status(400).json({
            success: false,
            message: "Student Name is required!",
        });
    }
    try {
        const new_student = yield Students_1.default.create({ name });
        return res.status(201).json({
            success: true,
            id: new_student._id,
            message: "Student is created!",
        });
    }
    catch (error) {
        console.error("error while creating student", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
exports.createStudent = createStudent;
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield Students_1.default.find();
    res.status(200).json({
        success: true,
        data: students,
    });
});
exports.getStudents = getStudents;
