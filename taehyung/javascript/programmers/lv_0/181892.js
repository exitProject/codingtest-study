/*
 * programmers
 * level: 0
 * problem: n 번째 원소부터
 * https://school.programmers.co.kr/learn/courses/30/lessons/181892
 */

function solution(num_list, n) {
  // n부터 빈 배열에 넣기
  let result = [];
  for (let i = n - 1; i < num_list.length; i++) {
    result.push(num_list[i]);
  }
  return result;
}
