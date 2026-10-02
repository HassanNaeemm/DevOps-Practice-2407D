const add = require("../main");

describe("add() function", () => {

    test("should add two positive numbers", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("should add two negative numbers", () => {
        expect(add(-2, -3)).toBe(-5);
    });

    test("should add a positive and negative number", () => {
        expect(add(10, -5)).toBe(5);
    });

    test("should return the same number when adding zero", () => {
        expect(add(10, 0)).toBe(10);
    });

    test("should return zero when adding two zeros", () => {
        expect(add(0, 0)).toBe(0);
    });

    test("should add decimal numbers", () => {
        expect(add(2.5, 3.5)).toBe(6);
    });

    test("should handle large numbers", () => {
        expect(add(1000000, 2000000)).toBe(3000000);
    });

});
