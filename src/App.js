import { Header } from './common/Header';
import MovieList from './features/MovieList';
import MoviePage from './features/MoviePage';
import { PersonPage } from './features/PersonPage';
import { PersonList } from './features/PersonList';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { toMovie, toMovies, toPeople, toPerson } from './routes';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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