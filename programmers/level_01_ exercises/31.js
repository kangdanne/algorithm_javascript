// 31. 2016년

/*
 * 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
 * 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
 * 요일의 이름은 일요일부터 토요일까지 각각
 * SUN,MON,TUE,WED,THU,FRI,SAT
 * 입니다.
 * 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
 * 제한 사항
 *  - 2016년은 윤년입니다.
 *  - 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
 */

// my result - Non pass
function solution(a, b) {
  function solution(a, b) {
    var week = ['FRI', 'SAT','SUN', 'MON' , 'TUE', 'WED', 'THU']
    
  var day = 0;
  
  for(let i = 1; i < a; i++){
      if(i == 2){
      day = day+29
    }else if( i == (1 || 3 || 5 || 7 || 8 || 10 || 12) ){
      day = day+31
    }else{
      day = day+30
    }  
  }
 console.log( Math.floor((((day + b) / 7)*10) % 10) )
 answer = Math.floor((((day + b) / 7)*10) % 10)
  
    return week[answer-1];
}

solution(5, 24)

/**********************************
 * anothers result
 **********************************/
// new Date()를 이용한 풀이
 function getDayName(a,b){
  var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

function getDayName(a,b){
  var dayList = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
  var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var daySum;
  if(a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
  return dayList[daySum % 7];
}
