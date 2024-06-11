import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { giveAnswer } from "../store/slices/questionSlice";
import Question from "../models/question";

interface QuestionParams extends Record<string, string | undefined> {
  id: string;
}

function QuestionPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<QuestionParams>();

  const question = useAppSelector((state) => state.questions.questions);
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  console.log(currentQuestion);
  useEffect(() => {
    if (question.length === 0) {
      navigate("/");
    }
    if (question && id) {
      setCurrentQuestion(question[parseInt(id) - 1]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question, id]);

  const handleAnswer = (answer: string) => {
    if (id) {
      dispatch(giveAnswer(answer));
      if (parseInt(id) === question.length) {
        navigate("/results");
      } else {
        const nextQuestion = parseInt(id) + 1;
        navigate(`/questions/${nextQuestion}`);
      }
    }
  };
  return (
    <div className="questionPage">
      {currentQuestion && (
        <div className="question">
          <h3 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
          {question &&
            currentQuestion.all_answers.map((option) => (
              <button
                className="choice"
                key={currentQuestion.question}
                dangerouslySetInnerHTML={{ __html: option }}
                onClick={() => handleAnswer(option)}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default QuestionPage;
