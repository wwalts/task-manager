import React from 'react';

function Counter({ count, setCount }) {
  return (
    <div style={styles.card}>
      <p style={styles.label}>лічильник</p>
      <div style={styles.display}>{count}</div>
      <div style={styles.buttons}>
        <button style={styles.btn} onClick={() => setCount(count - 1)}>−</button>
        <button style={{ ...styles.btn, ...styles.reset }} onClick={() => setCount(0)}>reset</button>
        <button style={styles.btn} onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    textAlign: 'center',
    padding: '48px',
    border: '1px solid #2a2a4a',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.03)',
  },
  label: {
    margin: '0 0 16px',
    fontSize: '0.75rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#5555ff',
  },
  display: {
    fontSize: '5rem',
    fontWeight: '700',
    color: '#e0e0ff',
    margin: '0 0 32px',
    lineHeight: 1,
  },
  buttons: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
  },
  btn: {
    width: '56px',
    height: '56px',
    border: '1px solid #3a3a6a',
    borderRadius: '8px',
    background: 'transparent',
    color: '#a0a0ff',
    fontSize: '1.4rem',
    cursor: 'pointer',
  },
  reset: {
    width: 'auto',
    padding: '0 20px',
    fontSize: '0.75rem',
    letterSpacing: '0.1em',
    color: '#555588',
  },
};

export default Counter;
