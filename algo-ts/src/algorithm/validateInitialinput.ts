import { initialScoringParams } from "../parameter/intialScoringParams";

export const validateInitialinput = (
  initialDatafromUser: Record<string, string>
) => {
  const crossQuestion: { key: string; question: string }[] = [];
  const completeData: Record<string, string> = {};

  initialScoringParams.forEach((parameter) => {
    if (
      initialDatafromUser[parameter?.key] === undefined ||
      initialDatafromUser[parameter?.key] === "" ||
      initialDatafromUser[parameter?.key] === null
    ) {
      crossQuestion.push({
        key: parameter?.key,
        question: parameter?.question,  
      });
    } else {
      completeData[parameter?.key] = initialDatafromUser[parameter?.key]!;
    }
  });

  return { crossQuestion, completeData };
};
