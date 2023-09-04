/*
 * programmers
 * level: 0
 * problem: 길이에 따른 연산
 * https://school.programmers.co.kr/learn/courses/30/lessons/181879
 */

function solution(num_list) {
  // length로 길이에 따른 조건문
  // reduce 이용해서 각 값 더하여 리턴
  if (num_list.length >= 11) {
    return num_list.reduce((acc, num) => acc + num);
  } else {
    return num_list.reduce((acc, num) => acc * num);
  }
}
