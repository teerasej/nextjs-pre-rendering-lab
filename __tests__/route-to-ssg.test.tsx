import { getPage } from 'next-page-tester';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { link } from 'fs';

test('Home Page', async () => {
  
    const { render } = await getPage({
      route: '/',
    });

    render();
    expect(screen.getByText('Hello')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('link'));
    expect(await screen.findByText('SSG')).toBeInTheDocument();
});