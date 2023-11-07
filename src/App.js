import Header from './components/Header';
import Pesquisa from './components/Pesquisa';
import styled from 'styled-components';

// utlizando o styledComponents para nao precisar do arquivo css
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
        <Header/>
        <Pesquisa />
    </AppContainer>
  );
}

export default App;
