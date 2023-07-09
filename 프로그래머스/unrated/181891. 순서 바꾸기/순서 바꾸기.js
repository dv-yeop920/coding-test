function solution(num_list, n) {
    var answer = [];
    const newNumList = num_list.splice(n);
    answer = [...newNumList , ...num_list]
    return answer;
}