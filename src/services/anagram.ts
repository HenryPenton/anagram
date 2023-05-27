export const anagram = (input: string) => {
  const possibilities: string[] = [];
  const chars = input.split("");

  const maxLength = chars.length;

  for (
    let lengthToGenerate = 1;
    lengthToGenerate < maxLength + 1;
    lengthToGenerate++
  ) {
    const index = lengthToGenerate - 1;

    if (lengthToGenerate === 1) {
      for (const char of chars) {
        possibilities.push(char);
      }
    }

    if (lengthToGenerate === 2) {
      possibilities.push(`${chars[0]}${chars[1]}`);
      possibilities.push(`${chars[1]}${chars[0]}`);
    }
  }

  return possibilities;
};
