function solution(n, k) {
    //양꼬치 갯수와 음료수 갯수를 모두 더하고 양꼬치 갯수를 10으로 나누고 그 반환된 값 1당 음료수
    //하나 값씩 계산해서 빼기 
    const answer = 12000 * n + 2000 * k - Math.floor(n /10) * 2000;
    return answer;
}