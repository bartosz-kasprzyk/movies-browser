import { Container } from './common/Container';
import { Header } from './common/Header';
import { HashRouter } from 'react-router-dom';
import { PersonList } from './features/PersonList';

function App() {
  return (
      <HashRouter>
        <Header />
        <Container>
          <PersonList />
        </Container>
      </HashRouter>
  );
}

export default App;