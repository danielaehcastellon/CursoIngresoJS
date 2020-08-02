/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	do{
		sexo = prompt("Ingrese f o m .");


	}while(!(sexo == "f" || sexo == "m")); //no es tal or talcosa, niego todo ||

	document.getElementById("txtIdSexo").value = sexo;


	
}//FIN DE LA FUNCIÓN