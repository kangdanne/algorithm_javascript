// 26. 문자열 내 p와 y의 개수

/*
 * 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
 */

// my result
function solution(s) {
  var answer = "";

  if (s.length % 2 !== 0) {
    answer = s[Math.floor(s.length / 2)];
  } else {
    answer = s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
  }
  return answer;
}
