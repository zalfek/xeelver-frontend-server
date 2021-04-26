import { render, screen } from '@testing-library/react';
import App from './App';

test('render main', () => {
  render(<App />);
  const linkElement = screen.getByText(/Awsome Xeelver UI/i);
  expect(linkElement).toBeInTheDocument();
});
