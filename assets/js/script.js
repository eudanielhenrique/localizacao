document.addEventListener('DOMContentLoaded', function (){
  if(!('geolocation' in navigator)){
    alert("Navegador não tem suporte para esta API")
  }
  else{
    navigator.geolocation.getCurrentPosition(showPosition)
  }  
})

function showPosition(local){
  let latitude = local.coords.latitude
  let longitude = local.coords.longitude

  /* Adicionar as informações em id ID Location*/
  document.getElementById("location").innerHTML = "<span>Latitude: </span>" + latitude +"<span> Latitude: </span>" + longitude

  //Criando as opções do mapa
  var mapOption = {
    center: [latitude, longitude],
    zoom: 15,
  }

  //Criando o mapa
  var map = new L.map('map', mapOption)

  //Criando o objeto mapa
  layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')

  //Adicionando o mapa 
  map.addLayer(layer)

  //Criando o marcador
  var marker = new L.Marker([latitude, longitude])
  marker.addTo(map)
  .bindPopup('Sua Localização')
  .openPopup()
}