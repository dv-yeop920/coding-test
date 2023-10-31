function solution(s){
    /*
    s를 순회해서 p와 y의 갯수를 카운팅 해야 한다
    p와 y는 대소문자 로 이루어져 있기 때문에 대문자로 통일 시킨다
    요소가 p 나 y 면 카운트를 각각 증가 시킨다
    카운팅 된 숫자를 비교해서 true false 반환 한다
    */
    let countOfP = 0;
    let countOfY = 0;
    let arr = [...s].map(item => {
        const py = item.toUpperCase();
        py === 'P' && countOfP++;
        py === 'Y' && countOfY++;
        
    });

    if(countOfP === countOfY) {
            return true;
        }
        else {
            return false;
        }
}