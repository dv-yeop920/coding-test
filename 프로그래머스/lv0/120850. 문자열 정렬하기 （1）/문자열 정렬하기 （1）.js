function solution(my_string) {
    let result = [];
    const edit = [...my_string].map(item => {
        if(/[0-9]/.test(item)) {
            result.push(Number(item));
        }
    })
    return result.sort((a,b) => a - b);
}