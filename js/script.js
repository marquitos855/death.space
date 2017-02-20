var x=0;
var y=0;
var municion;
var dificultad;

var map = [];


 function keys(e){
    e = e || event;
		map[e.keyCode] = e.type == 'keydown'; // || 'keypressed'

		var i, l = map.length;
		for(i = 0; i < l; i ++)
			if(map[i])teclas(i);
}

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

function rotate(){
	for(var i=1; i<=4; i++){
		municion[i].pm=municion[(i%4)+1].pm;
		municion[i].pc=municion[(i%4)+1].pc;
	}

}

function recargar(){
	for(var i=1; i<=4; i++){
		if(municion[i].pm==0 && municion[i].pc==0)
				$( ".puntuaciones"+i ).css("color", "#dadada");

		var d=parseInt(municion[i].pm+50);
		municion[i].pm=d;
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



	municion[n].fijado=!municion[n].fijado;
}


function teclas(d) {

		switch(d){
			case 49:change("iq", 1);break; //1
			case 50:change("iw", 2);break; //2
			case 51:change("ie", 3);break; //3
			case 52:change("ir", 4);break; //4
			case 81:dispara(1);break; //q
			case 87:dispara(2);break; //w
			case 69:dispara(3);break; //e
			case 82:dispara(4);break; //r
			case 84:dispara(1);dispara(2);dispara(3);dispara(4);break; //t
			case 85:alarma(1);break; //u
			case 73:alarma(2);break; //i
			case 79:alarma(3);break; //o
			case 80:alarma(4);break; //p
			case 72:critico(1);break; //h
			case 74:critico(2);break; //j
			case 75:critico(3);break; //k
			case 76:critico(4);break; //l
			case 77:recargar();break; //m
			case 86:rotate();break; //v

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
				setTimeout(function(){decrementa(1);
				$( "#q" ).css( "display","none" );} , 100);
				break;
			case 2:
				$("#w").css( "display","inline" );
				setTimeout(function(){decrementa(2);
				$( "#w" ).css( "display","none" );}, 100);
				break;
			case 3:
				$("#e").css( "display","inline" );
				setTimeout(function(){decrementa(3);
				$( "#e" ).css( "display","none" );}, 100);
				break;
			case 4:
				$("#r").css( "display","inline" );
				setTimeout(function(){decrementa(4);
				$( "#r" ).css( "display","none" );}, 100);
			break;
		}

	}else{
		switch(t){
			case 1:
				$("#qf").css("display","inline" );
				setTimeout(function(){$( "#qf" ).css( "display","none" );}, 100);
				break;
			case 2:
				$("#wf").css( "display","inline" );
				setTimeout(function(){$( "#wf" ).css( "display","none" );}, 100);
				break;
			case 3:
				$("#ef").css( "display","inline" );
				setTimeout(function(){$( "#ef" ).css( "display","none" );}, 100);
				break;
			case 4:
				$("#rf").css( "display","inline" );
				setTimeout(function(){$( "#rf" ).css( "display","none" );}, 100);
			break;
		}

	}

}

function go(){
  $(".start").hide();

}
