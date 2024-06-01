import { useState } from 'react';
import Card from './Card';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <Card people={people} />
    </main>
  );
}

export default App;
