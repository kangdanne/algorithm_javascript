// 25. 문자열 내 p와 y의 개수

/*
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
 * 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
 * 예를 들어 strings가 ["sun", "bed", "car"]이고
 * n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
 */

// my result - ing
function solution(strings, n) {
  var answer = [];
  var arr = [];

  for (let i = 0; i < strings.length; i++) {
    answer.push(strings[i][n]);
  }

  answer.sort();
  console.log(answer);

  for (let i = 0; i < strings.length; i++) {
    if (answer[i] === strings[i]) {
      console.log(strings[i][n]);
    }
    arr.push();
  }
  console.log(arr);

  return answer;
}
