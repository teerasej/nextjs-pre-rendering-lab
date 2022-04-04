
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'


test('renders a link', () => {
    render(<Home />)

    const linkToSSG = screen.getByRole('link').closest('a')

    expect(linkToSSG).toBeInTheDocument()
    expect(linkToSSG).toHaveAttribute('href','/StaticGenerationPost')
})
