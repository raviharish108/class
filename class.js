class Movie{
    constructor(title,studio,rating="PG"){
         this.title=title,
         this.studio=studio,
         this.rating=rating
    }
}
 var film1=new Movie("beast","sunpictures");
 var film2=new Movie("thunivu","redgiant","R");
 var film3=new Movie("varisu","Andhra");
 var film4=new Movie("LEO","redgiant");
 var film5=new Movie("jailer","sunpictures","R");

 const films=[film1,film2,film3,film4]

function getmovie(movies){
    return movies.filter(movie => movie.rating === "PG");
}
console.log(getmovie(films))