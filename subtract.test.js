const subtract = require("./subtract");

describe("subtract() function", () => {
    test("should subtract two positive numbers", () => {
        expect(subtract(10, 5)).toBe(5);
    });

    test("should subtract two negative numbers", () => {
        expect(subtract(-10, -5)).toBe(-5);
    });

    test("should handle zero", () => {
        expect(subtract(10, 0)).toBe(10);
    });

    test("should return zero when numbers are equal", () => {
        expect(subtract(5, 5)).toBe(0);
    });

    test("should handle negative result", () => {
        expect(subtract(5, 10)).toBe(-5);
    });

    test("should subtract decimal numbers", () => {
        expect(subtract(10.5, 2.5)).toBe(8);
    });
});
