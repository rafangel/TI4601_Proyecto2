function CrearLibro(){
	var nombre=document.getElementById("1").value;
	var codigo=document.getElementById("2").value;
	var descripcion=document.getElementById("3").value;
	var precio=document.getElementById("4").value;
	var autor=document.getElementById("5").value;
	var fecha=document.getElementById("6").value;
	var editorial=document.getElementById("7").value;
	var numeroPaginas=document.getElementById("8").value;

	var parametros={"codigo": codigo,
  "tipo": "1",
  "nombre": nombre,
  "descripcion": descripcion,
  "precio": precio,
  "cantCompras": 0,
  "autor": autor,
  "fecha": fecha,
  "editorial": editorial,
  "NoPaginas": numeroPaginas,
  "color": "string",
  "voltaje": 0,
  "marca": "string"
  };


    //var parametros1 ={"idComprador":id, "Nombre":nombre, "Lista":final};
    //alert(parametros.Nombre +","+ parametros.Lista[3].cantidad +","+ parametros.Lista[3].codigo );

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