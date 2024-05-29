const defangIPsimple = (address) => {
    return address.replaceAll('.', '[.]');
}

const defangIPcomplex = (address) => {
    let result = "";

    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".")
            result += "[.]";
        else
            result += address[i];
    }

    return result;
};