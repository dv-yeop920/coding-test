function solution(s) {
    const arr = s.split(" ");
    const result = `${ Math.min(...arr) } ${ Math.max(...arr) }`;
    
    return result;
}