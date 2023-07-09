function solution(num_list) {
    let answer = [...num_list];
    const list1 = num_list[num_list.length -1];
    const list2 = num_list[num_list.length -2];
    list1 > list2 
        ? answer.push(list1 - list2) 
        : answer.push(list1 * 2);
    return answer
}