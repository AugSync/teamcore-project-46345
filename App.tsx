import { store } from './src/store';
import { Provider } from 'react-redux';
import { BottomTabs } from './src/navigation/BottomTabs';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LogBox } from 'react-native';

const queryClient = new QueryClient();

LogBox.ignoreLogs(['Setting a timer for a long period of time']);

const theme = extendTheme({
  colors: {
    teamcore: {
      100: '#003670',
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <BottomTabs />
        </NativeBaseProvider>
      </Provider>
    </QueryClientProvider>
  );
}
