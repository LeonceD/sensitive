



function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

var meteoCall = function(latitude,longitude){
    $.ajax( {
              type:'get',
              url:'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude,
              success:function(data) {
                var town = data.name;
                 var temp = (parseInt(data["main"]["temp"]-273,15));
                 var max = (parseInt(data["main"]["temp_max"]-273,15));
                 var desc = data["weather"][0]["description"];

                $('#town').append("<a href='https://maps.google.com?saddr=Current+Location&daddr="+latitude+","+longitude+"'>"+town+"</a>");

               $('#temp').append("Température: \t"+ temp +"°C" );
               $('#max').append("Maximum: \t" + max +"°C");
               $('#desc').append(desc);
              }
          })
}

var onSuccess = function(position) {
    var lat =  position.coords.latitude;
    var long = position.coords.longitude;
    meteoCall(lat,long);
};

navigator.geolocation.getCurrentPosition(onSuccess, onError);





