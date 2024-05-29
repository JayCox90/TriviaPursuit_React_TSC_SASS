import { useState } from "react";

import QuestionService from "../services/questions";
import { useAppDispatch } from "../store/hooks";
import { loadQuestions } from "../store/slices/questionSlice";
import { useNavigate } from "react-router-dom";

function Start() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(5);
  const [category, setCategory] = useState<number | undefined>();
  const [difficulty, setDifficulty] = useState<string | undefined>("");

  const getQuestions = async () => {
    const gotQuestions = await QuestionService.getQuestions(
      amount,
      category,
      difficulty
    );
    dispatch(loadQuestions(gotQuestions));
    navigate("questions/1");
  };

  return (
    <>
      <h1>Trivial Pursuit</h1>
      <ul>
        Todo:
        <li>get categories from api</li>
        <li>add logics for amount, difficulty and categories</li>
        <li>add styling</li>
        <li>add layout</li>
      </ul>
      <button onClick={getQuestions}>Start</button>
    </>
  );
}

export default Start;
