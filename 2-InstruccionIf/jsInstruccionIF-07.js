function mostrar()
{
	let vEdad;
	let vEstadocivil;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	vEstadocivil = document.getElementById("estadoCivil").value;
	//para el est civil tengo opciones en la cajita

	if (vEdad <18 && vEstadocivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN