class circle{
    constructor(radius="double",color=String){
        this.radius=radius;
        this.color=color;
    }
    setradius(value){
        this.radius=value;
    }
    getradius(){
        return this.radius
    }
    setcolor(value){
        this.color=value
    }
    getcolor(){
        return this.color;
    }
    getarea() {
        return Math.PI * this.radius * this.radius;
      }
    getcircumference(){
        return 2 * Math.PI * this.radius;
    }  
}

var circle1=new circle();
console.log(circle1);

circle1.setradius(1.0);
console.log(circle1);

console.log(circle1.getradius());

circle1.setcolor("blue");
console.log(circle1);

console.log(circle1.getcolor());

console.log(circle1.getarea());

console.log(circle1.getcircumference());

