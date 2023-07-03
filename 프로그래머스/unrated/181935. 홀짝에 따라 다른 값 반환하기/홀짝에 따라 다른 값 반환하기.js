function solution(n) {
    let answer = 0;
    let answer2 = 0;
    for(let i = 1; i <= n; i++) {
        if(n % 2 === 1) {
            if(i % 2 === 1) {
            answer += i;
        }
        }
        if(n % 2 === 0) {
            if(i % 2 === 0) {
                answer2 = Math.pow(i , 2);
                answer = answer + answer2;
        }
        }
    }
    return answer;
}