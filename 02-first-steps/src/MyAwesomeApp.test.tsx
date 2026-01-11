import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
    test('Should render firstname and lastname - container', () => {
        const { container } = render(<MyAwesomeApp isActive={true} />);

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Javier');
        expect(h3?.innerHTML).toContain('Melendez');
    });

    test('Should render firstname and lastname - screen', () => {
        render(<MyAwesomeApp isActive={true} />);

        const h1 = screen.getByTestId('first-name-title');
        expect(h1?.innerHTML).toContain('Javier');
    });

    test('Should render false when isActive is false', () => {
        render(<MyAwesomeApp isActive={false} />);

        const text = screen.getByText('False');
        expect(text).toBeDefined();
    });

    test('should match snapshot - render', () => {
        const { container } = render(<MyAwesomeApp isActive={true} />);

        expect(container).toMatchSnapshot();
    });

    test('should match snapshot - screen', () => {
        render(<MyAwesomeApp isActive={true} />);
        expect(screen.getByTestId('div-app')).toMatchSnapshot();
    });
});