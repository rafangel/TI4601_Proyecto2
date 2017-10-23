var cantidadProductos;
function VerProductos(){
	//alert("si está entrando a la referencia");
	var id="dato";
	var input=document.createElement("li");
    var password="dsfdsf";
    var userName="sdfsdsdf";
    var parametros = {
                "password" : password,
                "userName": userName
        };
	        $.ajax({
                data:  parametros,
                url:   'https://ti4601proyecto2.herokuapp.com/api/Productos',
                type:  'get',
                dataType: "text",
                success:  function (response) {
          	     		//alert(response);

                        var respuesta=JSON.parse(response);
                        //var n=respuesta.lista.length;
                        var n=respuesta.length;
                        cantidadProductos=n;
                        if(n>0){
                        	//significa que hay productos que montar.
                        	var tabla=document.createElement('table');
                        	var label=document.createElement('h2');
                            var label2=document.createElement('h2');
                            var entrada2=document.createElement('input');
                            var entrada3=document.createElement('input');
                            entrada2.id="nombre";
                            entrada3.id="id";
                            entrada2.placeholder="Nombre";
                            entrada3.placeholder="userName";
                            label2.textContent="Por seguridad, introduzca el nombre y el Username del propietario";

                        	label.textContent="Productos Existentes";
                        	document.body.appendChild(label);
                        	var encabezado=document.createElement('tr');
                        	var campo1=document.createElement('th');
                        	var campo2=document.createElement('th');
                        	var campo3=document.createElement('th');
                            var campo4=document.createElement('th');

                        	campo1.textContent="Producto";
                        	campo2.textContent="Codigo";
                        	campo3.textContent="Precio";
                            campo4.textContent="Cantidad";

                        	encabezado.appendChild(campo1);
                        	encabezado.appendChild(campo2);
                        	encabezado.appendChild(campo3);
                            encabezado.appendChild(campo4);
                        	tabla.appendChild(encabezado);
                        	//document.body.appendChild(tabla)



                        	for (var i=0;i<n;i++){
                        		//var tabla=document.getElementById('Tabla');
                                id=id+i;
                        		var fila=document.createElement('tr');
                        		var columna1=document.createElement('td');
                        		var columna2=document.createElement('td');
                        		var columna3=document.createElement('td');
                                var entrada=document.createElement('input');
                                columna2.id=i+"0";
                                entrada.id=i+"1";

                        		columna1.textContent=respuesta[i].nombre;
                        		columna2.textContent=respuesta[i].codigo;
                        		columna3.textContent=respuesta[i].precio;
                                //entrada.textContent="saSA";
                        		fila.appendChild(columna1);
                        		fila.appendChild(columna2);
                        		fila.appendChild(columna3);
                                fila.appendChild(entrada);
                        		tabla.appendChild(fila);
                        		//window.location.href="../HTML/TablaProductos.html";
                        	}
                        	document.body.appendChild(tabla);
                            document.body.appendChild(label2);
                            document.body.appendChild(entrada2);
                            document.body.appendChild(entrada3);
                            
                        }
                        else {
                        	alert("es cliente");
                        }

                }
        });

}

function Comprar(){

    var dato=document.getElementById('01').value;
    var final=[];
    var j=0;
    var datosNuevos=[];
    var cantidadComprasNueva=0;
    var datosViejos=[];
    var cantidadComprasVieja=0;
    for (var i=0;i<cantidadProductos;i++){
        var codigo=document.getElementById(i+"0").textContent;
        var cantidad=document.getElementById(i+"1").value;
        if(cantidad!=""){
            var parametros={"codigo":codigo, "cantidad":cantidad};
            final=final.concat(parametros);
            //alert(final[j].codigo);
            j++;
        }

    }
    var nombre=document.getElementById("nombre").value;
    var id=document.getElementById("id").value;
    var bandera=0;
    if(Existe(id)==1){
            for (var i=0;i<final.length;i++){
                datosViejos=ObtenerDatosUsuario(id);
                if (bandera==0){
                    datosNuevos[1]=parseInt(datosViejos[1],10)+1; // está realizando una compra
                    bandera=1;
                }

                cantidadComprasVieja=ObtenerCantidadCompras(final[i].codigo);
                cantidadComprasNueva=cantidadComprasVieja+parseInt(final[i].cantidad,10);
                //llamar actualizar cantidad.
                datosNuevos[0]=datosViejos[0]+parseInt(final[i].cantidad,10);
                //
                if (final[i].cantidad<datosViejos[2] || datosViejos[2]==0)
                    datosNuevos[2]=final[i].cantidad;
                else
                    datosNuevos[2]=datosViejos[2];

                if (final[i].cantidad>datosViejos[3])
                    datosNuevos[3]=final[i].cantidad;
                else
                    datosNuevos[3]=datosViejos[3];
                //alert(datosNuevos +" y "+cantidadComprasNueva+"codigon"+parseInt(final[i].codigo,10));
                ActualizarUsuario(datosNuevos,id);
                ActualizarProducto(cantidadComprasNueva,parseInt(final[i].codigo,10));        
            }
            alert("Compra Realizada, Gracias");
        }
    else
        alert("username icorrecto");
}
function ObtenerCantidadCompras(codigo){
 var parametros = {
                "codigo" : codigo
        };
        var filtro ={"where":parametros};
        var cantidadCompras=0;
        $.ajax({
                data:  parametros,
                url:   'https://ti4601proyecto2.herokuapp.com/api/Productos?filter='+JSON.stringify(filtro),
                //url: 'http://192.168.43.60:3000/api/persons',
                type:  'get',
                dataType: "text",
                async: false,

                success:  function (response) {                 
                        var response=JSON.parse(response);
                        //alert(response[0].rol);
                        cantidadCompras=response[0].cantCompras;

                }
        });
        return cantidadCompras;
}
function ObtenerDatosUsuario(username){
 var parametros = {
                "username" : username
        };
        var filtro ={"where":parametros};
        var datos=[];
        $.ajax({
                data:  parametros,
                url:   'https://ti4601proyecto2.herokuapp.com/api/Usuarios?filter='+JSON.stringify(filtro),
                //url: 'http://192.168.43.60:3000/api/persons',
                type:  'get',
                dataType: "text",
                async: false,
                success:  function (response) {       

                        var response=JSON.parse(response);
                        //alert(response[0].rol);
                        datos[0]=response[0].productosComprados;
                        datos[1]=response[0].compras;
                        datos[2]=response[0].compraMenor;
                        datos[3]=response[0].compraMayor;

                }
        });
        return datos;
}
function ActualizarUsuario(datos,username){

    var parametros={ 
    "productosComprados": datos[0],
    "compras": datos[1],
    "compraMenor": datos[2],
    "compraMayor": datos[3]
  };
  username='"'+username+'"';
  var filtro='{"username":'+username+'}';
   $.ajax({
                data:  parametros,
                url:   'https://ti4601proyecto2.herokuapp.com/api/Usuarios/update?where='+filtro,
                //url: 'http://192.168.43.60:3000/api/persons',
                type:  'post',
                dataType: "text",
                async: false,
                success:  function (response) {
                        //alert("Modificado usuario");


                }
        });
}
function ActualizarProducto(cantidadCompras,codigo){

    var parametros={ 
    "cantCompras": cantidadCompras
  };

  var filtro='{"codigo":'+codigo+"}";
   $.ajax({
                data:  parametros,
                url:   'https://ti4601proyecto2.herokuapp.com/api/Productos/update?where='+filtro,
                //url: 'http://192.168.43.60:3000/api/persons',
                type:  'post',
                dataType: "text",
                async: false,
                success:  function (response) {
                        //alert("Modificado cantidadCompras");


                }
        });
}
function Existe(username){
 var parametros = {
                "username" : username
        };
        var filtro ={"where":parametros};
        var datos=0;
        $.ajax({
                data:  parametros,
                url:   'https://ti4601proyecto2.herokuapp.com/api/Usuarios?filter='+JSON.stringify(filtro),
                //url: 'http://192.168.43.60:3000/api/persons',
                type:  'get',
                dataType: "text",
                async: false,
                success:  function (response) {       

                        var response=JSON.parse(response);
                        if (response.length>0)
                            datos=1;
                        //alert(response[0].rol);
                        datos[0]=response[0].productosComprados;
                        datos[1]=response[0].compras;
                        datos[2]=response[0].compraMenor;
                        datos[3]=response[0].compraMayor;

                }
        });
        return datos;
}