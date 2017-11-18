//
//where map start ->
//
//zoom style
var whereMap;
var ContactMapOne;
var ContactMapTwo;

//4 типа метки, 4 картинки метки
var black_Marker = "images/black-metka.png";
var mapMarkerCurrent = "images/map-point-current.png";
var mapMarkerOther = "images/map-point-other.png";

//карта на главной внизу
function initWhereMap() {
	if($("#whereMap").length){
		var markersArrayMap = [];
		google.maps.Map.prototype.clearOverlaysMap = function() {
			for (var i = 0; i < markersArrayMap.length; i++ ) {
				markersArrayMap[i].setMap(null)
			}
		}

		whereMap = new google.maps.Map(document.getElementById('whereMap'), {
			center: {lat:56.4959861 , lng: 84.9682957}, //центровка карты
			zoom: 17,
			panControl: false,
			scrollwheel: false, 
		});

		 var styles = [
			{
			stylers: [
					{ hue: "#A9A69E" },
					{ saturation: -80 },
					{ lightness: 0}
				]
			}
		];
	  	whereMap.setOptions({styles: styles});
	  	// метка расположения отеля
		var marker0 = new google.maps.Marker({
			position: {lat:56.4959861 , lng: 84.9682957}, //позиция маркера
			map: whereMap,
			icon:black_Marker,
		});

		//первая группа достопримечательностей
		function mapGroup1(){
			// МЕТКИ достопримечательностей
			var marker1 = new google.maps.Marker({
				position: {lat:56.4949861 , lng: 84.9692957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker1);	

			var marker2 = new google.maps.Marker({
				position: {lat:56.4969861 , lng: 84.9665957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker2);	

			var marker3 = new google.maps.Marker({
				position: {lat:56.4969861 , lng: 84.9665957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker3);	

		}

		//2 группа достопримечательностей
		function mapGroup2(){
			// МЕТКИ достопримечательностей
			var marker1 = new google.maps.Marker({
				position: {lat:56.4939861 , lng: 84.9682957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker1);	

			var marker2 = new google.maps.Marker({
				position: {lat:56.4979861 , lng: 84.9675957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker2);	

			var marker3 = new google.maps.Marker({
				position: {lat:56.4959861 , lng: 84.9655957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker3);	

		}

		//3 группа достопримечательностей
		function mapGroup3(){
			var marker1 = new google.maps.Marker({
				position: {lat:56.4969861 , lng: 84.9682957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker1);	
		}

		//4 группа достопримечательностей
		function mapGroup4(){
			var marker1 = new google.maps.Marker({
				position: {lat:56.4959861 , lng: 84.9682957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker1);	
		}
		//5 группа достопримечательностей
		function mapGroup5(){
			var marker1 = new google.maps.Marker({
				position: {lat:56.4963861 , lng: 84.9662957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker1);	
		}
		//5 группа достопримечательностей
		function mapGroup6(){
			var marker1 = new google.maps.Marker({
				position: {lat:56.4967861 , lng: 84.9662957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker1);	

			var marker2 = new google.maps.Marker({
				position: {lat:56.4957861 , lng: 84.9652957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker2);

			var marker3 = new google.maps.Marker({
				position: {lat:56.4947861 , lng: 84.9642957}, //позиция маркера
				map: whereMap,
				icon:mapMarkerOther,
			});
			markersArrayMap.push(marker3);
		}


	}


	//index map groups
	$(".near-locations a").on('click', function(e){
		e.preventDefault();
		var groupId = $(this).data('mapgroup')
		$(this).closest("li").siblings().removeClass("active")
		$(this).closest("li").addClass("active")
		whereMap.clearOverlaysMap();

		switch (groupId) {
			case 1:
				mapGroup1();
			break;
			case 2:
				mapGroup2();
			break;
			case 3:
				mapGroup3();
			break;
			case 4:
				mapGroup4();
			break;
			case 5:
				mapGroup5();
			case 6:
				mapGroup6();
			break;
			break;
			
		}

	})





	//
	// contacts map ONE
	//
	if($("#contactMapOne").length){
		

		function HomeControl(controlDiv, map) {
			google.maps.event.addDomListener(zoomout, 'click', function() {
				var currentZoomLevel = map.getZoom();
				if(currentZoomLevel != 0){
					map.setZoom(currentZoomLevel - 1);
				}     
			});

			google.maps.event.addDomListener(zoomin, 'click', function() {
				var currentZoomLevel = map.getZoom();
				if(currentZoomLevel != 21){
					map.setZoom(currentZoomLevel + 1);
				}
			});
		}
		ContactMapOne = new google.maps.Map(document.getElementById('contactMapOne'), {
			center: {lat:56.4959861 , lng: 84.9682957}, //центровка карты
			zoom: 17,
			panControl: false,
			scrollwheel: false, 
			disableDefaultUI: true
		});
		var homeControlDiv = document.createElement('div');
		var homeControl = new HomeControl(homeControlDiv, ContactMapOne);

		 var styles = [
			{
			stylers: [
					{ hue: "#A9A69E" },
					{ saturation: -80 },
					{ lightness: 0}
				]
			}
		];
	  	ContactMapOne.setOptions({styles: styles});
		//
		//МЕТКА 1
		//
		var marker1 = new google.maps.Marker({
			position: {lat:56.4959861 , lng: 84.9682957}, //позиция маркера
			map: ContactMapOne,
			icon:mapMarkerCurrent,
		});
		
		
	}
	 








	//
	// contacts map TWO 22222222
	//
	if($("#contactMapTwo").length){
		var markersArray = [];

		google.maps.Map.prototype.clearOverlays = function() {
			for (var i = 0; i < markersArray.length; i++ ) {
				markersArray[i].setIcon(mapMarkerOther)
			}
		}



		function HomeControl(controlDiv, map) {
			google.maps.event.addDomListener(zoomout2, 'click', function() {
				var currentZoomLevel = map.getZoom();
				if(currentZoomLevel != 0){
					map.setZoom(currentZoomLevel - 1);
				}     
			});

			google.maps.event.addDomListener(zoomin2, 'click', function() {
				var currentZoomLevel = map.getZoom();
				if(currentZoomLevel != 21){
					map.setZoom(currentZoomLevel + 1);
				}
			});
		}
		ContactMapTwo = new google.maps.Map(document.getElementById('contactMapTwo'), {
			center: {lat:56.4959861 , lng: 84.9682957}, //центровка карты
			zoom: 13,
			panControl: false,
			scrollwheel: false, 
			disableDefaultUI: true
		});
		var homeControlDiv = document.createElement('div');
		var homeControl = new HomeControl(homeControlDiv, ContactMapTwo);

		 var styles = [
			{
			stylers: [
					{ hue: "#A9A69E" },
					{ saturation: -80 },
					{ lightness: 0}
				]
			}
		];
	  	ContactMapTwo.setOptions({styles: styles});
		//МЕТКА Default
		var markerDefault = new google.maps.Marker({
			position: {lat:56.4959861 , lng: 84.9682957}, //позиция маркера
			map: ContactMapTwo,
			icon:mapMarkerCurrent,
		});
		//markersArray.push(marker1); Main marker, we do not need to change	


		//МЕТКА 0
		var marker0 = new google.maps.Marker({
			position: {lat:56.510611 , lng: 84.9673266}, //позиция маркера
			map: ContactMapTwo,
			icon:mapMarkerOther,
		});
		markersArray.push(marker0);	

		//МЕТКА 1
		var marker1 = new google.maps.Marker({
			position: {lat:56.505611 , lng: 84.9923266}, //позиция маркера
			map: ContactMapTwo,
			icon:mapMarkerOther,
		});
		markersArray.push(marker1);	

		//МЕТКА 2
		var marker2 = new google.maps.Marker({
			position: {lat:56.515611 , lng: 84.9263266}, //позиция маркера
			map: ContactMapTwo,
			icon:mapMarkerOther,
		});
		markersArray.push(marker2);	

		//МЕТКА 3
		var marker3 = new google.maps.Marker({
			position: {lat:56.4930611 , lng: 84.9552753}, //позиция маркера
			map: ContactMapTwo,
			icon:mapMarkerOther,
		});
		markersArray.push(marker3);	

		//МЕТКА 4
		var marker4 = new google.maps.Marker({
			position: {lat:56.4720611 , lng: 84.9512753}, //позиция маркера
			map: ContactMapTwo,
			icon:mapMarkerOther,
		});
		markersArray.push(marker4);	

		//МЕТКА 5
		var marker5 = new google.maps.Marker({
			position: {lat:56.4760611 , lng: 84.9662753}, //позиция маркера
			map: ContactMapTwo,
			icon:mapMarkerOther,
		});
		markersArray.push(marker5);	

		//МЕТКА 6
		var marker6 = new google.maps.Marker({
			position: {lat:56.4820611 , lng: 84.9892753}, //позиция маркера
			map: ContactMapTwo,
			icon:mapMarkerOther,
		});
		markersArray.push(marker6);	

		google.maps.event.addDomListener($(".jsMapLink").click(function(){
			var markerID = $(this).attr("data-marker");
			ContactMapTwo.clearOverlays() // change icons in other markers
	        ContactMapTwo.panTo(markersArray[markerID].getPosition());  //center map in marker
	        markersArray[markerID].setIcon(black_Marker) 
	    }));



		
		




		
	}


	

	




	

	
}//end of all maps




