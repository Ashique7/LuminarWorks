var arr=[9,6,7,8,3,2]
var dup=[]
//if num<5 num-1`
//if num>5 num+1
for(let amount of arr){
   amount>5?dup.push(amount+1):dup.push(amount-1)
}
console.log(dup);