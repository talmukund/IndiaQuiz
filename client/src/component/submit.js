import React from "react";
import { Pie } from "react-chartjs-2";
import _ from "lodash";

export default function(props) {
  if (props.answer) {
    const correctAnswer = _.filter(props.answer, { isCorrect: true });
    const notAttempted = _.filter(props.answer, { userAnswer: undefined });
    const incorrectAnswer = _.filter(props.answer, function(index) {
      return index.userAnswer && !index.isCorrect;
    });

    const data = {
      labels: ["Correct", "Incorrect", "Not Attempted"],
      datasets: [
        {
          data: [
            correctAnswer.length,
            incorrectAnswer.length,
            notAttempted.length
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };
    return (
      <div>
        <h2>India Quiz Result</h2>
        <Pie data={data} />
      </div>
    );
  } else {
    return <div>No question answered</div>;
  }
}
