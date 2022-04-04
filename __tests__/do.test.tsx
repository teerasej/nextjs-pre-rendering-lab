
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'


test('renders a link', () => {
    render(<Home />)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
})
