function solution(strArr) {
    var answer = [];
    for(let i = 0; i < strArr.length; i++) {
        if(i % 2 === 0) {
            answer.push(strArr[i].toLowerCase());
        }
        if(i % 2 === 1) {
            answer.push(strArr[i].toUpperCase());
        }
    }
    return answer;
}