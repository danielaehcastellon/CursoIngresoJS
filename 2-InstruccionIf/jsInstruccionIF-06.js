function mostrar()
{
	let vEdad;
	
	//tomo la edad
	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	//anidar los if
	
	if (vEdad <13 )
	{
		alert("Menor de edad");
	}

// o usar else, lo que sale si no es nino
	 
	else
      {
		  if(vEdad <=13 && vEdad <18)
		  {
			  alert("Adolescente");
		  }
//si no es adoles es mayor, o sea si no se cumplio 
//ninguna condicion anterior es mayor, asi lo le
		  else
		  {
			  alert("Es mayor");
		  }
	  }	 

}//FIN DE LA FUNCIÓN 
//para que no quede asi larga la sintaxis puedo usar 
//else if. ver mi carpet