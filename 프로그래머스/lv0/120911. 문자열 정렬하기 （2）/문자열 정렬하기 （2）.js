function solution(my_string) {
    const LowerCase = my_string.toLowerCase().split('').sort().join('');
    return String(LowerCase);
}