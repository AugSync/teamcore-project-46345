import { StatusBar } from 'expo-status-bar';
import { Button, Center, Container, Flex, Icon, ScrollView } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Question } from '../components/Question';
import { QuestionSkeleton } from '../components/QuestionSkeleton';
import { Welcome } from '../components/Welcome';
import QuestionDataService from '../api/services/question.service';
import { useQuery, useQueryClient } from 'react-query';
import { Alert, Dimensions, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { useAppDispatch, useAppSelector } from '../store';
import { resetAnswers, setQuestions } from '../slices/questionsSlice';
import { FontAwesome } from '@expo/vector-icons';
import { AnswersBody } from '../types/question.type';
import axios from 'axios';

export const QuestionsScreen = () => {
  const [isSending, setIsSending] = useState(false);
  const questionData = useAppSelector((state) => state.questions.data);
  const answeredData = useAppSelector((state) => state.questions.answered);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery(
    '/questions',
    QuestionDataService.getQuestions
  );

  const handleSendAnswers = async (data: AnswersBody) => {
    setIsSending(true);
    try {
      await QuestionDataService.postAnswers(data);

      Alert.alert(
        'Tus respuestas fueron enviada satisfactoriamente',
        '¿Desea contestar las preguntas nuevamente?',
        [
          {
            text: 'Concluir',
            onPress: () => {
              dispatch(resetAnswers());
              queryClient.invalidateQueries('todos');
            },
            style: 'destructive',
          },
          {
            text: 'Contestar nuevamente',
            onPress: () => {
              dispatch(resetAnswers());
              queryClient.invalidateQueries('todos');
            },
          },
        ]
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Alert.alert(
          'Error sending answers, try again later',
          error.message ?? 'Unexpected error',
          [
            {
              text: 'Ok',
            },
          ]
        );
      }
    } finally {
      setIsSending(false);
    }
  };

  // Parse statementf
  useEffect(() => {
    if (data?.data) {
      dispatch(setQuestions(data.data));
    }
  }, [data]);

  useEffect(() => {
    if (axios.isAxiosError(error))
      Alert.alert(
        'Error getting questions, try again later',
        error.message ?? 'Unexpected error',
        [
          {
            text: 'Ok',
          },
        ]
      );
  }, [error]);

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

            <Center>
              <Container w="full">
                <Button
                  w="full"
                  bgColor={'black'}
                  rounded="full"
                  size="lg"
                  mt="4"
                  endIcon={<Icon as={FontAwesome} name="send" size="sm" />}
                  isDisabled={answeredData.length < questionData.data.length}
                  isLoading={isSending}
                  isLoadingText="Enviando respuestas"
                  onPress={() => {
                    handleSendAnswers({
                      date: new Date().toJSON(),
                      data: answeredData,
                    });
                  }}
                >
                  Enviar respuestas
                </Button>
              </Container>
            </Center>
          </Flex>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};
