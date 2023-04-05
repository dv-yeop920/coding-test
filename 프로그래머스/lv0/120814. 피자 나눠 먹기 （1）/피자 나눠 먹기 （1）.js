function solution(n) {
    let count = 0;
    for(let i = 0; i < n; i++){
            if(i % 7 === 0) {
                count++
            }
    }
    
    return count;
}