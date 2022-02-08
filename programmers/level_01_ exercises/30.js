// 30. 시저 암호

/*
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
 * 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
 * "z"는 1만큼 밀면 "a"가 됩니다.
 * 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 * 제한 조건
 *   - 공백은 아무리 밀어도 공백입니다.
 *   - s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
 *   - s의 길이는 8000이하입니다.
 *   - n은 1 이상, 25이하인 자연수입니다.
 */

// my result - non pass
// ASCII code를 사용하면 될 것 같았으나, 되지 않았다...
function solution(s, n) {
  var num = s.charCodeAt([0]) + n;
  var arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(String.fromCharCode([num + i]));
  }

  return arr.join("");
}

/**********************************
 * anothers result
 **********************************/
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}

// map을 사용한 방법
const rotate = (code, n, offset) => ((code - offset + n) % 26) + offset;
const push = (code, n) =>
  code < 65 ? code : rotate(code, n, code < 97 ? 65 : 97);
const caesar = (s, n) =>
  s
    .split("")
    .map((char) => String.fromCharCode(push(char.charCodeAt(0), n)))
    .join("");

function caesar_pretty(s, n) {
  return s
    .split("")
    .map((char) => String.fromCharCode(push(char.charCodeAt(0), n)))
    .join("");
}

// 범접 불가의 향이 느껴지는 답
function caesar(s, n) {
  var result = s.replace(
    /[a-z]/gi,
    (c) =>
      [
        (c = c.charCodeAt(0)),
        String.fromCharCode((c & 96) + (((c % 32) + n - 1) % 26) + 1),
      ][1]
  );

  // 함수를 완성하세요.
  return result;
}
