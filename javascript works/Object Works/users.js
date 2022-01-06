var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone"},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo"},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree"},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour"},

}

//print 100's details
// console.log(users[1000]);

//1003 name 
// console.log(users[1003].personName);

//1005 3xists or not
// console.log("1005" in users);

function authenticate(ac_no,password){
    if(ac_no in users){
        let pwd=users[ac_no].password
        if(pwd==password){
            return 1
        }
        else{
            return -1
        }
    }
    else{
        return 0 
    }
}

console.log(authenticate(1007,"username"));