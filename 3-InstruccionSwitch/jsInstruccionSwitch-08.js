function mostrar()
{
	let vdestinoIngresado = (document.getElementById("txtIdDestino").value);
	//esta mal el html
switch (vdestinoIngresado)
{
	case "Bariloche":
	case "Ushuaia":
		alert("Frio.");
		break;
	case "Cataratas":
	case "Mar del plata":
		alert("Calor");
		break;
	default:
		alert("Este lugar no esta contemplada");
		break;
}

}//FIN DE LA FUNCIÓN

/* opcion ocn 
if(vdestinoIngresado == "Bariloche")
{
	alert("Frio");
}
else if (vdestinoIngresado == "Cataratas") unirlas
{
	alert("Calor.");
}
else if (vdestinoIngresado == "Mar del plata")
{
	alert("Calor");

}
else 
{
	alert("Frio");
}


*/