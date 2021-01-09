import React from 'react';
import { render, screen } from '@testing-library/react';
import { SoochowMainFootwareEntry } from './containers/App/components/SiteMainContent/components/MainFootwearEntry';

import App from './App';

test('soochow website', () => {
  render(<App />);
  const linkElement = screen.getByText(/TEST/i);
  expect(linkElement);
});

test('soochow website', () => {
  render(<SoochowMainFootwareEntry />);
  const linkElement = screen.getByText(/signature/i);
  expect(linkElement);
});