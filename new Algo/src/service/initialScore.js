import { intialScore, validateInitialinput } from "../Algorithm/index.js";
import { responsePlate } from "../utils/index.js";

export const generateInitialscore = (req, res) => {
    const userData = validateInitialinput(req?.body)
    if (userData?.crossQuestion.length > 0) {
        return responsePlate(res, { message: "There is Missing Data", success: false, status: 400, data: userData?.crossQuestion })
    } else {
        const result = intialScore(userData);
        responsePlate(res, { data: result, message: "score Successfully Generated"});
    }
}