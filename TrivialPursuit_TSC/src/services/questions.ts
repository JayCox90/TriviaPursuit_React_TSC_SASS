import axios, { AxiosResponse } from "axios";
import Question from "../models/question";

class QuestionService {
  http = axios.create({
    baseURL: "https://opentdb.com/api.php",
  });

  async getQuestions(
    amount: number,
    category: number | undefined,
    difficulty: string | undefined
  ) {
    let endpoint = `?amount=${amount}`;
    if (category) {
      console.log("yes!");
      endpoint = endpoint + `&category=${category}`;
      console.log(endpoint);
    }
    if (difficulty) {
      endpoint = endpoint + `&difficulty=${difficulty}`;
      console.log(endpoint);
    }

    // Define response type as AxiosResponse
    const response:AxiosResponse = await this.http.get(endpoint);
    const questions: Question[] = response.data.results;
    return questions;
  }
}

export default new QuestionService();
