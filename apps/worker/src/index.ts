import express from "express";
import beCommon from "@repo/be_common";
import { Request,Response } from "express";
import outbox_worker_router from "./routes/outbox_worker_router";

const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use("/api/v1/outbox_worker",outbox_worker_router);

app.get("/", (req:Request, res:Response) => {
  return res.status(200).json(beCommon.success(null, "worker service working fine"));
});

app.listen(PORT, () => {
  console.log(`worker Server is running on port ${PORT}`);
});
