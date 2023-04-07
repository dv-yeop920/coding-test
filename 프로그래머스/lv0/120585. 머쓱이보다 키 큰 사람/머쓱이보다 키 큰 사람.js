function solution(array, height) {
    var answer = 0;
    for(const i of array) {
        if(i > height) {
            answer++;
        }
    }
    return answer;
}