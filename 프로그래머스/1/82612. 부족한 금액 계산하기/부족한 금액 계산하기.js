function solution(price, money, count) {
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