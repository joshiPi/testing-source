import './App.css';
import {useEffect} from 'react'
import { CrossStorageHub } from 'cross-storage/lib/index'



function App() {
  useEffect(() => {
    CrossStorageHub.init([
      {origin: /.*localhost:300\d$/, allow: ['get']},
      {origin: /[a-z A-Z 1-9]+\.xvercel\.ml$/, allow: ['get', 'set', 'del']}
    ]);
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Testing.
        </p>
      </header>
    </div>
  );
}

export default App;
