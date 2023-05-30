function solution(rny_string) {
    var answer = '';
    let edit = [...rny_string].map(item => {
        if(item === 'm') {
            item = 'rn'
        }
        answer += item;
    })
    
    return answer;
}