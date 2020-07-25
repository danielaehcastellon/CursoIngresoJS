function mostrar()
{
	let vMes = document.getElementById("txtIdMes").value;

	switch (vMes)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		default:
			alert("Tiene 31 dias");
			break; //puede no ponerse
			//ya que desp esta la llave final
	}
}//FIN DE LA FUNCIÓN