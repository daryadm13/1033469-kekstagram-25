function generateNumber(from, to) {
  if (from >= to) {
    const tmp = from;
    from = to;
    to = tmp;
  }
  return Math.round(from + Math.random() * (to - from));
}

function generateRandomList(number) {
  const list = [];
  for (let i = 1; i <= number; i++) {
    list.push(i);
  }
  for (let i = 0; i < number; i++) {
    const j = generateNumber(1, number);
    const tmp = list[i];
    list[i] = list[j];
    list[j] = tmp;
  }
  return list;
}


function checkLenght(string, maxLength) {
  return string.length <= maxLength;
}

checkLenght('abab', 5);

export {generateNumber, generateRandomList};
