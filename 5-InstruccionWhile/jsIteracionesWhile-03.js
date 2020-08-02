/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var clave;
	clave = prompt("ingrese la clave clave."); 

	while(clave != "utn750")
	{
		clave = prompt("ingrese la clave clave.");
	} //pensar cierre sino va a pedir millon de veces

	alert("La clave es correcta.");
	
}//FIN DE LA FUNCIÓN

/*
let clave;
do
{
 clave=prompt("Ingrese la clave");
}while ();

*/