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
palabra = { PalabraIngles:"add 1", PalabraNativa:"ajouter 1", PalabraTraducida:"añadir 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"ask", PalabraNativa:"demander", PalabraTraducida:"pedir"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"bake", PalabraNativa:"cuire", PalabraTraducida:"hornear"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"barbecue", PalabraNativa:"barbecue", PalabraTraducida:"parilla"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"bathing", PalabraNativa:"baignade", PalabraTraducida:"baños"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"bend 1", PalabraNativa:"courbure 1", PalabraTraducida:"doblar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"bend", PalabraNativa:"pliez", PalabraTraducida:"curva"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"boil 1", PalabraNativa:"faire bouillir 1", PalabraTraducida:"hervir 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"bounce", PalabraNativa:"rebondir", PalabraTraducida:"rebotar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"bow 1", PalabraNativa:"arc 1", PalabraTraducida:"arco 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"break", PalabraNativa:"Pause", PalabraTraducida:"descanso"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"brush your hair", PalabraNativa:"brosse tes cheveux", PalabraTraducida:"Cepillate el pelo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"brush your teeth", PalabraNativa:"brosse-toi les dents", PalabraTraducida:"cepilla tus dientes"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"buy", PalabraNativa:"acheter", PalabraTraducida:"comprar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"calculate 1", PalabraNativa:"calculer 1", PalabraTraducida:"calcular 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"camping 1", PalabraNativa:"camping 1", PalabraTraducida:"camping 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"carry", PalabraNativa:"porter", PalabraTraducida:"llevar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Cartwheel", PalabraNativa:"Roue de charrette", PalabraTraducida:"Rueda de carro"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"catch 3", PalabraNativa:"attraper 3", PalabraTraducida:"atrapar 3"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"catch", PalabraNativa:"capture", PalabraTraducida:"captura"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"change the sheets", PalabraNativa:"changer les draps", PalabraTraducida:"cambia las sábanas"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"chop 1", PalabraNativa:"hacher 1", PalabraTraducida:"picar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"clap", PalabraNativa:"taper", PalabraTraducida:"aplaudir"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"clean the windows", PalabraNativa:"nettoyer les fenêtres", PalabraTraducida:"limpiar las ventanas"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"cleaning", PalabraNativa:"nettoyage", PalabraTraducida:"limpieza"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"climb", PalabraNativa:"montée", PalabraTraducida:"subida"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"close 1", PalabraNativa:"fermer 1", PalabraTraducida:"cerrar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"close", PalabraNativa:"Fermer", PalabraTraducida:"cerrar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"cook 1", PalabraNativa:"cuisinier 1", PalabraTraducida:"cocinar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"cook", PalabraNativa:"cuisinier", PalabraTraducida:"cocinar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"count", PalabraNativa:"compter", PalabraTraducida:"contar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"counting", PalabraNativa:"compte", PalabraTraducida:"contando"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"crawl", PalabraNativa:"crawl", PalabraTraducida:"gatear"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"cry 1", PalabraNativa:"pleurer 1", PalabraTraducida:"llorar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"cry 2", PalabraNativa:"pleurer 2", PalabraTraducida:"llorar 2"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"cut 1", PalabraNativa:"couper 1", PalabraTraducida:"corte 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"cut the grass", PalabraNativa:"couper l'herbe", PalabraTraducida:"corta la hierba"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"cut", PalabraNativa:"Couper", PalabraTraducida:"cortar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"cycling", PalabraNativa:"cyclisme", PalabraTraducida:"ciclismo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"dance 2", PalabraNativa:"danse 2", PalabraTraducida:"baile 2"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"dance", PalabraNativa:"Danse", PalabraTraducida:"danza"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Desayunar", PalabraNativa:"Desayunar", PalabraTraducida:"Desayunar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"dig", PalabraNativa:"creuser", PalabraTraducida:"cavar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Dine", PalabraNativa:"Dîner", PalabraTraducida:"Cenar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"dive", PalabraNativa:"se plonger", PalabraTraducida:"bucear"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"do the dishes", PalabraNativa:"faire la vaisselle", PalabraTraducida:"Lava los platos"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"drag", PalabraNativa:"traîne", PalabraTraducida:"arrastrar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"draw", PalabraNativa:"dessiner", PalabraTraducida:"dibujar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"dream", PalabraNativa:"rêver", PalabraTraducida:"sueño"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"dribble", PalabraNativa:"dribble", PalabraTraducida:"regatear"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Drill 1", PalabraNativa:"Exercice 1", PalabraTraducida:"Ejercicio 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"drink 1", PalabraNativa:"boire 1", PalabraTraducida:"beber 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"drink", PalabraNativa:"boisson", PalabraTraducida:"beber"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"drive a nail", PalabraNativa:"enfoncer un clou", PalabraTraducida:"clavar un clavo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"drive to work", PalabraNativa:"se rendre au travail", PalabraTraducida:"conducir al trabajo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Drop", PalabraNativa:"Laissez tomber", PalabraTraducida:"soltar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"dry", PalabraNativa:"sec", PalabraTraducida:"seco"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"eat 1", PalabraNativa:"manger 1", PalabraTraducida:"comer 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"eat", PalabraNativa:"manger", PalabraTraducida:"comer"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"exercise", PalabraNativa:"exercice", PalabraTraducida:"ejercicio"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"experiment 1", PalabraNativa:"expérience 1", PalabraTraducida:"Experimento 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"explain", PalabraNativa:"Explique", PalabraTraducida:"explique"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"fall", PalabraNativa:"tomber", PalabraTraducida:"otoño"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"feed the dog", PalabraNativa:"nourrir le chien", PalabraTraducida:"alimenta al perro"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"fight 1", PalabraNativa:"se battre 1", PalabraTraducida:"pelea 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"fishing 1", PalabraNativa:"pêche 1", PalabraTraducida:"pesca 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"fly 1", PalabraNativa:"voler 1", PalabraTraducida:"volar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"flying a kite", PalabraNativa:"faire voler un cerf-volant", PalabraTraducida:"volar una cometa"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"fold the laundry", PalabraNativa:"plier le linge", PalabraTraducida:"dobla la ropa"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"FOLD THE SCARF", PalabraNativa:"Plier l'écharpe", PalabraTraducida:"DOBLE LA BUFANDA"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"fry", PalabraNativa:"frire", PalabraTraducida:"freír"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"get dressed", PalabraNativa:"s'habiller", PalabraTraducida:"vestirse"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"get home", PalabraNativa:"Rentrer à la maison", PalabraTraducida:"llegar a casa"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"give 1", PalabraNativa:"donne 1", PalabraTraducida:"dar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"give", PalabraNativa:"donner", PalabraTraducida:"dar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"go for a walk 1", PalabraNativa:"faire une promenade 1", PalabraTraducida:"salir a caminar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"go out with friend", PalabraNativa:"sortir avec un ami", PalabraTraducida:"Salir con un amigo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"go shopping", PalabraNativa:"aller faire les courses", PalabraTraducida:"ir de compras"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"go to bed", PalabraNativa:"aller au lit", PalabraTraducida:"acostarse"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"go to school.", PalabraNativa:"va à l'école.", PalabraTraducida:"ir al colegio."}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"grate", PalabraNativa:"grille", PalabraTraducida:"rallar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Hang the clothes", PalabraNativa:"Accrocher les vêtements", PalabraTraducida:"Cuelga la ropa"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"hang the picture", PalabraNativa:"accrocher la photo", PalabraTraducida:"cuelga la foto"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"have a break", PalabraNativa:"prends une pause", PalabraTraducida:"tener un descanso"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"hit 1", PalabraNativa:"frapper 1", PalabraTraducida:"golpear 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"hit 3", PalabraNativa:"frapper 3", PalabraTraducida:"pulsa 3"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"hold", PalabraNativa:"tenir", PalabraTraducida:"sostener"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"hop", PalabraNativa:"saut", PalabraTraducida:"salto"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"hug", PalabraNativa:"étreinte", PalabraTraducida:"abrazo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"iron the clothes.", PalabraNativa:"repasser les vêtements.", PalabraTraducida:"planchar la ropa."}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"iron the clothes", PalabraNativa:"repasser les vêtements", PalabraTraducida:"planchar la ropa"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"jump 1", PalabraNativa:"saut 1", PalabraTraducida:"saltar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"jump 2", PalabraNativa:"saut 2", PalabraTraducida:"salto 2"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"jump", PalabraNativa:"saut", PalabraTraducida:"saltar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Kick", PalabraNativa:"Donner un coup", PalabraTraducida:"Patada"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"kiss 1", PalabraNativa:"bisou 1", PalabraTraducida:"beso 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"kiss", PalabraNativa:"baiser", PalabraTraducida:"Beso"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"kneel 1", PalabraNativa:"agenouiller 1", PalabraTraducida:"arrodillarse 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"kneel", PalabraNativa:"s'agenouiller", PalabraTraducida:"arrodillarse"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"knit", PalabraNativa:"tricoter", PalabraTraducida:"tejer"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"laugh", PalabraNativa:"rire", PalabraTraducida:"risa"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Laundry", PalabraNativa:"Blanchisserie", PalabraTraducida:"Lavandería"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"layer", PalabraNativa:"couche", PalabraTraducida:"capa"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"lean", PalabraNativa:"maigre", PalabraTraducida:"apoyarse"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"leap 1", PalabraNativa:"saut 1", PalabraTraducida:"salto 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"lie down", PalabraNativa:"s'allonger", PalabraTraducida:"acostarse"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"lift 1", PalabraNativa:"ascenseur 1", PalabraTraducida:"levantar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"lift 3", PalabraNativa:"ascenseur 3", PalabraTraducida:"levantar 3"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"light", PalabraNativa:"lumière", PalabraTraducida:"ligero"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"listen", PalabraNativa:"écoute", PalabraTraducida:"escucha"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Look", PalabraNativa:"Regardez", PalabraTraducida:"Mira"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Make dinner", PalabraNativa:"Faire le dîner", PalabraTraducida:"Hacer la cena"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"make my bed", PalabraNativa:"faire mon lit", PalabraTraducida:"hacer mi cama"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"make the bed", PalabraNativa:"faire le lit", PalabraTraducida:"hacer la cama"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"march", PalabraNativa:"Mars", PalabraTraducida:"marzo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"melt", PalabraNativa:"fondre", PalabraTraducida:"derretir"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"mix", PalabraNativa:"mélanger", PalabraTraducida:"mezcla"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"nobg", PalabraNativa:"nobg", PalabraTraducida:"nobg"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"observe", PalabraNativa:"observer", PalabraTraducida:"observar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"open 1", PalabraNativa:"ouvert 1", PalabraTraducida:"abierto 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Open", PalabraNativa:"Ouvrir", PalabraTraducida:"Abierto"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"order", PalabraNativa:"ordre", PalabraTraducida:"orden"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"paint 1", PalabraNativa:"peinture 1", PalabraTraducida:"pintar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"paint the house", PalabraNativa:"peindre la maison", PalabraTraducida:"pinta la casa"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"paint the picture", PalabraNativa:"peindre le tableau", PalabraTraducida:"pinta el cuadro"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"paint", PalabraNativa:"peindre", PalabraTraducida:"pintar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"pass", PalabraNativa:"passer", PalabraTraducida:"pasar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"pay", PalabraNativa:"Payer", PalabraTraducida:"paga"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"peel", PalabraNativa:"peler", PalabraTraducida:"pelar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"pick up", PalabraNativa:"ramasser", PalabraTraducida:"recoger"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"pinch", PalabraNativa:"pincer", PalabraTraducida:"pellizco"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"play 1", PalabraNativa:"jouer 1", PalabraTraducida:"jugar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"play the guitar", PalabraNativa:"jouer de la guitare", PalabraTraducida:"tocar la guitarra"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Play with friends", PalabraNativa:"Jouer avec des amis", PalabraTraducida:"Jugar con amigos"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"play", PalabraNativa:"jouer", PalabraTraducida:"jugar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"playing an instrument 2", PalabraNativa:"jouer d'un instrument 2", PalabraTraducida:"tocando un instrumento 2"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"playing cards", PalabraNativa:"jouer aux cartes", PalabraTraducida:"jugando a las cartas"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"playing chess", PalabraNativa:"jouer aux échecs", PalabraTraducida:"jugando ajedrez"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"point 2", PalabraNativa:"point 2", PalabraTraducida:"punto 2"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"pour", PalabraNativa:"verser", PalabraTraducida:"verter"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"pull", PalabraNativa:"tirez", PalabraTraducida:"Halar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"punch", PalabraNativa:"coup de poing", PalabraTraducida:"puñetazo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"push", PalabraNativa:"pousser", PalabraTraducida:"empujar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"put down 3", PalabraNativa:"poser 3", PalabraTraducida:"baja 3"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"put on makeup", PalabraNativa:"mettre du maquillage", PalabraTraducida:"maquillarse"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"rake the leaves", PalabraNativa:"ratisser les feuilles", PalabraTraducida:"rastrillar las hojas"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"read the news", PalabraNativa:"lire les nouvelles", PalabraTraducida:"Lee las noticias"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"read", PalabraNativa:"lis", PalabraTraducida:"leer"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"repair", PalabraNativa:"réparation", PalabraTraducida:"reparar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"ride 1", PalabraNativa:"tour 1", PalabraTraducida:"paseo 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"ride", PalabraNativa:"balade", PalabraTraducida:"paseo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"roast 2", PalabraNativa:"rôti 2", PalabraTraducida:"asado 2"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"roll out", PalabraNativa:"sortir", PalabraTraducida:"desenrollar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"run 3", PalabraNativa:"courir 3", PalabraTraducida:"correr 3"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"run", PalabraNativa:"courir", PalabraTraducida:"correr"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"saute", PalabraNativa:"faire sauter", PalabraTraducida:"saltear"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"say", PalabraNativa:"dire", PalabraTraducida:"decir"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"scrub the floor", PalabraNativa:"Frotter le sol", PalabraTraducida:"fregar el piso"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"serve 1 1", PalabraNativa:"servir 1 1", PalabraTraducida:"servir 1 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"serve 1", PalabraNativa:"servir 1", PalabraTraducida:"servir 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"sew", PalabraNativa:"Coudre", PalabraTraducida:"coser"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"shake hands", PalabraNativa:"serrer la main", PalabraTraducida:"apretón de manos"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"sharing", PalabraNativa:"partage", PalabraTraducida:"compartir"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"shoot", PalabraNativa:"tirer", PalabraTraducida:"disparar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"shouting 2", PalabraNativa:"criant 2", PalabraTraducida:"gritando 2"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"show", PalabraNativa:"spectacle", PalabraTraducida:"espectáculo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"sing", PalabraNativa:"chanter", PalabraTraducida:"canta"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"sit 2", PalabraNativa:"assis 2", PalabraTraducida:"sentarse 2"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"sit down", PalabraNativa:"asseyez-vous", PalabraTraducida:"siéntate"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"sit", PalabraNativa:"asseoir", PalabraTraducida:"sentar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"skateboarding", PalabraNativa:"faire de la planche à roulettes", PalabraTraducida:"patinaje"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Ski 1", PalabraNativa:"Ski 1", PalabraTraducida:"Ski 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"skip 1", PalabraNativa:"sauter 1", PalabraTraducida:"saltar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"sleep", PalabraNativa:"dormir", PalabraTraducida:"dormir"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"slice 1", PalabraNativa:"tranche 1", PalabraTraducida:"rebanada 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"slice", PalabraNativa:"tranche", PalabraTraducida:"rebanada"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"slip 1", PalabraNativa:"feuillet 1", PalabraTraducida:"deslizamiento 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"smell", PalabraNativa:"odeur", PalabraTraducida:"oler"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"snore", PalabraNativa:"ronfler", PalabraTraducida:"ronquido"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"spell", PalabraNativa:"épeler", PalabraTraducida:"deletrear"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"spread", PalabraNativa:"propager", PalabraTraducida:"untado"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"squat", PalabraNativa:"s'accroupir", PalabraTraducida:"agacharse"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"stack", PalabraNativa:"empiler", PalabraTraducida:"apilar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"stand up", PalabraNativa:"se lever", PalabraTraducida:"Levántate"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Stand", PalabraNativa:"Supporter", PalabraTraducida:"Estar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"steam", PalabraNativa:"vapeur", PalabraTraducida:"vapor"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"stir", PalabraNativa:"remuer", PalabraTraducida:"remover"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"stretch 1", PalabraNativa:"étirer 1", PalabraTraducida:"estiramiento 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Stretch", PalabraNativa:"Étendue", PalabraTraducida:"Tramo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"study", PalabraNativa:"étude", PalabraTraducida:"estudiar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Surf in the Internet", PalabraNativa:"Surfer sur Internet", PalabraTraducida:"Navegar por la red"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"surf the net", PalabraNativa:"naviguer sur Internet", PalabraTraducida:"navegar por la red"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"surfing 1", PalabraNativa:"surf 1", PalabraTraducida:"surfeando 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"sweep the floor", PalabraNativa:"Balayez le sol", PalabraTraducida:"barrer el piso"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"swimming 3", PalabraNativa:"natation 3", PalabraTraducida:"natación 3"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"take a bath", PalabraNativa:"prendre un bain", PalabraTraducida:"tómate un baño"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"take a shower", PalabraNativa:"prend une douche", PalabraTraducida:"tomar una ducha"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"take a taxi", PalabraNativa:"prendre un taxi", PalabraTraducida:"toma un taxi"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"take out the rubbish 1", PalabraNativa:"sortir les ordures 1", PalabraTraducida:"sacar la basura 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"take out the rubbish", PalabraNativa:"sortir les poubelles", PalabraTraducida:"sacar la basura"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"take pictures", PalabraNativa:"prendre des photos", PalabraTraducida:"tomar fotografías"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"talk", PalabraNativa:"parler", PalabraTraducida:"hablar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"taste", PalabraNativa:"goût", PalabraTraducida:"gusto"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"teach", PalabraNativa:"apprendre", PalabraTraducida:"enseñar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"think 1", PalabraNativa:"pense que 1", PalabraTraducida:"pensar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"think", PalabraNativa:"pense", PalabraTraducida:"pensar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"throw 1", PalabraNativa:"lancer 1", PalabraTraducida:"lanzar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"throw away", PalabraNativa:"jeter", PalabraTraducida:"tirar a la basura"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"throw", PalabraNativa:"jeter", PalabraTraducida:"lanzar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"tighten", PalabraNativa:"serrer", PalabraTraducida:"apretar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"tiptoe 1 1", PalabraNativa:"pointe de pied 1 1", PalabraTraducida:"de puntillas 1 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"To have lunch", PalabraNativa:"Déjeuner", PalabraTraducida:"Almorzar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Trip", PalabraNativa:"Voyage", PalabraTraducida:"Viaje"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"turn off", PalabraNativa:"éteindre", PalabraTraducida:"apagar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"turn on", PalabraNativa:"allumer", PalabraTraducida:"encender"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Untitled design 6", PalabraNativa:"Design sans titre 6", PalabraTraducida:"Diseño sin título 6"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"vacuum the floor", PalabraNativa:"passer l'aspirateur", PalabraTraducida:"aspirar el piso"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"vacuum", PalabraNativa:"vide", PalabraTraducida:"vacío"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"wait for the bus", PalabraNativa:"attendre le bus", PalabraTraducida:"espera por el bus"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"wait", PalabraNativa:"attendre", PalabraTraducida:"Espere"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"wake up", PalabraNativa:"Réveillez-vous", PalabraTraducida:"despierta"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"walk 1", PalabraNativa:"marche 1", PalabraTraducida:"caminar 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"walk the dog", PalabraNativa:"promener le chien", PalabraTraducida:"pasear al perro"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"walk", PalabraNativa:"marche", PalabraTraducida:"caminar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"wash the car", PalabraNativa:"lave la voiture", PalabraTraducida:"lava el auto"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"wash", PalabraNativa:"lavage", PalabraTraducida:"lavar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"watch TV", PalabraNativa:"regarder la télévision", PalabraTraducida:"mirar televisión"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"water the plants", PalabraNativa:"arroser les plantes", PalabraTraducida:"regar las plantas"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"Wave", PalabraNativa:"Vague", PalabraTraducida:"Ola"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"weigh out", PalabraNativa:"peser", PalabraTraducida:"pesar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"whip", PalabraNativa:"fouet", PalabraTraducida:"látigo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"win", PalabraNativa:"gagner", PalabraTraducida:"ganar"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"wipe the table", PalabraNativa:"Essuyez la table", PalabraTraducida:"limpia la mesa"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"work", PalabraNativa:"travail", PalabraTraducida:"trabajo"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"write 1", PalabraNativa:"écris 1", PalabraTraducida:"escribir 1"}; unasPalabras.push(palabra);
palabra = { PalabraIngles:"write", PalabraNativa:"écrire", PalabraTraducida:"escribir"}; unasPalabras.push(palabra);

cantidadPalabras = unasPalabras.length;
}


