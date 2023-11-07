function solution(a, b) {
    let result = String(a) + String(b);
    let result2 = String(b) + String(a);
    
    if (result > result2) {
        return Number(result);
    }
    else {
        return Number(result2);
    }
}