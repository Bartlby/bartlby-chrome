
var req = new XMLHttpRequest();

function quickstate() {
  //var photos = req.responseXML.getElementsByTagName("photo");



	obj = JSON.parse(req.responseText);
	cnt=0;
	for(x=0; x<obj.length; x++) {
		if(localStorage["alerts_only"] == "true") {
			
				if(obj[x].current_state == 0) {
					continue;
				}
		}	
		if(	localStorage["downtimes"] == "true") {
			if(obj[x].is_downtime == 1) {
				continue;
			}
			
		}
		if(localStorage["warnings"] == "true") {
				if(obj[x].current_state == 1) {
					continue;
				}
				
		}
		if(localStorage["infos"] == "true") {
				if(obj[x].current_state == 4) {
					continue;
				}
		}	
		cnt++;
	}
	console.log("OBJ COUNT:" + obj.length);
	chrome.browserAction.setBadgeText({text:"" + cnt});

 
}


function updateState() {
	console.log("UPD");

	
req.open(
    "GET",
    localStorage["bartlby_url"] + "/services.php?json_output=1",
    true);
req.onload = quickstate;
req.send(null);
}
setInterval(function() { updateState() },5000);
