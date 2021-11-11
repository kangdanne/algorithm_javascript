// 06. 평균 구하기

/*
 * 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
 */

// my result - pass
function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

// my result refactoring
// for문은 es6 문법은 for...of 문법으로 수정
function solution(arr) {
  var answer = 0;
  for (let value of arr) {
    answer += value;
  }
  return answer / arr.length;
}

/**********************************
 * anothers result
 **********************************/
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
