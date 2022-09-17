const addNumbers = (a, b) => {
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

// Language: typescript
// Path: __test__/first.test.tsx
// Compare this snippet from components/Checkout/CheckoutForm.tsx:
