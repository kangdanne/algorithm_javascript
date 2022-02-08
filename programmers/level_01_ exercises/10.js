// 10. 최대공약수와 최소공배수

/*
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
 * 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
 * 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
 * 제한 사항
 *   두 수는 1이상 1000000이하의 자연수입니다.
 */

// my result - pass
function solution(n, m) {
  var answer = [];
  let greatestCommoFactor = 0;
  let leastCommoMultiple = 0;

  if (n % m === 0 || m % n === 0) {
    greatestCommoFactor = Math.min(n, m);
    leastCommoMultiple = Math.max(n, m);
  } else {
    for (let i = 1; i < Math.max(n, m); i++) {
      if (n % i === 0 && m % i === 0) {
        greatestCommoFactor = i;
      }
    }

    leastCommoMultiple = (n * m) / greatestCommoFactor;
  }

  answer.push(greatestCommoFactor, leastCommoMultiple);
  return answer;
}

/**********************************
 * anothers result
 **********************************/
// 유클리드 호제법과 재귀함수를 활용해 최대공약수를 구하는 로직
function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
function leastCommonMultipleOfTwo(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}
function solution(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}
