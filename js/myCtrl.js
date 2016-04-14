app.controller("myCtrl", function($scope) {

    $scope.municion=new Array ();

    for(var i=1; i<=4;i++){
      $scope.municion[i]=new Object();
      $scope.municion[i].pc=50;
      $scope.municion[i].pm=500;
      $scope.municion[i].fijado=false;
    }

    document.onkeypress = function(evObject){

      $( "#o" ).css( "color","black" );

      var c = String.fromCharCode(evObject.which);

      if (evObject.which!=0 && evObject.which!=13) {
        switch(c){
          case '1':$scope.municion[1].fijado=!$scope.municion[1].fijado;break;
          case '2':$scope.municion[2].fijado=!$scope.municion[2].fijado;break;
          case '3':$scope.municion[3].fijado=!$scope.municion[3].fijado;break;
          case '4':$scope.municion[4].fijado=!$scope.municion[4].fijado;break;
          case 'q':$scope.dispara("q");break;
          case 'w':$scope.dispara("w");break;
          case 'e':$scope.dispara("e");break;
          case 'r':$scope.dispara("r");break;
          case 't':$scope.dispara("q");$scope.dispara("w");$scope.dispara("e");$scope.dispara("r");break;
        }

        console.log(c);
      }else {
        c = 'Pulsada tecla especial';
        console.log(c);
      }
    }


    document.onmousemove=function (event){
  		x=event.clientX;
   		y=event.clientY;
   		x=x%645;
   		y=y%300;

      if(!$scope.municion[1].fijado)
      		$( "#qc" ).css( "left", x+"px" ).css( "top", y+"px" );

  		if(!$scope.municion[2].fijado)
      		$( "#wc" ).css( "left", (1300-x)+"px" ).css( "top", (y)+"px" );

  		if(!$scope.municion[3].fijado)
      		$( "#ec" ).css( "left", x+"px" ).css( "top", (600-y)+"px" );

      if(!$scope.municion[4].fijado)
      		$( "#rc " ).css( "left", (1300-x)+"px" ).css( "top", (600-y)+"px" );
  	}


    $scope.decrementa=function(i){

      if($scope.municion[i].pc!=0){
        $scope.municion[i].pc--;
      }else {
        if($scope.municion[i].pm!=0){
          $scope.municion[i].pm-=50;
          $scope.municion[i].pc=49;
        }
      }
      if($scope.municion[i].pc<10 && $scope.municion[i].pc[0]!='0')
        $scope.municion[i].pc="0"+$scope.municion[i].pc;

      if($scope.municion[i].pm<100 && $scope.municion[i].pm[0]!="0")
        $scope.municion[i].pm="0"+$scope.municion[i].pm;

      if($scope.municion[i].pm<10 && $scope.municion[i].pm.substring(0, 3)!="000")
          $scope.municion[i].pm="0"+$scope.municion[i].pm;


      if($scope.municion[i].pm==0 && $scope.municion[i].pc==0)
          $( ".puntuaciones"+i ).css("color", "#99003d");

    }

      $scope.dispara=function (t){

      $("#"+t).css( "display","inline" );

      switch(t){
        case 'q':setTimeout($scope.flashq, 100);break;
        case 'w':setTimeout($scope.flashw, 100);break;
        case 'e':setTimeout($scope.flashe, 100);break;
        case 'r':setTimeout($scope.flashr, 100);break;
      }

    }

    $scope.flashq=function (){
      $scope.decrementa(1);
      $( "#q" ).css( "display","none" );
    }
    $scope.flashw=function (){
      $scope.decrementa(2);
      $( "#w" ).css( "display","none" );
    }
    $scope.flashe=function (){
      $scope.decrementa(3);
      $( "#e" ).css( "display","none" );
    }
    $scope.flashr=function (){
      $scope.decrementa(4);
      $( "#r" ).css( "display","none" );
    }

    var x=0;
  	var y=0;


});
