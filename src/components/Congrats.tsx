import {
  Box,
  Center,
  ChevronDownIcon,
  Container,
  Flex,
  Heading,
  Pressable,
  Text,
} from 'native-base';
import { Dimensions } from 'react-native';
import TeamcoreIcon from '../assets/icons/TeamcoreIcon';
import { View as AnimatableView } from 'react-native-animatable';
import Constants from 'expo-constants';

const FullHeight = Dimensions.get('window').height - Constants.statusBarHeight;

export const Congrats = ({
  ScrollRef,
  setIsAnswered,
  setIsSending,
}: {
  ScrollRef:
    | React.MutableRefObject<undefined>
    | {
        current: {
          scrollTo: ({ y, animated }: { y: number; animated: boolean }) => void;
        };
      };
  setIsAnswered: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSending: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <Flex
    bgColor="white"
    height={FullHeight}
    direction="column"
    justifyContent={'space-evenly'}
  >
    <Center>
      <TeamcoreIcon />
    </Center>
    <Center>
      <Container>
        <Heading textAlign={'center'}>
          Gracias por contestar las pregunstas de
          <Text color="teamcore.100"> Teamcore 🎉</Text>
        </Heading>
        <Text textAlign={'center'} mt="3" fontSize={16} fontWeight="medium">
          Todas las respuestas fueron enviados al servidor de teamcore.
        </Text>
      </Container>
    </Center>
    <Center mb="8">
      <AnimatableView
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
      >
        <Pressable
          onPress={() => {
            setIsSending(false);
            setIsAnswered(false);
            ScrollRef.current?.scrollTo({
              y: FullHeight,
              animated: true,
            });
          }}
          rounded={30}
          bgColor="teamcore.100"
          px="6"
          pt="2"
          pb="1"
        >
          <Box display={'flex'} alignItems={'center'}>
            <Text color="white" fontWeight={'bold'} fontSize="sm">
              Responda las preguntas nuevamente
            </Text>
            <ChevronDownIcon size="5" color="white" />
          </Box>
        </Pressable>
      </AnimatableView>
    </Center>
  </Flex>
);
