export const prompt = (notFindKeys: string[]): string => {
  return `
      you have to do nothing for now just return the json object with the following types
      type severityType = "high" | "low" | "medium";

      type statusType = "positive" | "negative";

      interface feedbackParamsProps {
        key: string;
        severity: severityType;
        status: statusType;
      }
      
      and it should be random i am giving you the array of string and you have to return the
      json object like the below one

      user input ${notFindKeys}

      output should be like
     [ 
        {
          key: "the user input",
          severity: "low",
          status: "positive"
        }
      ]
    `;
};
