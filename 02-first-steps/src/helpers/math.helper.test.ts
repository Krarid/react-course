import { test, expect, describe } from 'vitest'
import { add, substract, multiply, division } from './math.helper';

describe('add', () => {
    test('should add two positives numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(3);
    });

    test('should add two negative numbers', () => {
        // ! 1. Arrange
        const a = -2;
        const b = -6;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(-8);
    });
});

describe('substract', () => {
    test('should substract two positives numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = substract(a, b);

        // ! 3. Assert
        expect(result).toBe(-1);
    });

    test('should substract two negative numbers', () => {
        // ! 1. Arrange
        const a = -2;
        const b = -6;

        // ! 2. Act
        const result = substract(a, b);

        // ! 3. Assert
        expect(result).toBe(4);
    });
});

describe('multiply', () => {
    test('should multiply two positives numbers', () => {
        // ! 1. Arrange
        const a = 8;
        const b = 2;

        // ! 2. Act
        const result = multiply(a, b);

        // ! 3. Assert
        expect(result).toBe(16);
    });

    test('should multiply two negative numbers', () => {
        // ! 1. Arrange
        const a = 3;
        const b = -6;

        // ! 2. Act
        const result = multiply(a, b);

        // ! 3. Assert
        expect(result).toBe(-18);
    });
});

describe('divide', () => {
    test('should divide two positives numbers', () => {
        // ! 1. Arrange
        const a = 8;
        const b = 2;

        // ! 2. Act
        const result = division(a, b);

        // ! 3. Assert
        expect(result).toBe(4);
    });

    test('should divide two negative numbers', () => {
        // ! 1. Arrange
        const a = 3;
        const b = -6;

        // ! 2. Act
        const result = division(a, b);

        // ! 3. Assert
        expect(result).toBe(-0.5);
    });
});