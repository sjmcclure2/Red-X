import React from 'react';
import App from '../App.js';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import ProjectCard from '../components/projectCard.js';

const apiData = {
  projects: [
    {
    id: 2443,
    name: 'random-repository-name',
    description: 'This is the project description',
    last_activity_at: '2022-04-18T05:00:00.000Z',
    ssh_url_to_repo: 'git@repo1.dso.mil:dsop/frontiertechnology/cortex/application-api.git',
    http_url_to_repo: 'git@repo1.dso.mil:dsop/frontiertechnology/cortex/application-api.git',
    web_url: 'https://repo/application/api',
    avatar_url: 'http://someUrl',
    project_owner_id: 1,
    category_id: 2,
    status: 'active'
    }
  ]  
}

const server = setupServer(
  rest.get('/api/projects/id', (req, res, ctx) => {
    return res(ctx.json(apiData))
  }),
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('ProjectCard', () => {
  test('Page renders showing proper record from api', async () => {
    render(<ProjectCard />);
    const projectName = await waitFor(() => screen.getByText(/Id:/i));
    expect(projectName).toBeInTheDocument();
  });
});