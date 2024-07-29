var unasPalabras = [];
var cantidadPalabras = 0;
var palabra;
var elnumeroRandom;
var elnumeroRandomOtros;
var seleccionadoNativo = 0; //0 nativo ; 1 Nuevo
var cantidadRadioButton = 5;
	
$(function () {
	Load();
});	

function Load()
{
	SeteoVariablesGlobales();
	document.getElementById("rbtn1").checked = 1;
	PracticarUnoNuevo();
}	
function SeteoVariablesGlobales()
{
	//document.getElementById("lblResultado").style.visibility = "hidden";
	//$("#lblEstado").text("0/1");
palabra = { PalabraNativa:"cut down on", PalabraTraducida:"reducir la cantidad"};	
	unasPalabras[0] = palabra;
palabra = { PalabraNativa:"catch up with", PalabraTraducida:"alcanzar el mismo nivel"};	
	unasPalabras[1] = palabra;
palabra = { PalabraNativa:"come up against", PalabraTraducida:"enfrentar"};	
	unasPalabras[2] = palabra;
palabra = { PalabraNativa:"come up with", PalabraTraducida:"meditar"};	
	unasPalabras[3] = palabra;
palabra = { PalabraNativa:"drop in on", PalabraTraducida:"cayeron"};	
	unasPalabras[4] = palabra;
palabra = { PalabraNativa:"face up", PalabraTraducida:"enfrentar"};	
	unasPalabras[5] = palabra;
palabra = { PalabraNativa:"feel up to", PalabraTraducida:"comodo"};	
	unasPalabras[6] = palabra;
palabra = { PalabraNativa:"get away with", PalabraTraducida:"evitar ser descubierto"};	
	unasPalabras[7] = palabra;
palabra = { PalabraNativa:"get along with", PalabraTraducida:"llevarse bien"};	
	unasPalabras[8] = palabra;
palabra = { PalabraNativa:"get on with", PalabraTraducida:"continuar"};	
	unasPalabras[9] = palabra;
palabra = { PalabraNativa:"get out of", PalabraTraducida:"evitar llegar tarde"};	
	unasPalabras[10] = palabra;
palabra = { PalabraNativa:"get round to", PalabraTraducida:"hacerse tiempo"};	
	unasPalabras[11] = palabra;
palabra = { PalabraNativa:"get up to", PalabraTraducida:"hacer algo malo"};	
	unasPalabras[12] = palabra;
palabra = { PalabraNativa:"go in for", PalabraTraducida:"tener un hobby"};	
	unasPalabras[13] = palabra;
palabra = { PalabraNativa:"grow out of", PalabraTraducida:"estar grande"};	
	unasPalabras[14] = palabra;
palabra = { PalabraNativa:"keep up with", PalabraTraducida:"permanecer en el mismo nivel"};	
	unasPalabras[15] = palabra;
palabra = { PalabraNativa:"look down on", PalabraTraducida:"sentirse superior"};	
	unasPalabras[16] = palabra;
palabra = { PalabraNativa:"look up to", PalabraTraducida:"respetar"};	
	unasPalabras[17] = palabra;
palabra = { PalabraNativa:"look forward to", PalabraTraducida:"esperar con ansiedad"};	
	unasPalabras[18] = palabra;
palabra = { PalabraNativa:"make up for", PalabraTraducida:"compensó"};	
	unasPalabras[19] = palabra;
palabra = { PalabraNativa:"put up with", PalabraTraducida:"tolerar"};	
	unasPalabras[20] = palabra;
palabra = { PalabraNativa:"run out of", PalabraTraducida:"quedarse sin"};	
	unasPalabras[21] = palabra;
palabra = { PalabraNativa:"stand up for", PalabraTraducida:"defenderse"};	
	unasPalabras[22] = palabra;
palabra = { PalabraNativa:"bring up", PalabraTraducida:"educar y criar"};	
	unasPalabras[23] = palabra;
palabra = { PalabraNativa:"carry out", PalabraTraducida:"llevar a cabo"};	
	unasPalabras[24] = palabra;
palabra = { PalabraNativa:"call off", PalabraTraducida:"cancelar"};	
	unasPalabras[25] = palabra;
palabra = { PalabraNativa:"clear up", PalabraTraducida:"limpiar"};	
	unasPalabras[26] = palabra;
palabra = { PalabraNativa:"clear up", PalabraTraducida:"mejorar"};	
	unasPalabras[27] = palabra;
palabra = { PalabraNativa:"fill in", PalabraTraducida:"completar formulario"};	
	unasPalabras[28] = palabra;
palabra = { PalabraNativa:"fill in", PalabraTraducida:"ocupar un puesto"};	
	unasPalabras[29] = palabra;
palabra = { PalabraNativa:"find out", PalabraTraducida:"descubrir"};	
	unasPalabras[30] = palabra;
palabra = { PalabraNativa:"give away", PalabraTraducida:"donar"};	
	unasPalabras[31] = palabra;
palabra = { PalabraNativa:"give away", PalabraTraducida:"dar a conocer"};	
	unasPalabras[32] = palabra;
palabra = { PalabraNativa:"give up", PalabraTraducida:"dejar un habito"};	
	unasPalabras[33] = palabra;
palabra = { PalabraNativa:"give up", PalabraTraducida:"intentar parar"};	
	unasPalabras[34] = palabra;
palabra = { PalabraNativa:"hold up", PalabraTraducida:"asaltar"};	
	unasPalabras[35] = palabra;
palabra = { PalabraNativa:"knock out", PalabraTraducida:"dejar inconsciente"};	
	unasPalabras[36] = palabra;
palabra = { PalabraNativa:"leave out", PalabraTraducida:"no incluir"};	
	unasPalabras[37] = palabra;
palabra = { PalabraNativa:"look up", PalabraTraducida:"ubicar un dato"};	
	unasPalabras[38] = palabra;
palabra = { PalabraNativa:"look up", PalabraTraducida:"parecer mejor"};	
	unasPalabras[39] = palabra;
palabra = { PalabraNativa:"make up", PalabraTraducida:"inventar historia"};	
	unasPalabras[40] = palabra;
palabra = { PalabraNativa:"make up", PalabraTraducida:"tomar una decisión"};	
	unasPalabras[41] = palabra;
palabra = { PalabraNativa:"pick up", PalabraTraducida:"pasar a buscar"};	
	unasPalabras[42] = palabra;
palabra = { PalabraNativa:"put aside", PalabraTraducida:"ahorrar"};	
	unasPalabras[43] = palabra;
palabra = { PalabraNativa:"put off", PalabraTraducida:"postergar"};	
	unasPalabras[44] = palabra;
palabra = { PalabraNativa:"put off", PalabraTraducida:"arruinar"};	
	unasPalabras[45] = palabra;
palabra = { PalabraNativa:"put up", PalabraTraducida:"dar alojamiento"};	
	unasPalabras[46] = palabra;
palabra = { PalabraNativa:"show around", PalabraTraducida:"mostrar"};	
	unasPalabras[47] = palabra;
palabra = { PalabraNativa:"take over", PalabraTraducida:"reemplazar el puesto de alguien"};	
	unasPalabras[48] = palabra;
palabra = { PalabraNativa:"tear up", PalabraTraducida:"cortar en pedacitos"};	
	unasPalabras[49] = palabra;
palabra = { PalabraNativa:"think over", PalabraTraducida:"meditar"};	
	unasPalabras[50] = palabra;
palabra = { PalabraNativa:"try out", PalabraTraducida:"estrenar"};	
	unasPalabras[51] = palabra;
palabra = { PalabraNativa:"turn down", PalabraTraducida:"rechazar"};	
	unasPalabras[52] = palabra;
palabra = { PalabraNativa:"wear out", PalabraTraducida:"cansar"};	
	unasPalabras[53] = palabra;
palabra = { PalabraNativa:"work out", PalabraTraducida:"encontrar una solucion"};	
	unasPalabras[54] = palabra;
			
	cantidadPalabras = unasPalabras.length;
}

function PracticarUnoNuevo()
{
    seleccionadoNativo = 0; //0 nativo ; 1 Nuevo
	var rbtnSeleccionado = 0;
	elnumeroRandom = Math.floor(Math.random()*(cantidadPalabras-1+1)+1) - 1;
	seleccionadoNativo = Math.floor(Math.random()*(2-1+1)+1) - 1;//Random de si aparece palabra nativa o no
	rbtnSeleccionado = Math.floor(Math.random()*(cantidadRadioButton-1+1)+1);//Math.floor(Math.random()*(max-min+1)+min);
	if (seleccionadoNativo == 0)
	{
		$("#lblSeleccionado").text(unasPalabras[elnumeroRandom].PalabraNativa);
		$("#lrbtn" +  (rbtnSeleccionado)).text(unasPalabras[elnumeroRandom].PalabraTraducida);

		var unasPalabrasDinamicas = unasPalabras;
		unasPalabrasDinamicas.splice(elnumeroRandom, 1);
		var i;
		for (i = 1; i <= cantidadRadioButton; i++) 
		{ 
			if (i != rbtnSeleccionado)
			{
				var ok = false;//para no repetir opciones
				while (ok == false)
				{
					elnumeroRandomOtros = Math.floor(Math.random()*(unasPalabrasDinamicas.length-1+1)+1) - 1;
					if ($("#lrbtn" + i).text() != unasPalabrasDinamicas[elnumeroRandomOtros].PalabraTraducida)
					{
						$("#lrbtn" + i).text(unasPalabrasDinamicas[elnumeroRandomOtros].PalabraTraducida);
						unasPalabrasDinamicas.splice(elnumeroRandomOtros, 1);
						ok = true;
					}
				}
			}
		}
	}
	else
	{
		$("#lblSeleccionado").text(unasPalabras[elnumeroRandom].PalabraTraducida);
		$("#lrbtn" +  (rbtnSeleccionado)).text(unasPalabras[elnumeroRandom].PalabraNativa);

		var unasPalabrasDinamicas = unasPalabras;
		unasPalabrasDinamicas.splice(elnumeroRandom, 1);
		
		var i;
		for (i = 1; i <= cantidadRadioButton; i++) 
		{ 
			if (i != rbtnSeleccionado)
			{
				var ok = false;//para no repetir opciones
				while (ok == false)
				{
					elnumeroRandomOtros = Math.floor(Math.random()*(unasPalabrasDinamicas.length-1+1)+1) - 1;
					if ($("#lrbtn" + i).text() != unasPalabrasDinamicas[elnumeroRandomOtros].PalabraNativa)
					{
						$("#lrbtn" + i).text(unasPalabrasDinamicas[elnumeroRandomOtros].PalabraNativa);
						unasPalabrasDinamicas.splice(elnumeroRandomOtros, 1);
						ok = true;
					}
				}
			}
		}
	}		
}
	
function radioChanged(objeto) {
	
	var id = objeto.attr("id").replace(/[^0-9]+/, '');
	switch (id) {
					case "1":
							if(document.getElementById("rbtn1").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}							
						break;
					case "2":
							if(document.getElementById("rbtn2").checked == true) 
								{	
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}	
						break;
					case "3":
							if(document.getElementById("rbtn3").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}	
						break;
					case "4":
							if(document.getElementById("rbtn4").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}		
						break;
					case "5":
							if(document.getElementById("rbtn5").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn1").checked = 0;
								}	
						break;
					default:
						break;
				}
}

function Calificar() 
{
	SeteoVariablesGlobales();
	if	(btnCalificar.value == "Calificar")
	{
		var palabra="";
		var palabraTestear = "";
		
			if (seleccionadoNativo == 0)
			{
				palabra = unasPalabras[elnumeroRandom].PalabraTraducida;
			}
			else
			{
				palabra = unasPalabras[elnumeroRandom].PalabraNativa;
			}
			
			var i;
			for (i = 1; i <= cantidadRadioButton; i++) 
			{ 
				if (document.getElementById("rbtn" + i).checked)
				{
					palabraTestear = $("#lrbtn" + i).text();
				}
			}
			
			if (Comparacion(palabra, palabraTestear))
			{
				Correcto();
			}
			else
			{
				Incorrecto();
			}
			
			var estados = $("#lblEstado").text().split("/");
			estados[1] = parseInt(estados[1]) + 1;
			$("#lblEstado").text(estados[0] + "/" + estados[1]); 
	
			// if (int.Parse(estados[1])==10)
			// {
				// if (estados[0] == estados[1])
				// {
					// lblEstado.ForeColor = Color.Green;
					
				// }
				// else
				// {
					// if ((int.Parse(estados[1]) - int.Parse(estados[0])) > 3)
					// {
						// if ((int.Parse(estados[1]) - int.Parse(estados[0])) > 6)
						// {
							// lblEstado.ForeColor = Color.Red;
						// }
						// else
						// {
							// lblEstado.ForeColor = Color.Khaki;
						// }

					// }
				// }
			// }

			document.getElementById("btnCalificar").value = "Continuar";
	}
	else
	{
		restaurarVista();
		PracticarUnoNuevo();
		document.getElementById("btnCalificar").value = "Calificar";
	}
}	

function restaurarVista()
{
	$("#lblResultado").text("");
	document.getElementById("lblSeleccionado").style.color = "green";
	document.getElementById("lblSeleccionado").style.color = "rgb(64, 64, 64)";  
	var i;
	for (i = 1; i <= cantidadRadioButton ; i++)
	{
		$("#lrbtn" + i).text("");
	}
	
	document.getElementById("rbtn1").checked = 1;
    document.getElementById("rbtn2").checked = 0;
	document.getElementById("rbtn3").checked = 0;
	document.getElementById("rbtn4").checked = 0;
	document.getElementById("rbtn5").checked = 0;
}
		
function Comparacion(palabraAux, palabraTestear) {
		var ok = false;
		var faltas = 0;
		var i = 0;
		var j = 0;

		if (Math.abs((palabraAux.length - palabraTestear.length) < 2))
		{

			//Comparo letra a letra por su faltan o sobran letras o son distintas
			if (palabraAux.length > palabraTestear.length)
			{
				faltas++;
			}
			while (faltas < 2 && i < (palabraAux.length))
			{
					if (palabraAux.length < palabraTestear.length)
					{
						if (palabraAux.substring(i, 1) != palabraTestear.substring(j, 1))
						{
							j++;
							faltas++;
						}

					}
					else
					{
						if (palabraAux.length > palabraTestear.length)
						{
							if (palabraAux.substring(i, 1) != palabraTestear.substring(j, 1))
							{
								j--;
								faltas++;
							}
						}
						else
						{
							if (palabraAux.substring(i, 1) != palabraTestear.substring(j, 1))
							{
								faltas++;
							}
						}
					}

				i++;
				j++;
			}
			if (faltas<2)
			{
				if (faltas == 1)
				{
				   
					if (seleccionadoNativo == 0)
					{
				 
					}
					else
					{
	 
					}
					
				}
				ok = true;
			}
		}

		return ok;
	}
	
function Correcto() 
{
	document.getElementById("lblSeleccionado").style.color = "green";
	document.getElementById("lblResultado").style.color = "green";
	$("#lblResultado").text("Excelente!");

    var estados = $("#lblEstado").text().split("/");
	estados[0] = parseInt(estados[0]) + 1;
	$("#lblEstado").text(estados[0] + "/" + estados[1]); 
		
}
	
function Incorrecto() 
{
	SeteoVariablesGlobales();
	document.getElementById("lblSeleccionado").style.color = "red";
	document.getElementById("lblResultado").style.color = "red";
	$("#lblResultado").text("    Mal    ");

	if (seleccionadoNativo == 0)
	{
		$("#lblSeleccionado").text($("#lblSeleccionado").text() + " = " + unasPalabras[elnumeroRandom].PalabraTraducida);
	}
	else
	{
		$("#lblSeleccionado").text($("#lblSeleccionado").text() + " = " + unasPalabras[elnumeroRandom].PalabraNativa);
	}
}