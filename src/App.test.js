import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { cases } from './data/work';
import { chapters } from './data/life';

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

test('/ shows the personal page, led by the portrait', () => {
  const { container } = renderAt('/');
  expect(screen.getByRole('heading', { level: 1, name: /karthik gogisetty/i })).toBeInTheDocument();
  chapters.forEach((chapter) => {
    expect(container.querySelector(`#${chapter.id}`)).not.toBeNull();
  });
});

test('/ does not surface work sections', () => {
  const { container } = renderAt('/');
  ['career', 'work'].forEach((id) => {
    expect(container.querySelector(`#${id}`)).toBeNull();
  });
});

test('/work shows the work issue with every case study', () => {
  const { container } = renderAt('/work');
  cases.forEach((entry) => {
    expect(container.querySelector(`#${entry.id}`)).not.toBeNull();
  });
  expect(container.querySelector('#career')).not.toBeNull();
});

test('/life is an alias for the personal page', () => {
  const { container } = renderAt('/life');
  expect(container.querySelector('#photography')).not.toBeNull();
});
