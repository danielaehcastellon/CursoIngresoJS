function mostrar()
{
	/*let vMes;
	vMes = document.getElementById("TxtIdMes").value;

	if(vMes == "Enero")
	{
		alert("Que comiences bien el año");
	}
	else if (vMes == "Marzo"){
		alert("A clases");
	}
	else if (vMes == "Julio"){
		alert("Se vienen las vacaciones");
	}
	else if (vMes == "Diciembre"){
		alert("Felices fiestas");
	} */

	let vMes = document.getElementById("txtIdMes").value;
	switch (vMes){
		case "Enero":
			alert("Que comiences bien el ano");
			break;
		case "Marzo":
			alert("A clases!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiestas");
			break;
	}
}//FIN DE LA FUNCIÓN