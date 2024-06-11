import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Question from "../../models/question";

export interface QuestionState {
  questions: Question[];
  correctAnswers: boolean[];
}

const initialState: QuestionState = {
  questions: [],
  correctAnswers: [],
};

export const QuestionSlice = createSlice({
  name: "Questions",
  initialState,
  reducers: {
    loadQuestions: (state, action: PayloadAction<Question[]>) => {
      const questions = action.payload.map((question) => {
        const mixedAnswers = [
          question.correct_answer,
          ...question.incorrect_answers,
        ].sort(() => 0.5 - Math.random());
        question.all_answers = mixedAnswers;
        return question;
      });

      state.questions = questions;
    },
    giveAnswer: (state, action: PayloadAction<string>) => {
      const index = state.correctAnswers.length;
      if (state.questions[index].correct_answer === action.payload) {
        state.correctAnswers.push(true);
      } else {
        state.correctAnswers.push(false);
      }
      state.questions[index].answer_given = action.payload;
    },
    resetQuestions: (state) => {
      state.questions = [];
      state.correctAnswers = [];
    },
  },
});

export const { loadQuestions, giveAnswer, resetQuestions } =
  QuestionSlice.actions;
export default QuestionSlice.reducer;
