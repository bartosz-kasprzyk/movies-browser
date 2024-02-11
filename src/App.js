import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Pagination } from './common/Pagination';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      projekt
      <Pagination />
    </ThemeProvider>
  );
}

export default App;