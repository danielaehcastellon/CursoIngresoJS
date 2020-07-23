function mostrar()
{
	let vEdad;
    vEdad = parseInt(document.getElementById("txtIdEdad").value);

	//tomo la edad  
	if (vEdad >=18)
	{
		alert("Mayor de edad");	
	}
	
	/*if (vEdad <=17)*/
	else
	{
		alert("Menor de edad");
	}
	

}//FIN DE LA FUNCIÓN