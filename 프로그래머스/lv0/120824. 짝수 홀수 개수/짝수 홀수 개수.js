function solution(num_list) {
    var answer = [];
    var evan = 0;
    var odd = 0;
    for(const i of num_list){
        if(i % 2 === 0){
            evan++;
        }
    }
    answer.push(evan);
    for(const j of num_list){
        if(j % 2 !== 0){
            odd++;
        }
    }
    answer.push(odd);
    return answer;
}