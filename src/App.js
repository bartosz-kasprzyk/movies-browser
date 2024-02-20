import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Container } from './common/Container';
import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';
import MoviePage from './features/MoviePage';
import Top from './features/MoviePage/Top';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Top />
        <Container>
          <MoviePage />
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;