var x=0;
var y=0;
var municion;
var dificultad;

onload=function(){

			municion=new Array ();

			for(var i=1; i<=4;i++){
				municion[i]=new Object();
				municion[i].pc=50;
				municion[i].pm=500;
				municion[i].fijado=false;
			}

}

function decrementa(i){

	if(municion[i].pc!=0){
		municion[i].pc--;
	}else {
		if(municion[i].pm!=0){
			municion[i].pm-=50;
			municion[i].pc=49;
		}
	}

	if(municion[i].pc<10 && municion[i].pc[0]!='0')
		municion[i].pc="0"+municion[i].pc;

	if(municion[i].pm<100 && municion[i].pm[0]!="0")
		municion[i].pm="0"+municion[i].pm;

	if(municion[i].pm<10 && municion[i].pm.substring(0, 3)!="000")
			municion[i].pm="0"+municion[i].pm;


	if(municion[i].pm==0 && municion[i].pc==0)
			$( ".puntuaciones"+i ).css("color", "#99003d");

	var x;
	if(i%2==0)
		x=municion[i].pm+"/"+municion[i].pc;
	else
		x=municion[i].pc+"/"+municion[i].pm;

		$( ".m"+i ).replaceWith("<p class='m"+i+"'>"+x+"</p>");
}

function recargar(){
	for(var i=1; i<=4; i++){
		if(municion[i].pm==0 && municion[i].pc==0)
				$( ".puntuaciones"+i ).css("color", "#dadada");

		municion[i].pm=500;
		var x;
		if(i%2==0)
			x=municion[i].pm+"/"+municion[i].pc;
		else
			x=municion[i].pc+"/"+municion[i].pm;

		$( ".m"+i ).replaceWith("<p class='m"+i+"'>"+x+"</p>");
	}
}
function raton(event){
	x=event.clientX;
	y=event.clientY;
	x=x%645;
	y=y%300;

	if(!municion[1].fijado)
			$( "#qc" ).css( "left", x+"px" ).css( "top", y+"px" );

	if(!municion[2].fijado)
			$( "#wc" ).css( "left", (1300-x)+"px" ).css( "top", (y)+"px" );

	if(!municion[3].fijado)
			$( "#ec" ).css( "left", x+"px" ).css( "top", (600-y)+"px" );

	if(!municion[4].fijado)
			$( "#rc " ).css( "left", (1300-x)+"px" ).css( "top", (600-y)+"px" );

}
function change(i, n){

	if(!municion[n].fijado)
		$( "#"+i ).replaceWith("<img id='"+i+"' src='images/azul"+i+".svg' >");
	else
		$( "#"+i ).replaceWith("<img id='"+i+"' src='images/mirilla"+i+".svg' >");

}


function teclas(evObject) {

	$( "#o" ).css( "color","black" );

	var c = String.fromCharCode(evObject.which);

	if (evObject.which!=0 && evObject.which!=13) {
		switch(c){
			case '1':change("iq", 1);municion[1].fijado=!municion[1].fijado;break;
			case '2':change("iw", 2);municion[2].fijado=!municion[2].fijado;break;
			case '3':change("ie", 3);municion[3].fijado=!municion[3].fijado;break;
			case '4':change("ir", 4);municion[4].fijado=!municion[4].fijado;break;
			case 'q':dispara(1);break;
			case 'w':dispara(2);break;
			case 'e':dispara(3);break;
			case 'r':dispara(4);break;
			case 't':dispara(1);dispara(2);dispara(3);dispara(4);break;
			case 'u':alarma(1);break;
			case 'i':alarma(2);break;
			case 'o':alarma(3);break;
			case 'p':alarma(4);break;
			case 'h':critico(1);break;
			case 'j':critico(2);break;
			case 'k':critico(3);break;
			case 'l':critico(4);break;
			case 'm':recargar();break;

		}

		console.log(c);
	}else {
		c = 'Pulsada tecla especial';
		console.log(c);
	}
}

function alarma(i){
	$(".p"+i).css("border-color", "#ff6600");
	aux(i);
}

function critico(i){
	$(".p"+i).css("border-color", "#e60000");
	aux(i);
}

function aux(i){
	switch (i) {
		case 1:setTimeout(function(){$(".p1").css("border-color", "#b2b2b2");}, 1000);break;
		case 2:setTimeout(function(){$(".p2").css("border-color", "#b2b2b2");}, 1000);break;
		case 3:setTimeout(function(){$(".p3").css("border-color", "#b2b2b2");}, 1000);break;
		case 4:setTimeout(function(){$(".p4").css("border-color", "#b2b2b2");}, 1000);break;
	}
}

function dispara(t){

	if(municion[t].pm!="000" || municion[t].pc!="00"){

		switch(t){
			case 1:
				$("#q").css( "display","inline" );
				setTimeout(flashq, 100);
				break;
			case 2:
				$("#w").css( "display","inline" );
				setTimeout(flashw, 100);
				break;
			case 3:
				$("#e").css( "display","inline" );
				setTimeout(flashe, 100);
				break;
			case 4:
				$("#r").css( "display","inline" );
				setTimeout(flashr, 100);
			break;
		}

	}else{
		switch(t){
			case 1:
				$("#qf").css("display","inline" );
				setTimeout(flashqf, 100);
				break;
			case 2:
				$("#wf").css( "display","inline" );
				setTimeout(flashwf, 100);
				break;
			case 3:
				$("#ef").css( "display","inline" );
				setTimeout(flashef, 100);
				break;
			case 4:
				$("#rf").css( "display","inline" );
				setTimeout(flashrf, 100);
			break;
		}

	}

}

function flashq(){
	decrementa(1);
	$( "#q" ).css( "display","none" );
}
function flashw(){
	decrementa(2);
	$( "#w" ).css( "display","none" );
}
function flashe(){
	decrementa(3);
	$( "#e" ).css( "display","none" );
}
function flashr(){
	decrementa(4);
	$( "#r" ).css( "display","none" );
}


function flashqf(){
	$( "#qf" ).css( "display","none" );
}
function flashwf(){
	$( "#wf" ).css( "display","none" );
}
function flashef(){
	$( "#ef" ).css( "display","none" );
}
function flashrf(){
	$( "#rf" ).css( "display","none" );
}
