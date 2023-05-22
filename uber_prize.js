class Client{
    constructor(name,contact){
        this.name=name;
        this.contact=contact;
        this.departure_from=null;
        this.arrivalplace=null;
        this.distance_=0;
        this.rent=0;

    }
    departurefrom(value){
        return this.departure_from=value
    }
    arrival(value){
        return this.arrivalplace=value
    }
    distance(value){
        return this.distance_=value;
    }
    getrent(){
        return this.rent=this.distance_*5;
    }
}
var passenger1=new Client("ajith",34567890);
passenger1.departurefrom("madurai");
passenger1.arrival("ramanathapuram");
passenger1.distance(150);
passenger1.getrent();
console.log(passenger1);