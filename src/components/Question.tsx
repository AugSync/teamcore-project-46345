import { find } from 'lodash';
import {
  Box,
  Center,
  CheckCircleIcon,
  Container,
  Heading,
  HStack,
  Pressable,
  Text,
} from 'native-base';
import { setAnswer } from '../slices/questionsSlice';
import { useAppDispatch, useAppSelector } from '../store';
import { QuestionItem } from '../types/question.type';

export const Question = ({ question_id, question, answers }: QuestionItem) => {
  const answersData = useAppSelector((state) => state.questions.answered);
  const dispatch = useAppDispatch();

  return (
    <>
      <Center mt="4">
        <Container w="full" mb="2">
          <Heading>{question}</Heading>
        </Container>
      </Center>
      <Center mb="12">
        <Container w="full">
          {answers.map(({ answer_id, answer }, idx) => {
            const selected = find(
              answersData,
              (answerData) => answerData.answer_id === answer_id
            );

            return (
              <Pressable
                onPress={() => dispatch(setAnswer({ question_id, answer_id }))}
                key={idx}
                w="full"
                mt="3"
              >
                {({ isPressed }) => (
                  <Box
                    rounded={20}
                    bgColor={selected ? 'teamcore.100' : 'muted.50'}
                    borderWidth="2"
                    borderColor={selected ? 'teamcore.100' : 'gray.400'}
                    display={'flex'}
                    flexDirection="row"
                    justifyContent={'space-between'}
                    style={{
                      transform: [
                        {
                          scale: isPressed ? 0.98 : 1,
                        },
                      ],
                    }}
                  >
                    <Box py="2" px="4">
                      <HStack space={2} justifyContent="center">
                        <Text
                          color={selected ? 'white' : 'teamcore.100'}
                          fontWeight={'bold'}
                          fontSize="md"
                        >
                          {answer_id}
                        </Text>
                        <Text
                          color={selected ? 'white' : 'teamcore.100'}
                          fontWeight={'medium'}
                          fontSize="md"
                        >
                          {answer}
                        </Text>
                      </HStack>
                    </Box>
                    <Box py="2" px="4">
                      {selected ? (
                        <CheckCircleIcon size={6} color="emerald.400" />
                      ) : null}
                    </Box>
                  </Box>
                )}
              </Pressable>
            );
          })}
        </Container>
      </Center>
    </>
  );
};
