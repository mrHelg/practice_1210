const vowels = ['a', 'u', 'e', 'i', 'o', 'A', 'U', 'E', 'I', 'O'];
const str = 'dsklKDiaoekfjSADfweqidsfjvksda';

// Option 1
const getStringLength1 = (str) => {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result++;
    }
  }
  return result;
};
console.log(getStringLength1(str));

// Option 2
const getStringLength2 = (str) =>
  str.split('').filter((item) => vowels.includes(item)).length;
console.log(getStringLength2(str));
