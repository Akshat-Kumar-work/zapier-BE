import express from "express";
import dotenv from "dotenv";
import beCommon from "@repo/be_common";
import { Request,Response } from "express";
import zapRunRoutes from "./routes/zapRunRoutes";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/zap-runs', zapRunRoutes);


app.get("/", (req:Request, res:Response) => {
  return res.status(200).json(beCommon.success(null, "hooks service working fine"));
});

app.listen(PORT, () => {
  console.log(`Hooks Server is running on port ${PORT}`);
});
