import React, { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import ResultAnswerComponent from "../components/ResultAnswerComponent";

function ResultsPage() {
  const navigate = useNavigate();
  const questions = useAppSelector((state) => state.questions.questions);
  const correctAnswers = useAppSelector(
    (state) => state.questions.correctAnswers
  );

  useEffect(() => {
    if (correctAnswers.length === 0) {
      navigate("/");
    }
    console.log(correctAnswers);
    console.log(questions);
  }, [correctAnswers]);
  return (
    <div>
      <h1>RESULTS!</h1>
      <ul>
        todo
        <li>styling</li>
        <li>button to get back to start and clear redux store</li>
      </ul>
      {questions &&
        questions.map((question, index) => (
          <ResultAnswerComponent key={index} questionProp={question} />
        ))}
    </div>
  );
}

export default ResultsPage;
