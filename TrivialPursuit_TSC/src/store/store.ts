import { configureStore } from "@reduxjs/toolkit";
import QuestionReducer from "./slices/questionSlice";

export const store = configureStore({
  reducer: {
    questions: QuestionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
