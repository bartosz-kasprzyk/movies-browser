import './App.css';
import { Container } from './common/Container';
import MoviePage from './features/MoviePage';
import MovieList from './features/MovieList';

function App() {
  return (
    <Container>
      <MovieList />
    </Container>
  );
}

export default App;