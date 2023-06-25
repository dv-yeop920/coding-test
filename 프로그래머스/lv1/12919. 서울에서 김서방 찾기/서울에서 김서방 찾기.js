function solution(seoul) {
    let answer = '';
    for(let i = 0; i < seoul.length; i++) {
        if(seoul[i] === 'Kim' ) {
          return answer = `김서방은 ${seoul.indexOf(seoul[i])}에 있다`;  
        }
    }
}