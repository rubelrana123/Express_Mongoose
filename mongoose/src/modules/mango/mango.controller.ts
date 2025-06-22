import { Request, Response } from "express";
import Mango from "./mango.model";
 
 
 

const createMango = async (req: Request, res: Response) => {
  const payload = req.body;
  const mango = new Mango(payload);
  const data = await mango.save();

  res.send({
    success: true,
    message: "Mango Registered Successfully",
    data,
  });
};

const getmangos = async (req: Request, res: Response) => {
  const data = await Mango.find();

  res.send({
    success: true,
    message: "Mango retrieved Successfully",
    data,
  });
};

export { createMango, getmangos };