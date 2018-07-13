import _ from "lodash";
import questionList from "../utils/QuestionList.json";

export function PushAnswer(questionid, answer) {
  const question = _.find(questionList.questions, { id: questionid });
  let finalQuestion = { ...question, userAnswer: answer };
  if (!answer) {
    finalQuestion = { ...finalQuestion, isCorrect: false };
  } else if (question.CorrectAnswer === answer) {
    finalQuestion = { ...finalQuestion, isCorrect: true };
  } else {
    finalQuestion = { ...finalQuestion, isCorrect: false };
  }
  return {
    type: "PUSH_ANSWER",
    payload: {
      result: finalQuestion
    }
  };
}
