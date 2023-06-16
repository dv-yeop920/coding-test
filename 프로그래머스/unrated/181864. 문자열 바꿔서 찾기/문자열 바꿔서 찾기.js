function solution(myString, pat) {
    let answer = 0;
    let newString = [...myString].map(item => {
        if(item === 'A') {
            return item = 'B'
        }
        if(item === 'B') {
            return item = 'A';
        }
    }).join('').includes(pat) ? answer = 1 : answer;
    
    return answer;
}