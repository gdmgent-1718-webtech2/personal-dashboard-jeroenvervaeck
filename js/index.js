//code voor Json
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

//weer gent
getJSON("http://api.openweathermap.org/data/2.5/weather?q=ghent,belgium&APPID=8b2b076c799cac53be82642df2b08fbd", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        document.getElementById("weer_gent").innerHTML= "In Gent is het " + (parseInt(data["main"]["temp"]) - 273) + "°C";
    }
});

//weer Kruishoutem
getJSON("http://api.openweathermap.org/data/2.5/weather?q=kruishoutem,belgium&APPID=8b2b076c799cac53be82642df2b08fbd", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        document.getElementById("weer_kruishoutem").innerHTML= "In Kruishoutem is het " + (parseInt(data["main"]["temp"]) - 273) + "°C";
    }
});


//nieuws 1
getJSON("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d447e854e4634f1881fb374906a87ada", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        let random = Math.floor((Math.random() * data["totalResults"]) + 1);
        document.getElementById("nieuws_US1").innerHTML= data["articles"][random]["title"];
        document.getElementById("nieuws_US2").innerHTML= data["articles"][random]["description"];
        document.getElementById("nieuws_US3").href= data["articles"][random]["url"];
    }
});

//nieuws 2

getJSON("https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=d447e854e4634f1881fb374906a87ada", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        let random = Math.floor((Math.random() * 19) + 1);
        document.getElementById("nieuws_bitcoin1").innerHTML= data["articles"][random]["title"];
        document.getElementById("nieuws_bitcoin2").innerHTML= data["articles"][random]["description"];
        document.getElementById("nieuws_bitcoin3").href= data["articles"][random]["url"];
    }
});

//quote
getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        document.getElementById("quote1").innerHTML= data[0]["title"];
        document.getElementById("quote2").innerHTML= data[0]["content"];
    }
});

//joke
getJSON("https://icanhazdadjoke.com/slack", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        document.getElementById("joke").innerHTML= data["attachments"][0]["fallback"];
    }
});

//dog
getJSON("https://dog.ceo/api/breeds/image/random", function(error, data) {

    if(error) {  
        console.log(error);
        return false;
    }
    else{
        document.getElementById("dog").src= data["message"];
    }
});

