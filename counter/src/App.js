import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [ appCounter, setAppCounter ] = useState(0);

  return (
    <div className="App">
      <Counter setAppCounter={ setAppCounter } appCounter={ appCounter } />
      <Counter setAppCounter={ setAppCounter } appCounter={ appCounter } />
    </div>
  );
}

export default App;
