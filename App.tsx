import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

import { Loading } from '@components/Loading';

import { Home } from '@screens/Home';

import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  return (
    <ThemeProvider theme={theme}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Home /> : <Loading/>}
    </ThemeProvider>
  );
}

