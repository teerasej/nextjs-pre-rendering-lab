import { getPage } from 'next-page-tester';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

test('Home Page', async () => {
  
    const page = await getPage({
      route: '/StaticGenerationPost'
    })

    page.render()

    const { html } = page.serverRenderToString();
    expect(html).toMatchSnapshot()

    // //expect(screen.getByText('Hello')).toBeInTheDocument()

    // expect(page.render().nextRoot).toMatchSnapshot()

    // screen.findAllByAltText
    // fireEvent.click(screen.getByRole('link'))
    // expect(await screen.findByText('SSG')).toBeInTheDocument()
    // expect(await screen.findByText('1. tody with 2 members')).toBeInTheDocument()
});