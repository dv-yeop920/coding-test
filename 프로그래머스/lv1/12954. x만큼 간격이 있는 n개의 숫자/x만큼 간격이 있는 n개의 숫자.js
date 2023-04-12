function solution(x, n) {
    var answer = [x];
    for(let i = 1;  i < n; i++) {
        x = x + (x / i)
        answer.push(x)
    }
    return answer;
}