function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(59.2768283,17.9991656),
      zoom:10,
    };
    var map = new google.maps.Map(document.getElementById("map"),mapProp);
    }