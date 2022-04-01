
// main
$(document).ready(function(){
  $(".mask").click(function(){
    if ($(".mask").hasClass("mask10")){
      $(".mask").addClass("mask1");
      setTimeout(function(){
        $(".mask").removeClass("mask10");
    }, 100);
  } else if ( $(".mask").hasClass("mask1")){
      $(".mask").addClass("mask2");
      setTimeout(function(){
        $(".mask").removeClass("mask1");
    }, 100);
  } else if ( $(".mask").hasClass("mask2")){
      $(".mask").addClass("mask3");
      setTimeout(function(){
        $(".mask").removeClass("mask2");
    }, 100);
	} else if ( $(".mask").hasClass("mask3")){
			$(".mask").addClass("mask4");
			setTimeout(function(){
				$(".mask").removeClass("mask3");
		}, 100);
	} else if ( $(".mask").hasClass("mask4")){
			$(".mask").addClass("mask5");
			setTimeout(function(){
				$(".mask").removeClass("mask4");
		}, 100);
	} else if ( $(".mask").hasClass("mask5")){
			$(".mask").addClass("mask6");
			setTimeout(function(){
				$(".mask").removeClass("mask5");
		}, 100);
	} else if ( $(".mask").hasClass("mask6")){
			$(".mask").addClass("mask7");
			setTimeout(function(){
				$(".mask").removeClass("mask6");
		}, 100);
	} else if ( $(".mask").hasClass("mask7")){
			$(".mask").addClass("mask8");
			setTimeout(function(){
				$(".mask").removeClass("mask7");
		}, 100);
	} else if ( $(".mask").hasClass("mask8")){
			$(".mask").addClass("mask9");
			setTimeout(function(){
				$(".mask").removeClass("mask8");
		}, 100);
	} else if ( $(".mask").hasClass("mask9")){
			$(".mask").addClass("mask10");
			setTimeout(function(){
				$(".mask").removeClass("mask9");
		}, 100);
    };
  });
});
// up
$(function(){
  $(".eyes").click(function(){
    if ($(".eyes").hasClass("y1")){
      $(".eyes").addClass("y2");
      setTimeout(function(){
        $(".eyes").removeClass("y1");
    }, 100);
  } else if ( $(".eyes").hasClass("y2")){
      $(".eyes").addClass("y3");
      setTimeout(function(){
        $(".eyes").removeClass("y2");
    }, 100);
  } else if ( $(".eyes").hasClass("y3")){
      $(".eyes").addClass("y4");
      setTimeout(function(){
        $(".eyes").removeClass("y3");
    }, 100);
	} else if ( $(".eyes").hasClass("y4")){
			$(".eyes").addClass("y5");
			setTimeout(function(){
				$(".eyes").removeClass("y4");
		}, 100);
	} else if ( $(".eyes").hasClass("y5")){
			$(".eyes").addClass("y6");
			setTimeout(function(){
				$(".eyes").removeClass("y5");
		}, 100);
	} else if ( $(".eyes").hasClass("y6")){
			$(".eyes").addClass("y7");
			setTimeout(function(){
				$(".eyes").removeClass("y6");
		}, 100);
	} else if ( $(".eyes").hasClass("y7")){
			$(".eyes").addClass("y8");
			setTimeout(function(){
				$(".eyes").removeClass("y7");
		}, 100);
	} else if ( $(".eyes").hasClass("y8")){
			$(".eyes").addClass("y9");
			setTimeout(function(){
				$(".eyes").removeClass("y8");
		}, 100);
	} else if ( $(".eyes").hasClass("y9")){
			$(".eyes").addClass("y10");
			setTimeout(function(){
				$(".eyes").removeClass("y9");
		}, 100);
	} else if ( $(".eyes").hasClass("y10")){
			$(".eyes").addClass("y1");
			setTimeout(function(){
				$(".eyes").removeClass("y10");
		}, 100);
    };
  });
});
// middle
$(function(){
  $(".nose").click(function(){
    if ($(".nose").hasClass("n1")){
      $(".nose").addClass("n2");
      setTimeout(function(){
        $(".nose").removeClass("n1");
    }, 100);
  } else if ( $(".nose").hasClass("n2")){
      $(".nose").addClass("n3");
      setTimeout(function(){
        $(".nose").removeClass("n2");
    }, 100);
  } else if ( $(".nose").hasClass("n3")){
      $(".nose").addClass("n4");
      setTimeout(function(){
        $(".nose").removeClass("n3");
    }, 100);
	} else if ( $(".nose").hasClass("n4")){
			$(".nose").addClass("n5");
			setTimeout(function(){
				$(".nose").removeClass("n4");
		}, 100);
	} else if ( $(".nose").hasClass("n5")){
			$(".nose").addClass("n6");
			setTimeout(function(){
				$(".nose").removeClass("n5");
		}, 100);
	} else if ( $(".nose").hasClass("n6")){
			$(".nose").addClass("n7");
			setTimeout(function(){
				$(".nose").removeClass("n6");
		}, 100);
	} else if ( $(".nose").hasClass("n7")){
			$(".nose").addClass("n8");
			setTimeout(function(){
				$(".nose").removeClass("n7");
		}, 100);
	} else if ( $(".nose").hasClass("n8")){
			$(".nose").addClass("n9");
			setTimeout(function(){
				$(".nose").removeClass("n8");
		}, 100);
	} else if ( $(".nose").hasClass("n9")){
			$(".nose").addClass("n10");
			setTimeout(function(){
				$(".nose").removeClass("n9");
		}, 100);
	} else if ( $(".nose").hasClass("n10")){
			$(".nose").addClass("n1");
			setTimeout(function(){
				$(".nose").removeClass("n10");
		}, 100);
    };
  });
});

// остальное
$( function() {
    $(".hat" ).draggable();
  } );
$( function() {
    $(".glines" ).draggable();
  } );
$( function() {
    $(".veer" ).draggable();
  } );
$( function() {
    $(".cube" ).draggable();
  } );
$( function() {
    $(".oval" ).draggable();
  } );
$( function() {
    $(".whtriangle" ).draggable();
  } );
$( function() {
    $(".half" ).draggable();
  } );
$( function() {
    $(".boldpoloski" ).draggable();
  } );
$( function() {
    $(".pavlin" ).draggable();
  } );
$( function() {
    $(".rain" ).draggable();
  } );
$( function() {
    $(".zigzag" ).draggable();
  } );
$( function() {
    $(".scratchesgor" ).draggable();
  } );
$( function() {
    $(".pero" ).draggable();
  } );
$( function() {
    $(".zigzagb" ).draggable();
  } );
$( function() {
    $(".voidtriangle" ).draggable();
  } );
$( function() {
    $(".scratch" ).draggable();
  } );
$( function() {
    $(".plane" ).draggable();
  } );
$( function() {
    $(".circlegreen" ).draggable();
  } );
// кнопка готово
  $(function(){
  		$(".next").click(function (){
  			$("body,html").animate({
  				scrollTop:900
  			},800);
  		});
  });

  $(function() {
  $('.next').click(function() {
    setTimeout(function(){
      $(".head, .eyes1, .nose1, .mouth1, .patterns").addClass("op");
  }, 100);
  });
});
 // кнопка заново
$(function(){
    $(".restart").bind('click', function(e){
        $(".handl").addClass("handl1");
        $(".handc").addClass("handc1");
        $(".handr").addClass("handr1");
    setTimeout(function(){
  		location.reload();
  	}, 3000);
    });
});
$(function(){
		$(".restart").click(function (){
      setTimeout(function(){
       $("body,html").animate({
         scrollTop:0
       },1200);
     }, 1500);
		});
});
// всплывалка
$( function() {
    $( document ).tooltip({
      position: {
        using: function( position, feedback ) {
          $( this ).css();
          $( "zaafro" )
            .addClass( "adv")
            .appendTo( this );
        }
      }
    });
  });

  $(function(){
     $(".next").click(function (){
     $(".frame1").clone().appendTo(".frame3")
     $(".zaafro, .tap, .drag").addClass("boole");
   });
  });
