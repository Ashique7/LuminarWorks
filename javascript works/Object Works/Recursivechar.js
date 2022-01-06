// var pattern="ABABBC"
// var wc={}//{A:1,B:1}
// for (let char of pattern){
//     //char=B
//     if(char in wc){
//         console.log("First recursive character",char);
//         break
//     }
//     else{
//         wc[char]=1
//     }
// }

var pattern="ABABBC"
var wc={}//{A:1,B:1}
op=[]
pattern.split("").map(char=>char in wc?op.push(char):wc[char]=1)
console.log(op[0]);

//Array.from(word)===>(for selecting explicitly to array) convert in arrays letter by letter 
//(...)===>spread operator