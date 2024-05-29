const isPalindrome = (x) => {
    let newArr = x.toString().split('');
    let revArr = x.toString().split('').reverse();
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== revArr[i]) {
            return false;
        }
    }

    return true;
};

const isPalindrome2 = x => {
    return x.toString() === x.toString().split('').reverse().join('')
}