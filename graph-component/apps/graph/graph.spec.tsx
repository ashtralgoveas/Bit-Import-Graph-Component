import React from 'react';
import { render } from '@testing-library/react';
import { BasicGraph } from './graph.composition';

it('should render with the correct text', () => {
  const rendered = render(<BasicGraph />);
  expect(rendered).toBeTruthy();
});
