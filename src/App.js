import { Container } from './common/Container';
import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';
import { PersonList } from './features/PersonList';
import { PersonPage } from './features/PersonPage';

function App() {
  return (
      <HashRouter>
        <Header />
        <Container>
          <PersonPage />
        </Container>
      </HashRouter>
  );
}

export default App;