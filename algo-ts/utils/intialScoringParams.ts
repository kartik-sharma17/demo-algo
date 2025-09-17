export const initialScoringParams = [
  {
    key: "lastEmployerTenure",
    label: "Tenure at last employer",
    type: "number",
    weight: 50,
    question: "How many years did the employee work at their last employer?",
    validation: { min: 0, max: 10 },
  },
  {
    key: "leadershipRoles",
    label: "Leadership Roles Held",
    type: "boolean",
    weight: 80,
    question: "Has the employee ever held a leadership role?",
  },
  {
    key: "mncExperience",
    label: "Work Experience in MNCs",
    type: "boolean",
    weight: 60,
    question: "Has the employee ever worked at a multinational company?",
  },
  {
    key: "disputeFreeRecord",
    label: "Dispute-Free Record",
    type: "boolean",
    weight: 70,
    question:
      "Does the employee have a dispute-free record with past employers?",
  },
  {
    key: "promotionCount",
    label: "Promotion Count",
    type: "number",
    weight: 90,
    question: "How many promotions has the employee received in past roles?",
    validation: { min: 0, max: 10 },
  },
  {
    key: "certifications",
    label: "Industry Certifications",
    type: "number",
    weight: 60,
    question:
      "How many industry-recognized certifications does the employee have?",
    validation: { min: 0, max: 20 },
  },
  {
    key: "globalExperience",
    label: "Global/International Experience",
    type: "boolean",
    weight: 70,
    question: "Has the employee worked internationally or with global teams?",
  },
  {
    key: "innovation",
    label: "Innovation / Patents",
    type: "boolean",
    weight: 100,
    question:
      "Has the employee been involved in innovation, new products, or patents?",
  },
  {
    key: "externalAwards",
    label: "External Honors & Awards",
    type: "boolean",
    weight: 100,
    question: "Has the employee received any external honors or awards?",
  },
  {
    key: "openSourceContributions",
    label: "Open Source Contributions",
    type: "boolean",
    weight: 50,
    question: "Has the employee contributed to open-source projects?",
  },
];
