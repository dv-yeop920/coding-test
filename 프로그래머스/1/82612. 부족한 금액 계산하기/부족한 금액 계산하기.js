function solution(price, money, count) {
    /*
    이용료 최초 3원
    한번 이용하고나면 다음이용료는 최초 이용료의 2배로 이용하도록 (price * 2씩)
    카운트가 다끝나면 내가 가진 돈(money) - 총 이용료(price)를 가지고 계산 해서 리턴
    부족하지 않다면 0 리턴*/
    let result;
    let finalprice = price;
    let pirceIncrease = price;

    for(let i = 1; i <= count; i++) {
        if(i === 1) {
            finalprice = finalprice;
        }
        if(i > 1) {
            pirceIncrease += price;
            finalprice += pirceIncrease;
        }
    }
    if(money >= finalprice) {
        result = 0;
    }
    if(money < finalprice) {
        result = finalprice - money
    }
    
    return result;
}