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
app.use('/user', userRoutes);
app.use('/zap', zapRoutes);
app.use('/trigger', triggerRoutes);
app.use('/action', actionRoutes);
app.use('/available-trigger', availableTriggerRoutes);
app.use('/available-action', availableActionRoutes);


app.get("/", (req:Request, res:Response) => {
  return res.status(200).json(beCommon.success(null, "working fine"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
