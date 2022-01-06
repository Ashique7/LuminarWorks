var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

//total accounts
// console.log(accounts.length);

// all acount numbers whose ac-type savings
// accounts.filter(data=>data.ac_type=="savings").forEach(data=>console.log(data.acno))

//balance of acno= 1000
// accounts.find(data=>data.acno==1000).forEach(data=>console.log(data.balance))

//print all g-pay transactions
// var trans=accounts.map(data=>data.transactions).flat()
// console.log(trans);
// trans.filter(data=>data.method=="g-pay").forEach(data=>console.log(data))

//print credit transaction to 1002
// var trans=accounts.map(data=>data.transactions).flat()
// trans.filter(data=>data.to=="1002").forEach(data=>console.log(data))

//print highest balance account details
// var MaxBal=accounts.sort((n1,n2)=>n2.balance-n1.balance)[0]
// console.log(MaxBal);

//print transaction history of 1002
var DebitTrans=accounts.find(data=>data.acno=="1002").transactions
// console.log(DebitTrans);
var CreditTrans=accounts.map(data=>data.transactions).flat()
CreditTrans.filter(data=>data.to=="1002")

var TransactionHistory={"debitTransactions":DebitTrans,"creditTransactions":CreditTrans}
console.log(TransactionHistory);

