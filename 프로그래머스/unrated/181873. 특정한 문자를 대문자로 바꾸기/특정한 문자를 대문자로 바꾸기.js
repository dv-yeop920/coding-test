function solution(my_string, alp) {
    const answer = [...my_string].map(item => item === alp ? item.toUpperCase() : item).join('');
    return answer;
}