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




// new parameter --

export const extendedScoringParams = [
  // -------------------------------
  // 1. BASIC CANDIDATE VERIFICATION
  // -------------------------------
  {
    key: "aadhaarVerification",
    label: "Aadhaar Verification",
    type: "boolean",
    weight: 150,
    question: "Is the Aadhaar verified successfully?",
  },
  {
    key: "panVerification",
    label: "PAN Verification",
    type: "boolean",
    weight: 150,
    question: "Is the PAN verified successfully?",
  },
  {
    key: "educationDocsVerified",
    label: "Education Document Verification",
    type: "boolean",
    weight: 180,
    question: "Are the candidate's education documents verified?",
  },
  {
    key: "dobVerification",
    label: "Date of Birth Verification",
    type: "boolean",
    weight: 100,
    question: "Is the candidate's date of birth verified?",
  },
  {
    key: "photoMatchVerification",
    label: "Photo Match Verification",
    type: "boolean",
    weight: 120,
    question: "Does the photo match with the identity documents?",
  },
  {
    key: "currentAddressVerification",
    label: "Current Address Verification",
    type: "boolean",
    weight: 130,
    question: "Is the candidate's current address verified?",
  },
  {
    key: "emailVerification",
    label: "Email Verification",
    type: "boolean",
    weight: 120,
    question: "Is the candidate's email address verified?",
  },
  {
    key: "phoneVerification",
    label: "Phone Number Verification",
    type: "boolean",
    weight: 120,
    question: "Is the candidate's phone number verified?",
  },

  // -----------------------------------
  // 2. COMPLETE BACKGROUND VERIFICATION
  // -----------------------------------
  {
    key: "criminalRecordCheck",
    label: "Criminal Record Check",
    type: "boolean",
    weight: 250,
    question: "Does the candidate have a clean criminal record?",
  },
  {
    key: "cibilCheck",
    label: "CIBIL / Credit Score Check",
    type: "number",
    weight: 280,
    validation: { min: 300, max: 900 },
    question: "What is the candidate's CIBIL score?",
  },
  {
    key: "epfoHistory",
    label: "EPFO Contribution History Verification",
    type: "boolean",
    weight: 240,
    question: "Is the candidate's EPFO record verified?",
  },
  {
    key: "permanentAddressVerification",
    label: "Permanent Address Verification",
    type: "boolean",
    weight: 200,
    question: "Is the candidate's permanent address verified?",
  },
  {
    key: "previousEmployerVerification",
    label: "Previous Employer Verification",
    type: "number",
    weight: 220,
    validation: { min: 0, max: 10 },
    question: "How many past employers have been successfully verified?",
  },
  {
    key: "referenceCheck",
    label: "Reference Checks Completed",
    type: "number",
    weight: 200,
    validation: { min: 0, max: 5 },
    question: "How many professional references are verified?",
  },
  {
    key: "courtCases",
    label: "Pending Court Cases",
    type: "number",
    weight: 300,
    validation: { min: 0, max: 5 },
    question: "How many pending court cases are linked to the candidate?",
  },
  {
    key: "financialFraudCheck",
    label: "Financial Fraud Check",
    type: "boolean",
    weight: 250,
    question: "Is the candidate free from any financial fraud allegations?",
  },

  // -----------------------------------
  // 3. EMPLOYMENT TENURE STABILITY
  // -----------------------------------
  {
    key: "averageTenure",
    label: "Average Tenure Per Job (Years)",
    type: "number",
    weight: 350,
    validation: { min: 0, max: 10 },
    question: "What is the candidate's average tenure per job?",
  },
  {
    key: "jobHopCount",
    label: "Number of Jobs Per Year",
    type: "number",
    weight: 380,
    validation: { min: 0, max: 5 },
    question: "On average, how many jobs does the candidate switch per year?",
  },
  {
    key: "longestSingleTenure",
    label: "Longest Single Tenure",
    type: "number",
    weight: 300,
    validation: { min: 0, max: 15 },
    question: "What is the longest tenure the candidate spent with one employer?",
  },
  {
    key: "continuousEmployment",
    label: "Continuous Employment History",
    type: "boolean",
    weight: 320,
    question: "Does the candidate have continuous employment without large gaps?",
  },
  {
    key: "employmentGapMonths",
    label: "Employment Gaps (Months)",
    type: "number",
    weight: 310,
    validation: { min: 0, max: 24 },
    question: "What is the longest gap between two jobs?",
  },
  {
    key: "lastThreeJobsStability",
    label: "Stability in Last 3 Jobs",
    type: "number",
    weight: 340,
    validation: { min: 0, max: 3 },
    question: "How many of the last three jobs had tenure >1 year?",
  },
  {
    key: "promotionHistory",
    label: "Promotion History",
    type: "number",
    weight: 360,
    validation: { min: 0, max: 10 },
    question: "How many promotions did the candidate receive in past roles?",
  },

  // -----------------------------------
  // 4. JOINING & EXIT BEHAVIOUR
  // -----------------------------------
  {
    key: "noticePeriodServed",
    label: "Notice Period Served",
    type: "boolean",
    weight: 420,
    question: "Did the candidate serve the full notice period?",
  },
  {
    key: "abscondingRecord",
    label: "Absconding Record",
    type: "boolean",
    weight: 480,
    question: "Does the candidate have any past absconding cases?",
  },
  {
    key: "properHandover",
    label: "Proper Handover Completion",
    type: "boolean",
    weight: 440,
    question: "Did the candidate provide a proper handover before exit?",
  },
  {
    key: "disputesAtExit",
    label: "Disputes With HR or Management",
    type: "boolean",
    weight: 460,
    question: "Were there any disputes with HR or management during exit?",
  },
  {
    key: "exitDocumentation",
    label: "Exit Documentation Provided",
    type: "boolean",
    weight: 430,
    question: "Was all exit documentation provided and verified?",
  },
  {
    key: "joiningPunctuality",
    label: "Joining Punctuality",
    type: "boolean",
    weight: 410,
    question: "Did the candidate join on the agreed start date?",
  },
  {
    key: "resignationNoticeGiven",
    label: "Resignation Notice Given",
    type: "boolean",
    weight: 400,
    question: "Did the candidate provide proper resignation notice?",
  },
  {
    key: "rehireEligibility",
    label: "Rehire Eligibility",
    type: "boolean",
    weight: 450,
    question: "Is the candidate eligible for rehire according to past employers?",
  },
];




// according to new general classification 

 [
  // EMPLOYMENT TENURE STABILITY (300–400)
  {
    key: "totalExperienceYears",
    label: "Total Professional Experience (Years)",
    type: "number",
    weight: 360,
    question: "What is the candidate's total professional experience (in years)?",
    validation: { min: 0, max: 50 }
  },
  {
    key: "averageTenureYears",
    label: "Average Tenure Per Employer (Years)",
    type: "number",
    weight: 340,
    question: "What is the candidate's average tenure per employer (in years)?",
    validation: { min: 0, max: 15 }
  },
  {
    key: "lastEmployerTenureYears",
    label: "Tenure at Last Employer (Years)",
    type: "number",
    weight: 370,
    question: "How many years did the candidate work at their last employer?",
    validation: { min: 0, max: 30 }
  },
  {
    key: "jobsInLast5Years",
    label: "Number of Jobs Held in Last 5 Years",
    type: "number",
    weight: 350,
    question: "How many distinct jobs has the candidate held in the last 5 years?",
    validation: { min: 0, max: 10 }
  },
  {
    key: "longestSingleTenureYears",
    label: "Longest Single Employer Tenure (Years)",
    type: "number",
    weight: 330,
    question: "What is the candidate's longest continuous tenure with a single employer (years)?",
    validation: { min: 0, max: 30 }
  },
  {
    key: "employmentGapsMonths",
    label: "Largest Employment Gap (Months)",
    type: "number",
    weight: 320,
    question: "What is the longest gap between two jobs as listed on the CV (in months)?",
    validation: { min: 0, max: 60 }
  },
  {
    key: "promotionsCount",
    label: "Number of Promotions (listed on CV)",
    type: "number",
    weight: 380,
    question: "How many promotions are listed in the candidate's CV/employment history?",
    validation: { min: 0, max: 15 }
  },
  {
    key: "contractRolesCount",
    label: "Number of Contract / Temporary Roles",
    type: "number",
    weight: 305,
    question: "How many contract, temporary or freelance roles are listed on the CV?",
    validation: { min: 0, max: 20 }
  },

  // JOINING & EXIT BEHAVIOUR (400–500)

  {
    key: "currentNoticePeriodWeeks",
    label: "Current Notice Period (Weeks)",
    type: "number",
    weight: 420,
    question: "What is the candidate's current notice period (in weeks)?",
    validation: { min: 0, max: 52 }
  },
  {
    key: "servedFullNoticeLastExit",
    label: "Served Full Notice Period at Last Exit",
    type: "boolean",
    weight: 450,
    question: "Did the candidate serve the full notice period at their last exit?"
  },
  {
    key: "abscondingRecord",
    label: "Any Past Absconding Record",
    type: "boolean",
    weight: 480,
    question: "Does the candidate have any past record of absconding or leaving without formal notice?"
  },
  {
    key: "rehireEligibilityFromLastEmployer",
    label: "Marked Eligible for Rehire by Last Employer",
    type: "boolean",
    weight: 460,
    question: "Is the candidate indicated as eligible for rehire by their previous employer (if known)?"
  },
  {
    key: "properHandoverDocumented",
    label: "Handover / Knowledge Transfer Documented at Exit",
    type: "boolean",
    weight: 440,
    question: "Was a formal handover/knowledge transfer documented and provided at the candidate's last exit?"
  },
  {
    key: "exitDisputesCount",
    label: "Number of Formal Exit Disputes / Grievances",
    type: "number",
    weight: 470,
    question: "How many formal exit disputes or HR grievances are recorded or reported for the candidate?",
    validation: { min: 0, max: 10 }
  },
  {
    key: "exitType",
    label: "Exit Type (1=Voluntary,2=Mutual,3=Terminated)",
    type: "number",
    weight: 430,
    question: "What was the type of exit from the last employer? (1=Voluntary resignation, 2=Mutual separation, 3=Termination)",
    validation: { min: 1, max: 3 }
  },
  {
    key: "joinedOnAgreedDate",
    label: "Joined On Agreed Start Date (for last joining)",
    type: "boolean",
    weight: 410,
    question: "Did the candidate join their last role on the agreed/advertised start date?"
  }
];


// total parameter = 16 for joining and tenure.