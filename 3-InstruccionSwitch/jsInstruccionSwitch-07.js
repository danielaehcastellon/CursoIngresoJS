function mostrar()
{
	let vDestino = document.getElementById("txtIdDestino").value;


	switch(vDestino)
	{
		case "Bariloche":
			alert("Oeste.");
			break;
		case "Ushuaia":
			alert("Sur.");
			break;
		case "Cataratas":
			alert("Norte.");
			break;
		case "Mar del plata":
			alert("Este.");
			break;
	}

}//FIN DE LA FUNCIÓN

/* opcion con if
if (vDestino == "Bariloche")
{
	alert("Oeste");
}
else if(vDestino == "Mar del plata")
{
	alert("Este");

}
else if(vDestino=="Cataratas")
{
	alert("Norte");
}
else
{
	alert("Sur.");
}

*/