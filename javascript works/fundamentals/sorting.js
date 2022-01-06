var num1=20,num2=10,num3=30;

if((num1>num2)&&(num1>num3)){
    if(num2>num3){
        console.log(`sort order is ${num1} ${num2} ${num3} `);
    }
    else{
        console.log(`sort order is ${num1} ${num3} ${num2}`);
    }
}
if((num2>num1)&&(num2>num3)){
    if(num1>num3){
        console.log(`sort order is ${num2} ${num1} ${num3} `);
    }
    else{
        console.log(`sort order is ${num2} ${num3} ${num1} `);
    }
        
    }

if((num3>num2)&&(num3>num1)){
    if(num1>num2){
        console.log(`sort order is ${num3} ${num1} ${num2} `);
    }
    else{
        console.log(`sort order is ${num3} ${num2} ${num1} `);
    }

}
