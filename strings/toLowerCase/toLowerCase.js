const toLowerCaseSimple = (s) => {
    return s.toLowerCase()
}

const toLowerCaseComplex = (s) => {
    let newStr = "";
    for (i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if (65 <= code && code <= 90) {
            code += 32;
        }
        let char = String.fromCharCode(code)
        newStr += char
    }
    return newStr
}