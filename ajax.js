;(function() {
  
/*

An example of a barebones AJAX JSON request

*/

  var json_request = new XMLHttpRequest();
  const LOADED = 4;
  var json_data = null;

  json_request.open("GET"
    ,"/PATH/TO/JSON"
    , true);

  json_request.onreadystatechange = function() {
    if (json_request.readyState == LOADED) {
      if (json_request.status == 200) {
        var json_data = JSON.parse(
          json_request.responseText);  
      }
    }
  };

  json_request.send();

}());
