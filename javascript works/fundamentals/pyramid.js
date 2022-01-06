
for (let i = 1; i <= 5; i++) {
    let str =""
    for (let space = 1; space <= (5 - i); space++) {
        str += " "
    }
    for (let j = 1; j <= i; j++) {
        str += "* "
    }

    console.log(str);

}






//if row == 4||row+col ==5|| row-col==3||