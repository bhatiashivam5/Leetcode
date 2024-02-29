var isValid = function (s) {
    //handle the edge case
    //create a map holding the opening brackets macthed to the closing bracket
    //create a stack to hold the opening bracket
    //loop through s and check if the bracket in the stack matches the current bracket
    //if not push item to the stack
    //if stack is empty return true else false

    if (s.length % 2 != 0) return false;
    const map = { "(": ")", "[": "]", "{": "}" }
    const stack = [];
    stack.push(s[0]);

    for (let i = 1; i < s.length; i++) {
        let stackEl = stack[stack.length - 1];

        if (map[stackEl] == s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length == 0;
};

isValid('[] {} ()')