function solution(array) {
    var answer = [];
    answer.push(Math.max.apply(null , array));
    answer.push(array.indexOf(Math.max.apply(null , array)));
    
    return answer;
}