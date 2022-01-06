class student{
    constructor(name,standard,gender){  //setStudent to constructor
        this.name=name
        this.standard=standard
        this.gender=gender
    }
    printStudent(){
        console.log(this.name,this.standard,this.gender);
    }
}

var obj= new student("ram","plus two","male")
    obj.printStudent()

var obj1= new student("rahul","plus two","male")
    obj1.printStudent()


