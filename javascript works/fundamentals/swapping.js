var num1=15,num2=25,temp;
console.log(`numbers b4 swapping num1= ${num1} num2= ${num2}`);

// temp=num1;
// num1=num2;
// num2=temp;

num1=num1+num2;
num2=num1-num2;
num1=num1-num2;

console.log(`numbers after swapping num1= ${num1} num2= ${num2}`);
