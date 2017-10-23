function AgregarElectrodomestico(){

	var nombre=document.getElementById("1").value;
	var codigo=document.getElementById("2").value;
	var descripcion=document.getElementById("3").value;
	var precio=document.getElementById("4").value;
	var color=document.getElementById("5").value;
	var voltaje=document.getElementById("6").value;
	var marca=document.getElementById("7").value;

	var parametros={"codigo": codigo,
  "tipo": "2",
  "nombre": nombre,
  "descripcion": descripcion,
  "precio": precio,
  "cantCompras": 0,
  "autor": " ",
  "fecha": " ",
  "editorial": " ",
  "NoPaginas": " ",
  "color": color,
  "voltaje": voltaje,
  "marca": marca
  };


	 $.ajax({
                data:  parametros,
                url:   'https://ti4601proyecto2.herokuapp.com/api/Productos',
                //url: 'http://192.168.43.60:3000/api/persons',
                type:  'post',
                dataType: "text",
                success:  function (response) {
                        alert("Añadido.");


                }
        });
}


