import { getPage } from 'next-page-tester';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

test('Home Page', async () => {
  
    const { render } = await getPage({
      route: '/',
    })

    render()
    expect(screen.getByText('Hello')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('link'))
    expect(await screen.findByText('SSG')).toBeInTheDocument()
    expect(await screen.findByText('1. tody with 2 members')).toBeInTheDocument()
});