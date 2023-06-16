function solution(num_list) {
    let num1 = 0;
    let num2 = 0;
    let result = 0;
    for(let i = 0; i < num_list.length; i++) {
        if(i % 2 === 0) {
            num1 += num_list[i];
        }
        if(i % 2 === 1) {
            num2 += num_list[i];
        }
    }
    if(num1 >= num2) {
        return result = num1;
    }
    if(num1 <= num2) {
        return result = num2;
    }
}