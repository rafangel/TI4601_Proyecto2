function Registrarse(){
	var nombre=document.getElementById("1").value;
	var identificacion=document.getElementById("2").value;
	var residencia=document.getElementById("3").value;
	var usuario=document.getElementById("4").value;
  var password=document.getElementById("5").value;


	var parametros={  "cedula": identificacion,
  "nombre": nombre,
  "residencia": residencia,
  "username": usuario,
  "password": password,
  "rol": "2"
  };




 $.ajax({
                data:  parametros,
                url:   'https://ti4601proyecto2.herokuapp.com/api/Usuarios',
                //url: 'http://192.168.43.60:3000/api/persons',
                type:  'post',
                dataType: "text",
                success:  function (response) {
                        alert("Usuario Registrado.");


                }
        });
}