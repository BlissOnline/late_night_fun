import { QuizTypes } from "./types";

const calculateResult = (answers: QuizTypes.QuizOption[], possibleResults: string[]): string => {
  const scores: { [key: string]: number } = {};
  for (const result of possibleResults) scores[result] = 0;

  answers.forEach(answer => {
    for (const result in answer.points) {
      scores[result] += answer.points[result];
    }
  });

  // Find the result with the highest score
  return Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
};

//example of using in practice 
const answers = [
  { points: { A: 2, B: 1, C: 3 } },
  { points: { A: 3, B: 2, C: 1 } }
];
const possibleResults = ["A", "B", "C"];

const bestResult = calculateResult(answers, possibleResults);
console.log(bestResult); // Output might be "A" or "C", depending on scores

