//teclas

	/*case 'q': ar_iz('o');break;
				case 'w': arriba('o');break;
				case 'e': ar_de('o');break;
				case 's': abajo('o');break;
				case 'x': abajo('o');break;
				case 'a': izquierda('o');break;
				case 'd': derecha('o');break;
				case 'c': ab_de('o');break;
				case 'z': ab_iz('o');break;
				
				case 'y': ar_iz('u');break;
				case 'u': arriba('u');break;
				case 'i': ar_de('u');break;
				case 'k': abajo('u');break;
				case ',': abajo('u');break;
				case 'j': izquierda('u');break;
				case 'l': derecha('u');break;
				case '.': ab_de('u');break;
				case 'm': ab_iz('u');break;
			*/

function abajo(l){ 
 		console.log("abajo");
    	var posiciony=document.getElementById(l).offsetTop;
    	var abajo = document.getElementById(l).style.top=String(posiciony + 40 +"px" ); 
    } 

    function arriba(l){ 
     	console.log("arriba");
    	var posiciony=document.getElementById(l).offsetTop; 
    	var arriba = document.getElementById(l).style.top=String(posiciony - 40+ "px"); 
    } 

    function izquierda(l){ 
    	console.log("izquierda");
    	var posicionx=document.getElementById(l).offsetLeft; 
    	var izquierda = document.getElementById(l).style.left=String(posicionx  - 40+"px"); 
    } 

    function derecha(l){ 
    	console.log("derecha");
    	var posicionx=document.getElementById(l).offsetLeft; 
    	var derecha = document.getElementById(l).style.left=String(posicionx + 40+"px"); 
    } 
    function ar_iz(l){ 
    	console.log("ar_iz");
    	var posicionx=document.getElementById(l).offsetLeft; 
    	var posiciony=document.getElementById(l).offsetTop; 
    	var derecha = document.getElementById(l).style.left=String(posicionx - 40+"px"); 
    	var derecha = document.getElementById(l).style.top=String(posiciony - 40+"px"); 
    }
    function ar_de(l){ 
    	console.log("ar_de");
    	var posicionx=document.getElementById(l).offsetLeft; 
    	var posiciony=document.getElementById(l).offsetTop; 
    	var derecha = document.getElementById(l).style.left=String(posicionx + 40+"px"); 
    	var derecha = document.getElementById(l).style.top=String(posiciony - 40+"px"); 
    }
    function ab_de(l){ 
    	console.log("ab_de");
    	var posicionx=document.getElementById(l).offsetLeft; 
    	var posiciony=document.getElementById(l).offsetTop; 
    	var derecha = document.getElementById(l).style.left=String(posicionx + 40+"px"); 
    	var derecha = document.getElementById(l).style.top=String(posiciony + 40+"px");  
    } 
    function ab_iz(l){ 
    	console.log("ab_iz");
    	var posicionx=document.getElementById(l).offsetLeft; 
    	var posiciony=document.getElementById(l).offsetTop; 
    	var derecha = document.getElementById(l).style.left=String(posicionx - 40+"px"); 
    	var derecha = document.getElementById(l).style.top=String(posiciony + 40+"px"); 
    } 


