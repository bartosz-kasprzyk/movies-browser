import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Pagination } from './common/Pagination';
import { Container } from './common/Container';
import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';
import Error from './common/Error';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter>
        <Header />
        <Container>
         <Error />
        </Container>
        <Pagination />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;