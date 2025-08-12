import { Request, Response } from "express";
import db from "@repo/db";
import ResponseBuilder from "@repo/be_common";
import { kafka, sendEvent, Topics } from "@repo/kafka";

export const processPendingZapRuns = async (req: Request, res: Response) => {
  try {
    const pendingZaps = await db.zapRunOutbox.findMany({
      // where: { status: "PENDING" },
      take: 10,
    });

    console.log("pending zaps are ",pendingZaps)

    for (const zap of pendingZaps) {
      await sendEvent(Topics.ZAP_EVENTS, JSON.stringify(zap.zapRunId));

      await db.zapRunOutbox.update({
        where: { id: String(zap.id) },
        data: { status: "PROCESSED_OVER_KAFKA" },
      });
    }

    res.status(200).json(
        ResponseBuilder.success("All pending zapRun processed")
    )
    
  } catch (error) {
    return res
      .status(400)
      .json(
        ResponseBuilder.error("Failed to get & process pending ZapRun outbox")
      );
  }
};
