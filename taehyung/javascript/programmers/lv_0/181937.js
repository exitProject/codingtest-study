/*
 * programmers
 * level: 0
 * problem: n의 배수
 * https://school.programmers.co.kr/learn/courses/30/lessons/181937
 */

function solution(num, n) {
  // % 나머지 연산자로 배수 구하기
  // 0이면 1, 아니면 0
  if (num % n === 0) {
    return 1;
  } else {
    return 0;
  }
}
