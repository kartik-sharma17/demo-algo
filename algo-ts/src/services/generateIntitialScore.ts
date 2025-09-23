import type { Request, Response } from "express";
import { responsePlate } from "../utils/responsePlate.js";
import { intialScore } from "../algorithm/initialScore.js";
import { validateInput } from "../validation/root.js";
import { initialDatafromUserSchema } from "../zod/initalDataFromUserSchema.js";

export const generateInitialscore = (req: Request, res: Response) => {
  try {
    // validating the code form the zod
    const { success, data, error } = initialDatafromUserSchema.safeParse(
      req.body
    );

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

    const invalidInput = validateInput(data);

    if (invalidInput.length !== 0) {
      return responsePlate(res, {
        message: "There is Missing Data",
        success: false,
        status: 400,
        data: invalidInput,
      });
    }

    const result = intialScore(data);

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
