import React from 'react';

function Counter({ count, setCount }) {
  return (
    <div style={styles.card}>
      <p style={styles.label}>лічильник</p>
      <div style={styles.display}>{count}</div>
      <div style={styles.buttons}>
        <button style={{...styles.btn, ...styles.minus}} onClick={() => setCount(count - 1)}>−</button>
        <button style={{...styles.btn, ...styles.reset}} onClick={() => setCount(0)}>reset</button>
        <button style={{...styles.btn, ...styles.plus}} onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    textAlign: 'center',
    padding: '56px',
    border: '1px solid #3a3a6a',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.05)',
    boxShadow: '0 0 40px rgba(85,85,255,0.08)',
  },
  label: {
    margin: '0 0 16px',
    fontSize: '0.75rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: '#7777cc',
  },
  display: {
    fontSize: '6rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 36px',
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
    fontSize: '1.4rem',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  },
  minus: {
    color: '#ff6b6b',
    borderColor: '#ff6b6b44',
  },
  plus: {
    color: '#6bffb8',
    borderColor: '#6bffb844',
  },
  reset: {
    width: 'auto',
    padding: '0 20px',
    fontSize: '0.75rem',
    letterSpacing: '0.1em',
    color: '#555588',
    borderColor: '#2a2a4a',
  },
};

export default Counter;