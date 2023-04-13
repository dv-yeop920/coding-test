function solution(arr) {
    var answer = [];
    if(arr.length <= 1) {
        return [-1];
    }
    if(arr) {
        arr.splice(arr.indexOf(Math.min(...arr)) , 1);
        return answer = arr;
    }
    
}