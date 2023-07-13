function solution(phone_number) {
    let result = '';
    const star = phone_number.slice(0 , -4);
    result = phone_number.replace(star , '*'.repeat(star.length));
    return result;
}