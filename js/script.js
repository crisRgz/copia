/*Comprobar select de paxina xestionar pacientes*/
function sel(){
  var select = $("#select").val();
  if(select != 1){
    $("#modificarPaciente").removeClass('ui-state-disabled');
    $("#borrarPaciente").removeClass('ui-state-disabled');
  }else{
    $("#modificarPaciente").addClass('ui-state-disabled');
    $("#borrarPaciente").addClass('ui-state-disabled');
  }
}

/*Comprobar chechbox de paxina xestionar citas.*/
function check(){
  // recorre los checkbox
  $('.micheckbox').each(
        function() {
            $("#borrarCita").addClass('ui-state-disabled');//si no estan checked deshabilita el boton borrarCita
        }
    );
  // recorre los checkbox
$('.micheckbox:checked').each(
      function() {
        $("#borrarCita").removeClass('ui-state-disabled');//si estan checked habilita el boton borrarCita
      }
  );
}

/*Comprobar select de paxina engadir cita*/
function engcita(){
  var select = $("#selectPac").val();
  if(select != 1){
    $("#gardarCita").removeClass('ui-state-disabled');

  }else{
    $("#gardarCita").addClass('ui-state-disabled');

  }
}
/*Funcion que carga os estilos cando accedemos a páxina*/
function style(){
  $('tr').css({'height' : '50px',   'border-bottom' : '1px solid rgb(163, 163, 163)'});
}
