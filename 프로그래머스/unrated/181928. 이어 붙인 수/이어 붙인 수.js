function solution(num_list) {
    let odd = [];
    let even = [];
    let result = 0;
    num_list.map(item => {
        if(item % 2 === 1) {
            odd.push(item.toString());
        }
        if(item % 2 === 0) {
            even.push(item.toString());
        }
        result = parseInt(odd.join("")) + parseInt(even.join(""));
        
    });
    return result;
}