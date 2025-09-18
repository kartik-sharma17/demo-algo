//@ts-ignore
import { NlpManager } from "node-nlp";

// 1. Create NLP Manager
const manager = new NlpManager({ languages: ["en"], forceNER: true });

// 2. Train with Example Sentences for Each Indicator
manager.addDocument("en", "He is always punctual and on time", "punctuality");

manager.addDocument(
  "en",
  "She meets all deadlines without delay",
  "punctuality"
);
manager.addDocument(
  "en",
  "He achieved all his goals successfully",
  "performance"
);
manager.addDocument(
  "en",
  "She exceeded the targets consistently",
  "performance"
);
manager.addDocument(
  "en",
  "He mentored new employees in the team",
  "leadership"
);
manager.addDocument("en", "She trained and guided her juniors", "leadership");
manager.addDocument(
  "en",
  "He works well with others and collaborates",
  "teamwork"
);
manager.addDocument("en", "She is a great team player", "teamwork");
manager.addDocument("en", "He came up with innovative solutions", "innovation");
manager.addDocument(
  "en",
  "She introduced new ideas to improve work",
  "innovation"
);
manager.addDocument("en", "He is honest and trustworthy", "integrity");
manager.addDocument("en", "She follows ethics and integrity", "integrity");

// 3. Assign Indicator Scores
const indicatorScores: Record<string, number> = {
  punctuality: 20,
  performance: 30,
  leadership: 25,
  teamwork: 15,
  innovation: 20,
  integrity: 25,
};

// 4. Train Model
export async function trainModel() {
  await manager.train();
  manager.save();
  return manager;
}

// 5. Calculate Score from Feedback
export async function calculateScore(feedback: string) {
  console.log(feedback);
  const manager = await trainModel();
  const result = await manager.process("en", feedback);

  console.log(result);
  console.log(result.nluAnswer.classifications);
  let totalScore: number = 0;
  let matchedIndicators = [];

  for (const intent of result.classifications) {
    if (intent.score > 0.3) {
      // confidence threshold
      const indicator = intent.intent;
      console.log(indicatorScores[indicator]);
      totalScore += indicatorScores[indicator] || 0;
      matchedIndicators.push({
        indicator,
        confidence: intent.score.toFixed(2),
      });
    }
  }

  return { score: totalScore, matchedIndicators };
}
