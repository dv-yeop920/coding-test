function solution(str_list, ex) {
    var answer = [];
    str_list.map(item => {
        item.includes(ex) ? null : answer.push(item);
    })
    return answer.join('');
}