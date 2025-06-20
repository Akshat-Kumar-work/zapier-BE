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
import zapRunRoutes from "./routes/zapRunRoutes";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/zaps', zapRoutes);
app.use('/triggers', triggerRoutes);
app.use('/actions', actionRoutes);
app.use('/available-triggers', availableTriggerRoutes);
app.use('/available-actions', availableActionRoutes);
app.use('/zap-runs', zapRunRoutes);


app.get("/", (req:Request, res:Response) => {
  return res.status(200).json(beCommon.success(null, "working fine"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
