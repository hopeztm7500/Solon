$(document).ready(function(){
	
	$('#company-directory').affix({
		   offset: {
		   top: 200}
	});
	$('#about-us a:first').tab('show');

    $('#about-us a').click(function (e) { 
      e.preventDefault();
      $(this).tab('show');
    });
    
    var map = new BMap.Map("map-container");
    
    var point = new BMap.Point(121.528988,31.229916);
    map.centerAndZoom(point, 15);
    
    var marker1 = new BMap.Marker(new BMap.Point(121.538988,31.229916));
    map.addOverlay(marker1);
    map.enableScrollWheelZoom();
    var infoWindow1 = new BMap.InfoWindow("双隆投资<br>上海市浦东新区竹林路101号陆家嘴基金大厦1604室");
    marker1.addEventListener("click", function(){this.openInfoWindow(infoWindow1);});
    
    $.ajax({
    	  url: "DataBridge",
    	
    	}).done(function(result) {
    	  alert(result);
    	});
    
    $.ajax({
    	type: "post", 
    	url : "DataBridge", 
    	dataType:'json',
    	data: 'username=zhang&password=liu',
    	success: function(json){
    	  alert('succeed');
    	}
    });
    	
    		

 
});