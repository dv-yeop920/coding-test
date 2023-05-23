function solution(n, control) {
    let count = n;
    for(let i = 0; i < control.length; i++) {
        if(control[i] === 'w') {
            count += 1;
        } 
        if(control[i] === 's') {
            count -= 1;
        }
        if(control[i] === 'd') {
            count += 10;
        }
        if(control[i] === 'a') {
            count -= 10;
        }
    }
    return count;
}