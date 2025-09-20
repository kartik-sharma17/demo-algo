import { initialScoringParams } from "../parameter/intialScoringParams";
import { validateInput } from "../validation";

export const validateInitialinput = (
  initialDatafromUser: Record<string, string>
) => {
  let crossQuestion: {}[] = [];
  const completeData: Record<string, string> = {};

  const invalidInput = validateInput(initialDatafromUser);

  if (invalidInput.length > 0) {
    crossQuestion = crossQuestion.concat(invalidInput)
  }

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
