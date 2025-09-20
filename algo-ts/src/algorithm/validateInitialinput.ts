import { initialScoringParams } from "../parameter/intialScoringParams";
import { validateInput } from "../validation";

export const validateInitialinput = (
  initialDatafromUser: Record<string, string | boolean | number>
) => {
  try {
    const invalidInput = validateInput(initialDatafromUser);

    if (invalidInput.length !== 0) {
      return invalidInput;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
