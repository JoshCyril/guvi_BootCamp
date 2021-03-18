var request = new XMLHttpRequest()
var country = 'https://restcountries.eu/rest/v2/all';

request.open('GET',country , true) 
request.send();

request.onload = function() {

var data = JSON.parse(this.response)

  for(i=0;i<data.length;i++){
    console.log(data[i].name)
}
}