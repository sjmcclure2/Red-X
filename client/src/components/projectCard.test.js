import React from 'react';
import ProjectCard from './projectCard';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ProjectCard', () => {
  // beforeEach(() => {
  //   render(<ProjectCard />);
  // })
  test('Project name is rendered to the screen', async () => {
    await render(<ProjectCard />)
    await waitFor(() => {
      // const projectName = screen.getByText('renovate-testing');
      // console.log(projectName)
      // expect(projectName).toBeInTheDocument();
      expect(screen.findByText('renovate-testing')).toBeInTheDocument()
    }
  )});

  test('Project name is rendered to the screen', async () => {
    await render(<ProjectCard />)
    const projectName = await screen.getByText('Title:');
    expect(projectName).toBeInTheDocument();
  });

  test('Project name is rendered to the screen', async () => {
    await render(<ProjectCard />)
    const projectName = await screen.getByText('Title:');
    expect(projectName).toBeInTheDocument();
  });
});