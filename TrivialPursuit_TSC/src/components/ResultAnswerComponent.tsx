import Question from "../models/question";

interface ResultAnswerProp {
  questionProp: Question;
}

function ResultAnswerComponent({ questionProp }: ResultAnswerProp) {
  const correct = questionProp.answer_given === questionProp.correct_answer;

  return (
    <div className="ResultComponent">
      <p
        className="question"
        dangerouslySetInnerHTML={{ __html: questionProp.question }}
      />

      {correct ? (
        <div className="correctAnswerSection">
          <p>Your Guess: </p>
          <p
            dangerouslySetInnerHTML={{
              __html: questionProp.correct_answer,
            }}
          />
        </div>
      ) : (
        <div className="incorrectAnswerSection">
          <div className="correctionAnswer">
            <p>Correct Answer:</p>
            <p
              dangerouslySetInnerHTML={{
                __html: questionProp.correct_answer,
              }}
            />
          </div>
          <div className="incorrectAnswer">
            <p>Your guess:</p>
            <p
              dangerouslySetInnerHTML={{ __html: questionProp.answer_given }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultAnswerComponent;
