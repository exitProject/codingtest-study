/*
 * programmers
 * level: 0
 * problem: 부분 문자열
 * https://school.programmers.co.kr/learn/courses/30/lessons/181842
 */

function solution(str1, str2) {
  // includes 메서드로 str1이 str2의 부분문자열인지 확인
  if (str2.includes(str1)) {
    return 1;
  } else {
    return 0;
  }
}
