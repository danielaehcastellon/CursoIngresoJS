function mostrar()
{
	let vMes;
	vMes = document.getElementById("txtIdMes").value;

	switch(vMes)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 dias");
			break;
		/*case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
			alert("Este mes tiene 30 dias o mas");
			break;*/ 
			//para evitarme todo eso uso default
			//considera todo lo demas
		default:
			alert("Este mes tiene 30 dias o mas");
			break;

	}

}//FIN DE LA FUNCIÓN