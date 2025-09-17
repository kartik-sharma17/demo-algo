import type { Request, Response } from "express";
import { responsePlate } from "../utils/responsePlate";
import { calculateScore } from "../utils/trainModel";

export const nlpInitialScore = async (req: Request, res: Response) => {
  try {
    const feedbacks = req.body.feedbacks as { feedback: string }[];
    const result: any[] = [];
    for (let i = 0; i < feedbacks.length; i++) {
      const element = feedbacks[i];
      if (element?.feedback) {
        const r = await calculateScore(element.feedback);
        result.push(r);
      }
    }
    return responsePlate(res, {
      success: true,
      message: "OK",
      status: 200,
      data: result,
    });
  } catch (error) {
    console.log("error");
    return responsePlate(res, {
      success: false,
      message: "internal server error",
      status: 500,
    });
  }
};
