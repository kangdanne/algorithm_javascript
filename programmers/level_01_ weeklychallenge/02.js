// 02. 부족한 금액 계산하기

/*
 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 
 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

 제한 사항
 - sizes의 길이는 1 이상 10,000 이하입니다.
 - sizes의 원소는 [w, h] 형식입니다.
 - w는 명함의 가로 길이를 나타냅니다.
 - h는 명함의 세로 길이를 나타냅니다.
 - w와 h는 1 이상 1,000 이하인 자연수입니다.
*/

// my result - pass
function solution(sizes) {
  var widths = [];
  var heights = [];

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort(function (a, b) {
      return a - b;
    });
    widths.push(sizes[i][0]);
    heights.push(sizes[i][1]);
  }

  return Math.max(...widths) * Math.max(...heights);
}

/**********************************
 * anothers result
 **********************************/
function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}
