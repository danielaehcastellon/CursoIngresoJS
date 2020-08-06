/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	//let flag;
// el primer numero lo guardo en ambos valres min y max
//flag o bandera es una var con 2 valores t o f 
//numMinimo=numIngresado;
//numMaximo=numIngresado;

    let num;
    let numMaximo;
    let numMinimo;
	let respuesta="si";

	num=parseInt(prompt("Ingrese un numero.")); //tomo numero
	numMaximo=num; //el primer num aca y
	numMinimo=num; //el primer num aca tmb pq no sabemos si es < o >
	respuesta=prompt("Ingresa otro num? si/no.");

	while(respuesta =="si")
	{
		num = parseInt(prompt("Ingrese un numero."));

		if(num<=numMinimo) //2do num si resp si
		{  
			numMinimo = num; //piso el 1er num ocn el 2do
		} else if(num>=numMaximo)
		{
			numMaximo=num;
		}
		respuesta = prompt("Desea continuar ingresando numeros? si/no");
	}

	document.getElementById("txtIdMaximo").value=numMaximo;
	document.getElementById("txtIdMinimo").value=numMinimo;


} //fin func

/*
 hecho con do while

num = parseInt(prompt("Ingrese un numero: "));
		
	min = num;
	max = num;

	do {
		resp = prompt("Desea Ingresar mas Numeros? s/n").toLowerCase (resp);
		
		if (resp == 's')
		{
			num = parseInt(prompt("Ingrese un numero: "));

			if (num < min) 
			{
				min = num;	
			}
			else if (num > max)
			{
				max = num;
			}
		}
	} while (resp == 's');

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;
*/