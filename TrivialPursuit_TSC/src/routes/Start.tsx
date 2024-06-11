import { useEffect, useState } from "react";

import QuestionService from "../services/questions";
import CategoriesService from "../services/categories";
import { useAppDispatch } from "../store/hooks";
import { loadQuestions, resetQuestions } from "../store/slices/questionSlice";
import { useNavigate } from "react-router-dom";
import Category from "../models/category";

function Start() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [categorySelection, setCategorySelection] = useState<Category[]>();
  const [amount, setAmount] = useState<string>("5");
  const [category, setCategory] = useState<string | undefined>();
  const [difficulty, setDifficulty] = useState<string | undefined>("");

  const difficultySelection = [
    { display: "Easy", value: "easy" },
    { display: "Medium", value: "medium" },
    { display: "Hard", value: "hard" },
  ];

  const getCategories = async () => {
    const gotCategories = await CategoriesService.getCategories();
    setCategorySelection(gotCategories);
  };

  const getQuestions = async () => {
    const gotQuestions = await QuestionService.getQuestions(
      amount,
      category,
      difficulty
    );
    dispatch(loadQuestions(gotQuestions));
    navigate("questions/1");
  };

  useEffect(() => {
    getCategories();
    dispatch(resetQuestions());
  }, []);

  return (
    <div className="start">
      {/* <h1>Trivial Pursuit</h1> */}

      <div className="selectors">
        <select
          id="selectedCategory"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a Category</option>
          {categorySelection &&
            categorySelection.map((category, index) => (
              <option key={index} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>

        <select
          id="selectedDifficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">Select difficulty</option>
          {difficultySelection.map((difficulty, index) => (
            <option key={index} value={difficulty.value}>
              {difficulty.display}
            </option>
          ))}
        </select>
      </div>
      <div className="amountQuestions">
        <p>Amount of Questions:</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="linkButtonStart" onClick={getQuestions}>
        Start
      </button>
    </div>
  );
}

export default Start;
