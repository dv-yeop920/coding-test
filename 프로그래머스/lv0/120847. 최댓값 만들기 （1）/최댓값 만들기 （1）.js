function solution(numbers) {
    var answer = 0;
    answer = numbers.sort((a,b) => b - a);
    for(let i = 0; i <= answer.length; i++) {
        return answer[i] * answer[i+1];
    }
    
    return answer;
}