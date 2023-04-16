function solution(order) {
    var answer = 0;
    let num = order.toString();
    for(let i = 0; i <= num.length; i++) {
        if (num[i] === "0") {
            continue;
        }
        if(num[i] % 3 === 0) {
            answer++;
        }
    }
    return answer;
}