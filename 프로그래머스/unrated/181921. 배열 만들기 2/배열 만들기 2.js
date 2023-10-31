function solution(l, r) {
    //5 와 0이 포함 안되어 있으면 제외 시키고 5와0만들어간 숫자 푸쉬 하도록
    //some 함수로 요소가 5와0만 있는지 참거짓 반환 해서 결과값 출력해보기
    const result = [];

    for (let i = l; i <= r; i++) {
        if(/^[50]+$/.test(i)) {
            result.push(i)
        }
    }
    
    const some = result.some(num => /^[50]+$/.test(num));

    if(some) {
        return result;
    }
    else {
        return [-1];
    }

}