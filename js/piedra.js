//se definen las variables de estado

	var piedra = 0;
	var papel = 1;
	var tijera = 2;
	var lagarto = 3;
	var spock = 4;
	var opcionUsuario = piedra;
	var opciones = [Piedra, Papel, Tijera, Lagarto, Spock];
	
//variables del estado del jugador

	var estado;
		var ganas = 0;
		var empatas = 1;
		var pierdes = 2;

// la maquina escoje

	var opcionMaquina = (Math.floor(Math.random()*(spock - piedra + 1) + piedra));

// Pide informacion al usuario y valida esta información.

	opcionUsuario = prompt("¿Que elijes?\n Piedra: " + piedra + " \n Papel: " + papel + " \n Tijera: " + tijera + " \n lagarto: " + lagarto + " \n spock: " + spock + ".", opcionUsuario);
	opcionUsuario = parseInt(opcionUsuario);

//compara las acciones de la maquina con las del usuario

	if (opcionUsuario >= piedra && opcionUsuario <= tijera)
	{
		if 				(opcionUsuario == piedra)
			{
				alert("Elejiste Piedra");
				if 		(opcionMaquina == piedra)	 		{ estado = empatas;	}
				else if (opcionMaquina == papel) 			{ estado = pierdes;	}
				else if (opcionMaquina == tijera)			{ estado = ganas;	}
				else if (opcionMaquina == lagarto)			{ estado = ganas;	}
				else if (opcionMaquina == spock)			{ estado = pierdes;	}
				else 										{ estado = wtf; 	}
			}

		else if 		(opcionUsuario == papel)
			{
				alert("Elejiste Papel");
				if 		(opcionMaquina == piedra) 			{ estado = ganas;	}
				else if (opcionMaquina == papel)			{ estado = empatas; }
				else if (opcionMaquina == tijera)			{ estado = pierdes;	}
				else if (opcionMaquina == lagarto)			{ estado = pierdes; }
				else if (opcionMaquina == spock)			{ estado = ganas;	}
				else 										{ estado = wtf; 	}
			}
			else if 	(opcionUsuario == tijera)
			{
				alert("Elejiste tijeras");
				if 		(opcionMaquina == piedra) 			{ estado = pierdes; }
				else if (opcionMaquina == papel) 			{ estado = ganas;	}
				else if (opcionMaquina == tijera)			{ estado = empatas;	}
				else if (opcionMaquina == lagarto)			{ estado = ganas;	}
				else if (opcionMaquina == spock)			{ estado = pierdes;	}
				else										{ estado = wtf; 	}
			}
			else if 	(opcionUsuario == lagarto)
			{
				alert("Elejiste lagarto");
				if 		(opcionMaquina == piedra) 			{ estado = pierdes; }
				else if (opcionMaquina == papel) 			{ estado = ganas;	}
				else if (opcionMaquina == tijera)			{ estado = ganas;	}
				else if (opcionMaquina == lagarto)			{ estado = empatas	}
				else if (opcionMaquina == spock)			{ estado = ganas;	}
				else										{ estado = wtf; }
			}
			else if  	(opcionUsuario == spock)
			{
				alert("Elejiste spock");
				if 		(opcionMaquina == piedra) 			{ estado = ganas; 	}
				else if (opcionMaquina == papel) 			{ estado = pierdes;	}
				else if (opcionMaquina == tijera)			{ estado = ganas;	}
				else if (opcionMaquina == lagarto)			{ estado = pierdes;	}
				else if (opcionMaquina == spock)			{ estado = empatas	}
				else										{ estado = wtf; }
			else
			{
				alert("no estamos preparados para esto")
			}  
	}

//muestra la eleccion de la maquina//
	
	if 			(opcionMaquina == piedra)					{ alert("La maquina eligiò piedra") }
	else if 	(opcionMaquina == papel) 					{ alert("La maquina eligiò papel")  }
	else if		(opcionMaquina == tijera) 					{ alert("la maquina eligio tijera") };
	if 			(estado == ganas) 							{ alert("ganaste!")					}
	else if 	(estado == pierdes)							{ alert("perdiste :(")				}
	else if  	(estado == empatas)							{ alert("empataron!")				}
	else if 	(estado == wtf) 							{ alert("no se que coño has hecho, pero me has ganado en logica! (y no estaba preparado para esto)")};