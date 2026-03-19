function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    const arr = x.toString().split('');
    const lastIdx = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[lastIdx - i]) {
            return false;
        }
    }

    return true;
};