function solution(absolutes, signs) {
    let answer = 0;
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] === false) {
            answer -= absolutes[i] * 2;
        }
        answer += absolutes[i];
    } 
    return answer;
}