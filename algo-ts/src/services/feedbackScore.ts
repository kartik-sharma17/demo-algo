import type { Request, Response } from "express";
import { responsePlate } from "../utils";
import { feedbackScoreSchema } from "../zod/feedbackScoreSchema";
import { feedbackParams } from "../parameter/feedbackParams";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { prompt } from "../utils/prompt";

// Gemini Client
const genAI = new GoogleGenerativeAI("AIzaSyCts46P346z8tJcmHdyknbdqwDUdnIJZ7A");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

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

    // extracting those points which are not in our feedback params
    const notFindKeys = keyPoints.filter(
      (keyElm) =>
        !feedbackParams.some(
          (fdElm) =>
            fdElm?.key.trim().toLowerCase() === keyElm.trim().toLowerCase()
        )
    );

    console.log(notFindKeys);

    const foundKeys = keyPoints.filter(
      (keyElm) =>
        !notFindKeys.some(
          (ndElm) => ndElm?.trim().toLowerCase() === keyElm.trim().toLowerCase()
        )
    );

    console.log(foundKeys);

    // here we have to add the logic of our own algo

    // doing the gemini thing
    const geminiResp = await model.generateContent(prompt(notFindKeys));

    let geminiText = geminiResp.response.text();
    console.log("Gemini Raw Output:\n", geminiText);

    geminiText = geminiText.replace(/```json|```/g, "").trim();

    // parsing the result
    const geminiParsedRes = JSON.parse(geminiText);

    console.log("Gemini Parsed Output:\n", geminiParsedRes);

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
