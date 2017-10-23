function VerProductos(){
	//alert("si está entrando a la referencia");
	
	var input=document.createElement("li");
    var password="dsfdsf";
    var userName="sdfsdsdf";
    var parametros = {
                "password" : password,
                "userName": userName
        };
	        $.ajax({
                data:  parametros,
                //url:   'http://webservicemyconcert.azurewebsites.net/WebService1.asmx/ObtenerCategorias',
                url: 'https://ti4601proyecto2.herokuapp.com/api/Productos',
                type:  'get',
                dataType: "text",
                success:  function (response) {

                        var respuesta=JSON.parse(response);
                        //var n=respuesta.lista.length;
                        var n=respuesta.length;
                        if(n>0){
                        	//significa que hay productos que montar.
                        	var tabla=document.createElement('table');
                        	var label=document.createElement('h2');
                        	label.textContent="Productos Existentes";
                        	document.body.appendChild(label);
                        	var encabezado=document.createElement('tr');
                        	var campo1=document.createElement('th');
                        	var campo2=document.createElement('th');
                        	var campo3=document.createElement('th');
                        	campo1.textContent="Producto";
                        	campo2.textContent="Codigo";
                        	campo3.textContent="Precio";
                        	encabezado.appendChild(campo1);
                        	encabezado.appendChild(campo2);
                        	encabezado.appendChild(campo3);
                        	tabla.appendChild(encabezado);
                        	//document.body.appendChild(tabla)



                        	for (var i=0;i<n;i++){
                        		//var tabla=document.getElementById('Tabla');
                        		var fila=document.createElement('tr');
                        		var columna1=document.createElement('td')
                        		var columna2=document.createElement('td')
                        		var columna3=document.createElement('td')
                        		columna1.textContent=respuesta[i].nombre;
                        		columna2.textContent=respuesta[i].codigo;
                        		columna3.textContent=respuesta[i].precio;
                        		fila.appendChild(columna1);
                        		fila.appendChild(columna2);
                        		fila.appendChild(columna3);
                        		tabla.appendChild(fila);
                        		//window.location.href="../HTML/TablaProductos.html";
                        	}
                        	document.body.appendChild(tabla)
							
                        }
                        else {
                        	alert("es cliente");
                        }

                }
        });

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function MejoresProductos(){
                var parametros={"username":"jajoji"};
            $.ajax({
                data:  parametros,
                //url:   'http://webservicemyconcert.azurewebsites.net/WebService1.asmx/ObtenerCategorias',
                url: 'https://ti4601proyecto2.herokuapp.com/api/Productos',
                type:  'get',
                dataType: "text",
                success:  function (response) {
                        //comentar esta linea cuando haga la consulta 
                        //response='[{"nombre":"pantalla","marca":"LG","cantidad":10},{"nombre":"telefono","marca":"Huawei","cantidad":30},{"nombre":"Libro","marca":" ","cantidad":15}]'
                        var respuesta=JSON.parse(response);

                        //var n=respuesta.lista.length;
                        var n=respuesta.length;
                        if(n>0){
                            //significa que hay productos que montar.
                            var tabla=document.createElement('table');
                            var label=document.createElement('h2');
                            label.textContent="Mejores Productos";
                            document.body.appendChild(label);
                            var encabezado=document.createElement('tr');
                            var campo1=document.createElement('th');
                            var campo2=document.createElement('th');
                            var campo3=document.createElement('th');
                            campo1.textContent="Nombre";
                            campo2.textContent="Marca";
                            campo3.textContent="Cantidad Adquirida";
                            encabezado.appendChild(campo1);
                            encabezado.appendChild(campo2);
                            encabezado.appendChild(campo3);
                            tabla.appendChild(encabezado);
                            //document.body.appendChild(tabla)
                            var top=[];
                            var indice=[];
                            var mayor=0;
                            var menor=0;
                            var centro=0;
                            for(var j=0;j<n;j++){
                                top[j]=parseInt(respuesta[j].cantCompras);
                            }
                            for(var j=0;j<n;j++){
                                if(top[j]>mayor)
                                    mayor=top[j];
                            }

                            for(var j=0;j<n;j++){
                                if(top[j]>centro && top[j]!=mayor)
                                    centro=top[j];
                            }
                            for(var j=0;j<n;j++){
                                if(top[j]>menor && top[j]!=centro && top[j]!=mayor)
                                    menor=top[j];
                            }

                            //top=[];
                            //top[n-3]=menor;
                            //top[n-2]=centro;
                            //top[n-1]=mayor;
                            top=top.sort();
                            alert(top +"valores"+mayor+" "+centro+" "+menor);
                            var contador=[0,0,0];
                            for(var k=0;k<n;k++){
                                if(mayor==respuesta[k].cantCompras && contador[0]!=1){
                                    indice[0]=k;
                                    contador[0]=1;
                                }
                                if(centro==respuesta[k].cantCompras &&contador[1]!=1 && indice[0]!=k){
                                    indice[1]=k;
                                    contador[1]=1;
                                }
                                if(menor==respuesta[k].cantCompras &&contador[2]!=1 && indice[1]!=k){
                                    indice[2]=k;
                                    contador[2]=1;
                                }
                            }
                            //alert(indice);
                            
                            for (var i=0;i<3;i++){
                                //var tabla=document.getElementById('Tabla');
                                var fila=document.createElement('tr');
                                var columna1=document.createElement('td')
                                var columna2=document.createElement('td')
                                var columna3=document.createElement('td')

                                columna1.textContent=respuesta[indice[i]].nombre;
                                columna2.textContent=respuesta[indice[i]].marca;
                                columna3.textContent=respuesta[indice[i]].cantCompras;  // cambiar por el que dice cantidad adquirida
                                fila.appendChild(columna1);
                                fila.appendChild(columna2);
                                fila.appendChild(columna3);
                                tabla.appendChild(fila);
                                //window.location.href="../HTML/TablaProductos.html";
                            }
                            document.body.appendChild(tabla);
                            
                        }
                        else {
                            alert("No hay datos que mostrar");
                        }

                }
        });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7
function Rango(){
                var parametros={"username":"jajoji"};
                $.ajax({
                data:  parametros,
                //url:   'http://webservicemyconcert.azurewebsites.net/WebService1.asmx/ObtenerCategorias',
                url: 'https://ti4601proyecto2.herokuapp.com/api/Usuarios',
                type:  'get',
                dataType: "text",
                success:  function (response) {
                        //response='[{"nombre":"jason","menor":2,"mayor":7},{"nombre":"josue","menor":5,"mayor":10},{"nombre":"jaime","menor":1,"mayor":17},{"nombre":"juan","menor":5,"mayor":32}]';
                        var respuesta=JSON.parse(response);
                        //var n=respuesta.lista.length;
                        var n=respuesta.length;
                        if(n>0){
                            //significa que hay productos que montar.
                            var tabla=document.createElement('table');
                            var label=document.createElement('h2');
                            label.textContent="Rango de Productos Comprados";
                            document.body.appendChild(label);
                            var encabezado=document.createElement('tr');
                            var campo1=document.createElement('th');
                            var campo2=document.createElement('th');
                            var campo3=document.createElement('th');
                            campo1.textContent="Nombre Cliente";
                            campo2.textContent="Numero menor";
                            campo3.textContent="Numero Mayor";
                            encabezado.appendChild(campo1);
                            encabezado.appendChild(campo2);
                            encabezado.appendChild(campo3);
                            tabla.appendChild(encabezado);
                            //document.body.appendChild(tabla)



                            for (var i=0;i<n;i++){
                                //var tabla=document.getElementById('Tabla');
                                var fila=document.createElement('tr');
                                var columna1=document.createElement('td')
                                var columna2=document.createElement('td')
                                var columna3=document.createElement('td')
                                columna1.textContent=respuesta[i].nombre;
                                columna2.textContent=respuesta[i].compraMenor;// aqui se tiene que cambiar por el que dice numero menor
                                columna3.textContent=respuesta[i].compraMayor;  // // aqui se tiene que cambiar por el que dice numero mayor
                                fila.appendChild(columna1);
                                fila.appendChild(columna2);
                                fila.appendChild(columna3);
                                tabla.appendChild(fila);
                                //window.location.href="../HTML/TablaProductos.html";
                            }
                            document.body.appendChild(tabla)
                            
                        }
                        else {
                            alert("No hay datos que mostrar");
                        }

                }
        });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////7/
function Promedio(){
               var parametros={"username":"jajoji"};
               var compras=0;
               var promedio=0;
                $.ajax({
                data:  parametros,
                //url:   'http://webservicemyconcert.azurewebsites.net/WebService1.asmx/ObtenerCategorias',
                url: 'https://ti4601proyecto2.herokuapp.com/api/Usuarios',
                type:  'get',
                dataType: "text",
                success:  function (response) {
                        //response='[{"nombre":"jason","promedio":23},{"nombre":"josue","promedio":30},{"nombre":"jacinto","promedio":42},{"nombre":"rosa","promedio":18}]';
                        var respuesta=JSON.parse(response);
                        //var n=respuesta.lista.length;
                        var n=respuesta.length;
                        if(n>0){
                            //significa que hay productos que montar.
                            var tabla=document.createElement('table');
                            var label=document.createElement('h2');
                            label.textContent="Promedio de Productos";
                            document.body.appendChild(label);
                            var encabezado=document.createElement('tr');
                            var campo1=document.createElement('th');
                            var campo2=document.createElement('th');
                            
                            campo1.textContent="Nombre Cliente";
                            campo2.textContent="Promedio de Producto";
                            
                            encabezado.appendChild(campo1);
                            encabezado.appendChild(campo2);
                            
                            tabla.appendChild(encabezado);
                            //document.body.appendChild(tabla)



                            for (var i=0;i<n;i++){
                                //var tabla=document.getElementById('Tabla');
                                var fila=document.createElement('tr');
                                var columna1=document.createElement('td')
                                var columna2=document.createElement('td')
                                promedio=respuesta[i].productosComprados/respuesta[i].compras;
                                //alert(r+":");
                                columna1.textContent=respuesta[i].nombre;// aqui se obtiene el nombre del cliente
                                //columna2.textContent=respuesta[i].promedio;// aqui se obtiene el valor del promedio
                                columna2.textContent=promedio;// aqui se obtiene el valor del promedio 
                                fila.appendChild(columna1);
                                fila.appendChild(columna2);
                                
                                tabla.appendChild(fila);
                                //window.location.href="../HTML/TablaProductos.html";
                            }
                            document.body.appendChild(tabla)
                            
                        }
                        else {
                            alert("No hay datos que mostrar");
                        }

                }
        });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function AgregarProducto(){
	var formulario= document.createElement('form');
	var nombre=document.createElement('input');
	var codigo=document.createElement('input');
	var Descripcion=document.createElement('input');
	var precio=document.createElement('input');
}
function CambiarPantalla(pagina){
	window.location.href= pagina;
	
}

