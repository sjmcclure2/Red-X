import React from 'react';
import NewRequest from './newRequest';
import {render, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('New request post', () => {
  test('Successfully posts a new request to the API', () => {
    render(<NewRequest />)
    
  })
})