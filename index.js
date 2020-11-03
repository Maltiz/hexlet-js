import _ from 'lodash';

console.log('Hello, World');
console.log(_.last(['one', 'two']));
const first = 3;
let  second = 6;
const sum = (first, second) => {
  const result = first + second;
  return result;
};
console.log(sum(first, second));
return;