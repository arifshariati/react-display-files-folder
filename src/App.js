import Styled from 'styled-components';
import { TopBar, FolderTree } from './components';

import json from './data/json';

const StyledContainer = Styled.div`
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
width : 400px;
height: 600px;
overflow-y: auto;
background-color:papayawhip;
padding: 2rem;
border-radius:20px;
`

function App() {
  return (
    <>
      <TopBar />
      <StyledContainer>
        <FolderTree json={json} />
      </StyledContainer>

    </>
  );
}

export default App;
