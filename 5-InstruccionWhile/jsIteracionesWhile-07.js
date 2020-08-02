/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
    let contador=0;
	let acumulador=0;
	let respuesta;
	respuesta="si"; //txt como var de control
	let num;

	do {
		num= parseInt(prompt("Ingrese un numero."));
		acumulador= acumulador+num;
		contador++; //itera contador

		respuesta=prompt("Desea ingresar otro num? Responder: si o no");

	}while(respuesta == "si");

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;

	//txtIdSuma.value=acumulador;
	//txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN

/*
se puede resolver con while solo

while( respuesta=="si")
{
	num= parseInt(prompt("Ingrese un numero."));
	acumulador= acumulador+num;
	contador++; //itera contador

	respuesta=prompt("Desea ingresar otro num? Responder: si o no");


}

document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;
*/