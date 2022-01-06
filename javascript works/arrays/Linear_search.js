var arr=[12,34,50,56]
element=50;
var flag =0;
for (let num of arr) {
    if(element==num){
        flag=1;
        break
    }
}
console.log(flag==0?"element not found":"element found");

// var arr=[80,22,100,78,72]

// //ascending
// arr.sort((obj1,obj2)=>obj1-obj2)
// console.log("assecending order",arr);


// //descending
// arr.sort((obj1,obj2)=>obj2-obj1)
// console.log("desecending order",arr);
