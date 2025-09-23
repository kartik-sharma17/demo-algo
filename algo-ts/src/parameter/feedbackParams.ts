// this will be the array of severity which will help us to find the weightage of key points
type severityType = "high";

type statusType = "positive" | "negative";

interface feedbackParamsProps {
  key: string;
  severity: severityType;
  status: statusType;
}

export const feedbackParams: feedbackParamsProps[] = [
  {
    key: "one",
    severity: "high",
    status: "negative",
  },
  {
    key: "two",
    severity: "high",
    status: "negative",
  },
  {
    key: "three",
    severity: "high",
    status: "negative",
  },
];
