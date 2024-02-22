import { Container } from './common/Container';
import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';
import MovieList from './features/MovieList';

function App() {
  return (
      <HashRouter>
        <Header />
        <Container>
          <MovieList />
        </Container>
      </HashRouter>
  );
}

export default App;