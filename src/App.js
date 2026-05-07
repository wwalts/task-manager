import React, { useState } from 'react';
import Header from './Header';
import Counter from './Counter';

const unusedVar = 'test'; // ESLint покаже попередження
console.log('Режим:', process.env.REACT_APP_MODE);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.app}>
      <Header title="Мій тестовий проект" />
      <main style={styles.main}>
        <Counter count={count} setCount={setCount} />
      </main>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    background: '#0f0f1a',
    color: '#e0e0ff',
    fontFamily: "'Courier New', monospace",
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 80px)',
  },
};

export default App;
