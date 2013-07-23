// JavaScript Document

function listPosts (data){
	//console.log(data.pages[0].title );
	console.log(data);
	console.log("Cargado");
}

function loadJSON(url){
	var headID = document.getElementsByTagName("title")[0];         
	var newScript = document.createElement('script');
	newScript.type = 'text/javascript';
	newScript.src = url;
	headID.appendChild(newScript);
}
 
function show(obj){
	var elems = document.getElementsByTagName("span");
	for(i=0; i<=elems.length; i++){
 
		var bind = elems[i].getAttribute("data");
        
		if(bind && obj[bind]){
			elems[i].innerHTML = obj[bind];
		}
 
	}
 
}
 
loadJSON('http://graph.facebook.com/736435961');