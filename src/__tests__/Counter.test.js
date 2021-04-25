import React from 'react'
import {cleanup, fireEvent, screen, render} from '@testing-library/react'
import Counter from '../components/Counter'

afterEach(cleanup)

describe('<Counter />', () => {
    it('count incremented button clicks', () => {
        const {getByTestId} = render(<Counter />);
        fireEvent.click(getByTestId('count'))
        expect(screen.getByTestId('count')).toHaveTextContent('You Clicked - 1 times')
    })
    it('count decremented button click', () => {
        const {getByTestId} = render(<Counter />);
        fireEvent.click(getByTestId('count'))
        fireEvent.click(getByTestId('count'))
        fireEvent.click(getByTestId('count'))
        fireEvent.click(getByTestId('count-dec'))
        expect(screen.getByTestId('count-dec')).toHaveTextContent('You Clicked - 2 times')
    })
    it('set count zero', () => {
        const {getByTestId} = render(<Counter />);
        fireEvent.click(getByTestId('count'))
        fireEvent.click(getByTestId('count-dec'))
        fireEvent.click(getByTestId('count'))
        fireEvent.click(getByTestId('count-dec'))
        fireEvent.click(getByTestId('count'))
        fireEvent.click(getByTestId('count'))
        fireEvent.click(getByTestId('count-zero'))
        expect(screen.getByTestId('count-zero')).toHaveTextContent('You Clicked - 0 times')
    })
})
