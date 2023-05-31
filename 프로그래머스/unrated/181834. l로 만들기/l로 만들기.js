function solution(myString) {
    var answer = '';
    const edit = [...myString].map(item => {
        if(/[a-k]/.test(item)) {
            answer += item = 'l';
        }
        else {
            answer += item;
        }
    })
    return answer;
}