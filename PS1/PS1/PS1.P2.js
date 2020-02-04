/*
Write a function that takes as input each of the following strings in turn:
‘4+2’
‘5*7’
‘6-1’
‘9/2’
This function should Determine the operator (+, *, -, or /) embedded in the string
Return a function to implement the input operator that returns the result
 */

const evaluate = str => {
    let sym = str.charAt(1);
    let left = Number(str.charAt(0));
    let right = Number(str.charAt(2));
    switch (sym) {
        case '+':
            return left+right;
            break;
        case '-':
            return left-right;
            break;
        case '*':
            return left*right;
            break;
        case '/':
            return left/right;
            break;
        case '%':
            return left % right;
            break;
    }
}


const expression1  = '4+2';
console.log(`${expression1} = ${evaluate(expression1)}`)

const expression2  = '5*7';
console.log(`${expression2} = ${evaluate(expression2)}`)

const expression3  = '6-1';
console.log(`${expression3} = ${evaluate(expression3)}`)

const expression4  = '9/2';
console.log(`${expression4} = ${evaluate(expression4)}`)

const expression5 = '8%3';
console.log(`${expression5} = ${evaluate(expression5)}`)
