function solution(n) {
    var answer = 0;
    if(n % Math.sqrt(n) === 0) {
        return answer = 1;
    }else {
        return answer = 2;
    }
    return answer;
}