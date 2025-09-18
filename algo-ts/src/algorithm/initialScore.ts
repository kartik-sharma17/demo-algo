import { initialScoringParams } from "../parameter/intialScoringParams";

export const intialScore = (
  userData: Record<string, string | boolean | number>
) => {
  let score = 0;
  let summary: { key: string; label: string; points: number }[] = [];

  initialScoringParams?.forEach((parameter) => {
    const value = userData[parameter.key];

    if (typeof value === "undefined") return;

    if (parameter?.type === "boolean") {
      if (typeof value === "boolean") {
        score = score + parameter?.weight;
      }
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        points: value === true ? parameter.weight : 0,
      });
    } else {
      if (typeof value === "number" && value > 0) {
        score = score + parameter?.weight;
      }
      summary.push({
        key: parameter?.key,
        label: parameter?.label,
        // points: parameter?.weight
        points: typeof value === "number" && value > 0 ? parameter.weight : 0,
      });
    }
  });

  return {
    score,
    summary,
  };
};
