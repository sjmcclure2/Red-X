import React from 'react';
import App from '../App.js';
import AllProjects from '../components/allProjects.js';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {apiData} from './ApiData.js';

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json(apiData))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Home', () => {
  test('Renders loading message on landing page when no props sent', () => {
    render(<App />);
    const loadingMessage = screen.getByText(/Loading.../i);
    expect(loadingMessage).toBeInTheDocument();
  });

  test('Renders welcome message when api call is successfully resolved', async () => {
    render(<App />);
    const welcomeMessage = await waitFor(() => screen.getByText(/Welcome to Red-X/i));
    expect(welcomeMessage).toBeInTheDocument();
  })

  test('Renders links in the app header', () => {
    render(<App />);
    const homeLink = screen.getByText(/Home/i);
    const projectsLink = screen.getByText(/Projects/i);
    const requestsLink = screen.getByText(/Requests/i);
    expect(homeLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(requestsLink).toBeInTheDocument();
  });
});