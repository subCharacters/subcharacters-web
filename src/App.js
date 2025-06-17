import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import Home from './Home';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Home />
    </ChakraProvider>
  );
}

export default App;
