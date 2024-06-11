import axios, { AxiosResponse } from "axios";
import Question from "../models/question";

class QuestionService {
  http = axios.create({
    baseURL: "https://opentdb.com/api.php",
  });

  async getQuestions(
    amount: string,
    category: string | undefined,
    difficulty: string | undefined
  ) {
    let endpoint = `?amount=${amount}`;
    if (category) {
      endpoint = endpoint + `&category=${category}`;
    }
    if (difficulty) {
      endpoint = endpoint + `&difficulty=${difficulty}`;
    }

    // Define response type as AxiosResponse
    const response: AxiosResponse = await this.http.get(endpoint);
    const questions: Question[] = response.data.results;
    return questions;
  }
}

export default new QuestionService();
