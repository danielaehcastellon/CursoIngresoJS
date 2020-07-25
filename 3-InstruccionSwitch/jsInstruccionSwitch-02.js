function mostrar()
{
	let vMes;
	vMes = document.getElementById("txtIdMes").value;

	switch (vMes)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio!");
			break;
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Septiembre":
		case "Octubre":
			alert("Falta para el invierno");
			break;
		default:
			alert("Ya pasamos el frio, ahora calor");
			break;
	}


}//FIN DE LA FUNCIÓN