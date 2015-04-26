/* jshint devel:true */
(function () {
	"use strict"; 

	var environment = {
		width: $(window).width(),
		height: $(window).height()
	}

	$(window).resize(function(){
		environment.width = $(window).width();
		environment.height = $(window).height();
	});


	/********* POPUP **********/
	
	var popup = {
		is_opened: false,
		transition_duration: 300,
		open: function(){
			console.log('open');
			popup.is_opened = true;
			$('.popup-container').css({display:"block"}).stop().animate({opacity:1}, popup.transition_duration, function(){
				$('.popup-container .wrapper>div').stop().animate({"margin-top":(environment.height * 0.2)}, popup.transition_duration);
			});
		},
		close: function(reopen, callback){
			console.log('close');
			popup.is_opened = false;
			$('.popup-container .wrapper>div').stop().animate({"margin-top":(environment.height + 100)}, popup.transition_duration, function(){
				if(!reopen){
					$('.popup-container').stop().animate({opacity:0}, popup.transition_duration, function(){
						$('.popup-container').css({display:"none"});
						if(callback){
							callback();
						}
					});
				}else{
					if(callback){
						callback();
					}
				}
			});
		},
		update: function(href, callback){
			console.log('update');
			var temp_html = $(href).html();
			$('.popup-container .wrapper>div').html(temp_html).removeClass().addClass(href.replace('#',''));
			cboxAction();
			callback();
		}
	}

	cboxAction();

	function cboxAction(){
		$(".cbox-html").unbind("click").bind("click", function(e){
			e.preventDefault();
			var href = $(this).attr('href');
			if(!popup.is_opened){
				popup.update(href, function(){
					popup.open();
				});
			}else{
				popup.close(true, function(){
					popup.update(href, function(){
						popup.open();
					});
				});
			}
		});
	}

	$('.popup-container').click(function(e){
		if(e.target.outerHTML.indexOf('popup-container')>0){
			popup.close(false);
		}
	});


})();