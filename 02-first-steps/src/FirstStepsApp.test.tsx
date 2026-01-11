import { describe, test, expect, vi, afterEach } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render, screen } from '@testing-library/react';
//import { ItemCounter } from "./shopping-cart/ItemCounter";

const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe('FirstStepsApp', () => {
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />);

        expect(container).toMatchSnapshot();
    });

    test('should render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);

        const itemCounters = screen.getAllByTestId('ItemCounter');
        console.log(itemCounters.length);

        expect(itemCounters.length).toBe(3);
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo Switch 2',
            quantity: 1,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Pro Controller',
            quantity: 2,
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Super Smash',
            quantity: 5,
        });
    });
});