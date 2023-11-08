import { FishBash } from '../src/FishBash';


describe("fishBash", () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, "log").mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('should print "fish" for numbers divided by 3', () => {
        FishBash(6);
        expect(consoleSpy).toHaveBeenCalledWith("fish");
    });

    it('should print "bash" for numbers divided by 5', () => {
        FishBash(10);
        expect(consoleSpy).toHaveBeenCalledWith("bash");
    });

    it('should print "fish bash" for numbers divided by 15', () => {
        FishBash(30);
        expect(consoleSpy).toHaveBeenCalledWith("fish bash");
    });

    it('should print the number if not divided by 3 or 5', () => {
        FishBash(7);
        expect(consoleSpy).toHaveBeenCalledWith(7);
    });
});