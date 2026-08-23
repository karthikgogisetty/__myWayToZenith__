// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom ships neither of these, and the app reads both on mount.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

class MockObserver {
  observe() {}

  unobserve() {}

  disconnect() {}

  takeRecords() {
    return [];
  }
}

if (!window.IntersectionObserver) {
  window.IntersectionObserver = MockObserver;
  global.IntersectionObserver = MockObserver;
}

if (!window.ResizeObserver) {
  window.ResizeObserver = MockObserver;
  global.ResizeObserver = MockObserver;
}
