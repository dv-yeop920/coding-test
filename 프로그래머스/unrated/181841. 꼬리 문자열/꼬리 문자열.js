function solution(str_list, ex) {
    const answer = [];
    str_list.map(item => {
        if(item.includes(ex) === false)
           return answer.push(item);
    })
    return answer.join("");
}