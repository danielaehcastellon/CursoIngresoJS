/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ /*variables */
	var vNumerouno;

	var vNumerodos;

	var vSumar; 

	var vResul;
/* de donde lo tomo dl html*/
	vNumerouno = document.getElementById("txtIdNumeroUno").value;
	vNumerodos = document.getElementById("txtIdNumeroDos").value;
/* sumo pasando a enteros los num, como se usa la funcion prompt supongo que se escribe esta nueva*/
vSumar = parseInt(vNumerouno) + parseInt(vNumerodos);
/* le digo que saque resultado*/

vResul = vSumar

/* que muestre el resultado */
	alert("La suma es " + vResul);
}

