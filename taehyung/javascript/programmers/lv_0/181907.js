/*
 * programmers
 * level: 0
 * problem: 문자열의 앞의 n글자
 * https://school.programmers.co.kr/learn/courses/30/lessons/181907
 */

function solution(my_string, n) {
  let result = "";
  // my_string 문자열 반복하면서 n만큼 빈문자열에 넣기
  for (let i = 0; i < n; i++) {
    result += my_string[i];
  }
  return result;
}
