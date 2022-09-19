const addNumbers = (a: number, b: number) => {
  return a + b;
};

describe("First test", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });
  it("should add two numbers", () => {
    expect(addNumbers(14343, 6342)).toBe(20685);
  });
});
