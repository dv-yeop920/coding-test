function solution(array) {
    
    const answer = array.sort((a,b) => {
        return a - b;
    });
    const result = Math.floor(array.length / 2);
    
    return answer[result];
}