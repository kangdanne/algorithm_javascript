// 04. 위장

/*
https://school.programmers.co.kr/learn/courses/30/lessons/42578
*/

// my result - in progress
function solution(clothes) {
  var answer = 0;
  const item = {};

  let count = 1;

  for (i = 0; i < clothes.length; i++) {
    item[clothes[i][1]] = count;
    count = +1;
    console.log(item);
  }

  return answer;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
