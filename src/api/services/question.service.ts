import IQuestionData from '../../types/question.type';
import http from '../http-common';

class QuestionDataService {
  getAll() {
    return http.get<IQuestionData>('/questions');
  }

  /* create(data: ITutorialData) {
    return http.post<ITutorialData>('/tutorials', data);
  } */
}

export default new QuestionDataService();
