window.lat = 40.575942;
window.lng = -105.085361;

var map;
var mark;
var lineCoords = [];
      
var initialize = function() {
    map  = new google.maps.Map(document.getElementById('map-canvas'), {center:{lat:lat,lng:lng},zoom:15});
    mark = new google.maps.Marker({position:{lat:lat, lng:lng}, map:map});
};

window.initialize = initialize;

var redraw = function(payload) {
    if(payload.message.lat){
        lat = payload.message.lat;
        lng = payload.message.lng;

        map.setCenter({lat:lat, lng:lng, alt:0});
        mark.setPosition({lat:lat, lng:lng, alt:0});
      
        lineCoords.push(new google.maps.LatLng(lat, lng));

        var lineCoordinatesPath = new google.maps.Polyline({
            path: lineCoords,
            geodesic: true,
            strokeColor: '#2E10FF'
        });
      
        lineCoordinatesPath.setMap(map);
    }
};

var pnChannel = "raspi-tracker";

var pubnub = new PubNub({
    publishKey:   'pub-c-5b854a4a-2f1e-4e4f-b713-c10c22f435e9',
    subscribeKey: 'sub-c-436b1de2-82cf-4c18-929c-6c882904c869'
});
        
document.querySelector('#action').addEventListener('click', function(){
    var text = document.getElementById("action").textContent;
    if(text == "Track Route 31"){
        pubnub.subscribe({channels: [pnChannel]});
        pubnub.addListener({message:redraw});
        document.getElementById("action").classList.add('btn-danger');
        document.getElementById("action").classList.remove('btn-success');
        document.getElementById("action").textContent = 'Stop Tracking';
    }
    else{
        pubnub.unsubscribe( {channels: [pnChannel] });
        document.getElementById("action").classList.remove('btn-danger');
        document.getElementById("action").classList.add('btn-success');
        document.getElementById("action").textContent = 'Track Route 31';
    }
});

function newPoint(time) {
    var radius = 0.001;
    var x = Math.random() * radius;
    var y = Math.random() * radius;
    return {lat:window.lat - y, lng:window.lng + x};
}
    setInterval(function() {
    pubnub.publish({channel:pnChannel, message:newPoint()});
    }, 1000);