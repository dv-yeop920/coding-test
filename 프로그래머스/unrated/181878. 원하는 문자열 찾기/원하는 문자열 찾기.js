function solution(myString, pat) {
    var answer = 0;
    const str = myString.toUpperCase();
    const str2 = pat.toUpperCase();
    str.includes(str2) ? answer = 1:answer;
    return answer;
}