import React from 'react';
import RequestCard from './Request';
import {render, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Request', () => {
  test('Displays the request title', async () => {
    render(<RequestCard/>)
    const title = "I'll hack the cross-platform COM microchip, that should alarm the EXE firewall!"
    const requestTitle = await screen.getByText(title);
    await waitFor(() => {
      expect(requestTitle).toBeInTheDocument();
    })
  })
})