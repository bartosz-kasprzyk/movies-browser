import './App.css';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      projekt
    </ThemeProvider>
  );
}

export default App;
