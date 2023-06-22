function solution(my_string) {
    let result = [];
    const answer = my_string.split(' ').map(item => {
        item !== '' ? result.push(item) : null;
    })
    return result;
}