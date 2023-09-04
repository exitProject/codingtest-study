/*
 * programmers
 * level: 0
 * problem: flag에 따라 다른 값 반환하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/181933
 */

function solution(a, b, flag) {
  // flag에 따라 조건문
  if (flag) {
    return a + b;
  } else {
    return a - b;
  }
}
