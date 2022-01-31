import { Folder } from './components';
import json from './data/json';

function App() {
  return (
    <div className="App">
      <Folder json={json} />
    </div>
  );
}

export default App;
