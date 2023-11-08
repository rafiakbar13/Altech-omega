import { FishBash } from "./FishBash";
import { it, expect, describe } from '@jest/globals';
describe("FishBash", () => {
    it("should return the correct output for n = 15", () => {
        const expected = "1\n2\nfish\n4\nbash\nfish\n7\n8\nfish\nbash\n11\nfish\n13\n14\nfish bash";
        const result = captureConsoleOutput(() => FishBash(15));
        expect(result).toEqual(expected);
    });

    it("should return the correct output for n = 20", () => {
        const expected = "1\n2\nfish\n4\nbash\nfish\n7\n8\nfish\nbash\n11\nfish\n13\n14\nfish bash\n16\n17\nfish\n19\nbash";
        const result = captureConsoleOutput(() => FishBash(20));
        expect(result).toEqual(expected);
    });

    it("should return the correct output for n = 30", () => {
        const expected = "1\n2\nfish\n4\nbash\nfish\n7\n8\nfish\nbash\n11\nfish\n13\n14\nfish bash\n16\n17\nfish\n19\nbash\nfish\n22\n23\nfish\nbash\n26\nfish\n28\n29\nfish bash";
        const result = captureConsoleOutput(() => FishBash(30));
        expect(result).toEqual(expected);
    });

    it("should return the correct output for n = 1", () => {
        const expected = "1";
        const result = captureConsoleOutput(() => FishBash(1));
        expect(result).toEqual(expected);
    });
});

function captureConsoleOutput(callback: () => void): string {
    const log = console.log;
    let output = "";
    console.log = (value: string) => {
        output += value + "\n";
    };
    callback();
    console.log = log;
    return output.trim();
}