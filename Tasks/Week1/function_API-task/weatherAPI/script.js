function weatherBalloon( latt, longn ) {
    var key = 'YOUR_API_KEY';

    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ latt +'&lon='+ longn +'&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data.weather[0].main);
      console.log(data);
      alert("City:  "+data.name+" |  Weather: "+data.weather[0].main);
    })
    .catch(function() {
      // catch any errors
      alert('Location is Blocked');
    });
  }
  
  window.onload = function() {    
      navigator.geolocation.getCurrentPosition(setPosition, showError);
    
    }

    function setPosition(position){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        
        weatherBalloon(latitude, longitude);
    }

    function showError(error){
        alert('Location is Blocked');
    }
