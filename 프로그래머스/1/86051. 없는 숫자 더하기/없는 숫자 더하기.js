function solution(numbers) {
    let result = 0;
    for(let i = 0; i < 10; i++) {
        numbers.includes(i) ? null : result += i;
    }
    return result;
}