function solution(num_list) {
    let plus = 0;
    let plus2 = 0;
    let multiply = 1;
    for(const i of num_list) {
        multiply *= i;
        plus += i;
        plus2 = Math.pow(plus , 2);
    }
    if(multiply < plus2) {
        return 1;
    }
    else {
        return 0;
    }
    
}