$(document).ready(function(){
  var pictureSource,destinationType;
  document.addEventListener("deviceready", onDeviceReady, false);
  
  function Ubicacion()
  {
    navigator.geolocation.getCurrentPosition(UbicacionSuccess, onError);
  }
  $("#ubicar").click(Ubicacion);
  $("#tomarfoto").click(capturePhoto);
  $("#galeriafoto").click(getPhoto);
  $("#enviarfile").click(enviardatos);
  $("#rutaimg").click(DeletePhoto);
  $("#updatecontent").click(contenido);

  
  function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
    function enviardatos(){
      console.log('entro')
      imageURI = $('#smallImage').attr('src');
      var options = new FileUploadOptions();
      options.fileKey="file";
      options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
      options.mimeType="image/jpeg";
      var params = new Object();
      params.correo = $('#correo').val();
      params.comentarios = $('#comentarios').val();
      options.params = params;
      console.log(options)
      var ft = new FileTransfer();
      ft.upload(imageURI, "http://www.bobdacarlo.com/wp-content/themes/lion1.1/contacto.php", win, fail, options);
    }
    function win(r) {
            alert(r.response);
            DeletePhoto();
            $('#correo').val(' ');
            $('#comentarios').val(' ');
    }

        function fail(error) {
            alert("Se presento un problema al enviar la imagen = " + error.code);
        }
    function onPhotoDataSuccess(imageData)
    {
      var rutaimg = document.getElementById('rutaimg');
      var smallImage = document.getElementById('smallImage');
      rutaimg.style.display = 'block';
      smallImage.src = imageData;
    }
    function DeletePhoto()
    {
      var rutaimg = document.getElementById('rutaimg');
      var smallImage = document.getElementById('smallImage');
      rutaimg.style.display = 'none';
      smallImage.src = '';
    }
    function onPhotoURISuccess(imageURI)
    {
      var rutaimg = document.getElementById('rutaimg');
      var smallImage = document.getElementById('smallImage');
      rutaimg.style.display = 'block';
      smallImage.src= imageURI;
    }
    function capturePhoto()
    {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }
    function getPhoto(source)
    {
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }
    function onFail(message)
    {
      alert('Ocurrió un error: ' + message);
    }
    $('#facebookwall').fbWall({
      id:'restconosur',
      accessToken:'118299478274181|ofXeqfMyddHtXE4iJLKw6pvY4rg',
      showGuestEntries:true,
      showComments:true,
      max:2,
      timeConversion:24
    });
    contenido();
    setInterval(function(){contenido()},300000);
    function contenido(){
      $('#divRss').FeedEk({
        FeedUrl : 'http://es.engadget.com/rss.xml',
        MaxCount : 5,
        ShowDesc : true,
        ShowPubDate: true
      });
    }


});