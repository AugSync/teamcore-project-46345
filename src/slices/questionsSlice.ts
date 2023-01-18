import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IQuestionData, { QuestionAnswered } from '../types/question.type';
import { remove } from 'lodash';

export interface CounterState {
  data: IQuestionData | null;
  answered: QuestionAnswered[];
}

const initialState: CounterState = {
  data: null,
  answered: [],
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<IQuestionData>) => {
      state.data = action.payload;
    },
    setAnswer: (state, action: PayloadAction<QuestionAnswered>) => {
      const data = remove(
        state.answered ?? [],
        ({ question_id }) => question_id !== action.payload.question_id
      );

      data.push(action.payload);

      state.answered = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuestions, setAnswer } = questionsSlice.actions;

export default questionsSlice.reducer;
