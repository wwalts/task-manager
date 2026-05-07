 
import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import Counter from './Counter';

const renderCounter = (count = 0) => {
  const setCount = vi.fn();
  render(<Counter count={count} setCount={setCount} />);
  return { setCount };
};

test('pokazuye 0', () => {
  renderCounter(0);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('pokazuye 42', () => {
  renderCounter(42);
  expect(screen.getByText('42')).toBeInTheDocument();
});

test('plyus dodaye 1', () => {
  const { setCount } = renderCounter(5);
  fireEvent.click(screen.getByText('+'));
  expect(setCount).toHaveBeenCalledWith(6);
});

test('reset skydaye do 0', () => {
  const { setCount } = renderCounter(99);
  fireEvent.click(screen.getByText('reset'));
  expect(setCount).toHaveBeenCalledWith(0);
});

test('3 knopky', () => {
  renderCounter();
  expect(screen.getByText('+')).toBeInTheDocument();
  expect(screen.getByText('reset')).toBeInTheDocument();
});

test('vidyemne', () => {
  renderCounter(-7);
  expect(screen.getByText('-7')).toBeInTheDocument();
});