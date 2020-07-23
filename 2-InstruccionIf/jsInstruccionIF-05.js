function mostrar()
{
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);

	//aca hay que negar que es adolescente, decir que no es
	//aca estoy negando agregando el negativo !

	if (!(vEdad >=13 && vEdad <=17))
	{
	alert("No es adolescente");
	}

}//FIN DE LA FUNCIÓN