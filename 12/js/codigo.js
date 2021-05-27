// validar correo
function validarEmail(correo) {
    let exreg = /^[-\w.%+]{1,30}@(?:[A-Z0-9-]{1,30}\.){1,30}[A-Z]{2,4}$/i;
    if (exreg.test(correo)) {
      console.log(correo+" es valido");
    } else {
      console.log(correo+" no es valido");
    }
  }

  validarEmail("correo@gmail.com");
  validarEmail("correo@gmaicom");

 // validar fecha
  function validarFecha(fecha) {
    let exreg =  /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if (exreg.test(fecha)) {
      console.log(fecha+" es valido");
    } else {
      console.log(fecha+" no es valido");
    }
  }

  validarFecha("12/12/1984")
  validarFecha("112/12/1984")

  //

