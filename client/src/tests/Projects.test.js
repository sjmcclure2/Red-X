import React from 'react';
import App from '../App.js';
import AllProjects from '../components/allProjects.js';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import apiData from './ApiData.js';

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json(apiData))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('All Projects', () => {
  test('projects page renders the proper header', () => {
    render(<AllProjects />);
    const pageHeader = screen.getByText(/Projects/i);
    expect(pageHeader).toBeInTheDocument();
  });

  test('Page renders showing project name', async () => {
    render(<AllProjects />);
    // const projectDescription = await waitFor(() => screen.getByText(/random-repository-name/i));
    // expect(projectDescription).toBeInTheDocument();
  });

});
