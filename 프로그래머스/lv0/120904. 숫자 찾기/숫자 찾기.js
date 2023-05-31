function solution(num, k) {
    var answer = num.toString().indexOf(k) + 1;
    num.toString().includes(k) ? answer : answer = -1;
    return answer;
}