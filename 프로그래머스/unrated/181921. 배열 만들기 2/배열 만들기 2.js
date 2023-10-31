function solution(l, r) {
    const result = [];

    for (let i = l; i <= r; i++) {
        if(/^[50]+$/.test(i)) {
            result.push(i)
        }
    }
    
    const some = result.some(num => /^[50]+$/.test(num));

    if(some) {
        return result;
    }
    else {
        return [-1];
    }

}