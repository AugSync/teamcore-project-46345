import { Center, Flex, Skeleton } from 'native-base';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

export const QuestionSkeleton = () => (
  <Flex
    bgColor="white"
    height={Dimensions.get('window').height - Constants.statusBarHeight}
    direction="column"
    pt="5"
  >
    <Center px="10">
      <Skeleton.Text />
      <Skeleton h="10" mt="5" rounded="full" />
      <Skeleton h="10" mt="5" rounded="full" />
      <Skeleton h="10" mt="5" rounded="full" />
      <Skeleton h="10" mt="5" rounded="full" />
    </Center>
  </Flex>
);
