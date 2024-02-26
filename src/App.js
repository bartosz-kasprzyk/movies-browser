import { Container } from './common/Container';
import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';
import { PersonPage } from './features/PersonPage';
import MovieList from './features/MovieList';

function App() {
  return (
    <HashRouter basename="/movies-browser">
      <Header />

      <Container>
        <Switch>
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
          <Route path="/movie">
            <MoviePage />
          </Route>
          <Route path="/people">
            <PersonList />
          </Route>
          <Route path="/person">
            <PersonPage />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  )
};

export default App;