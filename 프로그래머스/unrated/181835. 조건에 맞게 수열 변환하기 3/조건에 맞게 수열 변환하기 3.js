function solution(arr, k) {
    var answer = [];
    arr.map(item => {
        if(k % 2 === 1) {
            answer.push(item * k);
        }
        if(k % 2 === 0) {
            answer.push( item + k);
        }
    })
    return answer;
}