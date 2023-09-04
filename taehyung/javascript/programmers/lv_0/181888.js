/*
 * programmers
 * level: 0
 * problem: n개 간격의 원소들
 * https://school.programmers.co.kr/learn/courses/30/lessons/181888
 */

function solution(num_list, n) {
  let result = [];

  // num_list를 반복하면서 n개마다 빈배열에 넣기
  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list[i]);
  }
  return result;
}
