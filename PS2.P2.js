/*
Write a generator that is initialized with a sentence and that emits each word of the sentence in turn.
Use the generator to print the words, one per line, of the string “All I know is something like a
bird within her sang”.
 */

function* printWord(str){
    array = str.trim().split(" ");
    i = 0;
    for (let i = 0; i < array.length; ++i){
        yield array[i]
    }
}


let test = 'All I know is something like a bird within her sang';

let wordSeq = printWord(test);
let running = true;
while(running){
    let word = wordSeq.next();
    if (word.done == true){
        running =false
    }else {
        console.log(word.value)
    }
}



