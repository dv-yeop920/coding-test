function solution(number) {
    var answer = 0;
    for(let i = 0; i < number.length; i++) {
        answer += Number(number[i]);
    }
    const result = answer % 9;
    return result;
}