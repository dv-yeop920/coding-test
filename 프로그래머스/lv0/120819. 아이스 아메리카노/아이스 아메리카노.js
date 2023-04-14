function solution(money) {
    let answer = [];
    const coffee = 5500;
    const servings = Math.floor(money / coffee);
    const change = money % coffee;
    
    return answer = [servings , change];
}