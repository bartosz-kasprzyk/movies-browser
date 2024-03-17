import { Header } from './common/Header';
import MovieList from './features/MovieList';
import MoviePage from './features/MoviePage';
import SearchResults from './features/SearchResults';
import { PersonPage } from './features/PersonPage';
import { PersonList } from './features/PersonList';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { toMovie, toMovies, toPeople, toPerson } from './routes';

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/movies/search">
          <SearchResults />
        </Route>

        <Route path="/people/search">
          <SearchResults />
        </Route>

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