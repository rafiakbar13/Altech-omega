import { Palindrome } from "./Palindrome";
import { it, expect, describe } from '@jest/globals';
describe("Palindrome", () => {
    it("should return true for a palindrome string", () => {
        const str = "racecar";
        const expected = true;
        const result = Palindrome(str);
        expect(result).toEqual(expected);
    });

    it("should return false for a non-palindrome string", () => {
        const str = "hello";
        const expected = false;
        const result = Palindrome(str);
        expect(result).toEqual(expected);
    });

    it("should return true for a single character string", () => {
        const str = "a";
        const expected = true;
        const result = Palindrome(str);
        expect(result).toEqual(expected);
    });

    it("should return true for an empty string", () => {
        const str = "";
        const expected = true;
        const result = Palindrome(str);
        expect(result).toEqual(expected);
    });

    it("should ignore case sensitivity", () => {
        const str = "RaCecAr";
        const expected = true;
        const result = Palindrome(str);
        expect(result).toEqual(expected);
    });
});