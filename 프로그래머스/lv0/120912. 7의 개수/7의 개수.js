function solution(array) {
    let count = 0;
    const answer = array.join("").split('');
    answer.map(item => parseInt(item) === 7 ? count++ : item);
    return count;
}