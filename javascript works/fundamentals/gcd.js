var num1=28,num2=14;
var limit=0;
var factor=0;
if(num1>num2){
    limit=num2;
}
else{
    limit=num1;
}

for(i=1;i<=num1 && i<=num2;i++){  
    if (num1%i==0 && num2%i==0){
        factor=i;
        console.log(factor);
    }
}
console.log(`hcf is ${factor}`);

