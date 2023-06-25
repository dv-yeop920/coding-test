function solution(seoul) {
    var answer = '';
    for(let i = 0; i < seoul.length; i++) {
        seoul[i] === 'Kim' 
        ? answer = `김서방은 ${seoul.indexOf(seoul[i])}에 있다`
        :null;
    }
    return answer;
}