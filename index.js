const vowels = ['a', 'u', 'e', 'i', 'o', 'A', 'U', 'E', 'I', 'O'];
const str = '';
const getStringLength = (str) => {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result++;
    }
  }
  return result;
};
console.log(getStringLength(str));