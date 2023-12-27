import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { Loading } from '@components/Loading';
import { Statistic } from '@screens/Statistic';
import { Home } from '@screens/Home';


export default function App() {
  const [fontsLoader] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      
      {fontsLoader ? <Statistic/> : <Loading />}
    </ThemeProvider>
  );
}

