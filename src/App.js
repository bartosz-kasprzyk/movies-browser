import { Container } from './common/Container';
import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';
import MoviePage from './features/MoviePage';

function App() {
  return (
    <HashRouter>
      <Header />
      <MoviePage />
    </HashRouter>
  );
}

export default App;