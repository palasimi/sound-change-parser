// Iterate through tokens in code.
export function* tokenize(code: string): Iterable<string> {
  const lines = code.split("\n");
  for (const line of lines) {
    const tokens = line.split(/\s+/);
    for (const token of tokens) {
      if (token.startsWith("--")) {
        break;
      }
      if (token.length > 0) {
        yield token;
      }
    }
    yield "\n";
  }
}
