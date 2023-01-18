import { StatusBar } from 'expo-status-bar';
import { Flex, ScrollView } from 'native-base';
import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Question } from '../components/Question';
import { QuestionSkeleton } from '../components/QuestionSkeleton';
import { Welcome } from '../components/Welcome';
import QuestionDataService from '../api/services/question.service';
import { useQuery } from 'react-query';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

export const QuestionsScreen = () => {
  const { data, error, isLoading } = useQuery(
    '/questions',
    QuestionDataService.getAll
  );

  const ScrollRef = useRef();

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <ScrollView ref={ScrollRef}>
        <Welcome ScrollRef={ScrollRef} />

        {isLoading || error ? <QuestionSkeleton /> : null}

        {data ? (
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
            {data.data.data.map((_, idx) => (
              <Question key={idx} />
            ))}
          </Flex>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};
