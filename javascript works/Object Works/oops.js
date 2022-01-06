var i20={
    manufacture:"hyundai",
    colours:["red","white","blue"],
    varients:["petrol"],
    price:"8 lakh",
    getprice(){
        return this.price
    }

}
var glanza={
    manufacture:"toyota",
    price:"9lakh"
}

glanza.__proto__=i20
console.log(glanza.getprice());