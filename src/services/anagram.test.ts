import { anagram } from "./anagram";

describe("anagram", () => {
  test("gives every option for a single letter", () => {
    expect(anagram("a")).toEqual(["a"]);
  });

  test("gives every option for a different single letter", () => {
    expect(anagram("b")).toEqual(["b"]);
  });

  test("gives every option for two letters", () => {
    expect(anagram("ab")).toEqual(["a", "b", "ab", "ba"]);
  });

  test("gives every option for a different two letters", () => {
    expect(anagram("cd")).toEqual(["c", "d", "cd", "dc"]);
  });
});
