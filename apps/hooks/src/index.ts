import express from "express";
import dotenv from "dotenv";
import beCommon from "@repo/be_common";
import { Request,Response } from "express";
import db from "@repo/db"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

console.log(db)

app.get("/", (req:Request, res:Response) => {
  return res.status(200).json(beCommon.success(null, "working fine"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
