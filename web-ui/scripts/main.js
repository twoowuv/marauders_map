'use strict';
 
 // Some fake data to test with
var data = [
  {
    FoodTruckId: 1,
    Name: "Greek Food Truck",
    Latitude: -41.292489,
    Longitude: 174.778656
  }, {
    FoodTruckId: 2,
    Name: "Beat Kitchen",
    Latitude: -41.287022,
    Longitude: 174.778667
  }, {
    FoodTruckId: 3,
    Name: "Nanny's Food Truck",
    Latitude: -41.290425,
    Longitude: 174.779272
  }
 ];
 
/**
 * Creates a marker to put on the map to represent a food truck
 * 
 * @private
 * @param {object} map - The instance of the map you want to add the marker to
 * @param {object} data
 * @param {string} data.Latitude
 * @param {string} data.Longitude
 * @param {string} data.Name - The name of the food truck
 */ 
function createMarker(map, data) {
  
  var marker = new google.maps.Marker({
    position: {
      lat: data.Latitude,
      lng: data.Longitude
    },
    map: map,
    title: data.Name
  });
}
 
 
function initMap() {
  // Specify features and elements to define styles.
  var styleArray = [{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"weight":"0.30"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffe146"},{"visibility":"on"},{"weight":"6"},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"visibility":"on"},{"color":"#e6007e"},{"weight":"1"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#ffe146"},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#0096aa"},{"visibility":"simplified"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#ffe146"},{"weight":8},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"weight":8},{"lightness":"5"},{"gamma":"1"},{"saturation":"-75"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#0096aa"},{"saturation":"-75"},{"lightness":"5"},{"gamma":"1"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#ffe146"},{"saturation":"-28"},{"lightness":"0"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}];

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -41.288255, lng: 174.779552},
    scrollwheel: false,
    // Apply the map style array to the map.
    styles: styleArray,
    zoom: 15
  });
  
  console.log('DEBUGGER HANDLE');
  data.forEach(v => createMarker(map, v))
  // uxhr('http://tellme.whatsontheme.nu/api/trucks/test', {}, {
  //   method: 'GET',
  //   headers: {
      
  //   },
  //   complete: function (response) {
  //     console.log(response);
  //    },
  //   success: function (response) {
  //     console.log(response);
  //      var data = JSON.parse(response);
  //     // data.forEach(v => createMarker(map, v));
  //    },
  //   error: function (response) {
  //     console.log(response);
  //    }
  // });
}
 

// Import the uxhr library :) 
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define("uxhr",b):a.uxhr=b()}(this,function(){"use strict";return function(a,b,c){b=b||"",c=c||{};var d=c.complete||function(){},e=c.success||function(){},f=c.error||function(){},g=c.headers||{},h=c.method||"GET",i=c.sync||!1,j=function(){return 0===a.indexOf("http")&&"undefined"!=typeof XDomainRequest?new XDomainRequest:new XMLHttpRequest}();if(!j)throw new Error("Browser doesn't support XHR");if("string"!=typeof b){var k=[];for(var l in b)k.push(l+"="+b[l]);b=k.join("&")}"ontimeout"in j&&(j.ontimeout=+c.timeout||0),j.onload=function(){d(j.responseText,j.status),e(j.responseText)},j.onerror=function(){d(j.responseText),f(j.responseText,j.status)},j.open(h,"GET"===h&&b?a+"?"+b:a,!i);for(var m in g)j.setRequestHeader(m,g[m]);return j.send("GET"!==h?b:null),j}});
