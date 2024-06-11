import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
import ResultAnswerComponent from "../components/ResultAnswerComponent";

function ResultsPage() {
  const navigate = useNavigate();
  const questions = useAppSelector((state) => state.questions.questions);
  const correctAnswers = useAppSelector(
    (state) => state.questions.correctAnswers
  );
  const correctAmount = getCorrectAmount();

  function getCorrectAmount(): number {
    let amount = 0;
    correctAnswers.forEach((answer) => {
      if (answer === true) {
        amount += 1;
      }
    });
    return amount;
  }

  useEffect(() => {
    if (correctAnswers.length === 0) {
      navigate("/");
    }
  }, [correctAnswers, navigate]);
  return (
    <div className="ResultsPage">
      <h3>Your Results:</h3>

      <h4 className="correctAmount">
        Correct answers: <br />
        {correctAmount} of {questions.length}
      </h4>

      {questions &&
        questions.map((question, index) => (
          <ResultAnswerComponent key={index} questionProp={question} />
        ))}
    </div>
  );
}

export default ResultsPage;
