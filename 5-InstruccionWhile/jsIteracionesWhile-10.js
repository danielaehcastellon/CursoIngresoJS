/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let resp="si";
	let num=0;
	let sumaNeg=0;
	let sumaPosi=0;
	let cantN;
	let cantP;
	let cantCeros;
	let cantPar;
	let promedioP;
	let promedioN;
	let i;


	while(resp=="si")
	{
		num=parseInt(prompt("Ingrese un numero."));

		if(num<0) //1
		{
			sumaNeg= sumaNeg + num;
			sumaNeg++;
			//document.write("La suma de negativos es: "+sumaNeg);
		}
		else if (num>0)
		{
			sumaPosi= sumaPosi + num;
		}
		else if (cantP>0 ) // 
		{
			cantP  
		}
		else if (cantN<0)
		{
            cantN
		}
		else if (num==0)
		{
			cantCeros++;
		}
		else if (num % 2 == 0)
		{
			cantPar++;
		}
	
		resp=prompt("Desea continuar? si/no");

	}

	document.write("La suma de negativos es: "+sumaNeg+"<br>");
	document.write("La suma de positivos es: "+sumaPosi+"<br>");
	document.write("La cantidad de negativos es: "+cantN+"<br>");
	document.write("La cantidad de positivos es: "+cantP+"<br>");



}//FIN DE LA FUNCIÓN
/*
document.write("la suma de negativos es :" + SumaNeg);
	document.write("<br>");
	document.write("Cantidad de negativos es: " + ContadorNeg);
	document.write("<br>");

	promedioN = sumaNeg / cantN;
	promedioP = sumaPosi / cantP;

	 (pos+(neg)
*/