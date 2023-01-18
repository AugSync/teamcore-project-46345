export default interface IQuestionData {
  date: string;
  data: QuestionItem[];
}

interface QuestionItem {
  question_id: string;
  question: string;
  answers: QuestionItemAnswer[];
}

interface QuestionItemAnswer {
  answer_id: string;
  answer: string;
}
