import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Filled } from '../demos/IconButton.stories'
import IconButton from '../IconButton'

describe('Button', () => {
  it('renders all kinds of styles', () => {
    render(<Filled {...Filled.args} />)
    expect(screen.getAllByText(/settings/i)).toHaveLength(2)
  })

  it('can be clicked', () => {
    const spyOnClick = jest.fn()
    render(<IconButton icon="settings" onClick={spyOnClick} />)
    fireEvent.click(screen.getByText(/settings/i))
    expect(spyOnClick).toHaveBeenCalled()
  })
})
