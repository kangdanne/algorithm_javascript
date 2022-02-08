// 04. 핸드폰 번호 가리기

/*
 * 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
 * 전화번호가 문자열 phone_number로 주어졌을 때,
 * 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
 * 제한 조건 : s는 길이 4 이상, 20이하인 문자열입니다.
 */

// my result - pass
function solution(phone_number) {
  var answer = phone_number.split("");

  return new Array(answer.length)
    .fill("*")
    .splice(0, answer.length - 4)
    .concat(answer.splice(answer.length - 4))
    .join("");
}

// my result refactoring
// - 자주 사용되는 값(answer.length)을 변수로 선언
function solution(phone_number) {
  var answer = phone_number.split("");
  var arrLength = answer.length;

  var arr = new Array(arrLength)
    .fill("*")
    .splice(0, arrLength - 4)
    .concat(answer.splice(arrLength - 4));

  return arr.join("");
}

// my opposite result
function solution(phone_number) {
  var answer = phone_number.split("");
  answer.splice(-4, 4, "***");
  return answer.join("");
}
solution("01033334444"); // '0103333***'
solution("027778888"); // '02777***'

/**********************************
 * anothers result
 **********************************/
function solution(phone_number) {
  var answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}
