// Imprimo en la pagina el contenido del post que se trajo en el Json
function recentposts(data){
	var outputEventos;
	$.each(data.posts,function(key,val){
		//console.log(val.content);
		outputEventos=(val.content);
	});
	$('#wp-content').html(outputEventos);
}