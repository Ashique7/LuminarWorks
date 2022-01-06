class Parent{
    bike(){
        console.log("passion pro");
    }
}

class child extends Parent{
    bike(){
        super.bike()
        console.log("royal enfield");
    }
}

var ch=new child()
ch.bike()

//this()
//super
//constructor()
//