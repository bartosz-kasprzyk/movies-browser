import { Header } from './common/Header';
import MovieList from './features/MovieList';
import MoviePage from './features/MoviePage';
import SearchResults from './features/SearchResults';
import { PersonPage } from './features/PersonPage';
import { PersonList } from './features/PersonList';
import { HashRouter, Route, Redirect, Switch, useHistory } from 'react-router-dom';
import { toMovie, toMovies, toMoviesSearch, toPeople, toPeopleSearch, toPerson } from './routes';
import { useEffect } from 'react';

function ScrollToTop() {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

function App() {
  return (
    <HashRouter basename="/movies-browser">
      <Header />
      <ScrollToTop />

      <Switch>
        <Route path={toMoviesSearch()}>
          <SearchResults />
        </Route>

        <Route path={toPeopleSearch()}>
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