import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('verify App Snapshot', () => {
  it('loads app correctly', () => {
    const app = render(<App />)
    expect(app).toMatchSnapshot()
  })
})
