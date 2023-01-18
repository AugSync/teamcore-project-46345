import { StatusBar } from 'expo-status-bar';
import { Flex, ScrollView } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { Question } from '../components/Question';
import { QuestionSkeleton } from '../components/QuestionSkeleton';
import { Welcome } from '../components/Welcome';
import QuestionDataService from '../api/services/question.service';
import { useQuery } from 'react-query';
import { Dimensions, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { useAppDispatch, useAppSelector } from '../store';
import { setQuestions } from '../slices/questionsSlice';

export const QuestionsScreen = () => {
  const questionData = useAppSelector((state) => state.questions.data);
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useQuery(
    '/questions',
    QuestionDataService.getAll
  );

  // Parse statementf
  useEffect(() => {
    if (data?.data) {
      dispatch(setQuestions(data.data));
    }
  }, [data]);

  const ScrollRef = useRef();

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <ScrollView ref={ScrollRef}>
        <Welcome ScrollRef={ScrollRef} />

        {isLoading || error ? <QuestionSkeleton /> : null}

        {questionData ? (
          <Flex
            bgColor="white"
            direction="column"
            pt="5"
            minHeight={
              Dimensions.get('window').height - Constants.statusBarHeight
            }
            pb="32"
          >
            {/* XD the first data of axios and sexond of teamcore. So many data keys */}
            {questionData.data.map((questionData, idx) => (
              <Question key={idx} {...questionData} />
            ))}
          </Flex>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};
