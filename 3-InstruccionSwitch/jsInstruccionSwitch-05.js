function mostrar()
{
	let vHora = parseInt(document.getElementById("txtIdHora").value);
	switch(vHora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de manana");
			break;
		}

}//FIN DE LA FUNCIÓN
//otra opciones pero no que la puedo probar
/*if (vHora >= 7 && 11)
	{
		alert("Es de manana");
	}
	else
	{
		alert("ok")
	}*/