export const ValidateTotalExperience = (value: number) => {
    const key = "totalExperienceYears";

    if (!Number.isFinite(value) || Number.isNaN(value)) {
        return { key, question: "Experience must be a valid number (e.g. 4 or 3.5). Please correct the input." };
    }

    if (value < 0) {
        return { key, question: "Experience cannot be negative. Please enter a valid number of years." };
    }

    if (value > 30) {
        return { key, question: "Experience can't be greater than 30 years. Please enter a valid input." };
    }
}