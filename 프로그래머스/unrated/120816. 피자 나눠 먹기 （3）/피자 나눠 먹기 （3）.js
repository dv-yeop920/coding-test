function solution(slice, n) {
    let count = 0;
    count = Math.floor( (n - 1) / slice) + 1;
    return count;
}