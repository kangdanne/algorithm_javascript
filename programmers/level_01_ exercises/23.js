// 23. 문자열 내 p와 y의 개수

/*
 * 대문자와 소문자가 섞여있는 문자열 s가 주어집니다.
 * s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True,
 * 다르면 False를 return 하는 solution를 완성하세요.
 * 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
 * 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
 * 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
 * 제한사항
 *  문자열 s의 길이 : 50 이하의 자연수
 *  문자열 s는 알파벳으로만 이루어져 있습니다.
 */

// my result - pass
function solution(s) {
  let countP = 0;
  let countY = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      countP += 1;
    } else if (s[i] === "y" || s[i] === "Y") {
      countY += 1;
    }
  }
  return countP === countY ? true : false;
}

/**********************************
 * anothers result
 **********************************/
// toUpperCase()와 split을 사용한 방법
function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// optional chaining을 사용한 방법
function solution(s) {
  return s.match(/p/gi)?.length === s.match(/y/gi)?.length;
}
