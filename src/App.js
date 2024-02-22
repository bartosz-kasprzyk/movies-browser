import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Container } from './common/Container';
import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';
import { Pagination } from './common/Pagination';
import SearchResults from './common/SerchResults';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Container>
         <SearchResults />
        </Container>
        <Pagination />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;