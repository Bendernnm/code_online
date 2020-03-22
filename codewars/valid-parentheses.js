function validParentheses(parens) {
  let count = 0;

  for (const paren of parens) {
    if (paren === '(') {
      count++;
      continue;
    }

    if (!count) {
      return false;
    }

    count--;
  }

  return !count;
}
