//if string is created string is inherited from string class
//array.prototype
//string.prototype
//name.__proto__

//Array methods
//map--for every object 
//filter 
//sort
//reduce
//find
//some


//map
var arr=[2,3,4,5,6,7,8]
// var square=arr.map(num=>num**2)
// console.log(square);
// var sum=arr.map(num=>num+2)
// console.log(sum);

// var names=["ravi","ram","benjo"]
// var upper=names.map(name=>name.toUpperCase())
// console.log(upper);

//filter
// var arr=[2,3,4,5,6,7,8]
// var evens=arr.filter(num=>num%2==0)
// console.log(evens);

// var names=["arjun ","akhil","aravind","Abilash"]
// var fname=names.filter(name=>name[0]=="a"|| name[0]=="A")
// console.log(fname);

//reduce
var max=arr.reduce((n1,n2)=>n1>n2?n1:n2);
console.log(max);
var sum=arr.reduce((n1,n2)=>n1+n2);
console.log(sum);