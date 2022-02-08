// 25. 문자열 내 마음대로 정렬하기

/*
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
 * 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
 * 예를 들어 strings가 ["sun", "bed", "car"]이고
 * n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
 */

// my result
function solution(strings, n) {
  var answer = [];
  var magic = "";

  for (var i = 0; i < strings.length; i++) {
    magic = strings[i][n];
    strings[i] = magic + strings[i];
  }
  strings.sort();
  console.log(strings);

  for (var i = 0; i < strings.length; i++) {
    strings[i] = strings[i].substr(1);
    answer.push(strings[i]);
  }
  return answer;
}

/**********************************
 * anothers result
 **********************************/
// localeCompare()를 이용한 방법
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

// boolean을 이용한 방법
function solution(strings, n) {
  return strings.sort((a, b) => {
    const chr1 = a.charAt(n);
    const chr2 = b.charAt(n);

    if (chr1 == chr2) {
      return (a > b) - (a < b);
    } else {
      return (chr1 > chr2) - (chr1 < chr2);
    }
  });
}
