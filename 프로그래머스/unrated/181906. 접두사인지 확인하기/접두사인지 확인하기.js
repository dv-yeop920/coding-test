function solution(myString, isPrefix) {
    var answer = 0;
    myString.startsWith(isPrefix) ? answer = 1:answer;
    return answer;
}