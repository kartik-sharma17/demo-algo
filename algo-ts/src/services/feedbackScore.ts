import type { Request, Response } from "express";
import { responsePlate } from "../utils";
import { feedbackScoreSchema } from "../zod/feedbackScoreSchema";
import { feedbackParams } from "../parameter/feedbackParams";

export const feedbackScore = async (req: Request, res: Response) => {
  try {
    // validating the data from the employer
    const { success, error, data } = feedbackScoreSchema.safeParse(req.body);

    // returning if validation failed
    if (!success) {
      return responsePlate(res, {
        message: "Validation failed",
        status: 411,
        success: false,
        data: error.issues.map((err) => ({
          path: err.path.join("."), // which field failed
          message: err.message, // error message
        })),
      });
    }

    // extracting all the data for clearer syntax
    const { aadhaarNumber, isWorkedWithYou, keyPoints, message } = data;

    const notFindKeys = keyPoints.filter(
      (keyElm) =>
        !feedbackParams.some(
          (fdElm) =>
            fdElm?.key.trim().toLowerCase() === keyElm.trim().toLowerCase()
        )
    );

    console.log(notFindKeys);

    return responsePlate(res, {
      success: true,
      status: 200,
      message: "Feedback Submitted Successfully",
    });
  } catch (error) {
    console.log(error);
    return responsePlate(res, {
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
};
