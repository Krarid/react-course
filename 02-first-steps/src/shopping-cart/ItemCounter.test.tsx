import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react';
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
    test('should render with default values', () => {
        const name = 'Test item';

        render(<ItemCounter name={name} />);

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    test('should render with custom quantity', () => {
        const name = 'Control de Nintendo';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />);
        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('should increase count when +1 button is pressed', () => {
        //! 1. Arrange
        render(<ItemCounter name={'Test item'} quantity={1} />);
        const [buttonAdd] = screen.getAllByRole('button');

        //! 2. Act 
        fireEvent.click(buttonAdd);

        //! 3. Assert
        expect(screen.getByTestId('counter').innerHTML).toBe('2');
    });

    test('should decrease count when -1 button is pressed', () => {
        //! 1. Arrange
        render(<ItemCounter name={'Test item'} quantity={5} />);
        const [, buttonSubtract] = screen.getAllByRole('button');

        //! 2. Act 
        fireEvent.click(buttonSubtract);

        //! 3. Assert
        expect(screen.getByTestId('counter').innerHTML).toBe('4');
    });

    test('should not decrease count when -1 button is pressed and quantity is 0', () => {
        //! 1. Arrange
        render(<ItemCounter name={'Test item'} quantity={1} />);
        const [, buttonSubtract] = screen.getAllByRole('button');

        //! 2. Act 
        fireEvent.click(buttonSubtract);

        //! 3. Assert
        expect(screen.getByTestId('counter').innerHTML).toBe('1');
    });

    test('should change to red when count is 1', () => {
        const quantity = 1;
        const name = 'Test item';
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('red');
    });

    test('should change to black when count is greater than 1', () => {
        const quantity = 2;
        const name = 'Test item';
        render(<ItemCounter name={name} quantity={quantity} />);

        const itemText = screen.getByText(name);
        expect(itemText.style.color).toBe('black');
    });
});