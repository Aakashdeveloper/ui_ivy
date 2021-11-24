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