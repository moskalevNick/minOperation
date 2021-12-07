const word1 = 'intention';
const word2 = 'execution';

const minOperations = (string1, string2) => {
  let ct0 = 0;
  let ct1 = 0;

  for (let i = 0; i < string2.length; i++) {
    if (string1[i] === string2[i]) {
      continue;
    }

    if (string1[i] === '0') {
      ct0++;
    } else {
      ct1++;
    }
  }

  return Math.max(ct0, ct1);
};

const res = minOperations(word1, word2);

console.log('result', res);
