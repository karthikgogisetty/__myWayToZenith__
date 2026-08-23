import { render, screen } from '@testing-library/react';
import App from './App';
import { cases } from './data/work';

test('renders the cover headline', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /production ai for identity verification/i }),
  ).toBeInTheDocument();
});

test('renders every case study section', () => {
  const { container } = render(<App />);
  cases.forEach((entry) => {
    expect(container.querySelector(`#${entry.id}`)).not.toBeNull();
  });
});

test('renders the standing sections', () => {
  const { container } = render(<App />);
  ['top', 'contents', 'work', 'career', 'writing'].forEach((id) => {
    expect(container.querySelector(`#${id}`)).not.toBeNull();
  });
});
