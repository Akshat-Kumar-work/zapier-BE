import express from "express";
import dotenv from "dotenv";
import beCommon from "@repo/be_common";
import { Request,Response } from "express";
import userRoutes from "./routes/userRoutes";
import zapRoutes from "./routes/zapRoutes";
import triggerRoutes from "./routes/triggerRoutes";
import actionRoutes from "./routes/actionRoute";
import availableTriggerRoutes from "./routes/availableTriggerRoutes";
import availableActionRoutes from "./routes/availableActionRoutes";




dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/zap', zapRoutes);
app.use('/api/v1/trigger', triggerRoutes);
app.use('/api/v1/action', actionRoutes);
app.use('/api/v1/available-trigger', availableTriggerRoutes);
app.use('/api/v1/available-action', availableActionRoutes);


app.get("/", (req:Request, res:Response) => {
  return res.status(200).json(beCommon.success(null, "base service working fine"));
});

app.listen(PORT, () => {
  console.log(`Base Server is running on port ${PORT}`);
});
