function solution(array) {
    let count = 0;
    const answer = 
    array
    .join("")
    .split("")
    .map(item => {
        if(parseInt(item) === 7) return count++;
    });
    return count;
}