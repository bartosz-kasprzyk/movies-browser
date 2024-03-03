import { Container } from './common/Container';
import { Header } from './common/Header';
import MovieList from './features/MovieList';
import MoviePage from './features/MoviePage';
import { PersonPage } from './features/PersonPage';
import { PersonList } from './features/PersonList';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { toHomepage, toMovie, toMovies, toPeople, toPerson } from './routes';
import Homepage from './Homepage';

function App() {
  return (
    <HashRouter basename="/movies-browser">
      <Header />

      <Switch>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        
        <Container>
          <Route path={toHomepage()}>
            <Homepage />
          </Route>
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
            <Redirect to={toHomepage()} />
          </Route>
        </Container>
      </Switch>
    </HashRouter>
  )
};

export default App;