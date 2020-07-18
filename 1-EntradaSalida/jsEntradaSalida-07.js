/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numuno;
	var numdos;
	var resul;

numuno = document.getElementById("txtIdNumeroUno").value;
numdos = document.getElementById("txtIdNumeroDos").value;

	resul = parseInt(numuno) + parseInt(numdos);
	alert("La suma es " + resul);	
}

function restar()
{
	var numuno;
	var numdos;
	var resul;

numuno = document.getElementById("txtIdNumeroUno").value;
numdos = document.getElementById("txtIdNumeroDos").value;

	resul = parseInt(numuno) - parseInt(numdos);
alert("La resta es " + resul);
	
}

function multiplicar()
{ 
	/* se puede hacer el parseInt en otro lado*/ 
	var numuno;
	var numdos;
	var resul;

	numuno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numdos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resul = numuno * numdos;
	alert("La multiplicacion es " + resul);

}

function dividir()
{ /* siempre claro variables o desapruebo*/
	var numuno;
	var numdos;
	var resul;
/* al valor numuno que es una variabl
le pido que sea num con decimales
que lo busco del html document.. etc
luego el resultado se la aplica la funcion to fixed para
que muestre la cantidad que yo quiero de decimales*/
	numuno = parseFloat(document.getElementById("txtIdNumeroUno").value);
	numdos = parseFloat(document.getElementById("txtIdNumeroDos").value);

	resul = numuno / numdos;
	alert("La division es " + resul.toFixed(2));
	
}

