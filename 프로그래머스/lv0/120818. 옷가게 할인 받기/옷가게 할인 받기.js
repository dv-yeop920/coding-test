function solution(price) {
    let answer = 0;
    if(price < 100000) {
        return price;
    }
    if(price >= 100000 && price < 300000) {
        answer = Math.ceil(5  /100 * price);
        return price = price - answer;
    }
    if(price >= 300000 && price < 500000) {
        answer = Math.ceil(10  /100 * price);
        return price = price - answer;
    }
    if(price >= 500000){
        answer = Math.ceil(20  /100 * price);
        return price = price - answer;
    }
}