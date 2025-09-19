export const ValidateLastEmployeetenure = (value: number) => {
    const key = "lastEmployerTenureYears";

    if (!Number.isFinite(value) || Number.isNaN(value)) {
        return {
            key,
            question: "Tenure at Last Employer must be a valid number (e.g., 3 or 2.5). Please correct the input."
        };
    }

    if (value < 0) {
        return { key, question: "Tenure at Last Employer cannot be negative. Please enter a valid tenure." };
    }

    const decimals = Math.max(0, (value.toString().split(".")[1] || "").length);
    if (decimals > 2) {
        return {
            key,
            question: "Please round the Tenure at Last Employer to at most two decimal places (e.g., 2.50)."
        };
    }

    if (value > 15) {
        return {
            key,
            question: "Tenure at Last Employer can't be greater than 15 years. Please enter a valid input."
        };
    }

}