module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 > 0) {
        return false;
    } 
    const stack = [];
  

    for (const i of str) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            const config = bracketsConfig[j];
            if (i === config[0]) {
                if (config[0] === config[1] && i === stack[stack.length - 1]) {
                    stack.pop();
                } else stack.push(i);
            } else if (i === config[1] && config[0] === stack[stack.length - 1]) {
                stack.pop();
            }
        }
    }
    return stack.length === 0;
};
