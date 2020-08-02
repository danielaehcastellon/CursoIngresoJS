/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero=0;

	/* if(numero >=0 && numero <=9 )
	{
		document.getElementById("txtIdNumero").value = numero + (" es valido.");
	}
	else
	{
		document.getElementById("txtIdNumero").value = numero + " no valido";
	} */

	do{
		numero = prompt("Ingrese un número entre 0 y 10."); //no repite la asignacion la pongo una vez aca y ya
		//pongo 10 para que acepte hasta 9
		document.getElementById("txtIdNumero").value = numero + (" es valido.");

	} while (!(numero >=0 && numero <=9)); //para q salga no tiene q ser verdadero




}//FIN DE LA FUNCIÓN

/*
con while

//si no es esta condicion repetime el bucle de prompt
while(!(numero >=0 && numero <=9)){
	numero= parseInt(prompt("Ingrese numero entre 0 y 9"));
	//puede parsear o no

}
*/