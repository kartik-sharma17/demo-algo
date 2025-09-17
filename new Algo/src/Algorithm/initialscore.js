import { initialScoringParams } from "../parameter/index.js"

export const intialScore = (data) => {
    const userData = data?.completeData || {};

    let score = 0;
    let summary = [];

    initialScoringParams?.forEach((parameter) => {
        const value = userData[parameter.key];

        if (value === undefined) return;

        if (parameter?.type === "boolean") {

            if (value === true) {
                score = score + parameter?.weight;
            }
            summary.push({
                key: parameter?.key,
                label: parameter?.label,
                points: value === true ? parameter.weight : 0
            })
        }
        else {
            if(value > 0){
                score = score + parameter?.weight;
            }
            summary.push({
                key: parameter?.key,
                label: parameter?.label,
                // points: parameter?.weight
                points: value > 0 ? parameter.weight : 0
            })
        }
    })

    return {
        score,
        summary
    }
}