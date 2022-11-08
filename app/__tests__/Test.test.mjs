import { render, screen } from '@testing-library/react'
import Test from '../src/components/Test'

describe('Test', () => {
    test('renders Test component', () => {
        render(<Test />)

        screen.debug();
    })
})