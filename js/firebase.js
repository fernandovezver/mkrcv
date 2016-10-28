var usersRef = firebase.database().ref('user1/');
var perro = ''

usersRef.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    // key will be "ada" the first time and "alan" the second time
    var key = childSnapshot.key;
    // childData will be the actual contents of the child
    var childData = childSnapshot;
    $("#persona").append('<div class="row data"> Nombre </div><div class="row data"> Carrera </div><div class="row data"><div class="col-xs-6">Número de cel</div><div class="col-xs-6">Mail</div></div><div class="row data"><div class="col-xs-4">Dirección</div><div class="col-xs-4">Ciudad</div><div class="col-xs-4">Pais</div>');
    console.log("===============PERSONA===============");
    console.log("Nombre: "+childData.child("nombre").val());
    console.log("Carrera: "+childData.child("carrera").val());
    console.log("Número de cel: "+childData.child("noCel").val());
    console.log("Direccion: "+childData.child("dir").val());
    console.log("Mail: "+childData.child("mail").val());
    console.log("Ciudad: "+childData.child("ciudad").val());
    console.log("===============EDUCACION===============");
    childData.child("educacion").forEach(function(educacionSnapshot){
      var educacion = educacionSnapshot;
      console.log("Nombre: "+educacion.child("name").val());
      console.log("Fecha: "+educacion.child("date").val());
      console.log("Descripción: "+educacion.child("desc").val());
    });
    console.log("===============IDIOMAS===============");
    childData.child("idiomas").forEach(function(idiomaSnapshot){
      var idioma = idiomaSnapshot;
      console.log("Idioma: "+idioma.child("name").val());
      console.log("Nivel: "+idioma.child("nivel").val());
    });
    console.log("===============INTERESES===============");
    childData.child("intereses").forEach(function(interesesSnapshot){
      var intereses = interesesSnapshot;
      console.log("Interes: "+intereses.child("name").val());
      console.log("URL: "+intereses.child("url").val());
    });
    console.log("===============SOFTWARE===============");
    childData.child("software").forEach(function(softwareSnapshot){
      var software = softwareSnapshot;
      console.log("Software: "+software.child("name").val());
      console.log("Descripción: "+software.child("desc").val());
    });
    console.log("===============TRABAJO===============");
    childData.child("trabajos").forEach(function(trabajosSnapshot){
      var trabajos = trabajosSnapshot;
      console.log("Trabajo: "+trabajos.child("name").val());
      console.log("Fecha: "+trabajos.child("date").val());
      console.log("Descripción: "+trabajos.child("desc").val());
    });
  });
});

$( document ).ready(function() {
    console.log( "ready!" );
    $("#persona").append(perro);
    //$("#persona").append('<div class="row data"> Nombre </div><div class="row data"> Carrera </div><div class="row data"><div class="col-xs-6">Número de cel</div><div class="col-xs-6">Mail</div></div><div class="row data"><div class="col-xs-4">Dirección</div><div class="col-xs-4">Ciudad</div><div class="col-xs-4">Pais</div>');
});

//$("#persona").append('<div class="row data"> Nombre </div><div class="row data"> Carrera </div><div class="row data"><div class="col-xs-6">Número de cel</div><div class="col-xs-6">Mail</div></div><div class="row data"><div class="col-xs-4">Dirección</div><div class="col-xs-4">Ciudad</div><div class="col-xs-4">Pais</div>');
