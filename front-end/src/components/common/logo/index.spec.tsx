import { render, screen } from '@testing-library/react'
import { Logo } from '.'

it('renders Logo', () => {
	render(<Logo />)
	expect(screen.getByRole('img')).toBeInTheDocument()
})
