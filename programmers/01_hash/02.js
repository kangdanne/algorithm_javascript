// 02. 포켓몬

/*
https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript
*/

// my result - non pass
function solution(nums) {
  let answer = 0;
  let amount = nums.length / 2;
  let char = {};

  nums.forEach(function (i) {
    char[i] = 0;
  });

  if (Object.keys(char).length > amount) {
    answer = amount;
  } else {
    answer = Object.keys(char).length;
  }

  return answer;
}
