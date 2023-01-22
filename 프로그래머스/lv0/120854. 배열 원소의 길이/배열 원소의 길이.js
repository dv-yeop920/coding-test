function solution(strlist) {
    var answer = [];
    var result = 0;
    for(const i of strlist){
        for(let j = 0; j <= i.length; j++){
              result = j
        }
        answer.push(result);
    }
    return answer;
}