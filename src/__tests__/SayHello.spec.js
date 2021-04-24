import React from 'react'
import {screen, render, cleanup} from '@testing-library/react'
import SayHello from '../components/SayHello'

afterEach(cleanup)

describe('<SayHello name="Jhon"/>', () => {
    it('renders hello jhon to the dom', () => {
        render(<SayHello name="Jhon" />);
      expect(screen.getByText('Hello Jhon!')).toBeInTheDocument()
    })
    it('renders hello howdy to the dom', () => {
        render(<SayHello />);
      expect(screen.getByText('Howdy!')).toBeInTheDocument()
    })
    it('renders hello michael to the dom', () => {
        render(<SayHello name="Michael" />);
      expect(screen.getByText(/hello michael/i)).toBeInTheDocument()
    })
})