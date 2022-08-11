import { add2Nums, calculateTip, greet } from "./index.js";

test("1 + 1 = 2", () => {
  expect(add2Nums(1, 1)).toBe(2);
});

describe("greet", () => {
  test("it greets with the correct name", () => {
    expect(greet("Ayo")).toBe("Hello Ayo");
    expect(greet("Osho")).toBe("Hello Osho");
  });
});

describe("calculateTip", () => {
  it("calculates a $10 tip on a $100 tab at 10%", () => {
    expect(calculateTip(100, 10)).toBe(10);
    expect(calculateTip(100, 20)).toBe(20);
  });

  it("calculate with a default tip of 20%", () => {
    expect(calculateTip(100)).toBe(20);
  });
});
