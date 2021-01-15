const splitInput = (input) => {
  const newArray = [];
  let word = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== '*') {
      word += input[i];
    } else {
      newArray.push(word);
      word = '';
    }
  }
  if (word !== '' || word !== '*') {
    newArray.push(word);
  }
  if (word === '') {
    newArray.pop();
  }
  return newArray;
};

export default splitInput;
