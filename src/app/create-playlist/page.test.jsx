import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CreatePlaylist from './page'

describe('CreatePlaylist', () => {
    it('renders a heading', () => {
        render(<CreatePlaylist />)

        //const heading = screen.getByRole('heading', { level: 1 })
        //const heading = screen.getByText('Docs')
        const heading = screen.getByText('Create Playlist');

        expect(heading).toBeInTheDocument()
    })
})