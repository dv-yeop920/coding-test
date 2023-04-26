function solution(num_str) {
    let num = 0;
    var answer = num_str.split('');
    for(let i = 0; i < answer.length; i++) {
        num += Number(answer[i]);
    }
    return num;
}