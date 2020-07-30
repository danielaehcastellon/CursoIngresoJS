function mostrar()
{
	let vHora = parseInt(document.getElementById("txtIdHora").value);

	switch (vHora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de manana");
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde");
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert("Es de noche");
			break;
		default:
			alert("La hora no existe");
			break;
	}
	
}//FIN DE LA FUNCIÓN

/* lo mismo con if, armar el esqueleto y despues rellenar
if(vHora >=7 && vHora <=11)
{
	alert("Es de manana");
} 
else if(vHora >=12 && vHora <=19)
{
	alert("Es de tarde");
}
else if((vHora >=0 && vHora <=6) || (vHora >=20 && vHora<=24))
{
	alert("Es de noche");
}
else()
{
	alert("")
}

*/