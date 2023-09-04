/*
 * programmers
 * level: 0
 * problem: 문자열 곱하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181940
 */

function solution(my_string, k) {
  // k만큼 my_string 넣어주기
  let result = "";
  for (let i = 0; i < k; i++) {
    result += my_string;
  }
  return result;
}
