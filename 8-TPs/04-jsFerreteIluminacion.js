/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{//las lamp salen 35, el user pone la cantidad
     let vLamparas;
     let vMarcas;
     let vDescuento;
     let vResul; //podria asignarle aca el parsefloat asi ya me queda para dsp

     vLamparas = parseInt(document.getElementById("txtIdCantidad").value);//cantidad
     vMarcas = document.getElementById("Marca").value;
     vDescuento = parseFloat(document.getElementById("txtIdprecioDescuento").value);

     //A y no se porque puede ser por 6 o 7 o 8
     if (vLamparas >=6 && vDescuento == (vLamparas * 50) / 100)
     {
         alert(parseFloat(vResul = vLamparas - vDescuento));}//B
         
         else if (vLamparas === 5 && vMarcas === "ArgentinaLuz" && vDescuento == (35 * 40)/100)
         { alert(parseFloat(vResul= 35 * 5 - vDescuento));}
         
         else (vMarcas != "ArgentinaLuz" && vDescuento == (35*30)/100)
         { alert(parseFloat(vResul=35*5 - vDescuento))} //C no se si es necesaria la var descu
         
         if (vLamparas == 4 && vMarcas == "ArgentinaLuz" || "FelipeLamparas")
         { alert(parseFloat(vResul = (35 * 5) * 25 / 100));}
         
         else (vMarcas != "ArgentinaLuz" && "FelipeLamparas")
         { alert(parseFloat(vResul = (35*4) * 20 /100));}
         //D

}
//no se muestra por alert, se muestra en el cuadro de textos
//por eso no podia escribir ahi 