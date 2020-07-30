function mostrar()
{
	
	const vCostobase = 15000;
	let vEstacion = document.getElementById("txtIdEstacion").value;
	let vDestino = document.getElementById("txtIdDestino").value;
	let vDescuento;
	let vAumento;
	let vPreciofinal;
	//Invierno
	//bariloche 20 + o sea 0.20
	switch(vEstacion)
	{
		case "Invierno":
			switch (vDestino)
			{
				case "Bariloche":
					vAumento = vCostobase * 0.20; 

			        vPreciofinal = vAumento + vCostobase;
					//alert
					alert("El precio final es $"+parseInt(vPreciofinal));
			        break;
		        case "Cataratas":
		        case "Cordoba":
					vDescuento = vCostobase * 0.10;
					vPreciofinal = vCostobase - vDescuento;
					alert("El precio final es $"+parseInt(vPreciofinal));
					break;
				case "Mar del plata":
					vDescuento = vCostobase * 0.20;
					vPreciofinal = vCostobase - vDescuento;
					alert("El precio final es $"+parseInt(vPreciofinal));
					break;
			}
		break; //corte del primer case
		case "Verano": //cada case con su break
			switch (vDestino)
			{
				case "Bariloche":
					vDescuento = vCostobase * 0.20;
					vPreciofinal = vCostobase - vDescuento;
					
					alert("El precio final es $"+parseInt(vPreciofinal));
					break;

				case "Cataratas":
				case "Cordoba":
					vAumento = vCostobase * 0.10;
					vPreciofinal = vCostobase + vAumento;
					alert("El precio final es $"+parseInt(vPreciofinal));
					break;
				case "Mar del plata":
					vAumento = vCostobase * 0.20;
					vPreciofinal = vCostobase + vAumento;
					alert("El precio final es $"+parseInt(vPreciofinal));
					break;
			}
		break;
		case "Otoño":
		case "Primavera":
			switch(vDestino)
			{
				case "Bariloche":
					vAumento = vCostobase * 0.10;
					vPreciofinal = vCostobase + vAumento;
					alert("El precio final es $"+parseInt(vPreciofinal));
					break;

					
				case "Cataratas":
				case "Mar del plata":
					vAumento = vCostobase * 0.10;
					vPreciofinal = vCostobase + vAumento;
					alert("El precio final es $"+parseInt(vPreciofinal));
					break;

				case "Cordoba":
					alert("El precio final es $"+parseInt(vCostobase));
					break;
			}
		break;
			
	}
	//cataratas y cba 10- o sea 0.10
	//mardel 0.20 -

	//verano
	//bari - 0.20
	//cata y cba + 0.10
	//mar del 0.20 +

	//otono y primavera
	//bari + 0.10
	// cata y cba + 0.10
	// cba igual

}//FIN DE LA FUNCIÓN