import { it, expect, describe } from '@jest/globals';
import { sortArray } from '../src/Array';

describe("sortArray", () => {
    it("should sort an array of numbers in ascending order", () => {
        const arr = [3, 1, 4, 2];
        const expected = [1, 2, 3, 4];
        const result = sortArray(arr);
        expect(result).toEqual(expected);
    });

    it("should return an empty array if given an empty array", () => {
        const arr: number[] = [];
        const expected: number[] = [];
        const result = sortArray(arr);
        expect(result).toEqual(expected);
    });

    it("should return the same array if given an array with only one element", () => {
        const arr = [42];
        const expected = [42];
        const result = sortArray(arr);
        expect(result).toEqual(expected);
    });

    it("should sort an array of negative numbers in ascending order", () => {
        const arr = [-3, -1, -4, -2];
        const expected = [-4, -3, -2, -1];
        const result = sortArray(arr);
        expect(result).toEqual(expected);
    });

    it("should sort an array of mixed positive and negative numbers in ascending order", () => {
        const arr = [-3, 1, -4, 2];
        const expected = [-4, -3, 1, 2];
        const result = sortArray(arr);
        expect(result).toEqual(expected);
    });
});