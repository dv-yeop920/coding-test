function solution(message) {
    var answer = 0;
    for(let i = 1; i <= message.length; i++) {
        answer = i * 2;
    }
    return answer;
}