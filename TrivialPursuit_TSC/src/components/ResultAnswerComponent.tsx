import React from "react";
import Question from "../models/question";

interface ResultAnswerProp {
  questionProp: Question;
}

function ResultAnswerComponent({ questionProp }: ResultAnswerProp) {
  console.log(questionProp.answer_given);
  return (
    <div className="ResultComponent">
      <p dangerouslySetInnerHTML={{ __html: questionProp.question }} />
      <p dangerouslySetInnerHTML={{ __html: questionProp.correct_answer }} />
      <span>
        <p>Answer given:</p>
        <p dangerouslySetInnerHTML={{ __html: questionProp.answer_given }} />
        {questionProp.correct_answer === questionProp.answer_given ? (
          <p>Correct!</p>
        ) : (
          <p>Incorrect!</p>
        )}
      </span>
    </div>
  );
}

export default ResultAnswerComponent;
