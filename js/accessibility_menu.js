(function($) {
	
	


	
	
	
$(document).ready(function() {	

	var $window = $(window),
        $html = $('html');

		
	// change the coolaxs_mobile screen between portrait & landscape modes
    function resize() {
		
		/* if(window.innerHeight > window.innerWidth){
			alert("Please use Landscape!");
		}		
				
		// Bind an event to window.orientationchange that, when the device is turned,
		// gets the orientation and displays it to on screen.
		$( window ).on( "orientationchange", function( event ) {
		  $( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
		});
		 
		// You can also manually force this event to fire.
		$( window ).orientationchange();
		 */

		var coolaxs_isMobile = false; //initiate as false
		
		// device detection
		if(/(android|bb\d+|meego).+coolaxs_mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) coolaxs_isMobile = true;

		//console.log("window.innerWidth: "+ window.innerWidth);
		//if (coolaxs_isMobile) console.log("coolaxs_isMobile");

        if ((coolaxs_isMobile) || (( ! coolaxs_isMobile) && ((window.innerWidth != 0) && (window.innerWidth < 1024)))) {

			$(".coolaxs_mobile_accessibility_panel").show();
			
			$html.addClass('coolaxs_mobile');
			
			if(window.innerHeight > window.innerWidth) {
				
				$html.removeClass('coolaxs_mobile_landscape');
				
				var mbp = $(".coolaxs_top_or_bottom_mobile_pannel");
					mbp.append($("#coolaxs_highlight_titles")).append($("#coolaxs_highlight_links")).
					append($(".coolaxs_buttons_group #coolaxs_accessibility_settings_group").parent()).append($("#coolaxs_reset_all_accessibility"));
				
				mbp = $(".coolaxs_right_mobile_pannel");
					mbp.append($(".coolaxs_buttons_group #coolaxs_font_size_group").parent()).append($(".coolaxs_buttons_group #coolaxs_line_height_group").parent()).
					append($(".coolaxs_buttons_group #coolaxs_letter_spacing_group").parent()).append($(".coolaxs_buttons_group #coolaxs_word_spacing_group").parent()).
					append($("#coolaxs_readable_font")).append($("#coolaxs_text_zoom"));

				var key_nav = $("#coolaxs_keyboard_navigation");
				mbp = $(".coolaxs_left_mobile_pannel"); 
					mbp.append($("#coolaxs_invert_colors")).append($("#coolaxs_bright_contrast")).append($("#coolaxs_dark_contrast")).append(key_nav).
					append($("#coolaxs_big_white_cursor")).append($("#coolaxs_big_black_cursor")).append($("#coolaxs_stop_animations"));		

			} else {
				$html.addClass('coolaxs_mobile_landscape');
				
				var mbp = $(".coolaxs_top_or_bottom_mobile_pannel");
				mbp.append($(".coolaxs_buttons_group #coolaxs_accessibility_settings_group").parent()).append($("#coolaxs_reset_all_accessibility"))
					.append($(".coolaxs_buttons_group #coolaxs_font_size_group").parent()).append($(".coolaxs_buttons_group #coolaxs_line_height_group").parent()).
					append($(".coolaxs_buttons_group #coolaxs_letter_spacing_group").parent()).append($(".coolaxs_buttons_group #coolaxs_word_spacing_group").parent()).
					append($("#coolaxs_readable_font")).append($("#coolaxs_text_zoom"));				
				
				mbp = $(".coolaxs_right_mobile_pannel");
				mbp.append($("#coolaxs_highlight_titles")).append($("#coolaxs_highlight_links")).append($("#coolaxs_big_white_cursor")).append($("#coolaxs_big_black_cursor"));				
				
				var key_nav = $("#coolaxs_keyboard_navigation");
				mbp = $(".coolaxs_left_mobile_pannel"); 
					mbp.append($("#coolaxs_invert_colors")).append($("#coolaxs_bright_contrast")).append($("#coolaxs_dark_contrast")).append(key_nav).append($("#coolaxs_stop_animations"));		
				
			}// else if(window.innerHeight > window.innerWidth)

			key_nav.hide();
			$("#coolaxs_right_accessibility_panel").hide();
			$("#coolaxs_left_accessibility_panel").hide();			
			$("#coolaxs_show_keyboard_shortcuts_accessibility_panel").hide();
			$("#coolaxs_toggle_keyboard_shortcuts_accessibility_panel").hide();				
		
           return ;
        } else {
			$(".coolaxs_desktop_accessibility_panel").show();
		}

        $html.removeClass('coolaxs_mobile');
		
    }// function resize()

      $window
        .resize(resize)
        .trigger('resize');
	
	// used for changing coolaxs_mobile devices from portrait to landscape mode & vice versa
	$( window ).on( "orientationchange", function( event ) {
		//$( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
		$window
			.resize(resize)
			.trigger('resize');
	});	


/* 	window.addEventListener( 'resize', onWindowResize, false ); 
	function onWindowResize() {
		windowX = window.innerWidth;
		windowY = window.innerHeight;
	} 
 */



// ========================= ACESSIBLE 






	// נגישות
	// בלחיצה על מקש 'טאב' בתחילת כל דף מופיעה חלונית 'דלג לתוכן העמוד' - זה החלק שמפצע את שינוי הפוקוס
	// check header.php to see the "coolaxs_skip" class
    // https://www.bignerdranch.com/blog/web-accessibility-coolaxs_skip-navigation-links/
 		
        // bind a click event to the 'coolaxs_skip' link
        $(".coolaxs_skip").click(function(event){
    
            // strip the leading hash and declare
            // the content we're skipping to
            //var skipTo="#"+this.href.split('#')[1];
            var skipTo;
			skipTo = $('#coolaxs_skip_menu_to_this_id');
			if( ! $(skipTo).length ) { // it tries to find the id : #coolaxs_skip_menu_to_this_id		- if it doesn't find it it tries to find the first header
					skipTo = $('body :header:first');// first title
					if( ! $(skipTo).length ){
						skipTo = $('body :p:first');// if there are no titles in the page it finds the first p tag	
						if( ! $(skipTo).length ){
							skipTo = $('body :a:first');// if there are no titles in the page it finds the first a tag	
						}
					}
				}
			
            // Setting 'tabindex' to -1 takes an element out of normal 
            // tab flow but allows it to be focused via javascript
            $(skipTo).attr('tabindex', 0).on('blur focusout', function () {// here it was attr('tabindex', -1). but I changed it to 0 
    
                // when focus leaves this element, 
                // remove the tabindex attribute
                // $(this).removeAttr('tabindex'); // I commented that because I needed the 'tabindex' attribute to stay on the page
    
            }).focus(); // focus on the content container
			
			return false;// מונע מעבר הלאה
        });//  $(".coolaxs_skip").click(function(event)





	// נגישות	
	// הצגת חלונית שנמצאת תמיד ליד הסמן של העכבר אך תמיד בתוך המסך
	// an empty div <div id="coolaxs_tail"></div> is set on header.php page with its css in style.css
	// when you deactivate this use $('#coolaxs_tail').hide();
	function coolaxs_display_floating_div(event, str) {
		 /* alert(str);  */
		var debug = false; // false // true
		
		if (debug) console.log("|"+str+"|");	
		
		if (str == "") return;// if no string then don't hide the div box here because it hides some img hovers in the next $('img').hover();
		
		$('#coolaxs_tail').show();				
		$('#coolaxs_tail').text(str);
		
		//$('#coolaxs_tail').text(str+' <'+$(this).prop("tagName")+'>');//for debug
		
		var viewport_width = window.innerWidth;
		var viewport_height = window.innerHeight;
		if (debug) console.log("|viewport_width,viewport_height|" + viewport_width + " " + viewport_height);		
		var half_box_width = $('#coolaxs_tail').outerWidth()/2;
		var half_box_height = $('#coolaxs_tail').outerHeight()/2;				
		if (debug) console.log("|half_box_width,half_box_height|" + half_box_width + " " + half_box_height);		
		var x = event.clientX;
		var y = event.clientY;					
		if (debug) console.log("|x,y|" + x + " " + y);		
		var extra_margin = 30;// in pixels so the box shadow will show inside the viewport
		var extra_y_margin = 50;// so the div box won't hide cursor point 		
		
		var x_diff = x-half_box_width;
		var y_diff = y-half_box_height;		
		
		// בדיקה תיבת חלונית הטקסט ליד הסמן אמורה לגלוש מחוץ לגבולות המסך - אם כן נחזיר אותה ע"י הזחה לתוך גבולות החלון הראשי
		var x_offset = 0;
		var y_offset = extra_y_margin;				
		
		if (x_diff < 0) x_offset = -x_diff + extra_margin;// -x_diff because x_diff < 0 so -- is +
		else if ((x+half_box_width) > viewport_width) x_offset -= ((x+half_box_width) - viewport_width) + extra_margin;	
		
		if (y_diff < 0) y_offset = -y_diff + extra_margin;// -y_diff because y_diff < 0 so -- is +
		else if ((y+half_box_height+extra_y_margin) > viewport_height) y_offset -= ((y+half_box_height) - viewport_height) + extra_margin + 2 * extra_y_margin;			
		
		if (debug) console.log("x_offset: " + x_offset + " , y_offset: " + y_offset);
		
		// center div on mouse cursor
		var positionLeft = x_diff + x_offset;
		var positionTop = y_diff + y_offset;
		if (debug) console.log("|"+str+"|" + positionLeft + " " + positionTop);

		$('#coolaxs_tail').css({'display': 'block', 'position': 'fixed', 'left': positionLeft, 'top': positionTop}).fadeIn('slow');
		
	}// function coolaxs_display_floating_div(event, str)
	
	




 
	// נגישות	
	// בעת מעבר הסמן על תמונת רקע		
	// הצגת כותרת ההורה של תמונת רקע כך אפשר לתת טקסט חילופי לתמונת רקע
	// לדוגמא
	// PHP:
	// <div class="target-ratio-resize" title="יעניין אותך גם"></div>
	// CSS:
	// .target-ratio-resize {
		// max-width: 1195px;
		// max-height: 95px;
		// background-image: url(/images/interest_you_also.png);
		// background-size: cover;
		// background-position: right;
	// }
	// display the title tag of a background image div
	// https://stackoverflow.com/questions/4216035/css-background-image-alt-attribute
	
	
	
	
	// display div title attribute - used as background img alt text
	// div click focus title is below		
  	$('div').hover(function(event){	
			//alert("div"+event.type);
		   	if 	(localStorage.getItem('coolaxs_textZoomWindow') != 'true')
				return;

			try {	var title = $(this).attr('title').trim();	}
			catch(err) {// no title attribute was set for this div
				return;
			}

			// For some browsers, `attr` is undefined; for others,
			// `attr` is false.  Check for both.
			if (typeof title !== typeof undefined && title !== false) {
				//alert(title);
				coolaxs_display_floating_div(event, title.trim());				
			}// if (typeof title !== typeof undefined && title !== false)
	   }
	   , 
		// mouse leave
	   function (event) {		  $('#coolaxs_tail').hide();	   }
	);// $('div').hover(	

	// display div title attribute - used as background img alt text
	// div hover title is above	
	$('div').on("click focus", function(event){	
			//alert("div"+event.type);
		   	if 	(localStorage.getItem('coolaxs_textZoomWindow') != 'true')
				return;
		
			if ( ! (event.which === 13) || (event.type === 'click')) {
				 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
			}	
		
			//var hasBGImage = $('div').css('background-image') !== 'none';
			
			// this creates an error in the console
			// TypeError: $(...).hasAttr is not a function
			// var title;
			// if ($(this).hasAttr("title")) {
				// title = $(this).attr('title').trim();
			// } else {
				// return;// no title attribute was set for this div
			// }
			// so I used this and it is error free
			try {	var title = $(this).attr('title').trim();	}
			catch(err) {// no title attribute was set for this div
				return;
			}

			// For some browsers, `attr` is undefined; for others,
			// `attr` is false.  Check for both.
			if (typeof title !== typeof undefined && title !== false) {
				//alert(title);
				coolaxs_display_floating_div(event, title.trim());				
			}// if (typeof title !== typeof undefined && title !== false)
	   }
	   , 
		// mouse leave
	   function (event) {		  $('#coolaxs_tail').hide();	   }
	);// $('div').hover(
		
// I tried str.trim(str.replace(/[\t\n]+/g,' ')); but it didn't work so I created this		
	function coolaxs_removeEnterAndTabs(str) {		
		var new_str="";
		var i,k;
		// trim tabs and enter at the begining
		for(i=0;i<str.length;i++) {
			k = str.charCodeAt(i);
			if ((k != 9) && ( k != 10))	{
				new_str += str.charAt(i);
				break;
			}
		}	
		// trim tabs and enter at the end	
		var new_str2="";
		for(i=new_str.length-1;i>=0;i--) {
			k = new_str.charCodeAt(i);
			if ((k != 9) && ( k != 10))	{
				new_str2 += new_str.charAt(i);
				break;
			}
		}			
		return new_str2;
	}

	// מחזיר רק את הטקסט שנמצא התוך הטאג - לא כולל טקסט שנמצא בתוך הילדים של הטאג
	// var str = $(this).justtext(); // justtext() gets only the direct text in a tag without text in its childrens	
	// http://viralpatel.net/blogs/jquery-get-text-element-without-child-element/
	jQuery.fn.justtext = function() {
		return $(this).clone()
				.contents().filter("strong, em, b").unwrap()// strip the <strong></strong> & <em></em>  & <b></b tags without its inside content
				.end()// get back to the clone now widthout any strong tags		
				.children()
				.remove()
				.end()// get back to the clone now without its children
				.text();
	};

/* 	jQuery.fn.justtext_a_tag_in_span = function() {
		return $(this)	.clone()
				.children()
				.children()				
				.remove()
				.end()
				.end()
				.text();
	};	 */
	
	// https://stackoverflow.com/questions/13140043/how-to-strip-html-tags-with-jquery
/* 	function stripHTML(dirtyString) {
	  var container = document.createElement('div');
	  var text = document.createTextNode(dirtyString);
	  container.appendChild(text);
	  return container.innerHTML; // innerHTML will be a xss safe string
	} */
	
	// נגישות
	// בעת מעבר הסמן על טקסט 	
	// הצגת חלונית צפה בעת ריחוף הסמן על פיסקת טקסט, כותרת, תווית או קישור
	// zoom text overlay on mouse hover

  	$('h1,h2,h3,h4,h5,h6,span,p,label,a:not(img,noscript),div:not(:has(h1,h2,h3,h4,h5,h6,p,label,a,div,span,img,noscript))').hover(
	// $("div:not(:has(*))") Selects all divs that have no children.
	// div:not(:has(h1,h2,h3,h4,h5,h6,p,label,a,div) => this is better than div:not(:has(*)) because if there is a <br> or <span> tag inside it is still valid

		// mouse enter
	   function (event) {	
	   
			var debug = false;// true , false
	   
			var current_val =  $(this);
	   	   
			if 	(localStorage.getItem('coolaxs_textZoomWindow') != 'true')
				return;   
			
			var tag_name = current_val.prop("tagName");
			if (debug) console.log("|"+tag_name+"|");			
			var str;
		
 			var span_with_one_level_of_an_a_tag = false;// example: <span>written by <a>lila moore</a></span> will output "written by lila moore"	
 			if ((tag_name == "SPAN")  || (tag_name == "span")) {

				var hasChildren = current_val.children().length;
				var hasGrandChildren = false;
				if (hasChildren) hasGrandChildren = current_val.children().children().length;			
				if ( ! hasGrandChildren)
					span_with_one_level_of_an_a_tag = current_val.children('a').length;					
			
				if (debug) console.log("span_with_one_level_of_an_a_tag");	
			}// if ((tag_name == "SPAN")  || (tag_name == "span"))

  			if (span_with_one_level_of_an_a_tag)
				str = current_val.text();//current_val.justtext_a_tag_in_span();					
			else
				str = current_val.justtext();// justtext() is declared above - gets only the direct text in a tag without text in its childrens	

			if (debug) console.log(str);			
			//var str = $(this).html().replace(/<br> ?/g, '&#013;&#010;');
			
			if (typeof str !== 'undefined') {
				//str.trim(str.replace(/[\t\n]+/g,' '));
				//stripHTML(dirtyString);
				str = str.trim(coolaxs_removeEnterAndTabs(str));// this prevents empty text boxes
				if (str.length > 0) {
					//str = "|"+str+"|"+ str.length ;
					coolaxs_display_floating_div(event, str);						
				}
			  
			}
	}
	   , 
		// mouse leave
	   function (event) {		  $('#coolaxs_tail').hide();	   }
	);//  $('h1,h2,h3,h4,h5,h6,span,p,label,a,div:not(:has(h1,h2,h3,h4,h5,h6,p,label,a,div))').hover(
	
 	$('img, area').hover(function (event) {		
			if 	(localStorage.getItem('coolaxs_textZoomWindow') != 'true')
				return;   
			
			var attr = $(this).attr('alt');

			//console.log("img----->" + $(this).prop("tagName"));
			
			// For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
			if (typeof attr !== typeof undefined && attr !== false) {
				var str = $(this).attr("alt");
				if (typeof str !== 'undefined') {
				  // Now we know that foo is defined, we are good to go.
					//str.trim(str.replace(/[\t\n]+/g,' '));
					str = str.trim(coolaxs_removeEnterAndTabs(str));// this has prevented empty text boxes
					if (str.length > 0) {
						//str = "|"+str+"|"+ str.length ;
						coolaxs_display_floating_div(event, str);						
					}			  
				}
			}
			

	}
	   , 
		// mouse leave
	   function (event) {		  $('#coolaxs_tail').hide();	   }
	);// $('h1,h2,h3,h4,h5,h6,span,p,label,a').hover(	  
 	// נגישות
	// בעת מעבר הסמן על תמונה
	// הצגת הטקסט החילופי לתמונה בעת מעבר הסמן עליה
/* 	$('img').on("click hover focus", function(event){		
 alert("img"+event.type); 
			if 	(localStorage.getItem('coolaxs_textZoomWindow') != 'true')
			return;
			//אם יירצו שיראו את שם היישוב גם בלי נגישות במעבר על נקודה במפת גני תל"י בעמוד מי אנחנו
			//var class_of_img_parent = $(this).parent().attr('class');
			//if (class_of_img_parent != 'ganei-tali-map-point') return;

			if ( ! (event.which === 13)  || (event.type === 'click') || (event.type === 'hover')) {
				 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
			}				
			
			try {
				var alt = $(this).attr("alt").trim();	
			}
			catch(err) {// no alt attribute was set for this img
				return;
			}		

			coolaxs_display_floating_div(event, alt);	
		}
	   , 
		// mouse leave
	   function (event) {		  $('#coolaxs_tail').hide();	   }
	);// $('img').hover( */

	
	function coolaxs_resetAllaccessibility() {
 		localStorage.clear();// this clear all the local storage items for this site url - if I want only some items I can do localStorage.removeItem('item name');
		location.reload();// reloads the current page	
	}	
	
	// איפוס כל הנגישות ורענון הדף
	$("#coolaxs_reset_all_accessibility").on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_resetAllaccessibility();
		event.preventDefault();// אחרת יש גלילה של המסך	
	});
	
	// for jquery slide toggle direction of the saccessibility sub menus
	window.coolaxs_slide_accessibility_menu_direction = "down";// Init
	
	/////////////////////////////////////// Letter Spacing- START /////////////////////////////////////////////////
	var coolaxs_text_tags = "h1,h2,h3,h4,h5,h6,span,p,label,div:not(:has(div,h1,h2,h3,h4,h5,h6,p,label,a))";// I removed 'a' becuase it made a bug in the menu in ganim.tali.org.il website 
	// but if the 'a' is inside a 'p' or an header tag it will work
	
	// offset: >0 increase, <0 decrease LetterSpacing, or we can pass a negative memory accumulated value to revert back to the original value
	function coolaxs_updateLetterSpacingButtonBackground() {
		if (localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset')) {// update button background if there is a change from the default values
			if (localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset') != 0) $('#coolaxs_letter_spacing_group').addClass('coolaxs_acivated_button');
			else $('#coolaxs_letter_spacing_group').removeClass('coolaxs_acivated_button');
		}		
	}
	
	function coolaxs_resizeLetterSpacing(offset) {
		$(coolaxs_text_tags).not('a,li').each(function(i, val){ 
			var currentSize = $(val).css( "letter-spacing" );// this get the word-spacing in PIXELS only (even if in the html it was in 'em')
			if (currentSize) {
				currentSize = (parseFloat(currentSize) + offset) + "px";
				$(val).css('letter-spacing', currentSize);					
			}
		});	
	}// function coolaxs_resizeLetterSpacing()

	// טעינת מרווח בין אותיות מהזיכרון בעת טעינת  הדף במידה  ונשמר ערך מרווח בין אותיות בזיכרון
	function coolaxs_reCreatePageLetterSpacing() {
		// רק אם מישהו השתמש בתפריט הנגישות 
 		if ( localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset')) {
			coolaxs_resizeLetterSpacing(0);// 2 passes - because with 1 pass for both there is a bug when there are nested tags like an <a> inside a <p> the <a> is assigned 2 time the value 						
			var totalMemOffset = localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset');
			coolaxs_resizeLetterSpacing(totalMemOffset);
			coolaxs_updateLetterSpacingButtonBackground();
		}
	}	
	
	function coolaxs_increasePageLetterSpacing() {
		if ( ! localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset')) localStorage.setItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset', 0);
		var totalMemOffset = parseFloat(localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset'));
		totalMemOffset +=1;	
		localStorage.setItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset', totalMemOffset);
		coolaxs_resizeLetterSpacing(1);
		coolaxs_updateLetterSpacingButtonBackground();
	}// function coolaxs_increasePageLetterSpacing()
	
	// הגדלת מרווח בין אותיות	
    $('#coolaxs_increase_letter_spacing').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_increasePageLetterSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך		
		//console.log("increase totalMemOffset: " + localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset'));	
	});
	
	function coolaxs_decreasePageLetterSpacing() {
		if ( ! localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset')) localStorage.setItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset', 0);
		var totalMemOffset = parseFloat(localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset'));
		if (totalMemOffset >=1) {// we do not allow to decrease below the normal word spacing
			totalMemOffset -=1;	
			localStorage.setItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset', totalMemOffset);
			coolaxs_resizeLetterSpacing(-1);
			coolaxs_updateLetterSpacingButtonBackground();			
		}// if (COOL_ACCESSIBILITY_LetterSpacingMemOffset >=1)
	}// function coolaxs_decreasePageLetterSpacing()
	
	// הקטנת מרווח בין אותיות
    $('#coolaxs_decrease_letter_spacing').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_decreasePageLetterSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך			
		//console.log("decrease totalMemOffset: " + localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset'));	
	});
	
	function coolaxs_resetPageLetterSpacing() {
 		if ( localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset')) {
			var totalMemOffset = localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset');
			coolaxs_resizeLetterSpacing(-totalMemOffset);// -totalMemOffset : negative memory accumulated value to revert back to the original value
			localStorage.setItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset', 0);//Reset
			coolaxs_updateLetterSpacingButtonBackground();
		}
	}// function coolaxs_resetPageLetterSpacing()

	// איפוס מרווח בין אותיות
    $('#coolaxs_reset_letter_spacing').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_resetPageLetterSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך		
		//console.log(" reset totalMemOffset: " + localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset'));	
	});
	/////////////////////////////////////// Letter Spacing- END /////////////////////////////////////////////////	


	/////////////////////////////////////// Word Spacing- START /////////////////////////////////////////////////
	
	coolaxs_text_tags = "p, :header, li, a, div:not(:has(div,h1,h2,h3,h4,h5,h6,p,label,a))";// span
	// offset: >0 increase, <0 decrease WordSpacing, or we can pass a negative memory accumulated value to revert back to the original value
	function coolaxs_updateWordSpacingButtonBackground() {
		if (localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset')) {// update button background if there is a change from the default values
			if (localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset') != 0) $('#coolaxs_word_spacing_group').addClass('coolaxs_acivated_button');
			else $('#coolaxs_word_spacing_group').removeClass('coolaxs_acivated_button');
		}			
	}		
	function coolaxs_resizeWordSpacing(offset) {
		$(coolaxs_text_tags).each(function(i, val){ 
			var currentSize = $(val).css( "word-spacing" );// this get the word-spacing in PIXELS only (even if in the html it was in 'em')
			if (currentSize) {
				currentSize = (parseFloat(currentSize) + offset) + "px";
				$(val).css('word-spacing', currentSize);					
			}
		});
	}// function coolaxs_resizeWordSpacing()
	
	// טעינת מרווח בין מילים מהזיכרון בעת טעינת  הדף במידה  ונשמר ערך מרווח בין מילים בזיכרון
	function coolaxs_reCreatePageWordSpacing() {
 		if ( localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset')) {// רק אם מישהו השתמש בתפריט הנגישות // only if the accessibility menu was used		
			coolaxs_resizeWordSpacing(0);// 2 passes - because with 1 pass for both there is a bug when there are nested tags like an <a> inside a <p> the <a> is assigned 2 time the value 			
			var totalMemOffset = localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset');
			coolaxs_resizeWordSpacing(totalMemOffset);
			coolaxs_updateWordSpacingButtonBackground();
		}			
	}	
	
	function coolaxs_increasePageWordSpacing() {
		if ( ! localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset')) localStorage.setItem('COOL_ACCESSIBILITY_WordSpacingMemOffset', 0);
		var totalMemOffset = parseFloat(localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset'));
		totalMemOffset +=1;	
		localStorage.setItem('COOL_ACCESSIBILITY_WordSpacingMemOffset', totalMemOffset);
		coolaxs_resizeWordSpacing(1);		
		coolaxs_updateWordSpacingButtonBackground();		
	}// function coolaxs_increasePageWordSpacing()
	
	// הגדלת מרווח בין מילים	
    $('#coolaxs_increase_word_spacing').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_increasePageWordSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך		
	});
	
	function coolaxs_decreasePageWordSpacing() {
		if ( ! localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset')) localStorage.setItem('COOL_ACCESSIBILITY_WordSpacingMemOffset', 0);
		var totalMemOffset = parseFloat(localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset'));
		if (totalMemOffset >=1) {// we do not allow to decrease below the normal word spacing
			totalMemOffset -=1;	
			localStorage.setItem('COOL_ACCESSIBILITY_WordSpacingMemOffset', totalMemOffset);
			coolaxs_resizeWordSpacing(-1);
			coolaxs_updateWordSpacingButtonBackground();			
		}// if (COOL_ACCESSIBILITY_WordSpacingMemOffset >=1)	
	}// function coolaxs_decreasePageWordSpacing()
	
	// הקטנת מרווח בין מילים
    $('#coolaxs_decrease_word_spacing').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_decreasePageWordSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך			
	});
	
	function coolaxs_resetPageWordSpacing() {
 		if ( localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset')) {
			var totalMemOffset = localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset');
			coolaxs_resizeWordSpacing(-totalMemOffset);// -totalMemOffset : negative memory accumulated value to revert back to the original value
			localStorage.setItem('COOL_ACCESSIBILITY_WordSpacingMemOffset', 0);//Reset
			coolaxs_updateWordSpacingButtonBackground();
		}
	}// function coolaxs_resetPageWordSpacing()

	// איפוס מרווח בין מילים
    $('#coolaxs_reset_word_spacing').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_resetPageWordSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך	
	});
	/////////////////////////////////////// Word Spacing- END /////////////////////////////////////////////////
	
	/////////////////////////////////////// Line Height- START /////////////////////////////////////////////////
	
	// this is different from the above method - I tried it here but it didn't work as expected after reloading the page and this method works fine
	
	var coolaxs_text_tags = "p, div:not(:has(div,h1,h2,h3,h4,h5,h6,p,label,a))";// span
	
	// multiplier ==0  will reset to initLineHeight data values stored in the html
	// multiplier < 1 will decrease font size
	// multiplier > 1 will increase font size	
	function coolaxs_resizeLineHeight() {
		
		var multiplier = localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier');
		//console.log(" multiplier in coolaxs_resizeLineHeight: " + multiplier);		
		//alert(multiplier);
		if (multiplier) {// update button background if there is a change from the default values
			if (multiplier != 0) $('#coolaxs_line_height_group').addClass('coolaxs_acivated_button');
			else $('#coolaxs_line_height_group').removeClass('coolaxs_acivated_button');
		}	
		
		$(coolaxs_text_tags).not('a,li').each(function(i, val){ 

			var currentSize = $(val).css( "line-height" );// this get the line-height
			//console.log(" Before: " + val + " currentLineHeight: " + currentSize);		
			if (currentSize) {
				
				var currentSize = parseFloat(currentSize);		
					
				var initLineHeight = parseFloat($(val).attr('data-initLineHeight'));
			
				if ( ! initLineHeight) {
					initLineHeight = parseFloat(currentSize);						
					//$(val).data( "initLineHeight" , String(initLineHeight));
					$(val).attr('data-initLineHeight', String(initLineHeight));
				}

				currentSize = (parseFloat(initLineHeight) + parseFloat(multiplier)) + "px";
				//console.log(initLineHeight+ " + " + multiplier + " => currentLineHeight: " + currentSize);					
				$(val).css('line-height', currentSize);					


			}// if (currentSize)
		});// jQuery.each( text_tags_array, function( i, val )
	}// function coolaxs_resizeLineHeight()
	
	// init attr='data-initLineHeight' data attribute on load
	function coolaxs_LineHeightAddDataAttrOnLoad() {
		$(coolaxs_text_tags).each(function(i, val){ 
			var currentSize = $(val).css( "line-height" );// this get the word-spacing in PIXELS only (even if in the html it was in 'em')
			//console.log(" Before: " + val + " currentLineHeight: " + currentSize);	
			if (currentSize) {
				var currentSize = parseFloat(currentSize);	
				$(val).attr('data-initLineHeight', String(currentSize));
			}// if (currentSize)
		});// $(coolaxs_text_tags).each(function(i, val)
	}
	// טעינת מרחק בין שורות
	function coolaxs_reCreatePageLineHeight() {
		// רק אם מישהו השתמש בתפריט הנגישות 
 		if ( localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier')) {
			// 2 passes - because with 1 pass for both adding the attribute and resizing there is a bug when there are nested tags like an <a> inside a <p>
			// init attr='data-initLineHeight' data attribute on load
			coolaxs_LineHeightAddDataAttrOnLoad();
			//console.log(" multiplier from memory: " + localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));	
			coolaxs_resizeLineHeight();		
		}
	}	
	
	function coolaxs_increasePageLineHeight() {
		if ( ! localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier')) localStorage.setItem('COOL_ACCESSIBILITY_lineHeightMultiplier', 0);
		var lineHeightMultiplier = parseFloat(localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));
		//console.log("increase multiplier before: " + localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));	
		lineHeightMultiplier +=1;	
		//console.log("increase multiplier after: " + localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));			
		if (lineHeightMultiplier > 40) 
			localStorage.setItem('COOL_ACCESSIBILITY_lineHeightMultiplier', 0);
		else 
			localStorage.setItem('COOL_ACCESSIBILITY_lineHeightMultiplier', lineHeightMultiplier);
		
		coolaxs_resizeLineHeight();	
	}// function coolaxs_increasePageLineHeight()
	
	// הגדלת מרחק בין שורות	
    $('#coolaxs_increase_line_height').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_increasePageLineHeight();
		event.preventDefault();// אחרת יש גלילה של המסך			
		//console.log("increase multiplier: " + localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));	
	});
	
	function coolaxs_decreasePageLineHeight() {
		if ( ! localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier')) localStorage.setItem('COOL_ACCESSIBILITY_lineHeightMultiplier', 0);
		var lineHeightMultiplier = parseFloat(localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));
		//console.log("increase multiplier before: " + localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));	
		lineHeightMultiplier -=1;	
		//console.log("increase multiplier after: " + localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));			
		if (lineHeightMultiplier < 0) 
			localStorage.setItem('COOL_ACCESSIBILITY_lineHeightMultiplier', 0);
		else 
			localStorage.setItem('COOL_ACCESSIBILITY_lineHeightMultiplier', lineHeightMultiplier);
		coolaxs_resizeLineHeight();
	}// function coolaxs_decreasePageLineHeight()
	
	// הקטנת מרחק בין שורות
    $('#coolaxs_decrease_line_height').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_decreasePageLineHeight();
		event.preventDefault();// אחרת יש גלילה של המסך			
		//console.log("decrease multiplier: " + localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));	
	});
	
	function coolaxs_resetPageLineHeight() {
		localStorage.setItem('COOL_ACCESSIBILITY_lineHeightMultiplier', 0);
		coolaxs_resizeLineHeight();
	}// function coolaxs_resetPageLineHeight()
	
	// איפוס מרחק בין שורות
    $('#coolaxs_reset_line_height').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_resetPageLineHeight();
		event.preventDefault();// אחרת יש גלילה של המסך	
		//console.log(" reset multiplier: " + localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));	
	});
	/////////////////////////////////////// Line Height- END /////////////////////////////////////////////////	
	
		
	
	
	
	
	
	/////////////////////////////////////// FONT SIZES - START /////////////////////////////////////////////////
	
	var coolaxs_text_tags = "div:not(:has(div,h1,h2,h3,h4,h5,h6,p,label,a)), p, :header, li, a";// span
	
	function coolaxs_updateFontSizeButtonBackground() {
		var multiplier = localStorage.getItem('fontSizeMultiplier');
		if (multiplier) {// update button background if there is a change from the default values
			if (multiplier != 1) $('#coolaxs_font_size_group').addClass('coolaxs_acivated_button');
			else $('#coolaxs_font_size_group').removeClass('coolaxs_acivated_button');
		}			
	}	

	// multiplier ==0  will reset to initFontSize data values stored in the html
	// multiplier < 1 will decrease font size
	// multiplier > 1 will increase font size	
	function coolaxs_resizeText() {
		
		var multiplier = localStorage.getItem('fontSizeMultiplier');
		
		//console.log(" multiplier in coolaxs_resizeText: " + multiplier);		
		
		var update_times = 0;
		$(coolaxs_text_tags).each(function(i, val){ 

			var currentSize = $(val).css( "font-size" );// this get the font-size in PIXELS only (even if in the html it was in 'em')
			//console.log(" Before: " + val + " currentFontSize: " + currentSize);		
			if (currentSize) {
				
				var currentSize = parseFloat(currentSize);		

				if (currentSize > 0) {
					
					var initFontSize = parseFloat($(val).attr('data-initFontSize'));

					if ( ! initFontSize) {
						initFontSize = currentSize;						
						//console.log(val +"setting initFontSize to: " + initFontSize);
						//$(val).data( "initFontSize" , String(initFontSize));
						$(val).attr('data-initFontSize', String(initFontSize));
					}

					if (multiplier > 0) {
						currentSize = initFontSize * multiplier;
						//console.log(val + " currentFontSize: " + currentSize);					
						$(val).css('font-size', currentSize);					
					}

				}// if (currentSize > 0)
			}// if (currentSize)
		});// jQuery.each( text_tags_array, function( i, val )
	}// function coolaxs_resizeText()
	
	// init attr='data-initFontSize' data attribute on load
	function coolaxs_FontSizesAddDataAttrOnLoad() {
		$(coolaxs_text_tags).each(function(i, val){ 
			var currentSize = $(val).css( "font-size" );// this get the font-size in PIXELS only (even if in the html it was in 'em')
			if (currentSize) {
				var currentSize = parseFloat(currentSize);	
				if (currentSize > 0) {
					$(val).attr('data-initFontSize', String(currentSize));
				}// if (currentSize > 0)
			}// if (currentSize)
		});// $(coolaxs_text_tags).each(function(i, val)
	}
	// טעינת גדלי פונטים מהזיכרון בעת טעינת  הדף במידה ונשמרו גדלי פונט בזיכרון
	function coolaxs_reCreatePageFontSizes() {
		// רק אם מישהו השתמש בתפריט הנגישות 
 		if ( localStorage.getItem('fontSizeMultiplier')) {
			// 2 passes - because with 1 pass for both adding the attribute and resizing there is a bug when there are nested tags like an <a> inside a <p>
			// init attr='data-initFontSize' data attribute on load
			coolaxs_FontSizesAddDataAttrOnLoad();
			//console.log(" multiplier from memory: " + localStorage.getItem('fontSizeMultiplier'));	
			coolaxs_resizeText();	
			coolaxs_updateFontSizeButtonBackground();			
		}
	}	
	
	function coolaxs_increasePageFontSizes() {
		if ( ! localStorage.getItem('fontSizeMultiplier')) localStorage.setItem('fontSizeMultiplier', 1);
		var fontSizeMultiplier = localStorage.getItem('fontSizeMultiplier') * 1.25;
		if (fontSizeMultiplier > 3) 
			localStorage.setItem('fontSizeMultiplier', 1);
		else 
			localStorage.setItem('fontSizeMultiplier', fontSizeMultiplier);
		
		coolaxs_resizeText();
		coolaxs_updateFontSizeButtonBackground();
	}		
	// הגדלת גודל פונט	
    $('#coolaxs_increase_font_size').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_increasePageFontSizes();
		event.preventDefault();// אחרת יש גלילה של המסך		
		//console.log("increase multiplier: " + localStorage.getItem('fontSizeMultiplier'));	
	});
	
	function coolaxs_decreasePageFontSizes() {
		if ( ! localStorage.getItem('fontSizeMultiplier')) localStorage.setItem('fontSizeMultiplier', 1);
		localStorage.setItem('fontSizeMultiplier', localStorage.getItem('fontSizeMultiplier') * 0.8);
		coolaxs_resizeText();		
		coolaxs_updateFontSizeButtonBackground();

		//console.log("decrease multiplier: " + localStorage.getItem('fontSizeMultiplier'));
	}		
	// הקטנת גודל פונט
    $('#coolaxs_decrease_font_size').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_decreasePageFontSizes();
		event.preventDefault();// אחרת יש גלילה של המסך	
	});
	
	function coolaxs_resetPageFontSizes() {
		localStorage.setItem('fontSizeMultiplier', 1);
		coolaxs_resizeText();
		coolaxs_updateFontSizeButtonBackground();
	}			
	// איפוס גודל פונט
    $('#coolaxs_reset_font_size').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_resetPageFontSizes();
		event.preventDefault();// אחרת יש גלילה של המסך
		//console.log(" reset multiplier: " + localStorage.getItem('fontSizeMultiplier'));	
	});
	/////////////////////////////////////// FONT SIZES - END /////////////////////////////////////////////////

	// called on toggle coolaxs_buttons before changing to another accessibility contrast button
	function coolaxs_resetaccessibilityContrasts() {
		if (localStorage.getItem('COOL_ACCESSIBILITY_BrightContrast') == "true") coolaxs_resetBrightContrast();
		if (localStorage.getItem('COOL_ACCESSIBILITY_DarkContrast') == "true") coolaxs_resetDarkContrast();
		if (localStorage.getItem('COOL_ACCESSIBILITY_invertPageColors') == "true") coolaxs_resetInvertColors();		
	}//function coolaxs_resetaccessibilityContrasts()
	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------		
	// -------------------------------- Invert colors - start ---------------------------	היפוך צבעים - התחלה	----------------------------------------------	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------		

	// Invert page colors
	// it is called from 2 places: from coolaxs_reCreateInvertColors() & from $('#coolaxs_invert_colors').on("click keypress", function(event)
	function coolaxs_invertPageColors() {
		$("html").toggleClass("coolaxs_inversed");//coolaxs_invert_colors();	

		// update button background		
		var invertPageColorsValue = localStorage.getItem('COOL_ACCESSIBILITY_invertPageColors');
		//console.log("invertPageColorsValue: " + invertPageColorsValue);	
		if (invertPageColorsValue == "true") {
			$('#coolaxs_invert_colors').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_invert_colors').removeClass('coolaxs_acivated_button');				
		}		
	}
	
	function coolaxs_reCreateInvertColors() {
		var invertPageColorsValue = localStorage.getItem('COOL_ACCESSIBILITY_invertPageColors');		
		// console.log("invertPageColorsValue: " + invertPageColorsValue);			
		if (invertPageColorsValue == "true")// val could be also null if not defined or "false"
			coolaxs_invertPageColors();
	}	
	
	// revert to original
	function coolaxs_resetInvertColors() { 	
		$('#coolaxs_invert_colors').removeClass('coolaxs_acivated_button');
		localStorage.setItem('COOL_ACCESSIBILITY_invertPageColors', "false");	
		$("html").removeClass("coolaxs_inversed");
	}
	
	function coolaxs_toggleInvertColors() {
		if ( ! localStorage.getItem('COOL_ACCESSIBILITY_invertPageColors')) {	localStorage.setItem('COOL_ACCESSIBILITY_invertPageColors', 'false');}// אתחול	
		var invertPageColorsValue = localStorage.getItem('COOL_ACCESSIBILITY_invertPageColors');
		
		//console.log("invertPageColorsValue: " + invertPageColorsValue);	
		// flip value
		if (invertPageColorsValue == "false") {
			coolaxs_resetaccessibilityContrasts();
			invertPageColorsValue = "true";
		} else {
			invertPageColorsValue = "false";	
		}

		//console.log("invertPageColorsValue: " + invertPageColorsValue);	
		localStorage.setItem('COOL_ACCESSIBILITY_invertPageColors', invertPageColorsValue);	
		
		// הדגשת כותרות ואלמנטים עם פוקוס
		coolaxs_invertPageColors();
	}//.function coolaxs_toggleInvertColors()



	// toggle coolaxs_invert_colors	
	// important : in style.css add html, body { background: white;} for the backgound to also reverse if no background was declared
	$('#coolaxs_invert_colors').on("click keypress", function(event){

		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		
		coolaxs_toggleInvertColors();
		event.preventDefault();// אחרת יש גלילה של המסך
	});		
	// -------------------------------- Invert colors - end -----------------------	היפוך צבעים - סוף	-------------------------------------------------------	
	
	
	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	קישורים - התחלה	-----------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	var chosen_accessibilty_highlight_links_color = accessibilty_highlight_links_color;// this was set in the php file 
	var chosen_accessibilty_highlight_links_influence_button_mode = accessibilty_highlight_links_influence_button_mode;// this was set in the php file 	
	var chosen_override_coolaxs_highlight_links_class_border_bottom_color = override_coolaxs_highlight_links_class_border_bottom_color;// this was set in the php file 	
	//alert(accessibilty_highlight_links_color);
	//var debug_chosen_accessibilty_highlight_links_color = false;// false // true
	//if (debug_chosen_accessibilty_highlight_links_color) console.log("getting variable from PHP : chosen_accessibilty_highlight_links_color " + chosen_accessibilty_highlight_links_color);
	
	// יצירת קו תחתון ורוד מתחת לקישורים ואלמנטים עם פוקוס
	// it is called from 2 places: from coolaxs_reCreateHighlightLinks() & from $('#coolaxs_highlight_links').on("click keypress", function(event)
	function coolaxs_highlightPageLinks(value) {

		var coolaxs_highlight_tags;
	
		if (chosen_accessibilty_highlight_links_influence_button_mode == "links_and_focusable") {
			coolaxs_highlight_tags = ":focusable,a";// 'links_and_focusable'
		} else {
			coolaxs_highlight_tags = "a";	// 'only_links'		
		}		
		
		if (value === null)
			return;		
		//alert("coolaxs_highlightPageLinks value: "+value);
		if (value == "true") {
			$( coolaxs_highlight_tags ).addClass('coolaxs_highlight_links');
			// I commented this because if the border color was different before it wont change it back to the original color without highlight
			//$( ":focusable,a" ).css('border-color', chosen_accessibilty_highlight_links_color);
			
			
			if (chosen_override_coolaxs_highlight_links_class_border_bottom_color) {// it appesrs twice - this is the first
				

/* 			$(coolaxs_highlight_tags).each(function(i, val){ 

					var currentBorderColor = $(val).css( "border-color" );// this gets the border-color from each tag
					console.log(" Before: " + val + " currentBorderColor: " + currentBorderColor);		
					if (currentBorderColor) {
			
						var initBorderColor = $(val).attr('data-initBorderColor');
					
						if ( ! initBorderColor) {
							// if it there is no initBorderColor we store the currentBorderColor of the tag in the data attribute as initBorderColor
							initBorderColor = currentBorderColor;						
							//$(val).data( "initBorderColor" , String(initBorderColor));
							$(val).attr('data-initBorderColor', initBorderColor);
						}

						currentBorderColor = 'yellow';
						console.log("initBorderColor => currentBorderColor: " + currentBorderColor);					
						$(val).css('border-color', currentBorderColor);					
					}// if (currentBorderColor)
					
				});// jQuery.each( text_tags_array, function( i, val )
*/
			
				$(coolaxs_highlight_tags).each(function(i, val){ 

					var currentBorderBottomColor = $(val).css( "border-bottom-color" );// this gets the border-bottom-color from each tag
					//console.log(" Before: " + val + " currentBorderBottomColor: " + currentBorderBottomColor);		
					if (currentBorderBottomColor) {
			
						var initBorderBottomColor = $(val).attr('data-initBorderBottomColor');
					
						if ( ! initBorderBottomColor) {
							// if it there is no initBorderBottomColor we store the currentBorderBottomColor of the tag in the data attribute as initBorderBottomColor
							initBorderBottomColor = currentBorderBottomColor;						
							//$(val).data( "initBorderBottomColor" , String(initBorderBottomColor));
							$(val).attr('data-initBorderBottomColor', initBorderBottomColor);
						}

						currentBorderBottomColor = chosen_accessibilty_highlight_links_color;
						//console.log("initBorderBottomColor => currentBorderBottomColor: " + currentBorderBottomColor);					
						$(val).css('border-bottom-color', currentBorderBottomColor);					
					}// if (currentBorderBottomColor)
				});// jQuery.each( text_tags_array, function( i, val )		

			}// if (chosen_override_coolaxs_highlight_links_class_border_bottom_color)		
		}  else {
			
			$( coolaxs_highlight_tags ).removeClass('coolaxs_highlight_links');	
			
			if (chosen_override_coolaxs_highlight_links_class_border_bottom_color) {// it appesrs twice - this is the second			
			
/* 			//restore initBorderColor
			$(coolaxs_highlight_tags).each(function(i, val){ 
				var currentBorderColor = $(val).css( "border-color" );// this gets the border-color from each tag
				//console.log(" Before: " + val + " currentBorderColor: " + currentBorderColor);		
				if (currentBorderColor) {
					var initBorderColor = $(val).attr('data-initBorderColor');
					//console.log(initBorderColor => currentBorderColor: " + initBorderColor);					
					$(val).css('border-color', initBorderColor);					
				}// if (currentBorderColor)
			});// jQuery.each( text_tags_array, function( i, val )		 */

			//restore initBorderBottomColor
			$(coolaxs_highlight_tags).each(function(i, val){ 
				var currentBorderBottomColor = $(val).css( "border-bottom-color" );// this gets the border-bottom-color from each tag
				//console.log(" Before: " + val + " currentBorderBottomColor: " + currentBorderBottomColor);		
				if (currentBorderBottomColor) {
					var initBorderBottomColor = $(val).attr('data-initBorderBottomColor');
					//console.log(initBorderBottomColor => currentBorderBottomColor: " + initBorderBottomColor);					
					$(val).css('border-bottom-color', initBorderBottomColor);					
				}// if (currentBorderBottomColor)
			});// jQuery.each( text_tags_array, function( i, val )	
		
			}// if (chosen_override_coolaxs_highlight_links_class_border_bottom_color)		
		
		}// else of if (window.coolaxs_highlight_links);
		
		
	
		
		
		
		
		
		
		
		
		
		
		
		
		// update button background		
		var coolaxs_highlightPageLinks = localStorage.getItem('coolaxs_highlightPageLinks');
		//console.log("coolaxs_highlightPageLinks: " + coolaxs_highlightPageLinks);	
		if (coolaxs_highlightPageLinks == "true") {
			$('#coolaxs_highlight_links').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_highlight_links').removeClass('coolaxs_acivated_button');				
		}	
	}	
	// יצירה מחדש של מצב הקישורים בעת טעימת הדף אן ורק במידה ונשמר 
	function coolaxs_reCreateHighlightLinks() { 
		var highlightPageLinksValue = localStorage.getItem('coolaxs_highlightPageLinks');
		// console.log("highlightPageLinksValue: " + highlightPageLinksValue);	
		if (highlightPageLinksValue != null)// if the localStorage item is defined
			coolaxs_highlightPageLinks(highlightPageLinksValue);
	}
	
	function coolaxs_toggleHighlightLinks() { 
		var highlightPageLinksValue = localStorage.getItem('coolaxs_highlightPageLinks');	
		if (highlightPageLinksValue === null)// if the localStorage item is not defined we create it
			highlightPageLinksValue = "false";
			
		//	console.log("highlightPageLinksValue: " + highlightPageLinksValue);	
		// flip value
		if (highlightPageLinksValue == "false") {
			highlightPageLinksValue = "true";
		} else {
			highlightPageLinksValue = "false";	
		}		
		
		// console.log("highlightPageLinksValue: " + highlightPageLinksValue);	
		localStorage.setItem('coolaxs_highlightPageLinks', highlightPageLinksValue);	
		
		// הדגשת אלמנטים עם פוקוס
		coolaxs_highlightPageLinks(highlightPageLinksValue);
	}// function coolaxs_toggleHighlightLinks()
	
	// 	קישורים	
	// toggle coolaxs_highlight_links	
	$('#coolaxs_highlight_links').on("click keypress", function(event){
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;
			// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 

		coolaxs_toggleHighlightLinks();
		event.preventDefault();// אחרת יש גלילה של המסך		
	});// $('#coolaxs_highlight_links').on("click keypress", function(event){
	// -------------------------------------------------------------	קישורים - סוף	-----------------------------------------------------------------	

	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	הדגשת כותרות - התחלה	-----------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------------------------------------------
		
	var chosen_accessibilty_titles_background_color = accessibilty_titles_background_color;// this was set in the php file 
	var chosen_override_coolaxs_highlight_titles_colors_class_background_color = override_coolaxs_highlight_titles_colors_class_background_color;// this was set in the php file 	
	
	// הדגשת כותרות
	// it is called from 2 places: from coolaxs_reCreateHighlightTitles() & from $('#coolaxs_highlight_titles').on("click keypress", function(event)
	function coolaxs_highlightPageTitles(highlightPageTitlesValue) {
		if (highlightPageTitlesValue === null)
			return;
		//alert("coolaxs_highlightPageTitles value: "+value);
		if (highlightPageTitlesValue == "false") {
			$( ':header, :header > a' ).each(function(i, val){// I chose also all a tags inside headers because in dark contrast mode the a tag text gets the dark contrast yellew text so this overrides the text color 
				$(val).removeClass( "coolaxs_highlight_titles_colors" );
		
				// restore titles background color from data attr that we have stored inside the html tag
				if (chosen_override_coolaxs_highlight_titles_colors_class_background_color) {// it appesrs twice - this is the second			
						var initBackgroundColor = $(val).attr('data-initBackgroundColor');
						//console.log(initBackgroundColor => currentBackgroundColor: " + initBackgroundColor);	
						if (initBackgroundColor) {
							if (initBackgroundColor == 'transparent')
								$(val).css('background-color', '');// Removing CSS property
							else
								$(val).css('background-color', initBackgroundColor);// restoring the original background color								
						}//if (initBackgroundColor)
				}// if (chosen_override_coolaxs_highlight_titles_colors_class_background_color)		
				
			});//$( ':header, :header > a' ).each(function(i, val){ 

		}// if (highlightPageTitlesValue == "false")
		else {
			$( ':header, :header > a' ).each(function(i, val){// I chose also all a tags inside headers because in dark contrast mode the a tag text gets the dark contrast yellew text so this overrides the text color 
				
				// override titles background color from the plugin admin settings and store the previous color as a data attribute inside the html tag for restoring it later
				if (chosen_override_coolaxs_highlight_titles_colors_class_background_color) {// it appesrs twice - this is the first
					var currentBackgroundColor = $(val).css( "background-color" );// this gets the background-color from each tag
					//console.log(" Before: " + val + " currentBackgroundColor: " + currentBackgroundColor);		
					if ( ! currentBackgroundColor) currentBackgroundColor = 'transparent';
						var initBackgroundColor = $(val).attr('data-initBackgroundColor');
						if ( ! initBackgroundColor) {
							// if it there is no initBackgroundColor we store the currentBackgroundColor of the tag in the data attribute as initBackgroundColor
							initBackgroundColor = currentBackgroundColor;						
							//$(val).data( "initBackgroundColor" , String(initBackgroundColor));
							$(val).attr('data-initBackgroundColor', initBackgroundColor);
						}
						currentBackgroundColor = chosen_accessibilty_titles_background_color;
						//console.log("initBackgroundColor => currentBackgroundColor: " + currentBackgroundColor);					
						$(val).css('background-color', currentBackgroundColor);					
				}// if (chosen_override_coolaxs_highlight_titles_colors_class_background_color)	
				
				// I put this after the if statement in order to get a transparent background val 
				// if it was before the if statement then if the original background color was transparent I would get in the above currentBackgroundColor = $(val).css( "background-color" ) the coolaxs_highlight_titles_colors class background color and not the original transparent background color
				$(val).addClass( "coolaxs_highlight_titles_colors" );	
				
			});// $( ':header, :header > a' ).each(function(i, val){ 
			
		}// else of    if (highlightPageTitlesValue == "false")
		
		// update button background		
		var coolaxs_highlight_titles = localStorage.getItem('coolaxs_highlightPageTitles');
		//console.log("coolaxs_highlight_titles: " + coolaxs_highlight_titles);	
		if (coolaxs_highlight_titles == "true") {
			$('#coolaxs_highlight_titles').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_highlight_titles').removeClass('coolaxs_acivated_button');				
		}	
	}	
	// יצירה מחדש של מצב הקישורים בעת טעימת הדף אן ורק במידה ונשמר 
	function coolaxs_reCreateHighlightTitles() { 
		var highlightPageTitlesValue = localStorage.getItem('coolaxs_highlightPageTitles');
		// console.log("highlightPageTitlesValue: " + highlightPageTitlesValue);	
		if (highlightPageTitlesValue != null)// if the localStorage item is defined
			coolaxs_highlightPageTitles(highlightPageTitlesValue);
	}
	
	function coolaxs_toggleHighlightTitles() { 
		var highlightPageTitlesValue = localStorage.getItem('coolaxs_highlightPageTitles');	
		if (highlightPageTitlesValue === null)// if the localStorage item is not defined we create it
			highlightPageTitlesValue = "false";
			
		//	console.log("highlightPageTitlesValue: " + highlightPageTitlesValue);	
		// flip value
		if (highlightPageTitlesValue == "false") {
			highlightPageTitlesValue = "true";
		} else {
			highlightPageTitlesValue = "false";	
		}			
		
		// console.log("highlightPageTitlesValue: " + highlightPageTitlesValue);	
		localStorage.setItem('coolaxs_highlightPageTitles', highlightPageTitlesValue);	
		
		// הדגשת אלמנטים עם פוקוס
		coolaxs_highlightPageTitles(highlightPageTitlesValue);
	}// function coolaxs_toggleHighlightTitles()	
	
	// 	כותרות
	// toggle coolaxs_highlight_titles	
	$('#coolaxs_highlight_titles').on("click keypress", function(event){
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;
			// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 

		coolaxs_toggleHighlightTitles();
		// event.preventDefault();// אחרת יש גלילה של המסך		
		// event.stopPropagation ();				
		// return false;
	});// $('#coolaxs_highlight_titles').on("click keypress", function(event){

	// -------------------------------------------------------------	הדגשת כותרות  - סוף	-----------------------------------------------------------------	


	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	 ניגודיות בהירה - התחלה -----------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// ניגודיות בהירה - טקסט בצבע שחור על רקע לבן
	function coolaxs_bright_contrast_colors(brightContrastValue) { 
		// var coolaxs_str_normal_image = "_normal_to_bright";
		// var coolaxs_str_normal_image = "_normal_to_dark";		
		// var coolaxs_str_normal_image = "_normal_to_both";//to both bright & dark - this means that we have 3 pictures
		var coolaxs_str_normal_image = "_normal_contrast";
		var str_bright_image = "_bright_contrast";
		var str_dark_image = "_dark_contrast";			
	
		if (brightContrastValue === null)
			return;
	
		
		//alert("brightContrastValue value: "+brightContrastValue);
		if (brightContrastValue == "false") {
			//console.log("brightContrastValue");			

			// BackgroundImage: bright to normal 		
			coolaxs_toggleImageOrBackgroundImageBrightOrDark(str_bright_image,coolaxs_str_normal_image);		
			
	/* 		$( 'h1,h2,h3,h4,h5,h6,span,p,label,a' ).each(function(i, val){ 
				$(val).removeClass( "coolaxs_bright_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).removeClass( "coolaxs_bright_contrast_bkg_color" );	
			}); */
			//$("div").css('background-color', 'white');
			$("body *").each(function(i, val){ 
				$(val).removeClass( "coolaxs_bright_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).removeClass( "coolaxs_bright_contrast_bkg_color" );	
			});
			//$("div").css('background-color', 'white');
			$("li a").each(function(i, val){ 
				$(val).removeClass( "coolaxs_bright_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).removeClass( "coolaxs_bright_contrast_bkg_color" );	
			});		
			$("body,html").each(function(i, val){ 
				$(val).removeClass( "coolaxs_bright_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).removeClass( "coolaxs_bright_contrast_bkg_color" );	
			});		
			
			
		}
		else {

			// BackgroundImage: normal to bright 
			coolaxs_toggleImageOrBackgroundImageBrightOrDark(coolaxs_str_normal_image,str_bright_image);

			
			// $( 'h1,h2,h3,h4,h5,h6,span,p,label,a' ).each(function(i, val){ 
				// $(val).addClass( "coolaxs_bright_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).addClass( "coolaxs_bright_contrast_bkg_color" );	
			// });
			//$("div").css('background-color', 'white');
			$("body *").each(function(i, val){ 
				$(val).addClass( "coolaxs_bright_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).addClass( "coolaxs_bright_contrast_bkg_color" );	
			});
			//$("div").css('background-color', 'white');
			$("li a").each(function(i, val){ 
				$(val).addClass( "coolaxs_bright_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).addClass( "coolaxs_bright_contrast_bkg_color" );	
			});		
			$("body,html").each(function(i, val){ 
				$(val).addClass( "coolaxs_bright_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).addClass( "coolaxs_bright_contrast_bkg_color" );	
			});			
			
		}

		// update button background		
		var coolaxs_bright_contrast = localStorage.getItem('COOL_ACCESSIBILITY_BrightContrast');
		//console.log("coolaxs_bright_contrast: " + coolaxs_bright_contrast);	
		if (coolaxs_bright_contrast == "true") {
			$('#coolaxs_bright_contrast').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_bright_contrast').removeClass('coolaxs_acivated_button');				
		}	
	}// function bright_invert_colors()

	// יצירה מחדש של מצב הקישורים בעת טעימת הדף אן ורק במידה ונשמר 
	function coolaxs_reCreateBrightContrast() { 
		var brightContrastValue = localStorage.getItem('COOL_ACCESSIBILITY_BrightContrast');
		//console.log("brightContrastValue: " + brightContrastValue);	
		if (brightContrastValue != null)// if the localStorage item is defined
			coolaxs_bright_contrast_colors(brightContrastValue);
	}
	
	// revert to original
	function coolaxs_resetBrightContrast() { 
		$('#coolaxs_bright_contrast').removeClass('coolaxs_acivated_button');
		localStorage.setItem('COOL_ACCESSIBILITY_BrightContrast', "false");	
		coolaxs_dark_contrast_colors("false");
	}	
	
	function coolaxs_toggleBrightContrast() { 
		var brightContrastValue = localStorage.getItem('COOL_ACCESSIBILITY_BrightContrast');	
		if (brightContrastValue === null)// if the localStorage item is not defined we create it
			brightContrastValue = "false";
			
		//console.log("brightContrastValue: " + brightContrastValue);	
		// flip value
		if (brightContrastValue == "false") {
			coolaxs_resetaccessibilityContrasts();
			brightContrastValue = "true";
		} else {
			brightContrastValue = "false";	
		}			
		
		 //console.log("brightContrastValue: " + brightContrastValue);	
		localStorage.setItem('COOL_ACCESSIBILITY_BrightContrast', brightContrastValue);	
		
		// ניגודיות בהירה
		coolaxs_bright_contrast_colors(brightContrastValue);
	}// function coolaxs_toggleBrightContrast()
	
	// toggle coolaxs_bright_contrast	
	$('#coolaxs_bright_contrast').on("click keypress", function(event){
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;
			// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		
		coolaxs_toggleBrightContrast();
	
		event.preventDefault();// אחרת יש גלילה של המסך		
	});// $('#coolaxs_bright_contrast').on("click keypress", function(event){
	// -------------------------------------------------------------	ניגודיות בהירה  - סוף -----------------------------------------------------------------	



	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	 ניגודיות כהה - התחלה -----------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// ניגודיות בהירה - טקסט בצבע שחור על רקע לבן
	function coolaxs_dark_contrast_colors(darkContrastValue) { 
		var coolaxs_str_normal_image = "_normal_contrast";
		var str_bright_image = "_bright_contrast";
		var str_dark_image = "_dark_contrast";		

		if (darkContrastValue === null)
			return;

		//alert("darkContrastValue value: "+darkContrastValue);
		if (darkContrastValue == "false") {
			//console.log("darkContrastValue");			

			// BackgroundImage: dark to normal 		
			coolaxs_toggleImageOrBackgroundImageBrightOrDark(str_dark_image,coolaxs_str_normal_image);		
			
	/* 		$( 'h1,h2,h3,h4,h5,h6,span,p,label,a' ).each(function(i, val){ 
				$(val).removeClass( "coolaxs_dark_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).removeClass( "coolaxs_dark_contrast_bkg_color" );	
			}); */
			//$("div").css('background-color', 'white');
			$("body *").each(function(i, val){ 
				$(val).removeClass( "coolaxs_dark_contrast" );	/* if ( coolaxs_hasBkgcolor(val)  )  */ $(val).removeClass( "coolaxs_dark_contrast_bkg_color" );	
			});
			//$("div").css('background-color', 'white');
			$("li a").each(function(i, val){ 
				$(val).removeClass( "coolaxs_dark_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).removeClass( "coolaxs_dark_contrast_bkg_color" );	
			});		
			$("body,html").each(function(i, val){ // I put the if statement in comment because if there is no color dedined it will be white
				$(val).removeClass( "coolaxs_dark_contrast" );	/* if ( coolaxs_hasBkgcolor(val)  )   */$(val).removeClass( "coolaxs_dark_contrast_bkg_color" );	
			});		
			$("img").each(function(i, val){ 
				$(val).removeClass( "coolaxs_dark_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).removeClass( "coolaxs_dark_contrast_bkg_color" );	
			});			
			$("img").each(function(i, val){ 
				$(val).removeClass( "coolaxs_dark_contrast_img" );
			});	
			$('.coolaxs_buttons').removeClass('coolaxs_dark_contrast2');			
		}
		else {

			// BackgroundImage: normal to dark 
			coolaxs_toggleImageOrBackgroundImageBrightOrDark(coolaxs_str_normal_image,str_dark_image);

			
			// $( 'h1,h2,h3,h4,h5,h6,span,p,label,a' ).each(function(i, val){ 
				// $(val).addClass( "coolaxs_dark_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).addClass( "coolaxs_dark_contrast_bkg_color" );	
			// });
			//$("div").css('background-color', 'white');
			$("body *").each(function(i, val){ 
				//
				$(val).addClass( "coolaxs_dark_contrast" );
				// ( ! $(val).hasClass( "coolaxs_highlight_titles_colors" ))) in the following because coolaxs_highlight_titles_colors class already overrides the background color and we don't want to override it
				if (( coolaxs_hasBkgcolor(val)  ) && ( ! $(val).hasClass( "coolaxs_highlight_titles_colors" ))) $(val).addClass( "coolaxs_dark_contrast_bkg_color" );	
			});
			//$("div").css('background-color', 'white');
			$("li a").each(function(i, val){ 
				$(val).addClass( "coolaxs_dark_contrast" );
				// ( ! $(val).hasClass( "coolaxs_highlight_titles_colors" ))) in the following because coolaxs_highlight_titles_colors class already overrides the background color and we don't want to override it
				if (( coolaxs_hasBkgcolor(val)  ) && ( ! $(val).hasClass( "coolaxs_highlight_titles_colors" )))  $(val).addClass( "coolaxs_dark_contrast_bkg_color" );	
			});		
			$("body,html").each(function(i, val){ // I put the if statement in comment because if there is no color dedined it will be white
				$(val).addClass( "coolaxs_dark_contrast" );	/* if ( coolaxs_hasBkgcolor(val)  )  */ $(val).addClass( "coolaxs_dark_contrast_bkg_color" );	
			});			
			$("img").each(function(i, val){ 
				$(val).addClass( "coolaxs_dark_contrast_img" );	// change brightness to 90% from 100% so it won't be too bright
			});		
			$('.coolaxs_buttons').addClass('coolaxs_dark_contrast2');	

			
		}

		
		
		// update button background		
		var coolaxs_dark_contrast = localStorage.getItem('COOL_ACCESSIBILITY_DarkContrast');
		//console.log("coolaxs_dark_contrast: " + coolaxs_dark_contrast);	
		if (coolaxs_dark_contrast == "true") {
			$('#coolaxs_dark_contrast').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_dark_contrast').removeClass('coolaxs_acivated_button');				
		}	
	}// function coolaxs_dark_contrast_colors()

	// יצירה מחדש של מצב הקישורים בעת טעימת הדף אן ורק במידה ונשמר 
	function coolaxs_reCreateDarkContrast() { 
		var darkContrastValue = localStorage.getItem('COOL_ACCESSIBILITY_DarkContrast');
		//console.log("darkContrastValue: " + darkContrastValue);	
		if (darkContrastValue != null)// if the localStorage item is defined
			coolaxs_dark_contrast_colors(darkContrastValue);
	}
	
	// revert to original
	function coolaxs_resetDarkContrast() { 
		$('#coolaxs_dark_contrast').removeClass('coolaxs_acivated_button');
		localStorage.setItem('COOL_ACCESSIBILITY_DarkContrast', "false");	
		coolaxs_dark_contrast_colors("false");
	}		
	
	function coolaxs_toggleDarkContrast() { 
		var darkContrastValue = localStorage.getItem('COOL_ACCESSIBILITY_DarkContrast');	
		if (darkContrastValue === null)// if the localStorage item is not defined we create it
			darkContrastValue = "false";
			
			//console.log("darkContrastValue: " + darkContrastValue);	
		// flip value
		if (darkContrastValue == "false") {
			coolaxs_resetaccessibilityContrasts();
			darkContrastValue = "true";
		} else {
			darkContrastValue = "false";	
		}				
		
		 //console.log("darkContrastValue: " + darkContrastValue);	
		localStorage.setItem('COOL_ACCESSIBILITY_DarkContrast', darkContrastValue);	
		
		// ניגודיות בהירה
		coolaxs_dark_contrast_colors(darkContrastValue);
	}// function coolaxs_toggleDarkContrast()
	
	// toggle coolaxs_dark_contrast	
	$('#coolaxs_dark_contrast').on("click keypress", function(event){
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;
			// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		coolaxs_toggleDarkContrast();
		
		event.preventDefault();// אחרת יש גלילה של המסך		
	});// $('#coolaxs_dark_contrast').on("click keypress", function(event){
	// -------------------------------------------------------------	ניגודיות כהה  - סוף -----------------------------------------------------------------	
		

		
		
		
		
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	מניעת אנימציה - התחלה -----------------------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// the following should be at every animated gif or static so jquery could toggle between them automatically
	var coolaxs_str_normal_image = "_static.gif";
	var coolaxs_str_animated_gif_image = "_animated.gif";		
	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------

	// it is called from 2 places: from coolaxs_reCreateStopAnimation() & from $('#coolaxs_stop_animations').on("click keypress", function(event){
	function coolaxs_stopAnimation(value) {
		if (value === null)
			return;		
		//alert("stopAnimationValue value: "+value);

		// החלפת כל תמונות 'גיף' שיש בהם אנימציה ל'גיף' סטטי וההפך
		if (value == "true") {
			coolaxs_toggleImageSource(coolaxs_str_animated_gif_image, coolaxs_str_normal_image);
			if ( $( ".flexslider" ).length) {$('.flexslider2').flexslider("pause");}// length tests whether an element exists			
			if ( $( ".flexslider2" ).length) {$('.flexslider2').flexslider("pause");}// length tests whether an element exists
			
			$("html").addClass("coolaxs_prevent_animations");

			//	.....................	Disable all automatic video autoplay in the webpage ....start .................
			// if iframe src autoplay=1 then autoplay=0 and store data autoplayoriginal = "1" to revert back to
			$("iframe").each(function(i, val){ 
				var currentURL = $(val).attr("src");
				if(currentURL.indexOf("autoplay=") != -1)
				{
					//autoplay present in src; so lets add it
					if(currentURL.indexOf("autoplay=1") >- 1)  {
						//replace autoplay=1 with autoplay=0
						var updatedURL = currentURL.replace('autoplay=1', 'autoplay=0');
						$(val).attr("src",updatedURL);
						// store autoplayoriginal
						$(val).attr('data-autoplayoriginal', "1");	
						//console.log("cool accessibility plugin coolaxs_prevent_animations part : " + updatedURL + " after storing autoplayoriginal: 1");							
					}
				}	
			});// $("iframe").each(function(i, val)			
			//	.....................	Disable all automatic video autoplay in the webpage ....end .................				

		}  else {
			coolaxs_toggleImageSource(coolaxs_str_normal_image, coolaxs_str_animated_gif_image);
			if ( $( ".flexslider" ).length) {$('.flexslider2').flexslider("pause");}// length tests whether an element exists				
			if ( $( ".flexslider2" ).length) {$('.flexslider2').flexslider("play");}// length tests whether an element exists
			
			//$("iframe").attr("src", $("iframe").attr("src").replace("autoplay=0", "autoplay=1"));
			$("html").removeClass("coolaxs_prevent_animations");
			
			//	.....................	Recreate all automatic video autoplay in the webpage ....start .................
			// if iframe src autoplay exist and autoplay=0 then if data autoplayoriginal = "1" change to autoplay=1 and remove autoplayoriginal data value
			$("iframe").each(function(i, val){ 
				var currentURL = $(val).attr("src");
				if(currentURL.indexOf("autoplay=") != -1)	{
					//autoplay present in src; 
					if(currentURL.indexOf("autoplay=0") >- 1)  {
						//autoplay=0 present in src; 
						var autoplayOriginal = $(val).attr('data-autoplayoriginal');	
						if (autoplayOriginal == "1") {
							var updatedURL = currentURL.replace('autoplay=0', 'autoplay=1');	
							$(val).attr("src",updatedURL);	
							//console.log("cool accessibility plugin coolaxs_prevent_animations part : " + updatedURL + " after getting autoplayoriginal: 1");									
							delete $(val).removeAttr('data-autoplayoriginal');// remove autoplayoriginal data value
						}// if (autoplayOriginal == "1")
					}
				}// if(currentURL.indexOf("autoplay=") != -1)	
			});// $("iframe").each(function(i, val)
			//	.....................	Recreate all automatic video autoplay in the webpage ....end .................		
			
		}// else of if (window.coolaxs_stop_animations);		

		// update button background		
		var coolaxs_stop_animations = localStorage.getItem('COOL_ACCESSIBILITY_StopAnimation');
		//console.log("coolaxs_stop_animations: " + coolaxs_stop_animations);	
		if (coolaxs_stop_animations == "true") {
			$('#coolaxs_stop_animations').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_stop_animations').removeClass('coolaxs_acivated_button');				
		}			
	}	

	// יצירה מחדש של מצב מניעת האנימציה בעת טעינת הדף אך ורק במידה ונשמר 
	function coolaxs_reCreateStopAnimation() { 
		var stopAnimationValue = localStorage.getItem('COOL_ACCESSIBILITY_StopAnimation');
		//console.log("stopAnimationValue: " + stopAnimationValue);	
		if (stopAnimationValue != null)// if the localStorage item is defined
			coolaxs_stopAnimation(stopAnimationValue);
	}		
	
	function coolaxs_toggleStopAnimation() { 
		var stopAnimationValue = localStorage.getItem('COOL_ACCESSIBILITY_StopAnimation');	
		if (stopAnimationValue === null)// if the localStorage item is not defined we create it
			stopAnimationValue = "false";
			
		//	console.log("stopAnimationValue: " + stopAnimationValue);	
		// flip value
		if (stopAnimationValue == "false") {
			stopAnimationValue = "true";	$("*").stop();
		} else {
			stopAnimationValue = "false";	
		}			
		
		// console.log("stopAnimationValue: " + stopAnimationValue);	
		localStorage.setItem('COOL_ACCESSIBILITY_StopAnimation', stopAnimationValue);	

		coolaxs_stopAnimation(stopAnimationValue);
	}// function coolaxs_toggleStopAnimation()		
	
	// toggle Stop Animation
	$('#coolaxs_stop_animations').on("click keypress", function(event){
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;
			// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		coolaxs_toggleStopAnimation();
		
		event.preventDefault();// אחרת יש גלילה של המסך		
	});// $('#coolaxs_stop_animations').on("click keypress", function(event){		
	
	function coolaxs_toggleImageSource(str_origin,str_target) {
		var debug = false; // false // true
		
		$( 'img' ).each(function(i, val){ 

			var source_image_url = $(val).attr("src");
			if(debug) console.log("source_image_url: "+source_image_url);
						
			var n = source_image_url.indexOf(str_origin);
			if (n > -1) {
				if(debug) console.log("before: " +source_image_url);					
				
				var image_name_without_extension = source_image_url.substr(0,n);
				//var extension = strUrl.substr(n + str_origin.length);// like "png" or "jpg"							
				var new_source_image_url = image_name_without_extension + str_target;

				if(debug) console.log("after: " +new_source_image_url);	

				// החלפת תמונה 
				$(val).attr("src", $(val).attr("src").replace(source_image_url,new_source_image_url));
	
			}// if (n > -1)
				
		});// $( 'img' ).each(function(i, val)
			
	}// coolaxs_toggleImageSource(str_origin,str_target)			
				
		
	// -------------------------------------------------------------	מניעת אנימציה - סוף -----------------------------------------------------------------			
		


	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	זום טקסט - התחלה -----------------------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	

	// it is called from 2 places: from coolaxs_reCreateZoomText() & from $('#coolaxs_text_zoom').on("click keypress", function(event){
	function coolaxs_zoomText(value) {
		if (value === null)
			return;		
		//alert("zoomTextValue value: "+value);
		
		// the implemintation is above in the following statements:
		// ---------------------------------------------------------------
	 	// $('div').hover(
		//	$('h1,h2,h3,h4,h5,h6,span,p,label,a,div:not(:has(h1,h2,h3,h4,h5,h6,p,label,a,div))').hover(
		// $('img').hover(
	
		// toggle state
/* 		if (coolaxs_textZoomWindow == 'true') {
			localStorage.setItem('coolaxs_textZoomWindow', 'false');
			$('#coolaxs_text_zoom').css('color','gray');		
		}
		else {
			localStorage.setItem('coolaxs_textZoomWindow', 'true');	
			$('#coolaxs_text_zoom').css('color','green');
		} */
		
		// update button background		
		var coolaxs_text_zoom = localStorage.getItem('coolaxs_textZoomWindow');
		//console.log("coolaxs_text_zoom: " + coolaxs_text_zoom);	
		if (coolaxs_text_zoom == "true") {
			$('#coolaxs_text_zoom').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_text_zoom').removeClass('coolaxs_acivated_button');				
		}				
	}	

	// יצירה מחדש של מצב הזום בעת טעינת הדף אן ורק במידה ונשמר 
	function coolaxs_reCreateZoomText() { 
		var zoomTextValue = localStorage.getItem('coolaxs_textZoomWindow');
		//console.log("zoomTextValue: " + zoomTextValue);	
		if (zoomTextValue != null)// if the localStorage item is defined
			coolaxs_zoomText(zoomTextValue);
	}		
	
	function coolaxs_toggleTextZoomWindow() { 
		var zoomTextValue = localStorage.getItem('coolaxs_textZoomWindow');	
		if (zoomTextValue === null)// if the localStorage item is not defined we create it
			zoomTextValue = "false";
			
		//	console.log("zoomTextValue: " + zoomTextValue);	
		// flip value
		if (zoomTextValue == "false") {
			zoomTextValue = "true";
		} else {
			zoomTextValue = "false";	
		}				
		
		// console.log("zoomTextValue: " + zoomTextValue);	
		localStorage.setItem('coolaxs_textZoomWindow', zoomTextValue);	

		coolaxs_zoomText(zoomTextValue);
	}// 	function coolaxs_toggleTextZoomWindow()
	
	// toggle coolaxs_textZoomWindow	
	$('#coolaxs_text_zoom').on("click keypress", function(event){
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;
			// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		coolaxs_toggleTextZoomWindow();
		
		event.preventDefault();// אחרת יש גלילה של המסך		
	});// $('#coolaxs_text_zoom').on("click keypress", function(event){	
	
	// -------------------------------------------------------------	זום טקסט - סוף -----------------------------------------------------------------			
		
		
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	גופן קריא - התחלה -----------------------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	

	// it is called from 2 places: from coolaxs_reCreateReadableFont() & from $('#coolaxs_readable_font').on("click keypress", function(event){
	function coolaxs_readableFont(value) {
		if (value === null)
			return;		
		//alert("readableFontValue value: "+value);
		if (value == "true") {
			$("*,body,a,span,li *").addClass( "coolaxs_readable_font" );	
		}  else {
			// revert to original cursor
			$("*,body,a,span,li *").removeClass( "coolaxs_readable_font" );
		}// else of if (window.coolaxs_highlight_links);		
		
		// update button background		
		var coolaxs_readable_font = localStorage.getItem('COOL_ACCESSIBILITY_ReadableFont');
		//console.log("coolaxs_readable_font: " + coolaxs_readable_font);	
		if (coolaxs_readable_font == "true") {
			$('#coolaxs_readable_font').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_readable_font').removeClass('coolaxs_acivated_button');				
		}			
	}	

	// יצירה מחדש של מצב הזום בעת טעינת הדף אן ורק במידה ונשמר 
	function coolaxs_reCreateReadableFont() { 
		var readableFontValue = localStorage.getItem('COOL_ACCESSIBILITY_ReadableFont');
		//console.log("readableFontValue: " + readableFontValue);	
		if (readableFontValue != null)// if the localStorage item is defined
			coolaxs_readableFont(readableFontValue);
	}	
	
	function coolaxs_toggleReadableFont() { 
		var readableFontValue = localStorage.getItem('COOL_ACCESSIBILITY_ReadableFont');	
		if (readableFontValue === null)// if the localStorage item is not defined we create it
			readableFontValue = "false";
			
		//console.log("readableFontValue: " + readableFontValue);	
		// flip value
		if (readableFontValue == "false") {
			readableFontValue = "true";
		} else {
			readableFontValue = "false";	
		}				
		
		//console.log("readableFontValue: " + readableFontValue);
		 
		localStorage.setItem('COOL_ACCESSIBILITY_ReadableFont', readableFontValue);	

		coolaxs_readableFont(readableFontValue);
	}// function coolaxs_toggleReadableFont()		

	




	$('#coolaxs_readable_font').on("click keypress", function(event){
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;
			// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		coolaxs_toggleReadableFont();
		
		event.preventDefault();// אחרת יש גלילה של המסך
	});// $('#coolaxs_readable_font').on("click keypress", function(event){
	
	// -------------------------------------------------------------	גופן קריא - סוף -----------------------------------------------------------------			
		

	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------- White cursor - start ----------------	 סמן בצבע לבן - התחלה ---------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// could be erased - mouse cursor function
	// http://jsbin.com/qexawe/edit?js,output		
	
	// it is called from 2 places: from coolaxs_reCreateBigWhiteCursor() & from $('#coolaxs_big_white_cursor').on("click keypress", function(event){
	function coolaxs_bigWhiteCursor(value) {
		if (value === null)
			return;		
		//alert("bigWhiteCursorValue: "+value);
		if (value == "true") {
			$("*").not(':focusable,a,span').addClass( "coolaxs_big_white_cursor" );	
			$( ':focusable,a' ).each(function(i, val){ 
				$(val).addClass( "coolaxs_cursor_big_pointer_white" );
			});// $( 'a' ).each(function(i, val)
		}  else {
			// revert to original cursor
			$("*").not(':focusable,a,span').removeClass( "coolaxs_big_white_cursor" );	
			$( ':focusable,a').each(function(i, val){ 
				$(val).removeClass( "coolaxs_cursor_big_pointer_white" );
			});// $( 'a' ).each(function(i, val)
		}// if (value == "true")
			
		// update button background		
		var coolaxs_big_white_cursor = localStorage.getItem('COOL_ACCESSIBILITY_BigWhiteCursor');
		//console.log("coolaxs_big_white_cursor: " + coolaxs_big_white_cursor);	
		if (coolaxs_big_white_cursor == "true") {
			$('#coolaxs_big_white_cursor').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_big_white_cursor').removeClass('coolaxs_acivated_button');				
		}				
	
	}	

	// יצירה מחדש של מצב הזום בעת טעינת הדף אן ורק במידה ונשמר 
	function coolaxs_reCreateBigWhiteCursor() { 
		var bigWhiteCursorValue = localStorage.getItem('COOL_ACCESSIBILITY_BigWhiteCursor');
		//console.log("bigWhiteCursorValue: " + bigWhiteCursorValue);	
		if (bigWhiteCursorValue != null)// if the localStorage item is defined
			coolaxs_bigWhiteCursor(bigWhiteCursorValue);
	}		
	// called when I use a black cursor
	function coolaxs_resetBigWhiteCursor() { 
	
		$('#coolaxs_big_white_cursor').removeClass('coolaxs_acivated_button');	
		
		// revert to original cursor
		$("*").not(':focusable,a,span').removeClass( "coolaxs_big_white_cursor" );	
		$( ':focusable,a').each(function(i, val){ 
			$(val).removeClass( "cursor_big_pointer_White" );
		});// $( 'a' ).each(function(i, val)
				
		localStorage.setItem('COOL_ACCESSIBILITY_BigWhiteCursor', "false");
	}	
	
	function coolaxs_toggleBigWhiteCursor() { 
	
		var bigWhiteCursorValue = localStorage.getItem('COOL_ACCESSIBILITY_BigWhiteCursor');	
		if (bigWhiteCursorValue === null)// if the localStorage item is not defined we create it
			bigWhiteCursorValue = "false";
			
		//console.log("bigWhiteCursorValue: " + bigWhiteCursorValue);	
		// flip value
		if (bigWhiteCursorValue == "false") {
			if (localStorage.getItem('COOL_ACCESSIBILITY_BigBlackCursor')=="true") coolaxs_resetBigBlackCursor();
			bigWhiteCursorValue = "true";
		} else {
			bigWhiteCursorValue = "false";	
		}			
		
		//console.log("bigWhiteCursorValue: " + bigWhiteCursorValue);
		 
		localStorage.setItem('COOL_ACCESSIBILITY_BigWhiteCursor', bigWhiteCursorValue);	

		coolaxs_bigWhiteCursor(bigWhiteCursorValue);
	}// function coolaxs_toggleBigWhiteCursor()	
	
		// change cursor to a big white cursor
	$('#coolaxs_big_white_cursor').on("click keypress", function(event){
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;
			// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		coolaxs_toggleBigWhiteCursor();
		event.preventDefault();// אחרת יש גלילה של המסך

	});// $('#coolaxs_big_white_cursor').on("click keypress", function(event){	
	
	// -------------------------------------- White cursor - end ----------------	 סמן בצבע לבן - סוף -------------------------------------------------		
	
	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------- Black cursor - start ----------------	 סמן בצבע שחור - התחלה -------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	

	// it is called from 2 places: from coolaxs_reCreateBigBlackCursor() & from $('#coolaxs_big_black_cursor').on("click keypress", function(event){
	function coolaxs_bigBlackCursor(value) {
		if (value === null)
			return;		
		//alert("bigBlackCursorValue: "+value);
		if (value == "true") {
			$("*").not(':focusable,a,span').addClass( "coolaxs_big_black_cursor" );	
			$( ':focusable,a' ).each(function(i, val){ 
				$(val).addClass( "coolaxs_cursor_big_pointer_black" );
			});// $( 'a' ).each(function(i, val)
		}  else {
			// revert to original cursor
			$("*").not(':focusable,a,span').removeClass( "coolaxs_big_black_cursor" );	
			$( ':focusable,a').each(function(i, val){ 
				$(val).removeClass( "coolaxs_cursor_big_pointer_black" );
			});// $( 'a' ).each(function(i, val)
		}// if (value == "true")
			
		// update button background		
		var coolaxs_big_black_cursor = localStorage.getItem('COOL_ACCESSIBILITY_BigBlackCursor');
		//console.log("coolaxs_big_black_cursor: " + coolaxs_big_black_cursor);	
		if (coolaxs_big_black_cursor == "true") {
			$('#coolaxs_big_black_cursor').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_big_black_cursor').removeClass('coolaxs_acivated_button');				
		}	
		
	}	
	// יצירה מחדש של מצב הזום בעת טעינת הדף אן ורק במידה ונשמר 
	function coolaxs_reCreateBigBlackCursor() { 
		var bigBlackCursorValue = localStorage.getItem('COOL_ACCESSIBILITY_BigBlackCursor');
		//console.log("bigBlackCursorValue: " + bigBlackCursorValue);	
		if (bigBlackCursorValue != null)// if the localStorage item is defined
			coolaxs_bigBlackCursor(bigBlackCursorValue);
	}	
	// called when I use a white cursor
	function coolaxs_resetBigBlackCursor() { 
		// revert to original cursor
		$('#coolaxs_big_black_cursor').removeClass('coolaxs_acivated_button');		
		
		$("*").not(':focusable,a,span').removeClass( "coolaxs_big_black_cursor" );	
		$( ':focusable,a').each(function(i, val){ 
			$(val).removeClass( "coolaxs_cursor_big_pointer_black" );
		});// $( 'a' ).each(function(i, val)
				
		localStorage.setItem('COOL_ACCESSIBILITY_BigBlackCursor', "false");
	}	
	
	function coolaxs_toggleBigBlackCursor() { 

		var bigBlackCursorValue = localStorage.getItem('COOL_ACCESSIBILITY_BigBlackCursor');	
		if (bigBlackCursorValue === null)// if the localStorage item is not defined we create it
			bigBlackCursorValue = "false";
			
		//console.log("bigBlackCursorValue: " + bigBlackCursorValue);	
		// flip value
		if (bigBlackCursorValue == "false") {
			if (localStorage.getItem('COOL_ACCESSIBILITY_BigWhiteCursor')=="true")
				coolaxs_resetBigWhiteCursor();
			bigBlackCursorValue = "true";
		} else {
			bigBlackCursorValue = "false";	
		}	
		
		//console.log("bigBlackCursorValue: " + bigBlackCursorValue);
		 
		localStorage.setItem('COOL_ACCESSIBILITY_BigBlackCursor', bigBlackCursorValue);	

		coolaxs_bigBlackCursor(bigBlackCursorValue);
	}	
	
	// change cursor to a big black cursor
	$('#coolaxs_big_black_cursor').on("click keypress", function(event){
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;
			// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 		
		coolaxs_toggleBigBlackCursor();
		event.preventDefault();// אחרת יש גלילה של המסך
	});// $('#coolaxs_big_black_cursor').on("click keypress", function(event){	
	
	// -------------------------------------- Black cursor - end ----------------	 סמן בצבע שחור - סוף -------------------------------------------------		

	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------- Keyboard navigation - start ----------------	 ניווט במקלדת - התחלה -------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	


	var accessibilty_skip_menu_option = accessibilty_skip_menu_button_mode;// this was set in the php file 
	//alert(accessibilty_skip_menu_option);
	var debug_accessibilty_skip_menu_option = false;// false // true
	if (debug_accessibilty_skip_menu_option) console.log("getting variable from PHP : accessibilty_skip_menu_button_mode " + accessibilty_skip_menu_option);
	
	switch(accessibilty_skip_menu_option) {
		case "skip_menu_button_if_nav_tag":
			if( $('nav').length )
			{
				if (debug_accessibilty_skip_menu_option) console.log(": <nav> tag exist "); // it exists
				$('#coolaxs_skip_to_page_content_button').show();
			} else {
				if (debug_accessibilty_skip_menu_option) console.log(" : No <nav> tag");
				$('#coolaxs_skip_to_page_content_button').hide();	
			}
			break;
			
		case "if_has_coolaxs_navigation_class":
			if ($('.coolaxs_navigation')[0])// check if a class exists: https://codepen.io/allurewebsolutions/pen/Kzoqav
			{
				if (debug_accessibilty_skip_menu_option) console.log(" : coolaxs_navigation class exist"); // it exists
				$('#coolaxs_skip_to_page_content_button').show();
			} else {
				if (debug_accessibilty_skip_menu_option) console.log(" : No coolaxs_navigation class");
				$('#coolaxs_skip_to_page_content_button').hide();	
			}
			break;
			
		case "always":			if (debug_accessibilty_skip_menu_option) console.log(" : always");	
				$('#coolaxs_skip_to_page_content_button').show();
			break;
			
		case "never":			if (debug_accessibilty_skip_menu_option) console.log(" : never");	
		default:
			//alert("No nav tag");
			$('#coolaxs_skip_to_page_content_button').hide();	
	} 	
	
	// it is called from 2 places: from coolaxs_reCreateKeyboardNavigation() & from $('#coolaxs_keyboard_navigation').on("click keypress", function(event){
	function coolaxs_keyboardNavigation(value) {
		if (value === null)
			return;		
		//alert("keyboardNavigationValue: "+value);
		if (value == "true") {
			
			// there are many places in the style.css file just for the focus - this class activate these css elements
			$('body').addClass('coolaxs_focus_css_activated');

			// ספציפית לאתר הזה
			// פוקוס - תפריט ראשי
/* 			$(".clsTopMenu .clsSelected").focus( function() {
				$(".clsTopMenu .clsSelected *").css("color","black"); $(".clsTopMenu a").css("color","black");
			});
			$(".clsTopMenu .clsSelected").blur( function() {
				$(".clsTopMenu .clsSelected *").css("color","white"); $(".clsTopMenu a").css("color","white");
			});
			// פוקוס - צרו קשר
			$(".clsTopMenu span#contact_us").focus( function() {
				$(".clsTopMenu a").css("color","black");
			});	
			$(".clsTopMenu span#contact_us").blur( function() {
				$(".clsTopMenu a").css("color","white");
			});
		
			
			$("*,a,img,span,li,input,textarea").focus(function () {    
				$(this).addClass( "focus_frame" );
			}).blur(function () {
				$(this).removeClass( "focus_frame" );
			});	 */
		}  else {
			
			$('body').removeClass('coolaxs_focus_css_activated');
			
			// צריך אחרת  - צרו קשר - בתפריט הראשי מקבל צבע שחור - בפוקוס - לאחר שמכבים את כפתור ניווט המקלדת
			// ספציפית לאתר הזה
			// פוקוס - תפריט ראשי
/* 			$(".clsTopMenu .clsSelected").focus( function() {
				$(".clsTopMenu .clsSelected *").css("color","white"); $(".clsTopMenu a").css("color","black");
			});
			// פוקוס - צרו קשר
			$(".clsTopMenu span#contact_us").focus( function() {
				$(".clsTopMenu a").css("color","white");
			});	
		
			
			$("*,a,img,span,li,input,textarea").focus(function () {    
				$(this).removeClass( "focus_frame" );
			}).blur(function () {
				$(this).removeClass( "focus_frame" );
			});	 */

		}// if (value == "true")
			
		// update button background		
		var coolaxs_keyboard_navigation = localStorage.getItem('COOL_ACCESSIBILITY_KeyboardNavigation');
		//console.log("coolaxs_keyboard_navigation: " + coolaxs_keyboard_navigation);	
		if (coolaxs_keyboard_navigation == "true") {
			$('#coolaxs_keyboard_navigation').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_keyboard_navigation').removeClass('coolaxs_acivated_button');				
		}	
	}	
	// יצירה מחדש של מצב ניווט המקלדת 
	function coolaxs_reCreateKeyboardNavigation() { 
		var keyboardNavigationValue = localStorage.getItem('COOL_ACCESSIBILITY_KeyboardNavigation');
		//console.log("keyboardNavigationValue: " + keyboardNavigationValue);	
		if (keyboardNavigationValue != null)// if the localStorage item is defined
			coolaxs_keyboardNavigation(keyboardNavigationValue);
	}		
	
	function coolaxs_toggleKeyboardNavigation() { 

		var keyboardNavigationValue = localStorage.getItem('COOL_ACCESSIBILITY_KeyboardNavigation');	
		if (keyboardNavigationValue === null)// if the localStorage item is not defined we create it
			keyboardNavigationValue = "false";
			
		//console.log("keyboardNavigationValue: " + keyboardNavigationValue);	
		// flip value
		if (keyboardNavigationValue == "false") {
			keyboardNavigationValue = "true";
			$('.coolaxs_buttons').attr('tabindex', 0);// because tabindex on the html caused scolling on the page
		}
		else	{
			keyboardNavigationValue = "false";
			$('.coolaxs_buttons').removeAttr('tabindex');			
		}
		//console.log("keyboardNavigationValue: " + keyboardNavigationValue);
		 
		localStorage.setItem('COOL_ACCESSIBILITY_KeyboardNavigation', keyboardNavigationValue);	

		coolaxs_keyboardNavigation(keyboardNavigationValue);
		
	}// function coolaxs_toggleKeyboardNavigation()
	
	
	// 	ניווט מקלדת - מסגרת אדומה עם טקסט שחור על רקע צהוב	
	// toggle coolaxs_keyboard_navigation	
	$('#coolaxs_keyboard_navigation').on("click keypress", function(event){
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;
			// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 		
		coolaxs_toggleKeyboardNavigation();
		event.preventDefault();// אחרת יש גלילה של המסך
	});// $('#coolaxs_big_black_cursor').on("click keypress", function(event){	
	
	// -------------------------------------- Keyboard navigation - end ----------------	 ניווט במקלדת - סוף -------------------------------------------------		

	

	

	
	
	
	
	
	
window.coolaxs_keyboard_nav = false;		
	

	
	
	//$('.coolaxs_buttons').html("<span>CTRL A</span>");	

	// this solves the problem that on loading the page after clearing the cache and refershing the page with Ctrl 5
	// all the accessibility icons appear on the upper right of the page before the page has finished loading
	// so we hide it in style.css and show it when the page is ready with JQuery in menu.js
	$('.coolaxs_accessibility_panel_container').show();
	// default hidden
	var coolaxs_mobile_accessibility_panel1 = $('.coolaxs_top_or_bottom_mobile_pannel');
	var coolaxs_mobile_accessibility_panel2 = $('.coolaxs_right_mobile_pannel');			
	var coolaxs_mobile_accessibility_panel3 = $('.coolaxs_left_mobile_pannel');	
	coolaxs_mobile_accessibility_panel1.hide();
	coolaxs_mobile_accessibility_panel2.hide();			
	coolaxs_mobile_accessibility_panel3.hide();		
			
	// פתיחת חלונית חדשה - דף הצהרת הנגישות
/* 	function goclicky()
	{
		var x = screen.width/2 - 700/2;
		var y = screen.height/2 - 450/2;
		//alert("popUp");
		var windowName = 'userConsole'; 
		var popUp = window.open("/הצהרת-נגישות/", windowName,'height=485,width=700,left='+x+',top='+y);

		if (popUp == null || typeof(popUp)=='undefined') { 	
			alert('Please disable your pop-up blocker to see the accessibility declaration'); 
		} 
		else { 	
			popUp.focus();
		}			
		
		// var myWindow = window.open("", "MsgWindow", "width=200,height=100");
		// myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
	}// function goclicky(meh)
	
	function helpaccessibilityPanel() {
		goclicky();		
	}// function helpaccessibilityPanel() 	

	$('#coolaxs_help_accessibility_panel').on("click keypress", function(event){
		
		
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		helpaccessibilityPanel();
		event.preventDefault();
	});// $('.coolaxs_help_accessibility_panel').on("click keypress", function(event){		 */
	
	//$('body').css('transform','scale(2,2)');
	//$('body').css('transform-origin','100% 0');// for hebrew
	
	/*    -ms-transform: scale(2,3); */ /* IE 9 */
    /* -webkit-transform: scale(2,3); */ /* Safari */
   /*  transform: scale(2,3);  *//* Standard syntax */
	
	// נגישות		
	coolaxs_reCreateaccessibilityPanelAnchorSide();
	// תתי-תפריט הנגישות סגורים בהתחלה
	// these must be must be AFTER coolaxs_reCreateaccessibilityPanelAnchorSide();
	var coolaxs_accessibility_panel = $('.coolaxs_accessibility_panel');	
	coolaxs_accessibility_panel.css('display','flex');// this solves a bug that turned display to block instead of flex between pages
	coolaxs_accessibility_panel.hide();// hidden by default // this MUST be after coolaxs_accessibility_panel.css('display','flex');
	
	var coolaxs_button_group_font_size = $('#coolaxs_button_group_font_size');	coolaxs_button_group_font_size.hide();// hidden by default	
	var coolaxs_button_group_letter_spacing = $('#coolaxs_button_group_letter_spacing');	coolaxs_button_group_letter_spacing.hide();// hidden by default		
	var coolaxs_button_group_word_spacing = $('#coolaxs_button_group_word_spacing');	coolaxs_button_group_word_spacing.hide();// hidden by default		
	var coolaxs_button_group_line_height = $('#coolaxs_button_group_line_height');	coolaxs_button_group_line_height.hide();// hidden by default
	var coolaxs_button_group_accessibility_settings = $('#coolaxs_button_group_accessibility_settings');	coolaxs_button_group_accessibility_settings.hide();// hidden by default

	coolaxs_reCreateOpenedaccessibilityPanel();
	
	coolaxs_reCreateKeyboardShortcutsaccessibilityPanel();
	
	coolaxs_reCreatePageFontSizes(); 
	coolaxs_reCreatePageLetterSpacing();
	coolaxs_reCreatePageWordSpacing();
	coolaxs_reCreatePageLineHeight();	
	
	coolaxs_reCreateReadableFont();		
	coolaxs_reCreateInvertColors();
	coolaxs_reCreateHighlightLinks();
	coolaxs_reCreateHighlightTitles();
	coolaxs_reCreateBrightContrast();
	coolaxs_reCreateDarkContrast();	
	coolaxs_reCreateZoomText();
	coolaxs_reCreateKeyboardNavigation();
	coolaxs_reCreateBigWhiteCursor();
	coolaxs_reCreateBigBlackCursor();
	coolaxs_reCreateStopAnimation();	

	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
// ------------------ TOGGLE accessibility keyboard shortcuts - start ----------------	 הפעלת קיצורי דרך במקלדת לנגישות - התחלה ------------------------	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------

	// https://stackoverflow.com/questions/8892238/detect-keyboard-layout-with-javascript
	function coolaxs_checkKeyboard(ob,e){
      var  re = /\d|\w|[\.\$@\*\\\/\+\-\^\!\(\)\[\]\~\%\&\=\?\>\<\{\}\"\'\,\:\;\_]/g;
      var  a = e.key.match(re);
      if (a == null){
        //alert('{{__(Error 2:\nNon English keyboard layout is detected!\nSet the keyboard layout to English and try to fill out the field again.)}}');
        ob.val('');
        return false;
      }
      return true;
    } 
	
	
	// קיצורי דרך במקלדת לנגישות
	// accessibility keyboard shortcuts
	onkeydown = function(e){
		
		var debug = false; // false // true
		
		var KeyboardShortcutsValue = localStorage.getItem('COOL_ACCESSIBILITY_KeyboardShortcuts');

		var non_english_keyboard_layout = false;
        if ( ! coolaxs_checkKeyboard($(this),e)){
            non_english_keyboard_layout = true;
        }
		
		// we use all the time toggle & show keyboardshortcuts and open accessibility panel shortcuts ( Alt 0 , Alt O ,Alt 5 , Alt 6 & Alt ?)
		if ( ! ((e.altKey) && 
		((e.keyCode == '0'.charCodeAt(0)) || (e.keyCode == 'O'.charCodeAt(0))|| (e.keyCode ==  96/*  numpad 0 */) ||
		(e.keyCode == '5'.charCodeAt(0)) || (e.keyCode == '6'.charCodeAt(0))|| (e.keyCode == 101) || (e.keyCode == 102) || //  numpad 5	//  numpad 6	
		(e.keyCode == 191/*  '?' */))
		)) {// Alt 0 = coolaxs_toggleOpenedaccessibilityPanelState()
			if (KeyboardShortcutsValue != "true")
				return;			
		}// if ( ! ((e.altKey) && (e.keyCode == '0'.charCodeAt(0))))
		

		
		if( ! e.altKey ) // only 'Alt' keys
			return;
		
		var key = String.fromCharCode(e.which);// if(e.keyCode == 'S'.charCodeAt(0))
			
		if (debug) console.log(e.which + " |"+key+"|");
		
		/* if (debug) {
			console.log(e.which);
			if (non_english_keyboard_layout)
				console.log("non_english_keyboard_layout");			
		} 	
 		// : key for non_english_keyboard_layout 
		if ( (non_english_keyboard_layout) && (e.which == 58)) {// : key
			coolaxs_toggleLineHeightGroup();
			e.preventDefault();
			return;				
		} */
		
		switch(key) {
			case String.fromCharCode(96)://  numpad 0
			case 'O':// "הצגת תפריט נגישות"				
			case '0':// "הצגת תפריט נגישות"	
				var opened_accessibility_panel = localStorage.getItem('COOL_ACCESSIBILITY_opened_accessibility_panel');	

				// we want that every time the accessibility panel is opened by the keyboard that it will show and enable the keyboard shortcuts
				// if someone doesm't want to show the keyboard shortcuts but only to use them 
				// 1. he can turn of by the keyboard the show keyboard shortcuts
				// 2. or more likely he would hide all the accessibility menu and just used the keyboard shortcuts without the icons

				localStorage.setItem('COOL_ACCESSIBILITY_KeyboardShortcuts', "true");		coolaxs_KeyboardShortcuts("true");
				
				var anchorSide = localStorage.getItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide');		
				
				// because the left & right accessibility panels the keyboard shorcuts are on top of the icons then we show on default only the shortcuts on the bottom & top panels
				if (( anchorSide == "bottom") || ( anchorSide == "top")) {
					localStorage.setItem('COOL_ACCESSIBILITY_ShowKeyboardShortcuts', "true");		coolaxs_ShowKeyboardShortcuts("true");
				}
				else {
					if ((opened_accessibility_panel === null) || (opened_accessibility_panel === "false")) {// first time used
						var ShowKeyboardShortcutsValue = localStorage.getItem('COOL_ACCESSIBILITY_ShowKeyboardShortcuts');	
						if (ShowKeyboardShortcutsValue === null) {
							localStorage.setItem('COOL_ACCESSIBILITY_ShowKeyboardShortcuts', "true");		coolaxs_ShowKeyboardShortcuts("true");
						}
					}					
				}// else of if ( localStorage.getItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide'))

				coolaxs_toggleOpenedaccessibilityPanelState(); 	
				e.preventDefault();
			break;	
			
			// Settings
			case 'S':		coolaxs_toggleaccessibilitySettingsGroup(); 	e.preventDefault();	break;// "הגדרות נגישות"// 
			case 'A':				coolaxs_toggleFontSizeGroup(); 						e.preventDefault();	break;// "שינוי גודל פונט" // case 'A'
			case String.fromCharCode(60):// האות ץ בעברית נמצאת באותו מקש			
			case String.fromCharCode(190):		coolaxs_toggleLetterSpacingGroup(); 						e.preventDefault();	break;// "שינוי ריווח אותיות" // case '>'
			
			case String.fromCharCode(62):// האות ת בעברית נמצאת באותו מקש
			case String.fromCharCode(188):		coolaxs_toggleWordSpacingGroup(); 						e.preventDefault();	break;// "שינוי ריווח מילים"// case '<'
			
			// Height
			case 'H':						coolaxs_toggleLineHeightGroup(); 						e.preventDefault();	break;// "שינוי גובה שורה"// case ':'

			case String.fromCharCode(97)://  numpad 1			
			case '1':				coolaxs_createTopaccessibilityPanelAnchor(); 				e.preventDefault();	break;// "תפריט נגישות עליון"
			case String.fromCharCode(98)://  numpad 2	
			case '2':				coolaxs_createRightaccessibilityPanelAnchor(); 			e.preventDefault();	break;// "תפריט נגישות ימני"
			case String.fromCharCode(99)://  numpad 3			
			case '3':				coolaxs_createBottomaccessibilityPanelAnchor(); 		e.preventDefault();	break;// "תפריט נגישות תחתון"
			case String.fromCharCode(100)://  numpad 4			
			case '4':				coolaxs_createLeftaccessibilityPanelAnchor(); 				e.preventDefault();	break;// "תפריט נגישות שמאלי"
			case String.fromCharCode(101)://  numpad 5				
			case '5':				coolaxs_toggleShowKeyboardShortcutsaccessibilityPanel(); 		e.preventDefault();	break;// "הצגת קיצורי מקלדת"
			case String.fromCharCode(102)://  numpad 6				
			case '6':				coolaxs_toggleKeyboardShortcutsaccessibilityPanel(); 				e.preventDefault();	break;// "הפעלת קיצורי מקלדת"
			case String.fromCharCode(103)://  numpad 7			
			case '7':				helpaccessibilityPanel(); 			e.preventDefault();	break;// "עזרה"
			
			// Quit // "איפוס הכל" // Revert
			case 'Q':				coolaxs_resetAllaccessibility(); 				e.preventDefault();	break;// "איפוס הכל"
			//"איפוס גודל פונט"
			case String.fromCharCode(61):// case '+' where it is also '=' on the keyboard itself - the other is on the Numpad
			case String.fromCharCode(107):				coolaxs_increasePageFontSizes(); 			e.preventDefault();	break;// "הוסף" // case '+'
			case 'X':				coolaxs_resetPageFontSizes(); 				e.preventDefault();	break;// "איפוס הכל"
			case String.fromCharCode(173):// case '-' where it is also '_' on the keyboard itself - the other is on the Numpad
			case String.fromCharCode(109):				coolaxs_decreasePageFontSizes(); 			e.preventDefault();	break;// "הפחת" // case '-'
			// "איפוס ריווח אותיות"
			case 'R':				coolaxs_increasePageLetterSpacing(); 		e.preventDefault();	break;// "הוסף"
			case 'F':				coolaxs_resetPageLetterSpacing(); 			e.preventDefault();	break;// "איפוס הכל" 
			case 'V':				coolaxs_decreasePageLetterSpacing(); 	e.preventDefault();	break;// "הפחת"
			// "איפוס ריווח מילים"
			case 'E':				coolaxs_increasePageWordSpacing(); 		e.preventDefault();	break;// "הוסף"
			case 'D':				coolaxs_resetPageWordSpacing(); 			e.preventDefault();	break;// "איפוס הכל" 
			case 'C':				coolaxs_decreasePageWordSpacing(); 		e.preventDefault();	break;// "הפחת"	
			// "איפוס גובה שורה"
			case 'U':				coolaxs_increasePageLineHeight(); 			e.preventDefault();	break;// "הוסף"
			case 'J':				coolaxs_resetPageLineHeight(); 				e.preventDefault();	break;// "איפוס הכל" 
			case 'M':				coolaxs_decreasePageLineHeight(); 		e.preventDefault();	break;// "הפחת"	

			case 'G':				coolaxs_toggleReadableFont(); 				e.preventDefault();	break;// "גופן קריא"
			case 'T':				coolaxs_toggleHighlightTitles(); 				e.preventDefault();	break;// "כותרות"
			case 'L':				coolaxs_toggleHighlightLinks(); 				e.preventDefault();	break;// "קישורים"
			
			case 'Z':				coolaxs_toggleTextZoomWindow(); 			e.preventDefault();	break;// "הגדלת טקסט באיזור הסמן"
			case 'I':				coolaxs_toggleInvertColors(); 					e.preventDefault();	break;// "היפוך צבעים"		
			case 'W':				coolaxs_toggleBrightContrast(); 				e.preventDefault();	break;// "ניגודיות בהירה"	
			case 'B':				coolaxs_toggleDarkContrast(); 				e.preventDefault();	break;// "ניגודיות כהה"

			case 'K':				coolaxs_toggleKeyboardNavigation(); 		e.preventDefault();	break;// "ניווט מקלדת"	
			case 'Y':				coolaxs_toggleBigWhiteCursor(); 			e.preventDefault();	break;// "סמן לבן"
			case 'N':				coolaxs_toggleBigBlackCursor(); 				e.preventDefault();	break;// "סמן שחור"
			case 'P':				coolaxs_toggleStopAnimation(); 				e.preventDefault();	break;// "מניעת אנימציה"				
			default:
		} 

	}// onkeydown = function(e)	
	
	// it is called from 2 places: from coolaxs_reCreateKeyboardShortcutsaccessibilityPanel() & from $('#coolaxs_toggle_keyboard_shortcuts_accessibility_panel').on("click keypress", function(event)
	function coolaxs_KeyboardShortcuts(KeyboardShortcutsValue) {
		if (KeyboardShortcutsValue === null)
			return;
		//alert("coolaxs_KeyboardShortcuts value: "+value);

		// this is handled in: onkeydown = function(e){} above
		
		// update button background		
		var keyboardShortcuts = localStorage.getItem('COOL_ACCESSIBILITY_KeyboardShortcuts');
		//console.log("coolaxs_highlight_titles: " + coolaxs_highlight_titles);	
		if (KeyboardShortcutsValue == "true") {
			$('#coolaxs_toggle_keyboard_shortcuts_accessibility_panel').addClass('coolaxs_acivated_button');
		} else {
			$('#coolaxs_toggle_keyboard_shortcuts_accessibility_panel').removeClass('coolaxs_acivated_button');
			// אם מפסיקים את הפעלת קיצורי הדרך אין סיבה להמשיך להציג אותם במסך // if we disable using the keyboard shortcuts we don't need to show them anymore
			localStorage.setItem('COOL_ACCESSIBILITY_ShowKeyboardShortcuts', "false");		coolaxs_ShowKeyboardShortcuts("false");
		}	
	}	
	// יצירה מחדש של מצב הפעלת קיצורי מקלדת
	function coolaxs_reCreateKeyboardShortcutsaccessibilityPanel() { 
		var KeyboardShortcutsValue = localStorage.getItem('COOL_ACCESSIBILITY_KeyboardShortcuts');
		// console.log("KeyboardShortcutsValue: " + KeyboardShortcutsValue);	
		if (KeyboardShortcutsValue != null)// if the localStorage item is defined
			coolaxs_KeyboardShortcuts(KeyboardShortcutsValue);
	}
	
	function coolaxs_toggleKeyboardShortcutsaccessibilityPanel() { 
		var KeyboardShortcutsValue = localStorage.getItem('COOL_ACCESSIBILITY_KeyboardShortcuts');	
		if (KeyboardShortcutsValue === null)// if the localStorage item is not defined we create it
			KeyboardShortcutsValue = "false";
			
		//	console.log("KeyboardShortcutsValue: " + KeyboardShortcutsValue);	
		// flip value
		if (KeyboardShortcutsValue == "false") {
			KeyboardShortcutsValue = "true";
		} else {
			KeyboardShortcutsValue = "false";	
		}			
		
		// console.log("KeyboardShortcutsValue: " + KeyboardShortcutsValue);	
		localStorage.setItem('COOL_ACCESSIBILITY_KeyboardShortcuts', KeyboardShortcutsValue);	
		
		coolaxs_KeyboardShortcuts(KeyboardShortcutsValue);
	}// function coolaxs_toggleHighlightTitles()	
	

	$('#coolaxs_toggle_keyboard_shortcuts_accessibility_panel').on("click keypress", function(event){
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;
			// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleKeyboardShortcutsaccessibilityPanel();
		event.preventDefault();// אחרת יש גלילה של המסך		
	});// $('#coolaxs_highlight_titles').on("click keypress", function(event){

	// -------------------------------------- TOGGLE accessibility keyboard shortcuts - end ----------------	 הפעלת קיצורי דרך במקלדת לנגישות - סוף -------------------------------------------------	
		

		
		

// -------------------------------------- SHOW accessibility keyboard shortcuts - start ----------------	 תצוגת קיצורי דרך במקלדת לנגישות - התחלה -------------------------------------------------	


	

	// it is called from 2 places: from coolaxs_reCreateKeyboardShortcutsaccessibilityPanel() & from $('#coolaxs_toggle_keyboard_shortcuts_accessibility_panel').on("click keypress", function(event)
	function coolaxs_ShowKeyboardShortcuts(ShowKeyboardShortcutsValue) {
		if (ShowKeyboardShortcutsValue === null)
			return;
		//alert("coolaxs_KeyboardShortcuts value: "+value);
		
		// update button background		
		var ShowKeyboardShortcutsValue = localStorage.getItem('COOL_ACCESSIBILITY_ShowKeyboardShortcuts');
		//console.log("coolaxs_highlight_titles: " + coolaxs_highlight_titles);	
		if (ShowKeyboardShortcutsValue == "true") {
			$('.coolaxs_buttons span').show();
			$('#coolaxs_show_keyboard_shortcuts_accessibility_panel').addClass('coolaxs_acivated_button');
			$('.coolaxs_buttons_group').addClass('coolaxs_show_keyboard_shortcuts');		
			// if we show the shortcuts they should be active
			localStorage.setItem('COOL_ACCESSIBILITY_KeyboardShortcuts', "true");		coolaxs_KeyboardShortcuts("true");			
		} else {
			$('.coolaxs_buttons span').hide();			
			$('#coolaxs_show_keyboard_shortcuts_accessibility_panel').removeClass('coolaxs_acivated_button');		
			$('.coolaxs_buttons_group').removeClass('coolaxs_show_keyboard_shortcuts');				
		}	
	}	
	// יצירה מחדש של מצב הפעלת קיצורי מקלדת
	function coolaxs_reCreateKeyboardShortcutsaccessibilityPanel() { 
		var ShowKeyboardShortcutsValue = localStorage.getItem('COOL_ACCESSIBILITY_ShowKeyboardShortcuts');
		// console.log("ShowKeyboardShortcutsValue: " + ShowKeyboardShortcutsValue);	
		if (ShowKeyboardShortcutsValue != null)// if the localStorage item is defined
			coolaxs_ShowKeyboardShortcuts(ShowKeyboardShortcutsValue);
	}
	
	function coolaxs_toggleShowKeyboardShortcutsaccessibilityPanel() { 
		var ShowKeyboardShortcutsValue = localStorage.getItem('COOL_ACCESSIBILITY_ShowKeyboardShortcuts');	
		if (ShowKeyboardShortcutsValue === null) {// if the localStorage item is not defined we create it
			ShowKeyboardShortcutsValue = "false";

			// if it is the first time that this show coolaxs_KeyboardShortcuts is used then enable also the coolaxs_KeyboardShortcuts themselves
			var KeyboardShortcutsValue = localStorage.getItem('COOL_ACCESSIBILITY_KeyboardShortcuts');	
			if (KeyboardShortcutsValue === null)// if the localStorage item is not defined we create it
				coolaxs_toggleKeyboardShortcutsaccessibilityPanel();

		}// if (ShowKeyboardShortcutsValue === null)
			
		// console.log("ShowKeyboardShortcutsValue: " + ShowKeyboardShortcutsValue);	
		// flip value
		if (ShowKeyboardShortcutsValue == "false") {
			ShowKeyboardShortcutsValue = "true";
		} else {
			ShowKeyboardShortcutsValue = "false";	
		}			
		
		// console.log("ShowKeyboardShortcutsValue: " + ShowKeyboardShortcutsValue);	
		localStorage.setItem('COOL_ACCESSIBILITY_ShowKeyboardShortcuts', ShowKeyboardShortcutsValue);	
		
		coolaxs_ShowKeyboardShortcuts(ShowKeyboardShortcutsValue);
	}// function coolaxs_toggleHighlightTitles()	

	$('#coolaxs_show_keyboard_shortcuts_accessibility_panel').on("click keypress", function(event){
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		coolaxs_toggleShowKeyboardShortcutsaccessibilityPanel(); 
		event.preventDefault();
	});// $('.coolaxs_show_keyboard_shortcuts_accessibility_panel').on("click keypress", function(event){		
	

	// -------------------------------------- SHOW accessibility keyboard shortcuts - end ----------------	 תצוגת קיצורי דרך במקלדת לנגישות - סוף -------------------------------------------------	
		










		
	
	// -------------------------------------- opened accessibility panel - start ----------------	 פתיחת תפריט הנגישות - התחלה -------------------------------------------------	

	function coolaxs_toggleaccessibilityPanel(duration = 600) {
		if ($html.hasClass('coolaxs_mobile')) 
			coolaxs_mobileToggleaccessibilityPanel(duration);
		else 
			coolaxs_desktopToggleaccessibilityPanel(duration);
		
		// החלפת אייקון			
		var opened_accessibility_panel = localStorage.getItem('COOL_ACCESSIBILITY_opened_accessibility_panel');	
		//console.log("opened_accessibility_panel: " + opened_accessibility_panel);	
		
		var val	= '.coolaxs_toggle_accessibility_panel img';
		var current_source_image_url = $(val).attr("src");
		
		if (opened_accessibility_panel == "true") {
			var n = current_source_image_url.indexOf("opened");
			if (n == -1) 	$(val).attr("src", $(val).attr("src").replace("closed","opened"));// החלפת אייקון 				
		} 
		else {
			var n = current_source_image_url.indexOf("closed");
			if (n == -1) 	$(val).attr("src", $(val).attr("src").replace("opened","closed"));// החלפת אייקון 	
		}

			
	}// coolaxs_toggleaccessibilityPanel(duration = 600) {
	
	// for coolaxs_mobile
	function coolaxs_mobileToggleaccessibilityPanel(duration = 600) {
		// Set the effect type
		var effect = 'slide';
		// Set the options for the effect type chosen
		//var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
		coolaxs_accessibility_panel.show();	

		// IMPORTANT  ! : this is the direction of the coolaxs_mobile menu - not the sub menu - when clicking the coolaxs_toggle_accessibility_panel icon
		// חשוב ! - כיוון הפתיחה של התפריט - לא של תת התפריט - בזמן לחיצה על אייקון תפריט הנגישות בצד ימין למטה
		var slide_direction1;
		if ($('body').hasClass('COOL_ACCESSIBILITY_bottom_accessibility_panel'))
			slide_direction1 = "down";
		else /* if ($('body').hasClass('COOL_ACCESSIBILITY_top_accessibility_panel')) */
			slide_direction1 = "up";			
				
		var slide_direction2 = "right";
		var slide_direction3 = "left";		
		var options1 = { direction: slide_direction1 };		
		var options2 = { direction: slide_direction2 };		
		var options3 = { direction: slide_direction3 };
		// Set the duration (default: 400 milliseconds)

	 	var coolaxs_mobile_accessibility_panel1 = $('.coolaxs_top_or_bottom_mobile_pannel');		
		var coolaxs_mobile_accessibility_panel2 = $('.coolaxs_right_mobile_pannel');			
		var coolaxs_mobile_accessibility_panel3 = $('.coolaxs_left_mobile_pannel');
		coolaxs_mobile_accessibility_panel1.toggle(effect,options1, duration);
		coolaxs_mobile_accessibility_panel2.toggle(effect, options2, duration);	
		coolaxs_mobile_accessibility_panel3.toggle(effect, options3, duration); 
		
		
	}// coolaxs_mobileToggleaccessibilityPanel(duration = 600) {
	
 	function coolaxs_desktopToggleaccessibilityPanel(duration = 600) {
		// Set the effect type
		var effect = 'slide';
		// Set the options for the effect type chosen
		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
		var options = { direction: slide_direction };
		// Set the duration (default: 400 milliseconds)
		coolaxs_accessibility_panel.toggle(effect, options, duration);			
	}// coolaxs_desktopToggleaccessibilityPanel(duration = 600) {

	
	// החלפת תמונה בזמן פוקוס
/*     $('.coolaxs_toggle_accessibility_panel img').on('mouseenter focus', function() {
		//console.log('.coolaxs_toggle_accessibility_panel img focus/hover');
		 this.src = '/icons/accessibility_panel_icons/accessibility_toggle_opened.png';
	}).on('mouseleave blur', function() {
		this.src = '/icons/accessibility_panel_icons/accessibility_toggle.png';
	}); */	
	
	function coolaxs_toggleOpenedaccessibilityPanelState() {
			var opened_accessibility_panel = localStorage.getItem('COOL_ACCESSIBILITY_opened_accessibility_panel');	
			if (opened_accessibility_panel === null)	opened_accessibility_panel = "false";// if the localStorage item is not defined we create it
			//console.log("opened_accessibility_panel: " + opened_accessibility_panel);	
			// flip value
			if (opened_accessibility_panel == "false")
				opened_accessibility_panel = "true";
			else
				opened_accessibility_panel = "false";
			//console.log("opened_accessibility_panel: " + opened_accessibility_panel);
			localStorage.setItem('COOL_ACCESSIBILITY_opened_accessibility_panel', opened_accessibility_panel);			
			
			coolaxs_toggleaccessibilityPanel();
	}
	// כפתור הצגת תפריט נגישות - פאנל נגישות
	// https://jsfiddle.net/SkiWether/KFmLv/		
	$('.coolaxs_toggle_accessibility_panel').on("click keypress", function(event){
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		coolaxs_toggleOpenedaccessibilityPanelState();
		event.preventDefault();
	});// $('.coolaxs_toggle_accessibility_panel').on("click keypress", function(event){
	// יצירה מחדש של פתיחת תפריט הנגישות 
	function coolaxs_reCreateOpenedaccessibilityPanel() { 
		var opened_accessibility_panel = localStorage.getItem('COOL_ACCESSIBILITY_opened_accessibility_panel');	
		if (opened_accessibility_panel == "true")
			 coolaxs_toggleaccessibilityPanel();// open it because on page load it is hidden by default
	}// function coolaxs_reCreateOpenedaccessibilityPanel()		
	
	

	
	
	
	
	function coolaxs_resetaccessibilityPanelAnchorSidecClasses() {
		$('body').removeClass('COOL_ACCESSIBILITY_right_accessibility_panel');	
		$('body').removeClass('COOL_ACCESSIBILITY_left_accessibility_panel');			
		$('body').removeClass('COOL_ACCESSIBILITY_bottom_accessibility_panel');
		$('body').removeClass('COOL_ACCESSIBILITY_top_accessibility_panel');		
		
	}// coolaxs_resetaccessibilityPanelAnchorSidecClasses()
	
	function coolaxs_reCreateaccessibilityPanelAnchorSide() {
		// רק אם מישהו השתמש בתפריט הנגישות 
 		if ( localStorage.getItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide')) {
			var anchorSide = localStorage.getItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide');

			switch(anchorSide) {
				case "right": coolaxs_createRightaccessibilityPanelAnchor();					break;
				case "left": coolaxs_createLeftaccessibilityPanelAnchor();						break;
				case "bottom": coolaxs_createBottomaccessibilityPanelAnchor();				break;	
				case "top": coolaxs_createTopaccessibilityPanelAnchor();						break;					
				default:
			} 
		
		} else {
			// init at bottom
			coolaxs_createBottomaccessibilityPanelAnchor();	
		}
	}// function coolaxs_reCreateaccessibilityPanelAnchorSide()
	
	function coolaxs_createRightaccessibilityPanelAnchor() {
		localStorage.setItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide', "right");
		coolaxs_resetaccessibilityPanelAnchorSidecClasses();		
		$('body').addClass('COOL_ACCESSIBILITY_right_accessibility_panel');
		window.coolaxs_slide_accessibility_menu_direction = "right";		
	}	
	function coolaxs_createLeftaccessibilityPanelAnchor() {
		localStorage.setItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide', "left");
		coolaxs_resetaccessibilityPanelAnchorSidecClasses();		
		$('body').addClass('COOL_ACCESSIBILITY_left_accessibility_panel');
		window.coolaxs_slide_accessibility_menu_direction = "left";		
	}	
	function coolaxs_createBottomaccessibilityPanelAnchor() {
		localStorage.setItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide', "bottom");	
		coolaxs_resetaccessibilityPanelAnchorSidecClasses();			
		$('body').addClass('COOL_ACCESSIBILITY_bottom_accessibility_panel');
		window.coolaxs_slide_accessibility_menu_direction = "down";	
	}		
	function coolaxs_createTopaccessibilityPanelAnchor() {
		localStorage.setItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide', "top");	
		coolaxs_resetaccessibilityPanelAnchorSidecClasses();			
		$('body').addClass('COOL_ACCESSIBILITY_top_accessibility_panel');
		window.coolaxs_slide_accessibility_menu_direction = "up";	
	}		
	
	// צד עגינה של תפריט הנגישות	
    $('#coolaxs_right_accessibility_panel').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		// var toggle = false;
		// if ( localStorage.getItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide') != "right")
			// toggle = true;

		// if (toggle) coolaxs_toggleaccessibilityPanel(300);// סגור את פאנל הנגישות לפני שתפתח אותו במקום אחר במסך
		// setTimeout(function(){
			coolaxs_createRightaccessibilityPanelAnchor();// ימין
			// if (toggle) coolaxs_toggleaccessibilityPanel();// פתח את פאנל הנגישות 		
		// }, 600);

		
		event.preventDefault();// אחרת יש גלילה של המסך		
	});
    $('#coolaxs_left_accessibility_panel').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		// var toggle = false;
		// if ( localStorage.getItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide') != "left")
			// toggle = true;

		// if (toggle) coolaxs_toggleaccessibilityPanel(300);// סגור את פאנל הנגישות לפני שתפתח אותו במקום אחר במסך
		// setTimeout(function(){
			coolaxs_createLeftaccessibilityPanelAnchor();// שמאל
			// if (toggle) coolaxs_toggleaccessibilityPanel();// פתח את פאנל הנגישות 		
		// }, 600);
		
		event.preventDefault();// אחרת יש גלילה של המסך		
	});	
    $('#coolaxs_bottom_accessibility_panel').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		// var toggle = false;
		// if ( localStorage.getItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide') != "bottom")
			// toggle = true;

		// if (toggle) coolaxs_toggleaccessibilityPanel(300);// סגור את פאנל הנגישות לפני שתפתח אותו במקום אחר במסך
		// setTimeout(function(){
			coolaxs_createBottomaccessibilityPanelAnchor();// תחתון
			// if (toggle) coolaxs_toggleaccessibilityPanel();// פתח את פאנל הנגישות 	
		// }, 600);

		event.preventDefault();// אחרת יש גלילה של המסך		
	});
    $('#coolaxs_top_accessibility_panel').on("click keypress", function(event) {	
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		// var toggle = false;
		// if ( localStorage.getItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide') != "bottom")
			// toggle = true;

		// if (toggle) coolaxs_toggleaccessibilityPanel(300);// סגור את פאנל הנגישות לפני שתפתח אותו במקום אחר במסך
		// setTimeout(function(){
			coolaxs_createTopaccessibilityPanelAnchor();// תחתון
			// if (toggle) coolaxs_toggleaccessibilityPanel();// פתח את פאנל הנגישות 	
		// }, 600);

		event.preventDefault();// אחרת יש גלילה של המסך		
	});
	
	
	
	
	
	
	
	
	// -------------------------------------- opened accessibility panel - end ----------------	 פתיחת תפריט הנגישות - סוף -------------------------------------------------	
	
		

	function coolaxs_toggleFontSizeGroup() { 
		// Set the effect type
		var effect = 'slide';
		// Set the options for the effect type chosen
		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
		var options = { direction: slide_direction };
		// Set the duration (default: 400 milliseconds)
		var duration = 600;
		coolaxs_button_group_font_size.toggle(effect, options, duration);		
	}// function coolaxs_toggleFontSizeGroup()
	
	// כפתור הצגת שינוי גודל טקסט - פאנל נגישות
	$('#coolaxs_font_size_group').on("click keypress", function(event){
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		coolaxs_toggleFontSizeGroup();
		event.preventDefault();// אחרת יש גלילה של המסך		
	});// $('.coolaxs_toggle_accessibility_panel').on("click keypress", function(event){	
	
	function coolaxs_toggleLetterSpacingGroup() { 
		// Set the effect type
		var effect = 'slide';
		// Set the options for the effect type chosen
		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
		var options = { direction: slide_direction };
		// Set the duration (default: 400 milliseconds)
		var duration = 600;
		coolaxs_button_group_letter_spacing.toggle(effect, options, duration);		
	}// function coolaxs_toggleLetterSpacingGroup()	
	
	// כפתור הצגת שינוי מרחק בין אותיות - פאנל נגישות
	$('#coolaxs_letter_spacing_group').on("click keypress", function(event){
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}  
		coolaxs_toggleLetterSpacingGroup();
		event.preventDefault();// אחרת יש גלילה של המסך
	});// $('.coolaxs_toggle_accessibility_panel').on("click keypress", function(event){		

	function coolaxs_toggleWordSpacingGroup() { 
		// Set the effect type
		var effect = 'slide';
		// Set the options for the effect type chosen
		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
		var options = { direction: slide_direction };
		// Set the duration (default: 400 milliseconds)
		var duration = 600;
		coolaxs_button_group_word_spacing.toggle(effect, options, duration);
	}// function coolaxs_toggleWordSpacingGroup()		
	
	// כפתור הצגת שינוי מרחק בין מילים - פאנל נגישות
	$('#coolaxs_word_spacing_group').on("click keypress", function(event){
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}  
		coolaxs_toggleWordSpacingGroup();
		event.preventDefault();// אחרת יש גלילה של המסך		
	});// $('.coolaxs_toggle_accessibility_panel').on("click keypress", function(event){		
	
	function coolaxs_toggleLineHeightGroup() { 
		// Set the effect type
		var effect = 'slide';
		// Set the options for the effect type chosen
		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
		var options = { direction: slide_direction };
		// Set the duration (default: 400 milliseconds)
		var duration = 600;
		coolaxs_button_group_line_height.toggle(effect, options, duration);	
	}// function coolaxs_toggleLineHeightGroup()
	
	// כפתור הצגת שינוי גובה שורה - פאנל נגישות	
	$('#coolaxs_line_height_group').on("click keypress", function(event){
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}  
		coolaxs_toggleLineHeightGroup();
		event.preventDefault();// אחרת יש גלילה של המסך	
	});// $('.coolaxs_toggle_accessibility_panel').on("click keypress", function(event){	
	
	// כפתור הצגת הגדרות פאנל נגישות	
	function coolaxs_toggleaccessibilitySettingsGroup() { 
		// Set the effect type
		var effect = 'slide';
		// Set the options for the effect type chosen
		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
		var options = { direction: slide_direction };
		// Set the duration (default: 400 milliseconds)
		var duration = 600;
		coolaxs_button_group_accessibility_settings.toggle(effect, options, duration);
	}// function coolaxs_toggleaccessibilitySettingsGroup()
	
	$('#coolaxs_accessibility_settings_group').on("click keypress", function(event){
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}  
		coolaxs_toggleaccessibilitySettingsGroup();
		event.preventDefault();// אחרת יש גלילה של המסך			
	});// $('.coolaxs_toggle_accessibility_panel').on("click keypress", function(event){	
	
		
	
	
	
	
	
});



function coolaxs_hasBkgcolor(val) { 
	var color = $(val).css('background-color');
	return color != 'transparent' && color != 'rgba(0, 0, 0, 0)';
}
		
function coolaxs_getBackgroundImageUrl($element) {
	if (!($element instanceof jQuery)) {
	  $element = $($element);
	}

	var imageUrl = $element.css('background-image');
	
	if (imageUrl)
		return imageUrl.replace(/(url\(|\)|'|")/gi, ''); // Strip everything but the url itself
	else
		return "";
}



// var exists = urlExists(url);
// https://stackoverflow.com/questions/18837735/check-if-image-exists-on-server-using-javascript
function coolaxs_imageExists(src){

	var debug = true; // true // false
	
// this XMLHttpRequest() gives a console error in both goggle chrome and firefox:
// 			Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user’s experience.
//  			For more help http://xhr.spec.whatwg.org/
	var http = new XMLHttpRequest();
    http.open('HEAD', src, false);
    http.send();
    return http.status != 404;


	
	// the following doesn't work because by the time it gets the error or load it already gets to the statement after that
	//https://jsfiddle.net/jakecigar/5Lvob161/
/* 	 $("<img>").attr('src', src)
		.on("error", function(e) {
			if (debug) console.log(e.type,this.src);
			return false;
		})
		.on("load", function(e) {
			if (debug) console.log(e.type,this.src +" loaded");
			return true;
		})

	if (debug) console.log("--------------> no result by coolaxs_imageExists(" + src + ") "); 
	return false;
*/	
}


// החלפה בין תמונת רקע כהה ובהירה רק במידה וקיימות הסיומות הבאות בשמות התמונות
// this changes the image src or background image only if there are these suffixes at the end of the image name (apart from the image type like .jpg or .png)
// str_origin: "_normal_to_dark"		// str_target: "_dark_contrast"
// or 
// str_origin: "_normal_to_bright"		// str_target: "_bright_contrast"
// or 
// str_origin: "_normal_to_both"		// str_target: "_bright_contrast" or str_target: "_dark_contrast" in case we have created 2 images one for dark contrast and one for bright contrast
// or the other way around

// these values ["_normal_to_bright", "_normal_to_dark", "_normal_to_both"]
// are used only inside this function 
// the function gets as an input like this:
 // coolaxs_toggleImageOrBackgroundImageBrightOrDark(/* str_origin */"_normal_contrast",/* str_target */"_bright_contrast")
 // or 
 // coolaxs_toggleImageOrBackgroundImageBrightOrDark(/* str_origin */"_normal_contrast",/* str_target */"_dark_contrast")
 // or 
  // coolaxs_toggleImageOrBackgroundImageBrightOrDark(/* str_origin */"_bright_contrast",/* str_target */"_normal_contrast")
 // or 
 // coolaxs_toggleImageOrBackgroundImageBrightOrDark(/* str_origin */"_dark_contrast",/* str_target */"_normal_contrast")
 
 // examples:
 // 1.
 // http://ganim.tali.org.il/images/interest_you_also_normal_to_dark.png => http://ganim.tali.org.il/images/interest_you_also_dark_contrast.png
// 2.
 // http://ganim.tali.org.il/images/frontpage_adress_normal_to_both.png => 
 // 									http://ganim.tali.org.il/images/frontpage_adress_bright_contrast.png
 // or 
 // 									http://ganim.tali.org.il/images/frontpage_adress_dark_contrast.png
 function coolaxs_toggleImageOrBackgroundImageBrightOrDark(str_origin,str_target) {

	//	check all <div> background images
	$( 'div' ).each(function(i, val){
		coolaxs_toggleBrightOrDark(i, val,str_origin,str_target,true/* is_background_image */);
	});

	//	check all <img> src
	$( 'img' ).each(function(i, val){
		coolaxs_toggleBrightOrDark(i, val,str_origin,str_target,false/* is_background_image */);
	});
}// coolaxs_toggleImageOrBackgroundImageBrightOrDark(str_origin,str_target)


// this function is a sub function of coolaxs_toggleImageOrBackgroundImageBrightOrDark()
// i and val are the values of the each function $( 'div' ).each(function(i, val) or $( 'img' ).each(function(i, val)
// is_background_image = true or false (false if it is an <img> tag)
 function coolaxs_toggleBrightOrDark(i, val,str_origin,str_target,is_background_image) {

	var debug = false; // false // true

	var strUrl;

	if (is_background_image)
		strUrl = coolaxs_getBackgroundImageUrl(val);
	else
		strUrl = $(val).attr('src');

	if ((strUrl != "none") && (strUrl != "") && (strUrl.length > 0)) {
		if(debug) console.log( i + ") str_origin: "  + str_origin + " ,str_target: "  + str_target + " , url: " +strUrl);				
		// $(val).attr('data-contrastType', String(currentSize));
		// var contrastType = parseFloat($(val).attr('data-contrastType'));			
			
		// var coolaxs_str_normal_image = "_normal_contrast";
		// var str_bright_image = "_bright_contrast";
		// var str_dark_image = "_dark_contrast";

		var coolaxs_str_normal_image = ["_normal_to_bright", "_normal_to_dark", "_normal_to_both"];
		var k;
		var str_normal_image_type;

		if (str_origin == "_normal_contrast") {
			
			for(k=0;k<3;k++) {
				str_normal_image_type = coolaxs_str_normal_image[k];
				var n = strUrl.indexOf(str_normal_image_type);
			
				if (n > -1) {
					
					// this is the filter for images that do not exist instead of searching for them in the server
					if (
						((str_normal_image_type == "_normal_to_bright") && (str_target == "_dark_contrast")) ||
						((str_normal_image_type == "_normal_to_dark") && (str_target == "_bright_contrast"))
						)
						continue;
					
					if(debug) console.log("A before: " +strUrl);					
					
					var image_name_without_extension = strUrl.substr(0,n);
					var extension = strUrl.substr(n + str_normal_image_type.length);// like "png" or "jpg"							
					var newUrl = image_name_without_extension + str_target + extension;

					if(debug) console.log("A after: " +newUrl);	
					// var exists = coolaxs_imageExists(newUrl);
					// if (exists) {
						// if(debug) console.log("image Exists: " +newUrl);
						// var new_background = 'url('+ newUrl +')';
						// $(val).css('background-image',new_background);						
					// } else {
						// if(debug) console.log("image does NOT Exists: " +newUrl);
					// }// else of	if (exists)
					
					if (is_background_image) {
						var new_background = 'url('+ newUrl +')';
						$(val).css('background-image',new_background);							
					} else
						$(val).attr('src', newUrl);	
					
					$(val).attr('data-contrast_type', str_normal_image_type);
				}// if (n > -1)
			}// for(i=0;i<3;i++)
		} 
		else if (str_target == "_normal_contrast") {
					
			var str_target_image_type = $(val).attr('data-contrast_type');
			$(val).attr('data-contrast_type', null);// reset
			// .data('contrastType',null);

			// var coolaxs_str_normal_image = "_normal_contrast";
			// var str_bright_image = "_bright_contrast";
			// var str_dark_image = "_dark_contrast";

			var str_contrast_image = ["_bright_contrast", "_dark_contrast"];
			
			var u;
			for(u=0;u<2;u++) {
				str_contrast_image_type = str_contrast_image[u];				
			
				var n = strUrl.indexOf(str_contrast_image_type);
				
				if (n > -1) {
					if(debug) console.log( i + ") in str_target == '_normal_contrast' -------------" + strUrl + " ---------- str_target_image_type:" + str_target_image_type);
					
					if(debug) console.log("B before: " +strUrl);					
					
					var image_name_without_extension = strUrl.substr(0,n);
					var extension = strUrl.substr(n + str_contrast_image_type.length);// like "png" or "jpg"							
					var newUrl = image_name_without_extension + str_target_image_type + extension;

					if(debug) console.log("B after: " +newUrl);	
					// var exists = coolaxs_imageExists(newUrl);
					// if (exists) {
						// if(debug) console.log("image Exists: " +newUrl);
						// var new_background = 'url('+ newUrl +')';
						// $(val).css('background-image',new_background);						
					// } else {
						// if(debug) console.log("image does NOT Exists: " +newUrl);
					// }
					
					if (is_background_image) {
						var new_background = 'url('+ newUrl +')';
						$(val).css('background-image',new_background);							
					} else
						$(val).attr('src', newUrl);							
					
				}// if (n > -1)
			}// for(u=0;u<2;u++)
		} else {
			if(debug) console.log("not origin or target");		
		}		

	}// if (strUrl != "") 
		
 }//  function coolaxs_toggleBrightOrDark(str_origin,str_target)









/* function coolaxs_toggleImageOrBackgroundImageBrightOrDark(str_origin,str_target) {
	var debug = false; // false // true
	
	$( 'div' ).each(function(i, val){ 
	
		var strUrl = coolaxs_getBackgroundImageUrl(this);
		if (strUrl != "") {
			
		// $(val).attr('data-contrastImageType', String(currentSize));
		// var contrastImageType = parseFloat($(val).attr('data-contrastImageType'));			
			
		// var coolaxs_str_normal_image = "_normal_contrast";
		// var str_bright_image = "_bright_contrast";
		// var str_dark_image = "_dark_contrast";
		
		// var coolaxs_str_normal_image = "_normal_to_bright";
		// var coolaxs_str_normal_image = "_normal_to_dark";		
		// var coolaxs_str_normal_image = "_normal_to_both";//to both bright & dark - this means that we have 3 pictures

			var n = strUrl.indexOf(str_origin);
			
			if (n > -1) {
				if(debug) console.log("before: " +strUrl);					
				
				var image_name_without_extension = strUrl.substr(0,n);
				var extension = strUrl.substr(n + str_origin.length);// like "png" or "jpg"							
				var newUrl = image_name_without_extension + str_target + extension;

				if(debug) console.log("after: " +newUrl);	
				var exists = coolaxs_imageExists(newUrl);
				if (exists) {
					if(debug) console.log("image Exists: " +newUrl);
					var new_background = 'url('+ newUrl +')';
					$(val).css('background-image',new_background);						
				} else {
					if(debug) console.log("image does NOT Exists: " +newUrl);
				}

			}// if (n > -1)
		}// if (strUrl != "")
	});// $( 'div' ).each(function(i, val)
}// coolaxs_toggleImageOrBackgroundImageBrightOrDark(str_origin,str_target)


 */










// important : in style.css add html, body { background: white;} for the backgound to also reverse if no background was declared
//could be deleted
// https://stackoverflow.com/questions/4766201/javascript-invert-color-on-all-elements-of-a-page
/* function coolaxs_invert_colors() { 
   var css = 'html:not(img) {-webkit-filter: invert(100%); -moz-filter: invert(100%); -o-filter: invert(100%); -ms-filter: invert(100%); }';
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    if (!window.counter) { 
        window.counter = 1;
    } else { 
        window.counter++;
        if (window.counter % 2 == 0) { 
            var css = 'html:not(img) {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }'
        } 
    }
    style.type = 'text/css';
    if (style.styleSheet) {
		console.log(style.styleSheet.cssText);
        style.styleSheet.cssText = css;
    } else {
		
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style); 
}
	 */

	
	
	
	
	
		
	
	
	
	
	
	
	
	
})( jQuery );