function solution(my_string) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++) {
        const vowel = /[aeiou]/.test(my_string[i]);
        if(!vowel) {
            answer += my_string[i]
        }
    }
    return answer;
}