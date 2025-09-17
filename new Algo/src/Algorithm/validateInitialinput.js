import { initialScoringParams } from "../parameter/index.js";

export const validateInitialinput = (initialDatafromUser) => {
    const crossQuestion = [];
    const completeData = {};

    initialScoringParams.forEach((parameter) => {
        if (initialDatafromUser[parameter?.key] === undefined || initialDatafromUser[parameter?.key] === "" || initialDatafromUser[parameter?.key] === null) {
            crossQuestion.push({
                key: parameter?.key,
                question: parameter?.question
            })
        }
        else {
            completeData[parameter?.key] = initialDatafromUser[parameter?.key]
        }
    })

    return { crossQuestion, completeData };
}