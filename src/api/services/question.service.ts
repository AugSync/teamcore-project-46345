import IQuestionData, { AnswersBody } from '../../types/question.type';
import http from '../http-common';

class QuestionDataService {
  getQuestions() {
    return http.get<IQuestionData>('/questions');
  }

  postAnswers(data: AnswersBody) {
    return http.post('/answer', data);
  }
}

export default new QuestionDataService();
