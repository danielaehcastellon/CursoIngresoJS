function mostrar()
{
	let num=0; 
	let i=0; //var de control iniciada siempre.
	                  //let acumulador=0; //inicializo pq desp hago calculos
	let promedio=0;

	while(i<5) { // sin tomar el 5 pq sino cuenta 6 veces desde el 0
		//5 la cantidad de veces q quiero que itere, o sea repita el promp
		//num = num + parseInt(prompt("Ingrese un num: "));
		num = parseInt(prompt("Ingrese un num: "));
		//acumulador = acumulador + num; //suma cantidades de num
		i = i + 1; //suma un 1

		//console.log("Muestro i: "+i); //a ver como muestra
	}
	//promedio afuera pq si ingresa menos num q 5 va a saca promedio 
	//a cada ratito
	//solo es promedio final
	promedio = num /5;

	document.getElementById("textIdSuma").value = num;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN




	/*

	let num1;
	let num2;
	let num3;
	let num4;
	let num5;
	let suma;
	let promedio;

	num1 = parseInt(prompt("Ingrese un num: "));
	num2 = parseInt(prompt("Ingrese un num: "));
	num3 = parseInt(prompt("Ingrese un num: "));
	num4 = parseInt(prompt("Ingrese un num: "));
	num5 = parseInt(prompt("Ingrese un num: "));

o para que no pise los numeros
usar acumulador

let num;

num = parseInt(prompt("Ingrese un num: "));
num = num + parseInt(prompt("Ingrese un num: "));
num = num + parseInt(prompt("Ingrese un num: "));
num = num + parseInt(prompt("Ingrese un num: "));
num = num + parseInt(prompt("Ingrese un num: "));

promedio = num / 5; //ya esta sumado el num

document.getElementById("txtIdSuma").value = num;
document.getElementById("txtIdPromedio").value = promedio ;



	*/








	/* let suma = 0;
	let promedio = 0;
	let num; //pedir 5 numeros
	let num1;     // asigne, asi se pisan los valores
	let num2;
	let num3;
	let num4;
	let num5;

	num = parseInt(prompt("Ingresar 5 numeros."));


	while (num == num1 && num == num2 && num == num3 && num == num4 && num == num5)
	{
		num = parseInt(prompt("Ingresar 5 numeros."));

		suma = num1 + num2 + num3 + num4 + num5;
		promedio = suma * 5 / 5;

	}

	document.getElementById("txtIdSuma").value = parseInt(suma);
	document.getElementById("txtIdPromedio").value = parseInt(promedio);
   */
