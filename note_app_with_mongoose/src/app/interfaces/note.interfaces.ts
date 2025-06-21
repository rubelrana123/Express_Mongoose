import { Types } from "mongoose";

  type NoteCategory = 'personal' | 'study' | 'work' | 'other';
  
  interface ITag {
  label: string;
  color?: string;
}

export interface INote {
  _id?: string;  
  title: string;
  content?: string;
  category?: NoteCategory;
  pin: boolean;
  tags: ITag;
  createdAt?: string;
  updatedAt?: string;
  user : Types.ObjectId;
}
