var movies = [
    {
        name: "Avengers",
        rating: 4.5,
        ind:"Hollywood"  
    },
    {
        name: "Jab We Met",
        rating: 4.7,
        ind:"Bollywood"  
    }
]

for(i=0;i<movies.length;i++){
    console.log(movies[i].name)
}

Avengers
Jab We Met


var a = ['Venice', 'Pune', 'London', 'Indore', 'Helsinki', 'Delhi', 'Boston', 'Amsterdam']

for(i=0;i<a.length;i++){
    console.log(a[i])
}

a.map((data) => {return `<p>${data}</p>`})