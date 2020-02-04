/*
    Write a function that accepts two input parameters: a string, and a function. The function
    should execute the passed function with the passed string and return the result.
  */

const operation = (string, func)=>func(string);


/*
    write two expressions that call this function.
    For the first, pass the string ‘supercalifragilisticexpialidocious’ and a lambda function
    that returns an array containing fragments of the input string broken on the character ‘c’.
*/

const input = 'supercalifragilisticexpialidocious';
const lambda = string=> string.split(/([&c])/g).join("c").split("cc")
console.log(operation(input,lambda))

/*
    pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that
    replaces all of the ‘a’ characters with ‘A’ characters.
    Return an object that contains the original string, the modified string, the total number of As in the modified string,
    and the overall length of the modified string
*/
const lambda2 = string=> {

    let modifiedString = string.replace(/a/gi, "A");
    let numberReplaced = modifiedString.split(/A/gi).length-1;
    let length = modifiedString.length;
    return {
        originalString: string,
        modifiedString: modifiedString,
        numberReplaced: numberReplaced,
        length: length

    }

}
console.log(operation(input,lambda2))