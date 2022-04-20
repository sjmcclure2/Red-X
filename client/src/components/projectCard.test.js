import React from 'react';
import ProjectCard from './projectCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ProjectCard', () => {
  test('Project name is rendered to the screen', async () => {
    render(<ProjectCard />)
    const projectName = await screen.getByText('random-repository-name');
    expect(projectName).toBeInTheDocument();
  });

  test('Project name is rendered to the screen', async () => {
    render(<ProjectCard />)
    const projectName = await screen.getByText('Title:');
    expect(projectName).toBeInTheDocument();
  });

  test('Project name is rendered to the screen', async () => {
    render(<ProjectCard />)
    const projectName = await screen.getByText('Title:');
    expect(projectName).toBeInTheDocument();
  });
});