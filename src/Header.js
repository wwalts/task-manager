import React from 'react';

function Header({ title }) {
  return (
    <header style={styles.header}>
      <div style={styles.dot} />
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.dot} />
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    padding: '24px',
    borderBottom: '1px solid #2a2a4a',
    background: 'rgba(255,255,255,0.02)',
  },
  title: {
    margin: 0,
    fontSize: '1.4rem',
    fontWeight: '400',
    letterSpacing: '0.15em',
    color: '#a0a0ff',
    textTransform: 'uppercase',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#5555ff',
  },
};

export default Header;
