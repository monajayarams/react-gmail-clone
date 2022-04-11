import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('verify Homepage Snapshot - Mail List', () => {
  it('loads homepage with mail list', () => {
    const Homepage = render(<HomePage />)
    expect(Homepage).toMatchSnapshot()
  })
})

describe('verify HomePage Snapshot - Compose Mail', () => {
  it('loads Compose mail modal', async() => {
    const { getByText } = render(<HomePage />)
    const composeBtn = getByText('Compose')
    act(() => {
      fireEvent.click(composeBtn)
    })
    expect(() => getByText('New Message')).not.toThrow()
  })
})