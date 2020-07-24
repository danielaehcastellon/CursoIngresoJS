function mostrar()
{ 
	let vMaximo = 10;
	let vMinimo = 1;
	let vNum;
	//vnum seria la nota del examen
	vNum = Math.round(Math.random() *(vMaximo-vMinimo) + vMinimo );
	
	if (vNum == 9 || vNum == 10)
	{
		alert(vNum +" Excelente");
	}
//sino 
	else if (vNum >=4 && vNum <=8)
	{
		alert(vNum + " Aprobo");
	}
	
	else // <4
	{
		alert( vNum +" Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN