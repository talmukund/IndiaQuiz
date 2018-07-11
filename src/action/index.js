export function PushAnswer(question) {
  return {
    type: "PUSH_ANSWER",
    payload: {
      result: question
    }
  };
}
