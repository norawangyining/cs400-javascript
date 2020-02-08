/*
Write two generators that together implement a series of even Fibonacci numbers.
 */

//The first generator should return the series of fibonacci numbers starting from 0.
function* fibs(){
    let [val1, val2, result] = [0,1,0];
    yield result
    while(true){
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result
    }
}


//The second generator should use the first to obtain the next number in the sequence, rejecting it if it is odd and asking for the next.
function* evenFibs(){
    let fibSeq =fibs()

    while(true){
        result = fibSeq.next().value;

        if(result==0|| result%2 == 0){
            yield result;
        }
    }
}

let count = 6;
let evenFibSeq = evenFibs();
while(count-->0){
    console.log(evenFibSeq.next().value)
}
