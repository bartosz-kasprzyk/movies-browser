import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Pagination } from './common/Pagination';
import { Container } from './common/Container';
import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';
import { PersonList } from './features/PersonList';
import { PersonPage } from './features/PersonPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Container>
          <PersonPage />
        </Container>
        <Pagination />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;