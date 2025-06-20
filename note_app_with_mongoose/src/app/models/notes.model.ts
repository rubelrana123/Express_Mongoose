import { Schema, model } from "mongoose";
import { INote } from "../interfaces/note.interfaces";

const noteSchema = new Schema<INote>(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, default: "No content" },
    category: {
      type: String,
      enum: ["personal", "study", "work", "other"],
      default: "personal",
    },
    pin: { type: Boolean, default: false },
    tags: {
      label: { type: String, required: true },
      color: { type: String, default: "gray" },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Note = model<INote>("Note", noteSchema);
