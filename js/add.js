//Hecho por:
//Fernando Chávez Rivera
//Andrés Ruiz Justo
$( "#agregareducacion" ).click(function() {
 $("#contenedoreducacion").append('<div class="row data"><div class="col-xs-7 subtitle">Degree</div><div class="col-xs-5">Fechas</div></div><p>Descripción</p>');
});

$( "#agregaridioma" ).click(function() {
 $("#contenedoridioma").append('<div class="row data"><div class="col-xs-7 subtitle">Español</div><div class="col-xs-5"><div class="progress backbar"><div class="progress-bar barra" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">100%</div></div></div></div>');
 });

 $( "#agregarsoftware" ).click(function() {
  $("#contenedorsoftware").append('<div class="row data subtitle"> Photoshop </div><p>Descripción</p>');
});

$( "#agregartrabajos" ).click(function() {
 $("#contenedortrabajos").append('<div class="row data"><div class="col-xs-7 subtitle">Oracle</div><div class="col-xs-5">Fechas</div></div><p>Descripción</p>');
});
