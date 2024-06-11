import { HashRouter, Route, Routes } from "react-router-dom";
import Start from "./Start";
import QuestionPage from "./QuestionPage";
import ResultsPage from "./ResultsPage";
import Layout from "./Layout";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="/questions/:id" element={<QuestionPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
