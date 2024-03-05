import { Container } from './common/Container';
import { Header } from './common/Header';
import MovieList from './features/MovieList';
import MoviePage from './features/MoviePage';
import { PersonPage } from './features/PersonPage';
import { PersonList } from './features/PersonList';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { toMovie, toMovies, toPeople, toPerson } from './routes';

function App() {
  return (
    <HashRouter basename="/movies-browser">
      <Header />

      <Switch>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        
        <Container>
          <Route path={toMovies()}>
            <MovieList />
          </Route>
          <Route path={toPeople()}>
            <PersonList />
          </Route>
          <Route path={toPerson()}>
            <PersonPage />
          </Route>
          <Route exact path="/">
            <Redirect to={toMovies()} />
          </Route>
        </Container>
      </Switch>
    </HashRouter>
  )
};

export default App;