$("div").hide(); // cualquier código que use JQuery
function EnviarLogin(userName, contrasena){

alert("enviando");
}

function RealizaLogin(userName, contrasena){

        var parametros = {
                "password" : contrasena,
                "username": userName
        };
        var filtro ={"where":parametros};
        $.ajax({
                data:  parametros,
                url:   'https://ti4601proyecto2.herokuapp.com/api/Usuarios?filter='+JSON.stringify(filtro),
                //url: 'http://192.168.43.60:3000/api/persons',
                type:  'get',
                dataType: "text",
                success:  function (response) {                	
                		var response=JSON.parse(response);
                		//alert(response[0].rol);

                        //var respuenta=JSON.parse(response);
                        if (response.length==0){
                        	alert("usuario no existe");
                        }
                        else{

                        if(response[0].rol=="1"){
                        	//alert("administrador");
							window.location.href="../HTML/MenuAdministrador.html";
                        }
                        else {
                        	window.location.href="../HTML/RealizaCompra.html";
                        	//window.open("RealizaCompra.html","ventana");
                        }
                    }

                }
        });
    }
