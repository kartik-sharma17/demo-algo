// this will be the array of severity which will help us to find the weightage of key points
type severityType = "high" | "veryLow" | "low" | "belowAverage" | "moderate" | "aboveModerate" | "high" | "veryHigh" | "elite";

type statusType = "positive" | "negative";

interface feedbackParamsProps {
  key: string;
  severity: severityType;
  status: statusType;
  description: string
}

export const feedbackParamsNegative: feedbackParamsProps[] = [
  {
    key: "ghostingAfterOffer",
    severity: "veryHigh",
    status: "negative",
    description: "Candidate accepts a job offer but then stops responding and doesn’t join."
  },
  {
    key: "jobAbandonment",
    severity: "veryHigh",
    status: "negative",
    description: "Employee leaves the job suddenly without any notice."
  },
  {
    key: "notServingNoticePeriod",
    severity: "veryHigh",
    status: "negative",
    description: "Resigning but not working through the required notice period."
  },
  {
    key: "insubordination",
    severity: "high",
    status: "negative",
    description: "Willful refusal to obey legitimate work orders or blatant disrespect toward supervisors."
  },
  {
    key: "workplaceBullyingHarassment",
    severity: "high",
    status: "negative",
    description: "Repeated rude or disrespectful behavior toward coworkers."
  },
  {
    key: "threatsOrIntimidation",
    severity: "high",
    status: "negative",
    description: "Saying or writing threats to hurt coworkers or the company."
  },
  {
    key: "unprofessionalConduct",
    severity: "moderate",
    status: "negative",
    description: "Persistent unprofessional behavior at work."
  },
  {
    key: "conflictOfInterest",
    severity: "high",
    status: "negative",
    description: "Doing activities or having relationships that conflict with the company’s interests without disclosure."
  },
  {
    key: "moonlightingForCompetitor",
    severity: "high",
    status: "negative",
    description: "Taking a second job with a direct competitor without employer’s knowledge."
  },
  {
    key: "abuseOfAuthority",
    severity: "high",
    status: "negative",
    description: "Misusing one’s position or authority for personal gain or to mistreat others."
  },
  {
    key: "acceptingBribesKickbacks",
    severity: "veryHigh",
    status: "negative",
    description: "Soliciting or accepting bribes or kickbacks from clients/suppliers."
  },
  {
    key: "poshViolation",
    severity: "veryHigh",
    status: "negative",
    description: "Any form of sexual harassment at the workplace."
  },
  {
    key: "discriminationHateSpeech",
    severity: "veryHigh",
    status: "negative",
    description: "Demonstrating bias or using slurs against someone’s protected characteristics."
  },
  {
    key: "workplaceViolence",
    severity: "veryHigh",
    status: "negative",
    description: "Any physical violence or assault at work."
  },
  {
    key: "substanceAbuseOnDuty",
    severity: "veryHigh",
    status: "negative",
    description: "Being intoxicated or using illegal drugs during work hours."
  },
  {
    key: "criminalConductConviction",
    severity: "veryHigh",
    status: "negative",
    description: "Engaging in criminal activity or being convicted of a serious crime."
  },
  {
    key: "dataPrivacyViolation",
    severity: "veryHigh",
    status: "negative",
    description: "Sharing or mishandling personal or sensitive data."
  },
  {
    key: "insiderTradingInsiderDataMisuse",
    severity: "veryHigh",
    status: "negative",
    description: "Using inside company information for unfair gain."
  },
  {
    key: "regulatoryComplianceBreach",
    severity: "veryHigh",
    status: "negative",
    description: "Breaking laws or rules the company must follow."
  },
  {
    key: "poorPerformanceIncompetence",
    severity: "moderate",
    status: "negative",
    description: "Not doing the job well or lacking needed skills."
  },
  {
    key: "grossNegligence",
    severity: "veryHigh",
    status: "negative",
    description: "Careless actions that cause serious problems."
  },
  {
    key: "attendanceIssues",
    severity: "moderate",
    status: "negative",
    description: "Often being absent or late to work."
  },
  {
    key: "financialFraudEmbezzlement",
    severity: "veryHigh",
    status: "negative",
    description: "Stealing company money or misusing funds."
  },
  {
    key: "theftCompanyPropertyOrData",
    severity: "veryHigh",
    status: "negative",
    description: "Stealing company property or confidential data."
  },
  {
    key: "expenseFraud",
    severity: "veryHigh",
    status: "negative",
    description: "Making false expense claims for money."
  },
  {
    key: "timesheetFraud",
    severity: "high",
    status: "negative",
    description: "Lying about work hours to get paid more."
  },
  {
    key: "fakeDocumentation",
    severity: "veryHigh",
    status: "negative",
    description: "Using fake documents for personal benefit."
  },
  {
    key: "forgedDocumentsOnTheJob",
    severity: "veryHigh",
    status: "negative",
    description: "Creating or using fake documents at work."
  },
  {
    key: "identityImpersonationFraud",
    severity: "veryHigh",
    status: "negative",
    description: "Pretending to be someone else for fraud."
  },
  {
    key: "sabotageMaliciousDamage",
    severity: "veryHigh",
    status: "negative",
    description: "Damaging company property on purpose."
  },
  {
    key: "breachOfConfidentialityNDA",
    severity: "veryHigh",
    status: "negative",
    description: "Sharing confidential company info without approval."
  },
  {
    key: "itSecurityPolicyViolation",
    severity: "high",
    status: "negative",
    description: "Breaking IT security rules or company policies."
  },
  {
    key: "socialMediaMisconduct",
    severity: "high",
    status: "negative",
    description: "Posting harmful or inappropriate content online about company."
  },
  {
    key: "misuseOfCompanyResources",
    severity: "high",
    status: "negative",
    description: "Using company tools or assets for personal gain."
  },
  {
    key: "repeatedDisciplinaryInfractions",
    severity: "high",
    status: "negative",
    description: "Breaking rules repeatedly after warnings."
  },
  {
    key: "poorGigWorkerRating",
    severity: "moderate",
    status: "negative",
    description: "Getting low ratings from clients or customers."
  },
  {
    key: "highCancellationNoShowRate",
    severity: "moderate",
    status: "negative",
    description: "Canceling jobs or not showing up too often."
  },
  {
    key: "platformPolicyViolations",
    severity: "moderate",
    status: "negative",
    description: "Breaking rules of the gig platform."
  },
  {
    key: "fraudulentActivitiesInGigs",
    severity: "high",
    status: "negative",
    description: "Cheating or doing fraud in gig work."
  },
  {
    key: "unsafePracticesGigFieldWork",
    severity: "high",
    status: "negative",
    description: "Working in unsafe ways that risk harm."
  },
  {
    key: "lossOfLicenseCertification",
    severity: "high",
    status: "negative",
    description: "Losing required license or certification for job."
  },
  {
    key: "nepotismFavoritism",
    severity: "moderate",
    status: "negative",
    description: "Giving unfair advantage to friends or family."
  },
  {
    key: "offDutyMisconduct",
    severity: "moderate",
    status: "negative",
    description: "Bad behavior outside work that hurts company image."
  },
  {
    key: "sleepingOnTheJob",
    severity: "low",
    status: "negative",
    description: "Sleeping during work hours."
  },
  {
    key: "plagiarismIntellectualPropertyTheft",
    severity: "high",
    status: "negative",
    description: "Copying others’ work or stealing ideas."
  },
  {
    key: "retaliationAgainstComplainants",
    severity: "high",
    status: "negative",
    description: "Punishing or mistreating those who complained."
  },
  {
    key: "illicitBehaviorOnPremises",
    severity: "high",
    status: "negative",
    description: "Doing illegal or inappropriate acts at workplace."
  },
  {
    key: "behaviour",
    severity: "moderate",
    status: "negative",
    description: "General attitude and conduct at work."
  },
  {
    key: "punctuality",
    severity: "moderate",
    status: "negative",
    description: "Being late for work, meetings, or tasks."
  },
  {
    key: "lackOfDedication",
    severity: "moderate",
    status: "negative",
    description: "Not showing commitment or interest in work."
  },
  {
    key: "inconsistency",
    severity: "moderate",
    status: "negative",
    description: "Work results or efforts are not stable or reliable."
  },
  {
    key: "notFollowingRulesAndRegulations",
    severity: "high",
    status: "negative",
    description: "Ignoring company policies or instructions."
  },
  {
    key: "lackOfRequiredSkills",
    severity: "moderate",
    status: "negative",
    description: "Missing the abilities needed for the job."
  },
  {
    key: "aggressiveBehaviour",
    severity: "high",
    status: "negative",
    description: "Acting in a rude, hostile, or overly forceful way."
  },
  {
    key: "crossingDeadlines",
    severity: "moderate",
    status: "negative",
    description: "Failing to finish work within the given time."
  },
  {
    key: "poorQualityOfWork",
    severity: "moderate",
    status: "negative",
    description: "Delivering incomplete, error-prone, or low-standard work."
  },
  {
    key: "lackOfTeamwork",
    severity: "moderate",
    status: "negative",
    description: "Not cooperating or collaborating with others."
  },
  {
    key: "excessiveBreaks",
    severity: "low",
    status: "negative",
    description: "Taking too many breaks during work hours."
  },
  {
    key: "procrastination",
    severity: "moderate",
    status: "negative",
    description: "Delaying important tasks unnecessarily."
  },
  {
    key: "overdependenceOnOthers",
    severity: "moderate",
    status: "negative",
    description: "Relying too much on coworkers instead of doing own work."
  },
  {
    key: "negativeAttitude",
    severity: "moderate",
    status: "negative",
    description: "Consistently showing a pessimistic or discouraging outlook."
  },
  {
    key: "poorCommunication",
    severity: "moderate",
    status: "negative",
    description: "Failing to clearly share or understand information."
  },
  {
    key: "gossiping",
    severity: "low",
    status: "negative",
    description: "Spreading rumors or unnecessary personal information."
  },
  {
    key: "blamingOthers",
    severity: "moderate",
    status: "negative",
    description: "Not taking responsibility and blaming teammates."
  },
  {
    key: "excessivePersonalCallsChats",
    severity: "low",
    status: "negative",
    description: "Spending too much time on personal calls or social media."
  },
  {
    key: "ignoringFeedback",
    severity: "moderate",
    status: "negative",
    description: "Not accepting or applying constructive criticism."
  },
  {
    key: "failureToDocumentWork",
    severity: "moderate",
    status: "negative",
    description: "Not maintaining proper records or updates of work done."
  },
  {
    key: "unreliableCommitments",
    severity: "moderate",
    status: "negative",
    description: "Making promises at work but not keeping them."
  },
  {
    key: "lackOfInitiative",
    severity: "moderate",
    status: "negative",
    description: "Not taking action unless specifically told to."
  },
  {
    key: "failureToLearn",
    severity: "moderate",
    status: "negative",
    description: "Not improving skills or adapting to new tools."
  },
  {
    key: "resistanceToChange",
    severity: "moderate",
    status: "negative",
    description: "Avoiding or rejecting changes in processes or technology."
  },
  {
    key: "overconfidence",
    severity: "low",
    status: "negative",
    description: "Acting arrogant and ignoring team inputs."
  },
  {
    key: "micromanagement",
    severity: "moderate",
    status: "negative",
    description: "Overcontrolling others instead of trusting them."
  },
  {
    key: "workplacePolitics",
    severity: "moderate",
    status: "negative",
    description: "Manipulating situations for personal benefit."
  },
  {
    key: "overpromising",
    severity: "moderate",
    status: "negative",
    description: "Committing to more than what can realistically be delivered."
  },
  {
    key: "laziness",
    severity: "moderate",
    status: "negative",
    description: "Showing little effort to complete work."
  },
  {
    key: "unnecessaryConflicts",
    severity: "moderate",
    status: "negative",
    description: "Picking fights or arguments over small matters."
  },
  {
    key: "ignoringDeadlines",
    severity: "moderate",
    status: "negative",
    description: "Not paying attention to timeline commitments."
  },
  {
    key: "lackOfOwnership",
    severity: "moderate",
    status: "negative",
    description: "Avoiding accountability for tasks assigned."
  },
  {
    key: "unorganizedWork",
    severity: "moderate",
    status: "negative",
    description: "Not maintaining proper structure in tasks or documents."
  },
  {
    key: "unclearReporting",
    severity: "moderate",
    status: "negative",
    description: "Not providing proper updates to managers."
  },
  {
    key: "poorListeningSkills",
    severity: "moderate",
    status: "negative",
    description: "Not paying attention to instructions or team discussions."
  },
  {
    key: "carelessness",
    severity: "moderate",
    status: "negative",
    description: "Making frequent avoidable mistakes."
  },
  {
    key: "lackOfCreativity",
    severity: "low",
    status: "negative",
    description: "Not bringing new ideas or solutions."
  },
  {
    key: "excessiveComplaining",
    severity: "low",
    status: "negative",
    description: "Constantly finding faults without giving solutions."
  },
  {
    key: "neglectingSafetyRules",
    severity: "high",
    status: "negative",
    description: "Ignoring basic safety practices at work."
  },
  {
    key: "overuseOfSickLeaves",
    severity: "moderate",
    status: "negative",
    description: "Taking unnecessary sick leaves frequently."
  },
  {
    key: "unethicalBehavior",
    severity: "veryHigh",
    status: "negative",
    description: "Acting in ways that go against moral values."
  },
  {
    key: "failureToCollaborate",
    severity: "moderate",
    status: "negative",
    description: "Not participating effectively in group efforts."
  },
  {
    key: "overtalkingInMeetings",
    severity: "low",
    status: "negative",
    description: "Speaking too much and wasting time in discussions."
  },
  {
    key: "unclearEmailsReports",
    severity: "moderate",
    status: "negative",
    description: "Writing messages that confuse others instead of helping."
  },
  {
    key: "neglectingCustomers",
    severity: "high",
    status: "negative",
    description: "Not paying attention to customer needs or complaints."
  },
  {
    key: "improperDressCode",
    severity: "low",
    status: "negative",
    description: "Dressing inappropriately at workplace."
  },
  {
    key: "lateSubmissions",
    severity: "moderate",
    status: "negative",
    description: "Handing in tasks after the required deadline."
  },
  {
    key: "lackOfPlanning",
    severity: "moderate",
    status: "negative",
    description: "Not preparing before starting tasks."
  },
  {
    key: "skippingTraining",
    severity: "moderate",
    status: "negative",
    description: "Not attending required learning sessions."
  },
  {
    key: "excessiveErrors",
    severity: "moderate",
    status: "negative",
    description: "Making too many mistakes repeatedly."
  },
  {
    key: "neglectingTeamGoals",
    severity: "moderate",
    status: "negative",
    description: "Focusing only on self and ignoring team objectives."
  },
  {
    key: "tooManyPersonalTasksAtWork",
    severity: "low",
    status: "negative",
    description: "Handling personal matters during office hours."
  },
  {
    key: "hidingMistakes",
    severity: "moderate",
    status: "negative",
    description: "Not admitting errors and trying to cover them up."
  },
  {
    key: "failureToUpdateSkills",
    severity: "moderate",
    status: "negative",
    description: "Not learning new things needed for the role."
  },
  {
    key: "overcomplicatingTasks",
    severity: "veryHigh",
    status: "negative",
    description: "Making simple tasks unnecessarily complex."
  },
  {
    key: "neglectingDocumentation",
    severity: "veryHigh",
    status: "negative",
    description: "Not keeping records that are important for others."
  },
  {
    key: "overuseOfJargon",
    severity: "high",
    status: "negative",
    description: "Using unnecessary technical words that confuse others."
  },
  {
    key: "ignoringMeetings",
    severity: "moderate",
    status: "negative",
    description: "Not attending or contributing to important discussions."
  },
  {
    key: "lackOfTransparency",
    severity: "moderate",
    status: "negative",
    description: "Not being open about progress or problems."
  },
  {
    key: "carelessEmailing",
    severity: "low",
    status: "negative",
    description: "Sending emails without checking tone, grammar, or correctness."
  },
  {
    key: "unhelpfulAttitude",
    severity: "low",
    status: "negative",
    description: "Not assisting colleagues when needed."
  }
];

export const feedbackParamsPositive: feedbackParamsProps[] = [
  // veryLow
  {
    key: "perfectAttendancePunctuality",
    severity: "veryLow",
    status: "positive",
    description: "Always on time and present at work."
  },
  {
    key: "languagesKnown",
    severity: "veryLow",
    status: "positive",
    description: "Languages candidate can speak or write."
  },
  {
    key: "internationalEducationExposure",
    severity: "veryLow",
    status: "positive",
    description: "Education experience in another country."
  },
  {
    key: "minorOnlineCoursesCompleted",
    severity: "veryLow",
    status: "positive",
    description: "Completed minor online learning courses."
  },
  {
    key: "basicTechnicalToolsMastery",
    severity: "veryLow",
    status: "positive",
    description: "Has basic knowledge of technical tools."
  },

  // low
  {
    key: "employeeOfTheMonthQuarter",
    severity: "low",
    status: "positive",
    description: "Recognized as the best employee in a specific period."
  },
  {
    key: "spotAwardForExtraEffort",
    severity: "low",
    status: "positive",
    description: "Rewarded for going above and beyond in a task."
  },
  {
    key: "advancedTrainingCompleted",
    severity: "low",
    status: "positive",
    description: "Completed advanced training successfully."
  },
  {
    key: "mentorshipProvided",
    severity: "low",
    status: "positive",
    description: "Provided guidance or helped others learn."
  },
  {
    key: "minorCertificationsCount",
    severity: "low",
    status: "positive",
    description: "Completed small but relevant certifications."
  },

  {
    key: "extracurricularActivities",
    severity: "low",
    status: "positive",
    description: "Participated in extracurricular activities."
  },
  {
    key: "volunteeringWork",
    severity: "low",
    status: "positive",
    description: "Participated in volunteering activities."
  },

  // belowAverage
  {
    key: "teamPlayerAward",
    severity: "belowAverage",
    status: "positive",
    description: "Helped teammates and collaborated effectively."
  },
  {
    key: "communicationExcellence",
    severity: "belowAverage",
    status: "positive",
    description: "Spoke and wrote clearly and effectively."
  },
  {
    key: "conflictResolutionExcellence",
    severity: "belowAverage",
    status: "positive",
    description: "Resolved conflicts positively and productively."
  },
  {
    key: "highCustomerSatisfactionScores",
    severity: "belowAverage",
    status: "positive",
    description: "Received very positive feedback from customers."
  },
  {
    key: "peerAppreciationNomination",
    severity: "belowAverage",
    status: "positive",
    description: "Nominated by peers for good work."
  },
  {
    key: "teamChoiceAward",
    severity: "belowAverage",
    status: "positive",
    description: "Chosen by the team as the best contributor."
  },
  {
    key: "publicSpeaking",
    severity: "belowAverage",
    status: "positive",
    description: "Demonstrated strong public speaking skills."
  },
  {
    key: "eventOrganization",
    severity: "belowAverage",
    status: "positive",
    description: "Organized company or public events effectively."
  },

  // moderate
  {
    key: "exceededPerformanceTargets",
    severity: "moderate",
    status: "positive",
    description: "Achieved more than expected goals."
  },
  {
    key: "outstandingProjectDelivery",
    severity: "moderate",
    status: "positive",
    description: "Completed a project with excellent results."
  },
  {
    key: "processImprovementImplementation",
    severity: "moderate",
    status: "positive",
    description: "Improved work processes for efficiency."
  },
  {
    key: "technicalExcellence",
    severity: "moderate",
    status: "positive",
    description: "Demonstrated strong technical skills."
  },
  {
    key: "professionalCertification",
    severity: "moderate",
    status: "positive",
    description: "Earned a recognized professional certification."
  },
  {
    key: "higherEducationQualification",
    severity: "moderate",
    status: "positive",
    description: "Achieved a new academic degree."
  },
  {
    key: "multipleDegrees",
    severity: "moderate",
    status: "positive",
    description: "Holds more than one academic degree."
  },
  {
    key: "onlineCoursesCompleted",
    severity: "moderate",
    status: "positive",
    description: "Completed relevant online courses."
  },
  {
    key: "researchPublications",
    severity: "moderate",
    status: "positive",
    description: "Published research papers."
  },
  {
    key: "conferenceSpeaker",
    severity: "moderate",
    status: "positive",
    description: "Presented at professional conferences."
  },
  {
    key: "extracurricularAchievements",
    severity: "moderate",
    status: "positive",
    description: "Recognized for achievements in extracurricular activities."
  },
  {
    key: "highestProductivityAchievement",
    severity: "aboveModerate",
    status: "positive",
    description: "Produced the most output effectively."
  },
  {
    key: "costSavingsInitiative",
    severity: "aboveModerate",
    status: "positive",
    description: "Helped the company save money through initiatives."
  },
  {
    key: "multiSkilledProficiency",
    severity: "aboveModerate",
    status: "positive",
    description: "Skilled in multiple areas of work."
  },
  {
    key: "proactiveProblemSolver",
    severity: "aboveModerate",
    status: "positive",
    description: "Identified and solved issues before they grew."
  },
  {
    key: "innovationAward",
    severity: "aboveModerate",
    status: "positive",
    description: "Created a new and useful idea or solution."
  },
  {
    key: "projectLeadershipSuccess",
    severity: "aboveModerate",
    status: "positive",
    description: "Successfully led important projects."
  },
  {
    key: "internalTrainerExcellence",
    severity: "aboveModerate",
    status: "positive",
    description: "Trained others effectively within the company."
  },
  {
    key: "complianceChampion",
    severity: "aboveModerate",
    status: "positive",
    description: "Ensured rules and policies were followed."
  },

  // high
  {
    key: "valuesCultureChampion",
    severity: "high",
    status: "positive",
    description: "Lived and promoted company values."
  },
  {
    key: "mentorshipKnowledgeSharing",
    severity: "high",
    status: "positive",
    description: "Helped others learn and grow through mentorship."
  },
  {
    key: "safetyChampionAward",
    severity: "high",
    status: "positive",
    description: "Promoted and maintained workplace safety."
  },
  {
    key: "ethicsIntegrityAward",
    severity: "high",
    status: "positive",
    description: "Followed high moral values and honesty."
  },
  {
    key: "adaptabilityResilience",
    severity: "high",
    status: "positive",
    description: "Adjusted well to changes and challenges."
  },
  {
    key: "proactiveProblemSolverImpact",
    severity: "high",
    status: "positive",
    description: "Solved significant issues proactively."
  },
  {
    key: "highPeerFeedbackScore",
    severity: "high",
    status: "positive",
    description: "Received high ratings and feedback from colleagues."
  },
  {
    key: "highCustomerRating",
    severity: "high",
    status: "positive",
    description: "Received excellent ratings from customers."
  },

  // veryHigh
  {
    key: "qualityExcellenceAward",
    severity: "veryHigh",
    status: "positive",
    description: "Delivered top-quality work with no errors."
  },
  {
    key: "employeeOfTheYear",
    severity: "veryHigh",
    status: "positive",
    description: "Recognized as the best employee for the whole year."
  },
  {
    key: "hackathonContestWinner",
    severity: "veryHigh",
    status: "positive",
    description: "Won in a company or industry competition."
  },
  {
    key: "bestManagerAward",
    severity: "veryHigh",
    status: "positive",
    description: "Recognized as best manager."
  },
  {
    key: "crisisHeroismRecognition",
    severity: "veryHigh",
    status: "positive",
    description: "Helped during emergencies or crises."
  },
  {
    key: "longServiceAward",
    severity: "veryHigh",
    status: "positive",
    description: "Honored for many years of dedicated service."
  },
  {
    key: "clientAppreciationLetter",
    severity: "veryHigh",
    status: "positive",
    description: "Received a thank-you letter from a client."
  },
  {
    key: "publicCommendation",
    severity: "veryHigh",
    status: "positive",
    description: "Praised publicly by company or industry leaders."
  },
  {
    key: "industryExternalAward",
    severity: "veryHigh",
    status: "positive",
    description: "Recognized by an external industry body."
  },
  {
    key: "communityCSRContribution",
    severity: "veryHigh",
    status: "positive",
    description: "Contributed significantly to social or community projects."
  },
  {
    key: "promotionToTeamLeadManager",
    severity: "veryHigh",
    status: "positive",
    description: "Promoted to lead a team or manage a department."
  },
  {
    key: "patentPublicationAchieved",
    severity: "elite",
    status: "positive",
    description: "Published work or received a patent."
  },
  {
    key: "startupFounder",
    severity: "elite",
    status: "positive",
    description: "Founded a startup company successfully."
  },
  {
    key: "internationalAssignment",
    severity: "elite",
    status: "positive",
    description: "Worked abroad on company projects."
  },
  {
    key: "innovationRecognition",
    severity: "elite",
    status: "positive",
    description: "Received recognition for innovation at industry level."
  },
  {
    key: "successfulProductLaunches",
    severity: "elite",
    status: "positive",
    description: "Successfully launched a product with significant impact."
  },
  {
    key: "revenueCostSavingImpact",
    severity: "elite",
    status: "positive",
    description: "Created measurable revenue growth or cost savings."
  },
  {
    key: "promotionToSeniorLeadership",
    severity: "elite",
    status: "positive",
    description: "Promoted to a senior leadership role."
  },
  {
    key: "companyBrandValueRecognition",
    severity: "elite",
    status: "positive",
    description: "Worked in a company with high brand value or reputation."
  },
  {
    key: "workedInFAANG",
    severity: "elite",
    status: "positive",
    description: "Experience working in a FAANG company."
  },
  {
    key: "workedInBig4Consulting",
    severity: "elite",
    status: "positive",
    description: "Experience working in a Big 4 consulting firm."
  },
  {
    key: "workedInFortune500",
    severity: "elite",
    status: "positive",
    description: "Experience working in a Fortune 500 company."
  },
  {
    key: "workedInUnicornStartup",
    severity: "elite",
    status: "positive",
    description: "Experience working in a unicorn startup."
  },
  {
    key: "workedInGovtPSU",
    severity: "elite",
    status: "positive",
    description: "Experience working in a government PSU."
  },
  {
    key: "experienceAbroad",
    severity: "elite",
    status: "positive",
    description: "Work experience outside home country."
  },
  {
    key: "crossDepartmentExperience",
    severity: "elite",
    status: "positive",
    description: "Experience working across multiple departments."
  },
  {
    key: "internationalRoleProgression",
    severity: "elite",
    status: "positive",
    description: "Progressed in international roles during career."
  },
  {
    key: "switchNonCoreToCoreRole",
    severity: "elite",
    status: "positive",
    description: "Switched from a non-core to core relevant role."
  },
  {
    key: "clarityInCareerPath",
    severity: "elite",
    status: "positive",
    description: "Demonstrated clear and logical career growth path."
  },
  {
    key: "budgetResponsibility",
    severity: "elite",
    status: "positive",
    description: "Managed financial budgets effectively."
  },
  {
    key: "teamSizeManaged",
    severity: "elite",
    status: "positive",
    description: "Managed a large team successfully."
  },
  {
    key: "managementResponsibility",
    severity: "elite",
    status: "positive",
    description: "Handled significant management responsibilities."
  },
  {
    key: "roleLevelProgression",
    severity: "elite",
    status: "positive",
    description: "Demonstrated strong career growth across job levels."
  },
  {
    key: "numberOfPromotions",
    severity: "elite",
    status: "positive",
    description: "Received multiple promotions over career."
  },
  {
    key: "averageTimeToPromotion",
    severity: "elite",
    status: "positive",
    description: "Achieved promotions faster than average."
  },
  {
    key: "fieldOfStudyRelevance",
    severity: "elite",
    status: "positive",
    description: "Field of study is highly relevant to the role."
  },
  {
    key: "highestEducationLevel",
    severity: "elite",
    status: "positive",
    description: "Achieved highest academic degree."
  },
  {
    key: "certificationsCount",
    severity: "elite",
    status: "positive",
    description: "Completed multiple certifications."
  },
  {
    key: "certificationsRelevance",
    severity: "elite",
    status: "positive",
    description: "Certifications are highly relevant to the job."
  },
  {
    key: "researchGateProfile",
    severity: "elite",
    status: "positive",
    description: "Maintains a professional profile on ResearchGate."
  },
  {
    key: "googleScholarCitations",
    severity: "elite",
    status: "positive",
    description: "Number of citations on Google Scholar reflects impact."
  },
  {
    key: "mediumBlogArticles",
    severity: "elite",
    status: "positive",
    description: "Published insightful articles on Medium or personal blog."
  },
  {
    key: "conferenceAttendance",
    severity: "elite",
    status: "positive",
    description: "Actively participates in professional conferences."
  },
  {
    key: "webinarsConducted",
    severity: "elite",
    status: "positive",
    description: "Conducted webinars for knowledge sharing."
  },
  {
    key: "industryForumsParticipation",
    severity: "elite",
    status: "positive",
    description: "Actively participates in industry forums."
  },
  {
    key: "hackathonParticipation",
    severity: "elite",
    status: "positive",
    description: "Participates in hackathons to solve real problems."
  },
  {
    key: "experienceInTargetIndustry",
    severity: "elite",
    status: "positive",
    description: "Has relevant experience in target industry."
  },
  {
    key: "freelanceConsultingExperience",
    severity: "elite",
    status: "positive",
    description: "Worked as freelancer or consultant effectively."
  },
  {
    key: "crmErpKnowledge",
    severity: "elite",
    status: "positive",
    description: "Proficient in CRM or ERP tools."
  },
  {
    key: "cloudPlatformsExperience",
    severity: "elite",
    status: "positive",
    description: "Experienced in cloud platform operations."
  },
  {
    key: "aiMlExposure",
    severity: "elite",
    status: "positive",
    description: "Exposed to AI or ML technologies in work."
  },
  {
    key: "cybersecurityKnowledge",
    severity: "elite",
    status: "positive",
    description: "Knowledgeable in cybersecurity practices."
  },
  {
    key: "foreignLanguageFluency",
    severity: "elite",
    status: "positive",
    description: "Fluent in multiple foreign languages."
  },
  {
    key: "programmingLanguages",
    severity: "elite",
    status: "positive",
    description: "Knows multiple programming languages."
  },
  {
    key: "projectManagementTools",
    severity: "elite",
    status: "positive",
    description: "Proficient in project management tools."
  },
  {
    key: "designToolsKnowledge",
    severity: "elite",
    status: "positive",
    description: "Experienced in using design tools."
  },
  {
    key: "linkedinProfileStrength",
    severity: "elite",
    status: "positive",
    description: "Maintains a strong professional LinkedIn profile."
  },
  {
    key: "githubContributions",
    severity: "elite",
    status: "positive",
    description: "Actively contributes on GitHub repositories."
  },
  {
    key: "attitudeOfPerson",
    severity: "elite",
    status: "positive",
    description: "Exhibits a consistently positive attitude."
  },
  {
    key: "commitmentsTowardsCompanyGoals",
    severity: "elite",
    status: "positive",
    description: "Strongly committed to achieving company objectives."
  }
]

// 123 positive parameters & 107 negative points.