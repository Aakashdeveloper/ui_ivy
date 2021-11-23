var lurl = "https://developerfunnel.herokuapp.com/location";
var hurl = "https://developerfunnel.herokuapp.com/hotels"

function getCity(){
    fetch(lurl)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            var element = document.createElement('option') ///<option></option>
            var text = document.createTextNode(data[i].city_name) //Delhi
            element.appendChild(text) // <option>Delhi</option>
            element.value = data[i]._id // <option value="1">Delhi</option>
            document.getElementById('city').appendChild(element)
        }
    })
}

function getHotel(){
    var cityId = document.getElementById('city').value
    var hotel = document.getElementById('hotels');
    while(hotel.length>0){
        hotels.remove(0)
    }
    fetch(`${hurl}?city=${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            var element = document.createElement('option') ///<option></option>
            var text = document.createTextNode(data[i].name) //Delhi
            element.appendChild(text) // <option>Delhi</option>
            hotel.appendChild(element)
        }
    })

}


//`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
// data.list.length
/*
`<div class='card col-md-2'><div class='row'>"+
                    "<img class='card-img-top' src=`"https://openweathermap.org/img/w/"${}".png"` alt='weather'/>"+
                    "<span class='topTemp'>"+data.list[i].temp.day+"°C</span></div><div class='card-body'>"+
                    "<span class='max'>"+data.list[i].temp.max+"</span>/<span class='min'>"+data.list[i].temp.min+"°C</span><h4 class='card-title'>"+data.list[i].weather[0].main+"</h4><p class='card-text'>"+
                 "<p class='day'>"+Date(data.list[i].dt)+"</p><p>Humidity:"+data.list[i].humidity+"</p></p></div></div>`
*/