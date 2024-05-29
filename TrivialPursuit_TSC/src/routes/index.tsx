import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./Start";
import QuestionPage from "./QuestionPage";
import ResultsPage from "./ResultsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/questions/:id" element={<QuestionPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
