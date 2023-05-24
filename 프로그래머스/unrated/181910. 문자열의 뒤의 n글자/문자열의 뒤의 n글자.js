function solution(my_string, n) {
    var answer = [...my_string];
    const edit = answer.reverse().slice(0 , n);
    const result = edit.reverse().join('');
    return result;
}