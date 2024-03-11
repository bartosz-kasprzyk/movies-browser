import { Header } from './common/Header';
import MovieList from './features/MovieList';
import MoviePage from './features/MoviePage';
import { PersonPage } from './features/PersonPage';
import { PersonList } from './features/PersonList';
import { HashRouter, Route } from 'react-router-dom';
import { toMovie, toMovies, toPeople, toPerson } from './routes';
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>

        <Route path={toPerson()}>
          <PersonPage />
        </Route>

        <Route path={toMovies()}>
          <MovieList />
        </Route>

        <Route path={toPeople()}>
          <PersonList />
        </Route>

        <Route exact path="/">
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
  )
};

export default App;