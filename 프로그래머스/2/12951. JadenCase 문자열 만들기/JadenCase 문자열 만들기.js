function solution(s) {
    /*
    s를 띄어쓰기로 분리 먼저 
    반복문 돌려서 첫번째 글자는 대문자 나머지는 소문자로 변경 
    join
    */
    const str = s.split(" ").map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });

    const result = str.join(" ");
    
    return result;
}