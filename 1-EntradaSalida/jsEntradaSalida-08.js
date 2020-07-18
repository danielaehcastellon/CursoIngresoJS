/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var vNumDividendo;
	var vNumDivisor;
	var vResul;

	vNumDividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	vNumDivisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	vResul = vNumDividendo % vNumDivisor;
	


	alert("El resto es " + vResul.toFixed(2));
}
