// 15. 이상한 문자 만들기

/*
 * 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
 * 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
 * 각 단어의 짝수번째 알파벳은 대문자로,
 * 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 * 제한 사항
 *   - 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
 *   - 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
 */

// my result - pass
function solution(s) {
  var answer = s.split(" ");

  return answer
    .map((v) =>
      v
        .split("")
        .map((y, idx) =>
          idx % 2 == 0 ? v[idx].toUpperCase() : v[idx].toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

// my result refactoring
// 삼항연산자의 중복된 코드를 줄인 방식
function solution(s) {
  var answer = s.split(" ");
  return answer
    .map((v) =>
      v
        .split("")
        .map((y, idx) => v[idx][idx % 2 == 0 ? "toUpperCase" : "toLowerCase"]())
        .join("")
    )
    .join(" ");
}
/**********************************
 * anothers result
 **********************************/
// replace메서드와 정규식을 활용한 풀이
function solution(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
