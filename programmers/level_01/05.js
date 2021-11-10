// 05. 하샤드 수

/*
 * 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
 * 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
 * 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
 */

// my result - pass
function solution(x) {
  let answer = true;
  let arr = x.toString().split("");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + Number(arr[i]);
  }

  if (x % sum !== 0) {
    return false;
  }

  return answer;
}

// my result refactoring
// 효율이 떨어지는 변수 선언 제거
// if 문을 삼항연산자로 수정
function solution(x) {
  let arr = x.toString().split("");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }

  return x % sum == 0 ? true : false;
}

/**********************************
 * anothers result
 **********************************/
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}
