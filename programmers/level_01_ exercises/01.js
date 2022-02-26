// 01. 직사각형 별 찍기
/*
 * 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
 * (*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
 * 제한 조건 : n과 m은 각각 1000 이하인 자연수입니다.
 */

// my answer - pass
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let row = [];
  let column = [];

  for (let i = 0; i < a; i++) {
    row.push("*");
  }

  for (let j = 0; j < b; j++) {
    column.push(row.join(""));
  }

  console.log(column.join(`\n`));
});

// another answer
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const star = `${"*".repeat(a)}\n`;

  console.log(star.repeat(b));
});
