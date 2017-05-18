       $(function(){
	    	$('.head-nav').mouseover(function(){　　　　　　　　　　/*导航栏*/
	    		$(this).children('ul').show()
	    	})
	    	$('.head-nav').mouseout(function(){
	    		$(this).children('ul').hide()
	    	})
	    	$('.footer-nav').hover(function(){　　　　　　　　　　    /*底部导航栏*/
	    		$(this).children('ul').stop(false,true).slideToggle();
	    	})
       })
