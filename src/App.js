import { Container } from './common/Container';
import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';
import { SearchResults } from '../src/common/searchResults';


function App() {

  return (
    <HashRouter>
      <Header />
      <Container>
        <SearchResults />
      </Container>
    </HashRouter>
  );
}

export default App;