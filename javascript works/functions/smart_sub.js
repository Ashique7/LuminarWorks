function SmartSub(num1,num2){
    return num1>num2?num1-num2:num2-num1
}
var res=SmartSub(3,10)          
console.log(res);


//hoisting -- function can be called from anywhere,,function and var initialize memory from even at above function defenition