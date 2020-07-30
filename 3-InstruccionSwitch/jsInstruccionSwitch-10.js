function mostrar()
{
	let vEstacion = document.getElementById("txtIdEstacion").value;
	let vDestino = document.getElementById("txtIdDestino").value;

	switch(vEstacion)
	{
		case "Invierno":
			switch(vDestino)
			{
				case "Bariloche":
					alert("Se viaja.");
					break;
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					alert("No se viaja.");
					break;
			}
	    break;
		
		case "Verano":
			switch(vDestino)
			{
				case "Cataratas":
			    case "Mar del plata":
					alert("Se viaja.");
					break;
				
			    case "Cordoba":
				case "Bariloche":
					alert("No se viaja");
					break;
			}
		break;

		case "Otoño":
			switch(vDestino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata": //podria poner eso por default?
				case "Cordoba":
					alert("Se viaja.");
					break;

			}
		break;

		case "Primavera":
			switch(vDestino)
			{
				case "Bariloche":
					alert("No se viaja.");
					break;
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
					alert("Se viaja.");
					break;
			}

		break;
	}

}//FIN DE LA FUNCIÓN

/* no me sale con if
case "Bariloche":
case "Cataratas":
case "Mar del plata":
case "Cordoba":

si fuese if

if ((vEstacion == "Primavera") && (vDestino != "Bariloche"))
{
	alert("Se viaja.");
}

else if ((vEstacion == "Verano") && (vDestino == "Mar del plata" && vDestino == Cataratas))
{ alert("Se viaja");}
else if ((vEstacion == "Verano") && (vDestino != "Mar del plata") || (vDestino != "Cataratas"))
{alert("No se viaja");}
else if((vDestino == "Bariloche") && (vEstacion == "Invierno"))
{ alert("Se viaja.");}
else if
{alert("No se viaja");}
else (vEstacion == "otoño")
{alert("Se viaja");}

}  */