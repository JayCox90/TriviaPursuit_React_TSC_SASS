export default interface Question {
  question: string;
  category: string;
  difficulty: string;
  correct_answer: string;
  incorrect_answers: string[];
  type: string;
  all_answers: string[];
  answer_given: string;
}
