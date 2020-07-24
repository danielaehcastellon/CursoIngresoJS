function mostrar()
{
	let vEdad;
	let vEstadocivil;

	vEdad = parseInt(document.getElementById("txtIdEdad").value);
	vEstadocivil = document.getElementById("estadoCivil").value;
	//seria no distinto a soltero
	//o podria ser == Soltero pero supongo q 
	//fuera de la negacion o sea del parentesis de !
	//solo niego el parentesis
	if (!(vEdad <18) && vEstadocivil == "Soltero" )
	{
		alert("Es soltero y no es menor");
	}

     	
}//FIN DE LA FUNCIÓN

/* otra opcion armada con or || pipe y tod las expresiones
den false
if (vEdad <18 || vEstado !="Soltero") */