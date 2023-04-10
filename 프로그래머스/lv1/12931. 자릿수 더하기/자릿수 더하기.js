function solution(n) {
    let result = 0;
    const answer = String(n).split('');
    answer.map(item => {
        return result += Number(item);
    })
    return result;
}