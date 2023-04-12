function solution(n) {
    var result = '';
    var answer = String(n).split('').sort((a,b) => b - a);
    answer.map(item => result += item).join('');
    return Number(result);
}