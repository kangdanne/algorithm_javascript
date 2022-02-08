// 13. 자릿수 더하기

/*
 * 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
 * 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
 * 제한 조건
 *  N의 범위 : 100,000,000 이하의 자연수
 */

// my result - pass
function solution(n) {
  var answer = 0;

  do {
    answer += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);

  return answer;
}

/**********************************
 * anothers result
 **********************************/
// Arrow function과 reduce를 이용한 풀이
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
