function solution(n) {
    var answer = 0;
    var num = (n + '').split('');
    for(const i of num){
        answer += Number(i);
    }
    
    return answer;
}