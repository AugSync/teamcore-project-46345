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

export const Question = () => (
  <>
    <Center mt="4">
      <Container w="full" mb="2">
        <Heading>Cuál es uno de los fundadores de apple?</Heading>
      </Container>
    </Center>
    <Center mb="12">
      <Container w="full">
        {[
          {
            answer_id: '1.a',
            answer: 'Steve Jobs',
            selected: false,
          },
          {
            answer_id: '1.b',
            answer: 'Bill gates',
            selected: false,
          },
          {
            answer_id: '1.c',
            answer: 'Michael jordan',
            selected: true,
          },
        ].map(({ answer_id, answer, selected }, idx) => (
          <Pressable
            onPress={() => console.log({ answer_id })}
            key={idx}
            rounded={20}
            bgColor={selected ? 'teamcore.100' : 'gray.200'}
            borderWidth="2"
            borderColor={selected ? 'teamcore.100' : 'gray.400'}
            w="full"
            mt="3"
            display={'flex'}
            flexDirection="row"
            justifyContent={'space-between'}
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
          </Pressable>
        ))}
      </Container>
    </Center>
  </>
);
