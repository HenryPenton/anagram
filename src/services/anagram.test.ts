import { anagram } from "./anagram";

describe("anagram", () => {
  test("gives every option for a single letter", () => {
    expect(anagram("a")).toEqual(["a"]);
  });

  test("gives every option for a different single letter", () => {
    expect(anagram("b")).toEqual(["b"]);
  });

  test("gives every option for a different single letter", () => {
    expect(anagram("b")).toEqual(["b"]);
  });
});
