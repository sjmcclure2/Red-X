import React from 'react';
import App from './App.js';
import {render, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Home', () => {
  test('Renders loading message on landing page when no props sent', () => {
    render(<App />);
    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  test('Renders welcome message when api call is successfully resolved', async () => {
    const { findByText } = render(<App />)
    expect(await findByText('Welcome to Red-X')).toBeInTheDocument()
  })

  test('Renders links in the app header', () => {
    render(<App />);
    const homeLink = screen.getByText('Home');
    const projectsLink = screen.getByText('Projects');
    const requestsLink = screen.getByText('Requests');
    expect(homeLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(requestsLink).toBeInTheDocument();
  });
});