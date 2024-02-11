import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Pagination } from './common/Pagination';
import { Container } from './common/Container';
import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Pagination />
      <HashRouter>
        <Header />
        <Container>
          projekt
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;