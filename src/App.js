import { Container } from './common/Container';
import { Header } from './common/Header';
import MovieList from './features/MovieList';
import MoviePage from './features/MoviePage';
import { PersonPage } from './features/PersonPage';
import { PersonList } from './features/PersonList';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <HashRouter basename="/movies-browser">
      <Header />

      <Container>
        <Switch>
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
          <Route path="/movies">
            <MovieList />
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