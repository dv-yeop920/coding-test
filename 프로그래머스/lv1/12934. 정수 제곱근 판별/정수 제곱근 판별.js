function solution(n) {
    let answer = Math.sqrt(n);
    
    if(Math.floor(answer) !== answer) {
        return -1
    }
    if(answer) {
        return (answer + 1) * (answer + 1);
    }
  
}