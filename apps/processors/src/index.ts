import express from "express";
import beCommon from "@repo/be_common/dist";
import { Request,Response } from "express";
import zapRunOutboxRouter from "./routes/ZapRunOutboxRoutes"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/v1/zap-run-outbox',zapRunOutboxRouter)

app.get("/", (req:Request, res:Response) => {
  return res.status(200).json(beCommon.success(null, "Processors service working fine"));
});

app.listen(PORT, () => {
  console.log(`Processor Server is running on port ${PORT}`);
});
