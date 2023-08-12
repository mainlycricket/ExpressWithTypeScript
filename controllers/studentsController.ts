import { Request, Response } from "express";
import StudentsModel from "../models/Students";

export const createStudent = async (req: Request, res: Response) => {
  const name = req?.body?.name;

  if (!name?.trim()) {
    return res.status(400).json({
      success: false,
      message: "Student Name is required!",
    });
  }

  try {
    const new_student = await StudentsModel.create({name});
    return res.status(201).json({
      success: true,
      id: new_student._id,
      message: "Student is created!",
    });
  } catch (error) {
    console.error("error while creating student", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getStudents = async (req: Request, res: Response) => {
  const students = await StudentsModel.find();

  res.status(200).json({
    success: true,
    data: students,
  });
};
