class person{
    constructor(first_name,last_name,age,email){
     this.firstname=first_name,
     this.lastname=last_name,
     this.age=age,
     this.email=email,
     this.fullname=first_name+" "+last_name
    }
    getfirstname(){
      return this.firstname
    }
    getlastnamename(){
      return this.lastname
    }
    getage(){
      return this.age
    }
    getemail(){
      return this.email
    }
    getfullname(){
      return this.fullname
    }
   }
var person1=new person("ajith","kumar",28,"ajith100@gmail.com")
var person2=new person("arun","kumar",27,"arun@gmail.com")
var person3=new person("kamalesh","kumar",26,"kamalesh0@gmail.com")
var person4=new person("saran","kumar",28,"saran0@gmail.com")
var person5=new person("varun","kumar",25,"varun00@gmail.com")
var person_all=[person1,person2,person3,person4,person5];

person_all.forEach(element=>console.log(element.getfullname()+" "+"email id is"+" "+element.getemail()));