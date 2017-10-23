function ModificarOtros(){
	var nombre=document.getElementById("1").value;
	var codigo=document.getElementById("2").value;
	var descripcion=document.getElementById("3").value;
	var precio=document.getElementById("4").value;


	var parametros={"codigo": codigo,
  "tipo": "3",
  "nombre": nombre,
  "descripcion": descripcion,
  "precio": precio,
  "cantCompras": 0,
  "autor": " ",
  "fecha": " ",
  "editorial": " ",
  "NoPaginas": " ",
  "color": "string",
  "voltaje": 0,
  "marca": "string"
  };

  var filtro='{"codigo":'+codigo+"}";
   $.ajax({
                data:  parametros,
                url:   'https://ti4601proyecto2.herokuapp.com/api/Productos/update?where='+filtro,
                //url: 'http://192.168.43.60:3000/api/persons',
                type:  'post',
                dataType: "text",
                success:  function (response) {
                        alert("Modificado.");


                }
        });
}