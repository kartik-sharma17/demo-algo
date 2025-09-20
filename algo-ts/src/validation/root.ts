import { ValidateTotalExperience } from "./totalExperience";
import { ValidateEmployeetenure } from "./tenure";
import { ValidateLastEmployeetenure } from "./lastTenure";

export const validateInput = (initialDatafromUser: object) => {
    let questions: Array<object> = []

    if (initialDatafromUser?.totalExperienceYears) {
        const question = ValidateTotalExperience(initialDatafromUser?.totalExperienceYears);
        if (question) {
            questions.push(question)
        }
    }

    if (initialDatafromUser?.averageTenureYears) {
        const question = ValidateEmployeetenure(initialDatafromUser?.averageTenureYears);
        if (question) {
            questions.push(question)
        }
    }

    if (initialDatafromUser?.lastEmployerTenureYears) {
        const question = ValidateLastEmployeetenure(initialDatafromUser?.lastEmployerTenureYears);
        if (question) {
            questions.push(question)
        }
    }

    return questions;
}