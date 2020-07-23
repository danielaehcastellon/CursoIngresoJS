function mostrar()
{
	let vEdad;
	vEdad = parseInt(document.getElementById("txtIdEdad").value);
//me pide dos condiciones mayor a 13 y menor a 17 entonces las uno con &&
//if nunca lleva ;
	if (vEdad >= 13 && vEdad <=17)
	{  
	alert("Es adolescente");
	}


}//FIN DE LA FUNCIÓN