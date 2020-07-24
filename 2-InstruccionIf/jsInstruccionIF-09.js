function mostrar()
{
	let vMaximo = 10;
	let vMinimo = 1;
	let vNum;
//round va a redondear el resul de la operacion y devolverlo a la var
//asignada q es vNum
//o tmb se podria parsear el resul abajo o antes de la operacion
	vNum = Math.round(Math.random() *(vMaximo-vMinimo) + vMinimo );

	alert(vNum);	

}//FIN DE LA FUNCIÓN