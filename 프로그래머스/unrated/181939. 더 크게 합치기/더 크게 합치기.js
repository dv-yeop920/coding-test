function solution(a, b) {
    let result = a.toString() + b.toString();
    let result2 = b.toString() + a.toString();
    
    if (result > result2) {
        return parseInt(result);
    }
    else {
        return parseInt(result2);
    }
}