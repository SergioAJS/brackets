module.exports = function check(str, bracketsConfig) {
    const bracketsConfigObject = Object.fromEntries(bracketsConfig.map(item => item.reverse()));
    // let string = str.split('').reverse().join(' ');
    // console.log(string)
    // console.log(bracketsConfigObject)
    // console.log(Object.keys(bracketsConfigObject));
    // console.log(Object.values(bracketsConfigObject));
    let arr = Object.values(bracketsConfigObject).map(item => item)
    // console.log(arr)
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        
        let currentSymbol = str[i];
        // console.log(currentSymbol);
        // console.log(Object.values(bracketsConfigObject));
        // console.log(arr.includes(currentSymbol));
        if (arr.includes(currentSymbol)) {
            stack.push(currentSymbol);
            // console.log('lol')
        } else {
            if (stack.length === 0) {
                return false;
            }
            let topElement = stack[stack.length - 1];
            // console.log(currentSymbol);
            // console.log(topElement)
            // console.log(bracketsConfigObject[currentSymbol]);
            if (bracketsConfigObject[currentSymbol] == topElement) {
                // console.log('HOHO')
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
  }