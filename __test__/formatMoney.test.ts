import { describe, expect, test } from "@jest/globals";
import { formatMoney } from "../lib/formatMoney";

describe("formatMoney function", () => {
  test("works with fractional dollars", () => {
    expect(formatMoney(1)).toEqual("$0.01");
    expect(formatMoney(10)).toEqual("$0.10");
    expect(formatMoney(9)).toEqual("$0.09");
    expect(formatMoney(40)).toEqual("$0.40");
  });
  test("leaves cents off for whole dollars", () => {
    expect(formatMoney(5000)).toEqual("$50");
    expect(formatMoney(100)).toEqual("$1");
    expect(formatMoney(50000000)).toEqual("$500,000");
  });
  test("works with whole and fractional dollars", () => {
    expect(formatMoney(5012)).toEqual("$50.12");
    expect(formatMoney(101)).toEqual("$1.01");
    expect(formatMoney(110)).toEqual("$1.10");
    expect(formatMoney(239)).toEqual("$2.39");
  });
});
