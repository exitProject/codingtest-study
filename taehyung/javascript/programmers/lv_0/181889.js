/*
 * programmers
 * level: 0
 * problem: n 번째 원소까지
 * https://school.programmers.co.kr/learn/courses/30/lessons/181889
 */

function solution(num_list, n) {
  // 빈 배열 만들기
  let result = [];

  // num_list를 반복하면서 n까지 빈배열에 넣기
  for (let i = 0; i < n; i++) {
    result.push(num_list[i]);
  }
  return result;
}
