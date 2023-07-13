function solution(strArr) {
    var answer = [];
    strArr.forEach(item => {
        return(
            item.includes('ad') === false ? answer.push(item) : null
        )
    })
    return answer;
}