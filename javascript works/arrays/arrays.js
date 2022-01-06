// DS
//Data structures
// data organising
//linear(consicutive elements can be stored)
//--array
//--stack
//--queue
//Non Linear
//--tree
//--graph etc

var expenses=[25000,20000,30000,20000,40000,35000]
totalAmount=0;
max_exp=0;
min_exp=expenses[0];
// for (let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }
// for (let amount of expenses){
//     if(amount>25000){ 
//         console.log(amount);
//     }
// }

//sum of expenses
// for (let amount of expenses){
//     totalAmount+=amount
// }
// console.log(totalAmount);

// for (let amount of expenses){
//     if (amount>max_exp){  //25000>0;
//         max_exp=amount  //
// }
// }
// console.log(max_exp);

// for (let amount of expenses){
//     if (amount<min_exp){  //25000>0;
//         min_exp=amount  //
// }
// }
// console.log(min_exp);

// expenses.push(50000);

var unique=[];
for (let amount of expenses){
    if (unique.includes(amount)){

    }
    else{
        unique.push(amount)
    }
}

console.log(unique);
