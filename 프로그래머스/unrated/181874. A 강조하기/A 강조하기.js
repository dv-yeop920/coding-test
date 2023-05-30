function solution(myString) {
    var answer = '';
    let edit = [...myString.replaceAll('a' , 'A')].map(item => {
        if(item === 'A') {
            answer += item
        }
        else {
            answer += item.toLowerCase();
        }
    })
    return answer;
}