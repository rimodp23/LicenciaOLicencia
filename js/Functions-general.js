var unasPalabras = [];
var cantidadPalabras = 0;
var palabra;
var palabraUsada;
var palabrasUsadas = [];;
var elnumeroRandom;
var elnumeroRandomOtros;
var seleccionadoNativo = 0; //0 nativo ; 1 Nuevo
var cantidadRadioButton = 5;

function PracticarUnoNuevo()
{
    seleccionadoNativo = 0; //0 nativo ; 1 Nuevo
	var rbtnSeleccionado = 0;
	var ok = false;//para no repetir opciones
	
	elnumeroRandom = Math.floor(Math.random()*(cantidadPalabras-1+1)+1) - 1;
	seleccionadoNativo = Math.floor(Math.random()*(2-1+1)+1) - 1;//Random de si aparece palabra nativa o no
	rbtnSeleccionado = Math.floor(Math.random()*(cantidadRadioButton-1+1)+1);//Math.floor(Math.random()*(max-min+1)+min);
	
	for (k = 0; k <= palabrasUsadas.length -1; k++) 
	{ 
		if (palabrasUsadas[k].PalabraNativa != unasPalabras[elnumeroRandom].PalabraNativa)
		{
			ok = true;
		}
		else
		{
			ok = false;
			k=0;
			elnumeroRandom = Math.floor(Math.random()*(cantidadPalabras-1+1)+1) - 1;
		}
	}
					
	if (seleccionadoNativo == 0)
	{
		$("#lblSeleccionado").text(unasPalabras[elnumeroRandom].PalabraNativa);
		$("#lrbtn" +  (rbtnSeleccionado)).text(unasPalabras[elnumeroRandom].PalabraTraducida);
		
		//imagen
		var image = document.getElementById('image');
		image.src = 'img/Verbos/' + unasPalabras[elnumeroRandom].PalabraIngles + '.png';
		//imagen
		
		var unasPalabrasDinamicas = unasPalabras;
		
		var i;
		for (i = 1; i <= cantidadRadioButton; i++) 
		{ 
			if (i != rbtnSeleccionado)
			{
				ok = false;//para no repetir opciones
				while (ok == false)
				{
					elnumeroRandomOtros = Math.floor(Math.random()*(unasPalabrasDinamicas.length-1+1)+1) - 1;
					var j;
					for (j = 1; j <= cantidadRadioButton; j++) 
					{ 
						if (j != i)
						{
							if ($("#lrbtn" + j).text() != unasPalabrasDinamicas[elnumeroRandomOtros].PalabraTraducida)
							{
								ok = true;
							}
							else
							{
								ok = false;
								break;
							}
						}
					}
					if(ok == true)		
					{
						$("#lrbtn" + i).text(unasPalabrasDinamicas[elnumeroRandomOtros].PalabraTraducida);
						palabraUsada = { PalabraNativa:unasPalabrasDinamicas[elnumeroRandomOtros].PalabraNativa	, PalabraTraducida:	unasPalabrasDinamicas[elnumeroRandomOtros].PalabraTraducida}; palabrasUsadas.push(palabraUsada);
					}
				}
			}
		}
	}
	else
	{
		$("#lblSeleccionado").text(unasPalabras[elnumeroRandom].PalabraTraducida);
		$("#lrbtn" +  (rbtnSeleccionado)).text(unasPalabras[elnumeroRandom].PalabraNativa);
		
		//imagen
		var image = document.getElementById('image');
		image.src = 'img/Verbos/' + unasPalabras[elnumeroRandom].PalabraIngles + '.png';
		//imagen		

		var unasPalabrasDinamicas = unasPalabras;
		
		var i;
		for (i = 1; i <= cantidadRadioButton; i++) 
		{ 
			if (i != rbtnSeleccionado)
			{
				var ok = false;//para no repetir opciones
				while (ok == false)
				{
					elnumeroRandomOtros = Math.floor(Math.random()*(unasPalabrasDinamicas.length-1+1)+1) - 1;
					var j;
					for (j = 1; j <= cantidadRadioButton; j++) 
					{ 
						if (j != i)
						{
							if ($("#lrbtn" + j).text() != unasPalabrasDinamicas[elnumeroRandomOtros].PalabraNativa)
							{
								ok = true;
							}
							else
							{
								ok = false;
								break;
							}
						}
					}
					if(ok == true)		
					{
						$("#lrbtn" + i).text(unasPalabrasDinamicas[elnumeroRandomOtros].PalabraNativa);
						palabraUsada = { PalabraNativa:unasPalabrasDinamicas[elnumeroRandomOtros].PalabraNativa	, PalabraTraducida:	unasPalabrasDinamicas[elnumeroRandomOtros].PalabraTraducida}; palabrasUsadas.push(palabraUsada);
					}
				}
			}
		}
	}		
}
	
function radioChanged(objeto) {
	
	var id = objeto.attr("id").replace(/[^0-9]+/, '');
	switch (id) {
					case"1":
							if(document.getElementById("rbtn1").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}							
						break;
					case"2":
							if(document.getElementById("rbtn2").checked == true) 
								{	
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}	
						break;
					case"3":
							if(document.getElementById("rbtn3").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn4").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}	
						break;
					case"4":
							if(document.getElementById("rbtn4").checked == true) 
								{	
									document.getElementById("rbtn2").checked = 0;
									document.getElementById("rbtn3").checked = 0;
									document.getElementById("rbtn1").checked = 0;
									document.getElementById("rbtn5").checked = 0;
								}		
						break;
					case"5":
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
	if	(btnCalificar.value =="Calificar")
	{
		var palabra="";
		var palabraTestear ="";
		
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
			$("#lblEstado").text(estados[0] +"/" + estados[1]); 
	
			unasPalabras.splice(elnumeroRandom, 1);
			cantidadPalabras = unasPalabras.length;
			
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

			document.getElementById("btnCalificar").value ="Continuar";
	}
	else
	{
		restaurarVista();
		PracticarUnoNuevo();
		document.getElementById("btnCalificar").value ="Calificar";
	}
}	

function restaurarVista()
{
	$("#lblResultado").text("");
	document.getElementById("lblSeleccionado").style.color ="green";
	document.getElementById("lblSeleccionado").style.color ="rgb(64, 64, 64)";  
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
	document.getElementById("lblSeleccionado").style.color ="green";
	document.getElementById("lblResultado").style.color ="green";
	$("#lblResultado").text("Excelente!");

    var estados = $("#lblEstado").text().split("/");
	estados[0] = parseInt(estados[0]) + 1;
	$("#lblEstado").text(estados[0] +"/" + estados[1]); 
		
}
	
function Incorrecto() 
{
	document.getElementById("lblSeleccionado").style.color ="red";
	document.getElementById("lblResultado").style.color ="red";
	$("#lblResultado").text("    Mal");

	if (seleccionadoNativo == 0)
	{
		$("#lblSeleccionado").text($("#lblSeleccionado").text() +" = " + unasPalabras[elnumeroRandom].PalabraTraducida);
	}
	else
	{
		$("#lblSeleccionado").text($("#lblSeleccionado").text() +" = " + unasPalabras[elnumeroRandom].PalabraNativa);
	}
}