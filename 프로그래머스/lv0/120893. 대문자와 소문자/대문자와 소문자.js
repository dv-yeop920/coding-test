function solution(my_string) {
    var answer = '';
    const edit = [...my_string].map(item => {
        if(/[a-z]/.test(item)) {
            answer += item.toUpperCase();
        }
        if(/[A-Z]/.test(item)) {
            answer += item.toLowerCase();
        }
    })
    return answer;
}