import type { Request, Response } from "express";
import { responsePlate } from "../utils/responsePlate.js";
import { intialScore } from "../utils/initialScore.js";
import { validateInitialinput } from "../utils/validateInitialinput.js";

export const generateInitialscore = (req: Request, res: Response) => {
  try {
    const userData = validateInitialinput(req?.body);

    if (userData?.crossQuestion.length > 0) {
      return responsePlate(res, {
        message: "There is Missing Data",
        success: false,
        status: 400,
        data: userData?.crossQuestion,
      });
    }
    const result = intialScore(userData.completeData);
    return responsePlate(res, {
      data: result,
      message: "score Successfully Generated",
    });
  } catch (error) {
    console.log(error);
    responsePlate(res, {
      status: 500,
      success: false,
      message: "internal server error",
    });
  }
};
