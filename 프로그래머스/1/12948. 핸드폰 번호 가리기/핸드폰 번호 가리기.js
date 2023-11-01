function solution(phone_number) {
    const star = phone_number.slice(0 , -4);

    const result = phone_number.replace(star , '*'.repeat(star.length));

    return result;
}