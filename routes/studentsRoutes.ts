import express from "express";
const router = express.Router();

import { getStudents, createStudent } from "../controllers/studentsController";

router.post("/", createStudent);
router.get("/", getStudents);

export default router;
