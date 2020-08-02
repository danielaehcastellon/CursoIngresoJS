/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let num;
	let respuesta="si";
	let sumaPositivos=0;
	let multiplicacionNegativos=1; //asi respeto la regla de los signos +*-= -

	//do
	while(respuesta == "si")
	{
		num= parseInt(prompt("Ingrese un numero."));
		
		//contador++;

		if( num >=0) //o sea positivos
		{
			sumaPositivos= sumaPositivos +num;

		}else if(num <=0){ //si no multi
			multiplicacionNegativos = multiplicacionNegativos * num;

		}
		respuesta=prompt("Desea sumar los positivos y multiplicar los negativos? Responder: si o no");

	}//while(respuesta == "si");
	
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;


	//txtIdSuma.value=sumaPositivos;
	//txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN