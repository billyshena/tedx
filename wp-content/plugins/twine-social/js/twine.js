jQuery(document).ready(function() {

	jQuery('input[name="twinesocial_page_nav"], input[name="twinesocial_page_auto_scroll"], select#twinesocial_collection, select#twinesocial_language, select#twinesocial_pagesize, select#twinesocial_scrolloptions, select#twinesocial_color').change(function() {
		GenerateShortCode();
	});

	jQuery('.twine-themes img').click(function() {

		if (jQuery(this).closest('div').hasClass('locked')) {
			jQuery('.upgrade-message').removeClass('hide');
//			jQuery('.twine-themes .active').removeClass('active');
//			jQuery(this).closest('div').addClass('active');
		} else {
			jQuery('.upgrade-message').addClass('hide');
			jQuery('.twine-themes .active').removeClass('active');
			jQuery(this).closest('div').addClass('active');
			GenerateShortCode();
		}
	});

	jQuery("abbr.timeago").timeago();
	
	jQuery("#twinesocial_baseUrl" ).change(function() {
	
		baseUrl = jQuery('#twinesocial_baseUrl').val();
		
		for (var i=0;i<TwineSocialAppData.campaigns.length;i++) {
			if (TwineSocialAppData.campaigns[i].baseUrl==baseUrl) {
				jQuery('select#twinesocial_collection').find('option').remove();
				jQuery('select#twinesocial_collection').append('<option value="0">All</option>');
				for (var j=0;j<TwineSocialAppData.campaigns[i].collections.length;j++) {
					col = TwineSocialAppData.campaigns[i].collections[j];
					if (col.name!="All") {
						jQuery('select#twinesocial_collection').append('<option value="' + col.id + '">Display posts from my "' + col.name + '" Collection</option>');
					}
				}

				GenerateShortCode();
				break;
			}
		}
    		
	});
});

function GenerateShortCode() {
	if (jQuery('.twine pre').length>0) {
		baseUrl = jQuery('#twinesocial_baseUrl').val();
		shortcode = 'twinesocial app="' + baseUrl + '"';

		if (jQuery('input[name="twinesocial_page_nav"]').attr('checked')) {
			shortcode += ' nav="yes"';
		}

		if (!parseInt(jQuery('select#twinesocial_collection').val())==0) {
			shortcode += ' collection="' + jQuery('select#twinesocial_collection').val() + '"';
		}

		if (jQuery('select#twinesocial_language').val()!="en") {
			shortcode += ' language="' + jQuery('select#twinesocial_language').val() + '"';
		}

		if (jQuery('.twine-themes .active').attr('data-theme')!="classic"  && jQuery('.twine-themes .active').val()!=undefined) {
			shortcode += ' theme="' + jQuery('.twine-themes .active').attr('data-theme') + '"';
		}

		if (jQuery('select#twinesocial_color').val()!="white" && jQuery('select#twinesocial_color').val()!=undefined) {
			shortcode += ' color="' + jQuery('select#twinesocial_color').val() + '"';
		}


		if (jQuery('select#twinesocial_pagesize').val()!=20) {
			shortcode += ' pagesize="' + jQuery('select#twinesocial_pagesize').val() + '"';
		}

		shortcode += ' scrolloptions="' + jQuery('select#twinesocial_scrolloptions').val() + '"';


		jQuery('.twine pre').text('[' + shortcode + ']');

		jQuery('#btn-collections').attr('href','https://customer.twinesocial.com/app' + baseUrl + '/collection/index');
		jQuery('#btn-rules').attr('href','https://customer.twinesocial.com/app' + baseUrl + '/rules/index');
	}
}

/*
 * jQuery Reveal Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/


(function($) {

/*---------------------------
 Defaults for Reveal
----------------------------*/
	 
/*---------------------------
 Listener for data-reveal-id attributes
----------------------------*/

	$( document ).ready(function(e) {
		var modalLocation = $(this).attr('data-reveal-id');
		$('#signupModal').reveal($(this).data());
	});

/*---------------------------
 Extend and Execute
----------------------------*/

    $.fn.reveal = function(options) {
        
        
        var defaults = {  
	    	animation: 'fade', //fade, fadeAndPop, none
		    animationspeed: 500, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-reveal-modal' //the class of a button or element that will close an open modal
    	}; 
    	
        //Extend dem' options
        var options = $.extend({}, defaults, options); 
	
        return this.each(function() {
        
/*---------------------------
 Global Variables
----------------------------*/
        	var modal = $(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = $('.reveal-modal-bg');

/*---------------------------
 Create Modal BG
----------------------------*/
			if(modalBG.length == 0) {
				modalBG = $('<div class="reveal-modal-bg" />').insertAfter(modal);
			}		    
     
/*---------------------------
 Open & Close Animations
----------------------------*/
			//Entrance Animations
			modal.bind('reveal:open', function () {
			  modalBG.unbind('click.modalEvent');
				$('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": $(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('reveal:open');
			}); 	

			//Closing Animation
			modal.bind('reveal:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  $(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}		
				}
				modal.unbind('reveal:close');
				$( "#HelpBug" ).fadeOut( "slow")
				console.log('close it');
			});     
   	
/*---------------------------
 Open and add Closing Listeners
----------------------------*/
        	//Open Modal Immediately
    	modal.trigger('reveal:open')
			
			//Close Modal Listeners
			var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('reveal:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('reveal:close')
				});
			}
			$('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('reveal:close'); } // 27 is the keycode for the Escape key
			});
			
			
/*---------------------------
 Animations Locks
----------------------------*/
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call
})(jQuery);
        
