export default interface IQuestionData {
  date: string;
  data: QuestionItem[];
}

export interface QuestionItem {
  question_id: string;
  question: string;
  answers: QuestionItemAnswer[];
}

export interface QuestionItemAnswer {
  answer_id: string;
  answer: string;
  selected: boolean;
}

export interface QuestionAnswered {
  question_id: string;
  answer_id: string;
}
