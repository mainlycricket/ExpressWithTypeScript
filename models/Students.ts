import mongoose from "mongoose";

const StudentsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Students name is required"],
      trim: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const StudentsModel = mongoose.model("Student", StudentsSchema);

export default StudentsModel;
