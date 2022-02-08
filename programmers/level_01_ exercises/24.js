// 24. 문자열 내 p와 y의 개수

/*
 * 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
 * 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
 * 제한사항
 *  a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
 *  a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
 *  a와 b의 대소관계는 정해져있지 않습니다.
 */

// my result - pass
function solution(a, b) {
  var answer = Math.min(a, b);
  var count = Math.max(a, b) - Math.min(a, b);
  const arr = [];

  if (a === b) {
    return a;
  }

  for (let i = 0; i <= count; i++) {
    arr.push(answer);
    answer++;
  }

  return arr.reduce((prev, curr) => prev + curr);
}
/**********************************
 * anothers result
 **********************************/
// 공식을 활용한 방법
function adder(a, b) {
  var result = 0;
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

// while문을 활용한 방법
function adder(a, b) {
  var result = a < b ? a : b;
  while (a != b) {
    result += a < b ? ++a : ++b;
  }
  return result;
}
