import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';
import { Container } from './common/Container';
import { PersonPage } from './features/PersonPage';
import { PersonList } from './features/PersonList';
import MovieList from './features/MovieList';
import MoviePage from './features/MoviePage';

function App() {
  return (
    <HashRouter>
      <Header />
      <MoviePage />

      <Header />
      <Container>
        <MovieList />
      </Container>

      <Header />
      <Container>
        <PersonList />
      </Container>

      <Header />
      <Container>
        <PersonPage />
      </Container>
    </HashRouter>
  );
}

export default App;