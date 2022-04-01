
// Define a convenience method and use it
var coolaxs_ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

coolaxs_ready(() => { 
	/* Do things after DOM has fully loaded */ 
     htmlElement = document.documentElement;
		
	// change the coolaxs_mobile screen between portrait & landscape modes or change the buttons in mobile top & bottom
    function coolaxs_resize() {

		var coolaxs_isMobile = false; //initiate as false
		
		// device detection
		if(/(android|bb\d+|meego).+coolaxs_mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) coolaxs_isMobile = true;

		//console.log("window.innerWidth: "+ window.innerWidth);
		//if (coolaxs_isMobile) console.log("coolaxs_isMobile");

		// FOR MOBILE TOP PORTRAIT - SOME BUTTONS Z-INDEX ARE CHANGED LATER IN THIS FUNCTION
		// -------------------------------------------------------------------------------------------------------------------------
		// the following css z-index is carefully planned so the flyouts will not be above the icons especially in mobile portrait mode (fltouy z-index is the default 1 as everting else)
											document.querySelector("#coolaxs_button_group_font_size").style.zIndex = 1;		
		document.querySelector("#coolaxs_font_size_group").style.zIndex = 2;
										document.querySelector("#coolaxs_button_group_line_height").style.zIndex = 3;
		document.querySelector("#coolaxs_line_height_group").style.zIndex = 4;
										document.querySelector("#coolaxs_button_group_letter_spacing").style.zIndex = 5;
		document.querySelector("#coolaxs_letter_spacing_group").style.zIndex = 6;
										document.querySelector("#coolaxs_button_group_word_spacing").style.zIndex = 7;	
		document.querySelector("#coolaxs_word_spacing_group").style.zIndex = 8;				
		document.querySelector("#coolaxs_readable_font").style.zIndex = 10;									
		document.querySelector("#coolaxs_text_zoom").style.zIndex = 12;		
										document.querySelector("#coolaxs_accessibility_settings_group").style.zIndex = 13;	
										document.querySelector("#coolaxs_button_group_accessibility_settings").style.zIndex = 1;	



        if ((coolaxs_isMobile) || (( ! coolaxs_isMobile) && ((window.innerWidth != 0) && (window.innerWidth < 1024)))) {

			document.querySelector('.coolaxs_mobile_accessibility_panel').style.display = 'flex';

			htmlElement.classList.add("coolaxs_mobile");
			
			if(window.innerHeight > window.innerWidth) {
			
				// MOBILE PORTRAIT MODE ( Height > Width )
				// ==================================	
				htmlElement.classList.remove("coolaxs_mobile_landscape");				

				// MOBILE PORTRAIT top_or_bottom_mobile_pannel		
				var mbp =  document.querySelector('.coolaxs_top_or_bottom_mobile_pannel');
				mbp.appendChild(document.querySelector("#coolaxs_highlight_titles"));
				mbp.appendChild(document.querySelector("#coolaxs_highlight_links"));
				let div0 = document.createElement('div'); div0.classList.add('coolaxs_buttons_group');
				div0.appendChild(document.querySelector("#coolaxs_accessibility_settings_group"));
				div0.appendChild(document.querySelector("#coolaxs_button_group_accessibility_settings"));
				mbp.appendChild(div0);	
				mbp.appendChild(document.querySelector("#coolaxs_reset_all_accessibility"));		
						
				// MOBILE PORTRAIT right_mobile_pannel
				mbp =  document.querySelector('.coolaxs_right_mobile_pannel');
				if (document.body.classList.contains("COOL_ACCESSIBILITY_top_accessibility_panel")) {
				
				//console.log("top_accessibility_panel");
				// we need 2 icons above the first upper fliout to hide the flyout when it starts to move down
					mbp.appendChild(document.querySelector("#coolaxs_text_zoom"));	
					mbp.appendChild(document.querySelector("#coolaxs_readable_font"));						
					coolaxs_append_4_text_flyouts(mbp);		
					
					
					// FOR MOBILE TOP PORTRAIT - SOME BUTTONS Z-INDEX ARE CHANGED in order to hide the flyouts that come from the top to the bottom
					// -------------------------------------------------------------------------------------------------------------------------					
					// the following css z-index is carefully planned so the flyouts will not be above the icons especially in mobile portrait mode (fltouy z-index is the default 1 as everting else)
														document.querySelector("#coolaxs_button_group_font_size").style.zIndex = 7;		
					document.querySelector("#coolaxs_font_size_group").style.zIndex = 8;
													document.querySelector("#coolaxs_button_group_line_height").style.zIndex = 5;
					document.querySelector("#coolaxs_line_height_group").style.zIndex = 6;
													document.querySelector("#coolaxs_button_group_letter_spacing").style.zIndex = 3;
					document.querySelector("#coolaxs_letter_spacing_group").style.zIndex = 4
													document.querySelector("#coolaxs_button_group_word_spacing").style.zIndex = 1;	
					document.querySelector("#coolaxs_word_spacing_group").style.zIndex = 2;				

		
				} else {
					//console.log("NOT top_accessibility_panel");
					coolaxs_append_4_text_flyouts(mbp);
					mbp.appendChild(document.querySelector("#coolaxs_text_zoom"));		
					mbp.appendChild(document.querySelector("#coolaxs_readable_font"));												
				}				

				var key_nav = document.querySelector("#coolaxs_keyboard_navigation");	

				// MOBILE PORTRAIT left_mobile_pannel
				mbp =  document.querySelector('.coolaxs_left_mobile_pannel');
				mbp.appendChild(document.querySelector("#coolaxs_invert_colors"));
				mbp.appendChild(document.querySelector("#coolaxs_bright_contrast"));
				mbp.appendChild(document.querySelector("#coolaxs_dark_contrast"));
				mbp.appendChild(key_nav);
				mbp.appendChild(document.querySelector("#coolaxs_big_white_cursor"));	
				mbp.appendChild(document.querySelector("#coolaxs_big_black_cursor"));
				mbp.appendChild(document.querySelector("#coolaxs_stop_animations"));

			} else {
			
				// MOBILE LANDSCAPE MODE ( Height < Width )
				// ====================================	
				// constructs mobile_landscape menu on the fly (because we can rotate the mobile phone)
				htmlElement.classList.add("coolaxs_mobile_landscape");

				// MOBILE LANDSCAPE top_or_bottom_mobile_pannel	
				var mbp =  document.querySelector(".coolaxs_top_or_bottom_mobile_pannel");	
				let div0 = document.createElement('div'); div0.classList.add('coolaxs_buttons_group');
				div0.appendChild(document.querySelector("#coolaxs_accessibility_settings_group"));
				div0.appendChild(document.querySelector("#coolaxs_button_group_accessibility_settings"));
				mbp.appendChild(div0);	
				mbp.appendChild(document.querySelector("#coolaxs_reset_all_accessibility"));
				coolaxs_append_4_text_flyouts(mbp);
				mbp.appendChild(document.querySelector("#coolaxs_readable_font"));	
				mbp.appendChild(document.querySelector("#coolaxs_text_zoom"));					
														

				// MOBILE LANDSCAPE right_mobile_pannel
				mbp =  document.querySelector(".coolaxs_right_mobile_pannel");

				mbp.appendChild(document.querySelector("#coolaxs_highlight_titles"));
				mbp.appendChild(document.querySelector("#coolaxs_highlight_links"));
				mbp.appendChild(document.querySelector("#coolaxs_big_white_cursor"));
				mbp.appendChild(document.querySelector("#coolaxs_big_black_cursor"));		
					
				var key_nav = document.querySelector("#coolaxs_keyboard_navigation");		
					
				// MOBILE LANDSCAPE left_mobile_pannel
				mbp =  document.querySelector('.coolaxs_left_mobile_pannel');
				mbp.appendChild(document.querySelector("#coolaxs_invert_colors"));
				mbp.appendChild(document.querySelector("#coolaxs_bright_contrast"));
				mbp.appendChild(document.querySelector("#coolaxs_dark_contrast"));
				mbp.appendChild(key_nav);
				mbp.appendChild(document.querySelector("#coolaxs_stop_animations"));				
				
			}// else if(window.innerHeight > window.innerWidth)

			key_nav.style.display = "none";			
			document.querySelector("#coolaxs_right_accessibility_panel").style.display="none";
			document.querySelector("#coolaxs_left_accessibility_panel").style.display="none";	
			document.querySelector("#coolaxs_show_keyboard_shortcuts_accessibility_panel").style.display="none";
			document.querySelector("#coolaxs_toggle_keyboard_shortcuts_accessibility_panel").style.display="none";

			return ;
        } else {
			document.querySelector(".coolaxs_desktop_accessibility_panel").style.display="flex";
		}
		htmlElement.classList.remove("coolaxs_mobile");
    }// function coolaxs_resize()
    
    

	coolaxs_resize();
	
	// used for changing coolaxs_mobile devices from portrait to landscape mode & vice versa
	window.addEventListener('orientationchange', function(event) {
		//window.dispatchEvent(new Event('resize'));
		coolaxs_resize();
	});	


// ========================= ACESSIBLE 






	// נגישות
	// בלחיצה על מקש 'טאב' בתחילת כל דף מופיעה חלונית 'דלג לתוכן העמוד' - זה החלק שמבצע את שינוי הפוקוס
	// check header.php to see the "coolaxs_skip" class
    // https://www.bignerdranch.com/blog/web-accessibility-coolaxs_skip-navigation-links/
 		
        // bind a click event to the 'coolaxs_skip' link
    	document.querySelector(".coolaxs_skip").addEventListener("click", (event) => {
    
            // strip the leading hash and declare
            // the content we're skipping to
            // var skipTo="#"+this.href.split('#')[1];
            var skipTo = document.querySelector('#coolaxs_skip_menu_to_this_id');
			if ( skipTo == null ) { // it tries to find the id : #coolaxs_skip_menu_to_this_id		- if it doesn't find it it tries to find the first header
					skipTo = document.querySelector('h1,h2,h3,h4,h5,h6');
					if ( skipTo == null ) {
						skipTo = document.querySelector('body p');
						if ( skipTo == null ) {
							skipTo = document.querySelector('body :a');
						}
					}
				}
			
            // Setting 'tabindex' to -1 takes an element out of normal 
            // tab flow but allows it to be focused via javascript
			skipTo.setAttribute('tabindex', 0).addEventListener("blur", coolaxs_blur_focusout_handler, false).addEventListener("focusout", coolaxs_blur_focusout_handler,
			 false).focus(); 
				
			return false;// מונע מעבר הלאה
        });// document.querySelector(".coolaxs_skip").addEventListener("click", (event) => {


		function coolaxs_blur_focusout_handler(event) {
                // when focus leaves this element, 
                // remove the tabindex attribute
                event.currentTarget.removeAttribute('tabindex'); // I commented that because I needed the 'tabindex' attribute to stay on the page
		}


	// נגישות	
	// הצגת חלונית שנמצאת תמיד ליד הסמן של העכבר אך תמיד בתוך המסך
	// an empty div <div id="coolaxs_tail"></div> is set on header.php page with its css in style.css
	// when you deactivate this use coolaxs_tail_fadeout();
	function coolaxs_display_floating_div(event, str) {
		/* alert(str);  */
		var debug = false; // false // true
		
		if (debug) console.log("|"+str+"|");	
		
		if (str == "") return;// if no string then don't hide the div box here because it hides some img hovers in the next ('img') mouseover
		
		var coolaxs_tail = document.querySelector('#coolaxs_tail');
		coolaxs_tail.style.display = 'block';
		
		// if we are already displaying text then fadeout to 0.33 opacity in 0.66 seconds , then fade in to the new text 
		var  opacity = window.getComputedStyle(coolaxs_tail).getPropertyValue("opacity");
		//console.log("opacity = " + opacity + coolaxs_tail.textContent);
		var previous_str = coolaxs_tail.textContent;
		if ((opacity == 1) && (str != previous_str)){// if it is already displaying text from previous div => fade out then in
				//console.log("if opacity == " + opacity);
				coolaxs_tail.classList.add("fastfade");
				setTimeout(() => {
				  coolaxs_tail.textContent = str;
				  coolaxs_tail.classList.remove("fastfade");
				}, 660);
		} else
			coolaxs_tail.textContent = str;	
			
		var viewport_width = window.innerWidth;
		var viewport_height = window.innerHeight;
		if (debug) console.log("|viewport_width,viewport_height|" + viewport_width + " " + viewport_height);	

		var half_box_width = coolaxs_tail.offsetWidth / 2;
		var half_box_height =  coolaxs_tail.offsetHeight / 2;

		if (debug) console.log("|half_box_width,half_box_height|" + half_box_width + " " + half_box_height);	
			
		var x = event.clientX;
		var y = event.clientY;				
		if (debug) console.log("mouse cursor: (x,y) :" + x + " " + y);		
		
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
		if (debug) console.log("|"+str+"|" + " positionLeft: " + positionLeft + " positionTop: " + positionTop);

		// ${positionLeft} and ${positionTop} are JavaScript template literals  placeholders  enclosed by backtick (`) characters
		coolaxs_tail.style.cssText = `display: block; position: fixed; left: ${positionLeft}px; top: ${positionTop}px;`;

		coolaxs_tail.classList.remove("fade");
	}// function coolaxs_display_floating_div(event, str)

	function coolaxs_tail_fadeout () {
		var coolaxs_tail = document.querySelector('#coolaxs_tail');
		coolaxs_tail.classList.add("fade");
	}

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
	



	var coolaxs_all_divs = document. getElementsByTagName("div");
	for (let i = 0; i < coolaxs_all_divs.length; i++) {
		var one_div = coolaxs_all_divs[i];
		one_div.addEventListener("mouseover", coolaxs_divMouseOver, false);
		one_div.addEventListener("mouseout", coolaxs_divMouseOut, false);
	/*	
		one_div.addEventListener("touchstart", coolaxs_divTouchStart, false);
		one_div.addEventListener("touchend", coolaxs_divTouchEnd, false);		
		one_div.addEventListener("touchmove", coolaxs_divTouchMove, false);
	*/
	
 	}
 	
/*

 	// from https://stackoverflow.com/questions/37113082/detecting-hover-or-mouseover-on-smartphone-browser
 	// ========================================
 	// only works on gogle chrome developer tools mobile
 	// ========================================


 	window.startX = null;
	window.startY = null;
	window.startElem = null;
	
	function getGlobalVar(bar) {
	  return window[bar];
	}
 	

	function coolaxs_divTouchStart(event) {
	   startElem = event.currentTarget;
        var touch = event.changedTouches[0];
       window.startX = touch.clientX;        
       window.startY = touch.clientY;
       
       	updateInfo("start",window.startX,window.startY);

	}
	function coolaxs_divTouchEnd(event) {
		window.startX = null;
		window.startY = null;
		window.startElem = null;
       
       	updateInfo("end",startX,startY);

	}
	function coolaxs_divTouchMove(event) {
	   startElem = event.currentTarget;
        var touch = event.changedTouches[0];
       
       var clientX = touch.clientX;     
        var clientY = touch.clientY;

        if (startElem && window.startY) {
        
          var totalHorizontalOffset = clientX - getGlobalVar(startX);     
          var totalVerticalOffset = clientY - getGlobalVar(startY);
          
          updateInfo("move to ",clientX,clientY);         
          updateInfo("move offset ",totalHorizontalOffset,totalVerticalOffset);

        }//  if (startElem && startY)
	}
	
	function updateInfo(str,x,y) {
	  //console.log(str + " " + startX + " " + startY);
	}

*/


	function coolaxs_divMouseOver(event) {
			//alert("div"+event.type);
		   	if 	(localStorage.getItem('coolaxs_textZoomWindow') != 'true')
				return;

			if (event.currentTarget.getAttribute('title') == null)
				 return;
			try {
				var title = event.currentTarget.getAttribute('title').trim();	
			}
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
	function coolaxs_divMouseOut() {
	  coolaxs_tail_fadeout();	 
	}


// already difined above //var all_divs = document. getElementsByTagName("div");
for (let i = 0; i < coolaxs_all_divs.length; i++) {
	var one_div = coolaxs_all_divs[i];
	one_div.addEventListener("click", coolaxs_divClickedOrFocused, false);
	one_div.addEventListener("focus", coolaxs_divClickedOrFocused, false);
}
function coolaxs_divClickedOrFocused(event) {

	//alert("div "+event.type);
   	if 	(localStorage.getItem('coolaxs_textZoomWindow') != 'true')
		return;

	if ( ! (event.which === 13) || (event.type === 'click')) {
		 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
	}	

	try {
		var title = event.currentTarget.getAttribute('title').trim();	
	}
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

	// נגישות
	// בעת מעבר הסמן על טקסט 	
	// הצגת חלונית צפה בעת ריחוף הסמן על פיסקת טקסט, כותרת, תווית או קישור
	// zoom text overlay on mouse hover
   	var coolaxs_css_selector_strings = 'h1,h2,h3,h4,h5,h6,span,p,label,a:not(img,noscript),div:not( div h1,div h2,div h3,div h4,div h5,div h6,div p,div label,div a,div div,div span,div img,div noscript)'; 	
 	var coolaxs_selectors_collection = document.querySelectorAll(coolaxs_css_selector_strings);
	for (let i = 0; i < coolaxs_selectors_collection.length; i++) {
		var one_item = coolaxs_selectors_collection[i];
		one_item.addEventListener("mouseover", coolaxs_MouseOverText, false);
		one_item.addEventListener("mouseout", coolaxs_divMouseOut, false);
	}

	function coolaxs_MouseOverText(event) {
   
		var debug = false;// true , false
   
		var current_val =  event.currentTarget;
   	   
		if 	(localStorage.getItem('coolaxs_textZoomWindow') != 'true')
			return;   
		
		var tag_name = current_val.tagName;
		
		if (debug) console.log("|"+tag_name+"|");			
		var str = "", str_total = "";
		
		if (current_val.childNodes.length > 0) {
			if (debug) console.log("current_val.childNodes: " + current_val.childNodes.length);
					
			const nodeList = current_val.childNodes;

			// the following can handle things like the following and output the paragraph with all the words in it 
			/*		
			<p>אתה <mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-red-color">יכול להיות</mark> אמן<strong> שרוצה</strong> להציג את <em>עצמך ואת עבודתך</em> או אולי <a href="http://google.com" data-type="URL" data-id="google.com">אתה</a> עסק <u>שרוצה לתאר</u> את <sup>הפעילות</sup> שלך.</p>
			*/
			tags_array = ["MARK","A","SPAN","STRONG","EM","SUP","SUB","SMALL","I","B","U","CODE","BLOCKQUOTE"];
			for (let i = 0; i < nodeList.length; i++) {
				str = "";
				if (nodeList[i].nodeName == "#text")
					 str = nodeList[i].nodeValue;
				else {
					for (let j = 0; j < tags_array.length; j++)
						if (nodeList[i].nodeName == tags_array[j]) str = nodeList[i].innerHTML;
				}

				str_total = str_total.trim(coolaxs_removeEnterAndTabs(str_total));// this prevents empty text boxes
				
				var last_character = str.slice(-1);
				if (last_character != " ") str_total += " ";
				
				str_total += str;				
				
				if (debug) console.log(str_total);

			} // for (let i = 0; i < nodeList.length; i++)
				

		}// if (current_val.childNodes.length > 0)
			
		if (debug) console.log(str);	

		if ((str != null) && (typeof str !== 'undefined')) {
			str = str.trim(coolaxs_removeEnterAndTabs(str));// this prevents empty text boxes
			if (str.length > 0) {
				coolaxs_display_floating_div(event, str_total);						
			}
		}	
}// function coolaxs_MouseOverText(event) {
  	

 	// נגישות
	// בעת מעבר הסמן על תמונה
	// הצגת הטקסט החילופי לתמונה בעת מעבר הסמן עליה
    var coolaxs_all_images = document. getElementsByTagName("img");
	for (let i = 0; i < coolaxs_all_images.length; i++) {
		var one_img = coolaxs_all_images[i];
		one_img.addEventListener("mouseover", coolaxs_img_and_area_MouseOver, false);
		one_img.addEventListener("mouseout", coolaxs_divMouseOut, false);
	}
   var coolaxs_all_areas = document. getElementsByTagName("area");
	for (let i = 0; i < coolaxs_all_areas.length; i++) {
		var one_area = coolaxs_all_areas[i];
		one_area.addEventListener("mouseover", coolaxs_img_and_area_MouseOver, false);
		one_area.addEventListener("mouseout", coolaxs_divMouseOut, false);
	}
	function coolaxs_img_and_area_MouseOver(event) {
		if 	(localStorage.getItem('coolaxs_textZoomWindow') != 'true')
			return;   

		var attr = event.currentTarget.getAttribute('alt');
		
		// For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
		if (typeof attr !== typeof undefined && attr !== false) {

			var str = event.currentTarget.getAttribute('alt');
			
			if (typeof str !== 'undefined') {
			    // Now we know that foo is defined, we are good to go.
				str = str.trim(coolaxs_removeEnterAndTabs(str));// this has prevented empty text boxes
				if (str.length > 0) {
					coolaxs_display_floating_div(event, str);						
				}			  
			}
		}// if (typeof attr !== typeof undefined && attr !== false) 
			
	}// function coolaxs_img_and_area_MouseOver(event) 

 	

 	
	// איפוס כל הנגישות ורענון הדף
	
	function coolaxs_resetAllaccessibility() {
 		localStorage.clear();// this clear all the local storage items for this site url - if I want only some items I can do localStorage.removeItem('item name');
		location.reload();// reloads the current page	
	}	
	
	var coolaxs_reset_all_accessibility_item = document.querySelector('#coolaxs_reset_all_accessibility');
	coolaxs_reset_all_accessibility_item.addEventListener("click", coolaxs_resetClickedOrKeyPressed, false);
	coolaxs_reset_all_accessibility_item.addEventListener("keypress", coolaxs_resetClickedOrKeyPressed, false);	
	function coolaxs_resetClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_resetAllaccessibility();
		event.preventDefault();// אחרת יש גלילה של המסך	
	}	
	
	// for slide toggle direction of the accessibility sub menus
	window.coolaxs_slide_accessibility_menu_direction = "down";// Init
	
	/////////////////////////////////////// Letter Spacing- START /////////////////////////////////////////////////
	
   	var coolaxs_text_tags_LetterSpacing = 'h1,h2,h3,h4,h5,h6,span,p,label,div:not( div h1,div h2,div h3,div h4,div h5,div h6,div p,div label,div a),:not(a.li)';// I removed 'a' becuase it made a bug in the menu in ganim.tali.org.il website 
	// but if the 'a' is inside a 'p' or an header tag it will work
	
	// offset: >0 increase, <0 decrease LetterSpacing, or we can pass a negative memory accumulated value to revert back to the original value
	function coolaxs_updateLetterSpacingButtonBackground() {
		if (localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset')) {// update button background if there is a change from the default values
			if (localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset') != 0) 
				document.querySelector('#coolaxs_letter_spacing_group').classList.add('coolaxs_acivated_button');	
			else 
				document.querySelector('#coolaxs_letter_spacing_group').classList.remove('coolaxs_acivated_button');	
		}		
	}
	
	function coolaxs_resizeLetterSpacing(offset) {
		var debug = false;// true , false

		var elements = document.querySelectorAll(coolaxs_text_tags_LetterSpacing);
		var elArray = Array.prototype.slice.call(elements);  // Convert node list to array
		// Now, enumerate the array with .forEach()
		elArray.forEach(function(value, index){
				if (debug) console.log(index, value);
				var currentSize = value.style.letterSpacing;// Don't use here cssObj.getPropertyValue("letter-spacing"); from var cssObj = window.getComputedStyle(value, null); window.getComputedStyle(value, null);
				if ( currentSize.indexOf("px") == -1)
				 currentSize = 0;
				if (debug) console.log("=== currentSize:"+ currentSize);	
				currentSize = (parseFloat(currentSize) + offset) + "px";
				value.style.letterSpacing = currentSize;	
				if (debug) console.log("resized Size:"+currentSize);		
		});// elArray.forEach(function(value, index)

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
		if ( ! localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset'))
			 localStorage.setItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset', 0);
		var totalMemOffset = parseFloat(localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset'));
		totalMemOffset +=1;	
		localStorage.setItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset', totalMemOffset);
		coolaxs_resizeLetterSpacing(1);
		coolaxs_updateLetterSpacingButtonBackground();
	}// function coolaxs_increasePageLetterSpacing()
	
	// הגדלת מרווח בין אותיות	

	var coolaxs_increase_letter_spacing_item = document.querySelector('#coolaxs_increase_letter_spacing');
	coolaxs_increase_letter_spacing_item.addEventListener("click", coolaxs_increase_letter_spacingClickedOrKeyPressed, false);
	coolaxs_increase_letter_spacing_item.addEventListener("keypress", coolaxs_increase_letter_spacingClickedOrKeyPressed, false);	
	function coolaxs_increase_letter_spacingClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 /* 'Enter' key pressed */ || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_increasePageLetterSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך		
	}
	
	
	
	function coolaxs_decreasePageLetterSpacing() {
		if ( ! localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset')) localStorage.setItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset', 0);
		var totalMemOffset = parseFloat(localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset'));
		//if (totalMemOffset >=1) {// previously I didn't allow to decrease below the normal word spacing // Now I do allow because some fonts maybe be too spacy with bigget font sizes
			totalMemOffset -=1;	
			localStorage.setItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset', totalMemOffset);
			coolaxs_resizeLetterSpacing(-1);
			coolaxs_updateLetterSpacingButtonBackground();			
		//}// if (COOL_ACCESSIBILITY_LetterSpacingMemOffset >=1)
	}// function coolaxs_decreasePageLetterSpacing()
	
	// הקטנת מרווח בין אותיות

	var coolaxs_decrease_letter_spacing_item = document.querySelector('#coolaxs_decrease_letter_spacing');
	coolaxs_decrease_letter_spacing_item.addEventListener("click", coolaxs_decrease_letter_spacingClickedOrKeyPressed, false);
	coolaxs_decrease_letter_spacing_item.addEventListener("keypress", coolaxs_decrease_letter_spacingClickedOrKeyPressed, false);	
	function coolaxs_decrease_letter_spacingClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_decreasePageLetterSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך			
		//console.log("decrease totalMemOffset: " + localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset'));	
	}

	// Reset Letter Spacing
	function coolaxs_resetPageLetterSpacing() {
 		if ( localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset')) {
			var totalMemOffset = localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset');
			// don't just reset it to 0 because letter-spacing css attribute may already be set for some html tags of the specific website content
			coolaxs_resizeLetterSpacing(-totalMemOffset);// -totalMemOffset : negative memory accumulated value to revert back to the original value
			localStorage.setItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset', 0);//Reset
			coolaxs_updateLetterSpacingButtonBackground();
		} 
	}// function coolaxs_resetPageLetterSpacing()
// איפוס מרווח בין אותיות*

	var coolaxs_reset_letter_spacing_item = document.querySelector('#coolaxs_reset_letter_spacing');
	coolaxs_reset_letter_spacing_item.addEventListener("click", coolaxs_reset_letter_spacingClickedOrKeyPressed, false);
	coolaxs_reset_letter_spacing_item.addEventListener("keypress", coolaxs_reset_letter_spacingClickedOrKeyPressed, false);	
	function coolaxs_reset_letter_spacingClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_resetPageLetterSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך		
		//console.log(" reset totalMemOffset: " + localStorage.getItem('COOL_ACCESSIBILITY_LetterSpacingMemOffset'));	
	}
	
	
	/////////////////////////////////////// Letter Spacing- END /////////////////////////////////////////////////	


	/////////////////////////////////////// Word Spacing- START /////////////////////////////////////////////////
	
   	var coolaxs_text_tags_WordSpacing = 'h1,h2,h3,h4,h5,h6, li, a,div:not( div div, div h1,div h2,div h3,div h4,div h5,div h6,div p,div label,div a)';// span
   	
	// offset: >0 increase, <0 decrease WordSpacing, or we can pass a negative memory accumulated value to revert back to the original value
	function coolaxs_updateWordSpacingButtonBackground() {
		if (localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset')) {// update button background if there is a change from the default values
			if (localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset') != 0)
				document.querySelector('#coolaxs_word_spacing_group').classList.add('coolaxs_acivated_button');	
			else
				document.querySelector('#coolaxs_word_spacing_group').classList.remove('coolaxs_acivated_button');	
		}			
	}		


	function coolaxs_resizeWordSpacing(offset) {
		var debug = false;// true , false

		var elements = document.querySelectorAll(coolaxs_text_tags_WordSpacing);
		var elArray = Array.prototype.slice.call(elements);  // Convert node list to array
		// Now, enumerate the array with .forEach()
		elArray.forEach(function(value, index){
				if (debug) console.log(index, value);
				var cssObj = window.getComputedStyle(value, null);
				var currentSize = cssObj.getPropertyValue("word-spacing");// gets the actual word-spacing even if not set in the html tag
				if (debug) console.log("=== currentSize:"+ currentSize);	
				currentSize = (parseFloat(currentSize) + offset) + "px";
				 value.style.wordSpacing = currentSize;	
				if (debug) console.log("resized Size:"+currentSize);		
		});// elArray.forEach(function(value, index)

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
	var coolaxs_increase_word_spacing_item = document.querySelector('#coolaxs_increase_word_spacing');
	coolaxs_increase_word_spacing_item.addEventListener("click", coolaxs_increase_word_spacing_ClickedOrKeyPressed, false);
	coolaxs_increase_word_spacing_item.addEventListener("keypress", coolaxs_increase_word_spacing_ClickedOrKeyPressed, false);	
	function coolaxs_increase_word_spacing_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_increasePageWordSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך		
	}
	
	
	
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
	var coolaxs_decrease_word_spacing_item = document.querySelector('#coolaxs_decrease_word_spacing');
	coolaxs_decrease_word_spacing_item.addEventListener("click", coolaxs_decrease_word_spacing_ClickedOrKeyPressed, false);
	coolaxs_decrease_word_spacing_item.addEventListener("keypress", coolaxs_decrease_word_spacing_ClickedOrKeyPressed, false);	
	function coolaxs_decrease_word_spacing_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_decreasePageWordSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך			
	}


	function coolaxs_resetPageWordSpacing() {
 		if ( localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset')) {
			var totalMemOffset = localStorage.getItem('COOL_ACCESSIBILITY_WordSpacingMemOffset');
			coolaxs_resizeWordSpacing(-totalMemOffset);// -totalMemOffset : negative memory accumulated value to revert back to the original value
			localStorage.setItem('COOL_ACCESSIBILITY_WordSpacingMemOffset', 0);//Reset
			coolaxs_updateWordSpacingButtonBackground();
		}
	}// function coolaxs_resetPageWordSpacing()

	// איפוס מרווח בין מילים
	var coolaxs_reset_word_spacing_item = document.querySelector('#coolaxs_reset_word_spacing');
	coolaxs_reset_word_spacing_item.addEventListener("click", coolaxs_reset_word_spacing_ClickedOrKeyPressed, false);
	coolaxs_reset_word_spacing_item.addEventListener("keypress", coolaxs_reset_word_spacing_ClickedOrKeyPressed, false);	
	function coolaxs_reset_word_spacing_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_resetPageWordSpacing();
		event.preventDefault();// אחרת יש גלילה של המסך			
	}
	/////////////////////////////////////// Word Spacing- END /////////////////////////////////////////////////
	
	/////////////////////////////////////// Line Height- START /////////////////////////////////////////////////
	
	// this is different from the above method - I tried it here but it didn't work as expected after reloading the page and this method works fine

	var coolaxs_text_tags_LineHeight = 'p,div:not( div h1,div h2,div h3,div h4,div h5,div h6,div p,div label,div a),:not(a.li)';
	
	// multiplier ==0  will reset to initLineHeight data values stored in the html
	// multiplier < 1 will decrease Line Height
	// multiplier > 1 will increase Line Height
	function coolaxs_resizeLineHeight() {
		
		var multiplier = localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier');
		//console.log(" multiplier in coolaxs_resizeLineHeight: " + multiplier);		
		//alert(multiplier);
		if (multiplier) {// update button background if there is a change from the default values
			if (multiplier != 0) 
				document.querySelector('#coolaxs_line_height_group').classList.add('coolaxs_acivated_button');	
			else
				document.querySelector('#coolaxs_line_height_group').classList.remove('coolaxs_acivated_button');	
		}	

		var debug = false;// true , false
		
		var elements = document.querySelectorAll(coolaxs_text_tags_LineHeight);
		var elArray = Array.prototype.slice.call(elements);  // Convert node list to array
		// Now, enumerate the array with .forEach()
		elArray.forEach(function(value, index){

			var cssObj = window.getComputedStyle(value, null);// this get the actual line-height even if not set in the html tag
			var currentSize = cssObj.getPropertyValue("line-height");

			if (debug) console.log(" Before: " + value + " currentLineHeight: " + currentSize);		

			var currentSize = parseFloat(currentSize);	
				
			var initLineHeight = parseFloat(value.getAttribute('data-coolaxs-initLineHeight'));
			if (debug) console.log("initLineHeight " + initLineHeight + ", currentSize :" + currentSize);		
			if (isNaN(initLineHeight)) {	
				initLineHeight = parseFloat(currentSize);						
				value.setAttribute('data-coolaxs-initLineHeight', String(initLineHeight));
			}
			
			currentSize = (parseFloat(initLineHeight) + parseFloat(multiplier)) + "px";
			if (debug) console.log(initLineHeight+ " + " + multiplier + " => currentLineHeight: " + currentSize);					
			value.style.lineHeight = currentSize;
		});// elArray.forEach(function(value, index)

	}// function coolaxs_resizeLineHeight()

	
	// init attr='data-coolaxs-initLineHeight' data attribute on load
	function coolaxs_LineHeightAddDataAttrOnLoad() {
		var debug = false;// true , false
		
		var elements = document.querySelectorAll(coolaxs_text_tags_LineHeight);
		var elArray = Array.prototype.slice.call(elements);  // Convert node list to array
		// Now, enumerate the array with .forEach()
		elArray.forEach(function(value, index){

			var cssObj = window.getComputedStyle(value, null);// this get the actual line-height even if not set in the html tag
			var currentSize = cssObj.getPropertyValue("line-height");	
			if (debug) console.log(" Before: " + value + " currentLineHeight: " + currentSize);		
					
			value.setAttribute('data-coolaxs-initLineHeight', String(currentSize));
		});// elArray.forEach(function(value, index)
	}// coolaxs_LineHeightAddDataAttrOnLoad()
	
	
	
	
	// טעינת מרחק בין שורות
	function coolaxs_reCreatePageLineHeight() {
		// רק אם מישהו השתמש בתפריט הנגישות 
 		if ( localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier')) {
			// 2 passes - because with 1 pass for both adding the attribute and resizing there is a bug when there are nested tags like an <a> inside a <p>
			// init attr='data-coolaxs-initLineHeight' data attribute on load
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

	var coolaxs_increase_line_height_item = document.querySelector('#coolaxs_increase_line_height');
	coolaxs_increase_line_height_item.addEventListener("click", coolaxs_increase_line_height_ClickedOrKeyPressed, false);
	coolaxs_increase_line_height_item.addEventListener("keypress", coolaxs_increase_line_height_ClickedOrKeyPressed, false);	
	function coolaxs_increase_line_height_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_increasePageLineHeight();
		event.preventDefault();// אחרת יש גלילה של המסך			
		//console.log("increase multiplier: " + localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));		
	}	
	
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
	var coolaxs_decrease_line_height_item = document.querySelector('#coolaxs_decrease_line_height');
	coolaxs_decrease_line_height_item.addEventListener("click", coolaxs_decrease_line_height_ClickedOrKeyPressed, false);
	coolaxs_decrease_line_height_item.addEventListener("keypress", coolaxs_decrease_line_height_ClickedOrKeyPressed, false);	
	function coolaxs_decrease_line_height_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_decreasePageLineHeight();
		event.preventDefault();// אחרת יש גלילה של המסך			
		//console.log("decrease multiplier: " + localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));		
	}	

	
	function coolaxs_resetPageLineHeight() {
		localStorage.setItem('COOL_ACCESSIBILITY_lineHeightMultiplier', 0);
		coolaxs_resizeLineHeight();
	}// function coolaxs_resetPageLineHeight()
	
	// איפוס מרחק בין שורות
	var coolaxs_reset_line_height_item = document.querySelector('#coolaxs_reset_line_height');
	coolaxs_reset_line_height_item.addEventListener("click", coolaxs_reset_line_heightt_ClickedOrKeyPressed, false);
	coolaxs_reset_line_height_item.addEventListener("keypress", coolaxs_reset_line_heightt_ClickedOrKeyPressed, false);	
	function coolaxs_reset_line_heightt_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_resetPageLineHeight();
		event.preventDefault();// אחרת יש גלילה של המסך	
		//console.log(" reset multiplier: " + localStorage.getItem('COOL_ACCESSIBILITY_lineHeightMultiplier'));		
	}
	/////////////////////////////////////// Line Height- END /////////////////////////////////////////////////	
	
		
	
	
	
	
	
	/////////////////////////////////////// FONT SIZES - START /////////////////////////////////////////////////

   	var coolaxs_text_tags_FontSize = 'div:not( div div,div h1,div h2,div h3,div h4,div h5,div h6,div p,div label,div a),p,h1,h2,h3,h4,h5,h6, li, a';

	function coolaxs_updateFontSizeButtonBackground() {
		var multiplier = localStorage.getItem('fontSizeMultiplier');
		if (multiplier) {// update button background if there is a change from the default values
			if (multiplier != 1)
				document.querySelector('#coolaxs_font_size_group').classList.add('coolaxs_acivated_button');	
			else
				document.querySelector('#coolaxs_font_size_group').classList.remove('coolaxs_acivated_button');	
		}			
	}	

	// multiplier ==0  will reset to initFontSize data values stored in the html
	// multiplier < 1 will decrease font size
	// multiplier > 1 will increase font size	

		function coolaxs_resizeText() {
		
		var multiplier = localStorage.getItem('fontSizeMultiplier');
		
		//console.log(" multiplier in coolaxs_resizeText: " + multiplier);		
		
		var update_times = 0;

		var debug = false;// false , false
		
		var elements = document.querySelectorAll(coolaxs_text_tags_FontSize);
		var elArray = Array.prototype.slice.call(elements);  // Convert node list to array
		// Now, enumerate the array with .forEach()
		elArray.forEach(function(value, index){

			// this get the font-size in PIXELS only (even if in the html it was in 'em')
			var cssObj = window.getComputedStyle(value, null);// this get the actual font-size even if not set in the html tag
			var currentSize = cssObj.getPropertyValue("font-size");
			
			if (debug) console.log(" Before: " + value + " currentFontSize: " + currentSize);	
				
			if (currentSize) {
				
				var currentSize = parseFloat(currentSize);		

				if (currentSize > 0) {
					
					var currentSize = parseFloat(currentSize);	
						
					var initFontSize = parseFloat(value.getAttribute('data-coolaxs-initFontSize'));
					if (debug) console.log("initFontSize " + initFontSize + ", currentSize :" + currentSize);		
					if (isNaN(initFontSize)) {	
						initFontSize = currentSize;						
						value.setAttribute('data-coolaxs-initFontSize', String(initFontSize));
						if (debug) console.log("'data-coolaxs-initFontSize' was 'NaN' and was just set to : " + initFontSize);		
					}

					if (multiplier > 0) {
						currentSize = initFontSize * multiplier;
						if (debug) console.log(initFontSize+ " * " + multiplier + " => currentFontSize: " + currentSize);					
						value.style.fontSize = currentSize + "px";			
					}

				}// if (currentSize > 0)
			}// if (currentSize)
		});// elArray.forEach(function(value, index)
	}// function coolaxs_resizeText()
	
	
	
	// init attr='data-coolaxs-initFontSize' data attribute on load
	function coolaxs_FontSizesAddDataAttrOnLoad() {
		var debug = false;// true , false
		
		var elements = document.querySelectorAll(coolaxs_text_tags_FontSize);
		var elArray = Array.prototype.slice.call(elements);  // Convert node list to array
		// Now, enumerate the array with .forEach()
		elArray.forEach(function(value, index){

			var cssObj = window.getComputedStyle(value, null);// this get the actual line-height even if not set in the html tag
			var currentSize = cssObj.getPropertyValue("font-size");	
			if (debug) console.log(" Before: " + value + " current font-size: " + currentSize);		
			
			if (currentSize > 0)
				value.setAttribute('data-coolaxs-initFontSize', String(currentSize));
				
		});// elArray.forEach(function(value, index)
	}// coolaxs_FontSizesAddDataAttrOnLoad()
	
	
	
	
	
	
	
	
	// טעינת גדלי פונטים מהזיכרון בעת טעינת  הדף במידה ונשמרו גדלי פונט בזיכרון
	function coolaxs_reCreatePageFontSizes() {
		// רק אם מישהו השתמש בתפריט הנגישות 
 		if ( localStorage.getItem('fontSizeMultiplier')) {
			// 2 passes - because with 1 pass for both adding the attribute and resizing there is a bug when there are nested tags like an <a> inside a <p>
			// init attr='data-coolaxs-initFontSize' data attribute on load
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
	var coolaxs_increase_font_size_item = document.querySelector('#coolaxs_increase_font_size');
	coolaxs_increase_font_size_item.addEventListener("click", coolaxs_increase_font_size_ClickedOrKeyPressed, false);
	coolaxs_increase_font_size_item.addEventListener("keypress", coolaxs_increase_font_size_ClickedOrKeyPressed, false);	
	function coolaxs_increase_font_size_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_increasePageFontSizes();
		event.preventDefault();// אחרת יש גלילה של המסך		
		//console.log("increase multiplier: " + localStorage.getItem('fontSizeMultiplier'));	
	}	
	
	
	
	function coolaxs_decreasePageFontSizes() {
		if ( ! localStorage.getItem('fontSizeMultiplier')) localStorage.setItem('fontSizeMultiplier', 1);
		localStorage.setItem('fontSizeMultiplier', localStorage.getItem('fontSizeMultiplier') * 0.8);
		coolaxs_resizeText();		
		coolaxs_updateFontSizeButtonBackground();

		//console.log("decrease multiplier: " + localStorage.getItem('fontSizeMultiplier'));
	}		
	// הקטנת גודל פונט
	var coolaxs_decrease_font_size_item = document.querySelector('#coolaxs_decrease_font_size');
	coolaxs_decrease_font_size_item.addEventListener("click", coolaxs_decrease_font_size_ClickedOrKeyPressed, false);
	coolaxs_decrease_font_size_item.addEventListener("keypress", coolaxs_decrease_font_size_ClickedOrKeyPressed, false);	
	function coolaxs_decrease_font_size_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_decreasePageFontSizes();
		event.preventDefault();// אחרת יש גלילה של המסך	
	}	



	function coolaxs_resetPageFontSizes() {
		localStorage.setItem('fontSizeMultiplier', 1);
		coolaxs_resizeText();
		coolaxs_updateFontSizeButtonBackground();
	}			
	// איפוס גודל פונט
	var coolaxs_reset_font_size_item = document.querySelector('#coolaxs_reset_font_size');
	coolaxs_reset_font_size_item.addEventListener("click", coolaxs_reset_font_size_ClickedOrKeyPressed, false);
	coolaxs_reset_font_size_item.addEventListener("keypress", coolaxs_reset_font_size_ClickedOrKeyPressed, false);	
	function coolaxs_reset_font_size_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_resetPageFontSizes();
		event.preventDefault();// אחרת יש גלילה של המסך
		//console.log(" reset multiplier: " + localStorage.getItem('fontSizeMultiplier'));	
	}	
	
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
	// it is called from 2 places: from coolaxs_reCreateInvertColors() & from ('#coolaxs_invert_colors').("click keypress", function(event)
	function coolaxs_invertPageColors() {

		htmlElement.classList.toggle("coolaxs_inversed");//coolaxs_invert_colors();	
		
		// update button background		
		var invertPageColorsValue = localStorage.getItem('COOL_ACCESSIBILITY_invertPageColors');
		//console.log("invertPageColorsValue: " + invertPageColorsValue);	
		if (invertPageColorsValue == "true") {
			document.querySelector('#coolaxs_invert_colors').classList.add('coolaxs_acivated_button');
		} else {
			document.querySelector('#coolaxs_invert_colors').classList.remove('coolaxs_acivated_button');
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
		document.querySelector('#coolaxs_invert_colors').classList.remove("coolaxs_acivated_button");	
		localStorage.setItem('COOL_ACCESSIBILITY_invertPageColors', "false");	
		htmlElement.classList.remove("coolaxs_inversed");
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


	var coolaxs_invert_colors_item = document.querySelector('#coolaxs_invert_colors');
	coolaxs_invert_colors_item.addEventListener("click", coolaxs_invert_colors_ClickedOrKeyPressed, false);
	coolaxs_invert_colors_item.addEventListener("keypress", coolaxs_invert_colors_ClickedOrKeyPressed, false);	
	function coolaxs_invert_colors_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleInvertColors();
		event.preventDefault();// אחרת יש גלילה של המסך
	}	
	// -------------------------------- Invert colors - end -----------------------	היפוך צבעים - סוף	-------------------------------------------------------	
	
	
	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	קישורים - התחלה	-----------------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	var chosen_accessibilty_highlight_links_color = coolaxs_accessibilty_highlight_links_color;// this was set in the php file 
	var chosen_accessibilty_highlight_links_influence_button_mode = coolaxs_accessibilty_highlight_links_influence_button_mode;// this was set in the php file 	
	var chosen_override_coolaxs_highlight_links_class_border_bottom_color = coolaxs_override_coolaxs_highlight_links_class_border_bottom_color;// this was set in the php file 	
	//alert(coolaxs_accessibilty_highlight_links_color);
	var debug_chosen_accessibilty_highlight_links_color = false;// false // true
	if (debug_chosen_accessibilty_highlight_links_color) console.log("getting variable from PHP : chosen_accessibilty_highlight_links_color " + chosen_accessibilty_highlight_links_color);

	// it is called from 2 places: from coolaxs_reCreateHighlightLinks() & from ('#coolaxs_highlight_links').("click keypress", function(event)
	function coolaxs_highlightPageLinks(value) {
	
		var debug = false;//false true;
		
		var coolaxs_highlight_tags;
	
		if (chosen_accessibilty_highlight_links_influence_button_mode == "links_and_focusable") {
			coolaxs_highlight_tags = 'a[href], button, [href], input, select, textarea, details, [tabindex]:not([tabindex="-1"])';// 'links_and_focusable'
		} else {
			coolaxs_highlight_tags = "a";	// 'only_links'		
		}		
		
		if (value === null)
			return;		
		//alert("coolaxs_highlightPageLinks value: "+value);
		if (value == "true") {

			document.querySelectorAll(coolaxs_highlight_tags).forEach(val => {
					val.classList.add('coolaxs_highlight_links');	
			});		
			
			if (chosen_override_coolaxs_highlight_links_class_border_bottom_color) {// it appears twice - this is the first

				document.querySelectorAll(coolaxs_highlight_tags).forEach(val => {

					var cssObj = window.getComputedStyle(val, null);
					var currentBorderBottomColor = cssObj.getPropertyValue("border-bottom-color");// gets the actual letter-spacing even if not set in the html tag
	
					if (debug) console.log(" Before: " + val + " currentBorderBottomColor: " + currentBorderBottomColor);	
						
					if (currentBorderBottomColor) {

						var initBorderBottomColor = val.getAttribute('data-coolaxs-initBorderBottomColor');
						
						if ( ! initBorderBottomColor) {
							// if it there is no initBorderBottomColor we store the currentBorderBottomColor of the tag in the data attribute as initBorderBottomColor
							initBorderBottomColor = currentBorderBottomColor;						
							val.setAttribute('data-coolaxs-initBorderBottomColor', initBorderBottomColor);
						}

						currentBorderBottomColor = chosen_accessibilty_highlight_links_color;
						
						if (debug)  console.log("initBorderBottomColor => currentBorderBottomColor: " + currentBorderBottomColor);	

						val.style.borderBottomColor = currentBorderBottomColor;
						
					}// if (currentBorderBottomColor)
				});// document.querySelectorAll(coolaxs_highlight_tags).forEach(val => {	

			}// if (chosen_override_coolaxs_highlight_links_class_border_bottom_color)		
		}  else {

			document.querySelectorAll(coolaxs_highlight_tags).forEach(val => {
				val.classList.remove('coolaxs_highlight_links');
			});
			
			if (chosen_override_coolaxs_highlight_links_class_border_bottom_color) {// it appears twice - this is the second			

				document.querySelectorAll(coolaxs_highlight_tags).forEach(val => {			

					var cssObj = window.getComputedStyle(val, null);
					var currentBorderBottomColor = cssObj.getPropertyValue("border-bottom-color");// gets the actual letter-spacing even if not set in the html tag
								
					//console.log(" Before: " + val + " currentBorderBottomColor: " + currentBorderBottomColor);		
					if (currentBorderBottomColor) {
						var initBorderBottomColor = val.getAttribute('data-coolaxs-initBorderBottomColor');
						//console.log(initBorderBottomColor => currentBorderBottomColor: " + initBorderBottomColor);	
						val.style.borderBottomColor = initBorderBottomColor;				
					}// if (currentBorderBottomColor)
				});// document.querySelectorAll(coolaxs_highlight_tags).forEach(val => {	
			
			}// if (chosen_override_coolaxs_highlight_links_class_border_bottom_color)		
		}// else of if (window.coolaxs_highlight_links);
		
		// update button background		
		var coolaxs_highlightPageLinks = localStorage.getItem('coolaxs_highlightPageLinks');
		//console.log("coolaxs_highlightPageLinks: " + coolaxs_highlightPageLinks);	
		if (coolaxs_highlightPageLinks == "true") {
			document.querySelector('#coolaxs_highlight_links').classList.add('coolaxs_acivated_button');
		} else {
			document.querySelector('#coolaxs_highlight_links').classList.remove('coolaxs_acivated_button');
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

	var coolaxs_highlight_links_item = document.querySelector('#coolaxs_highlight_links');
	coolaxs_highlight_links_item.addEventListener("click", coolaxs_highlight_links_ClickedOrKeyPressed, false);
	coolaxs_highlight_links_item.addEventListener("keypress", coolaxs_highlight_links_ClickedOrKeyPressed, false);	
	function coolaxs_highlight_links_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleHighlightLinks();
		event.preventDefault();// אחרת יש גלילה של המסך		
	}	
	
	
	// -------------------------------------------------------------	קישורים - סוף	-----------------------------------------------------------------	

	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	הדגשת כותרות - התחלה	-----------------------------------------------------------------
	// -----------------------------------------------------------------------------------------------------------------------------------------------------
		
	var chosen_accessibilty_titles_background_color = coolaxs_accessibilty_titles_background_color;// this was set in the php file 
	var chosen_override_coolaxs_highlight_titles_colors_class_background_color = coolaxs_override_coolaxs_highlight_titles_colors_class_background_color;// this was set in the php file 	
	
	// הדגשת כותרות
	// it is called from 2 places: from coolaxs_reCreateHighlightTitles() & from ('#coolaxs_highlight_titles') ("click keypress", function(event)
	function coolaxs_highlightPageTitles(highlightPageTitlesValue) {
		if (highlightPageTitlesValue === null)
			return;
		//alert("coolaxs_highlightPageTitles value: "+value);
		if (highlightPageTitlesValue == "false") {

			// I chose also all a tags inside headers because in dark contrast mode the a tag text gets the dark contrast yellew text so this overrides the text color 
			document.querySelectorAll("h1, h2, h3, h4, h5, h6, h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a").forEach(val => {
			// console.log(val);//for debug
			val.classList.remove('coolaxs_highlight_titles_colors');
				// restore titles background color from data attr that we have stored inside the html tag
				if (chosen_override_coolaxs_highlight_titles_colors_class_background_color) {// it appesrs twice - this is the first
					var initBackgroundColor = val.getAttribute('data-coolaxs-initBackgroundColor');
					//console.log(initBackgroundColor => currentBackgroundColor: " + initBackgroundColor);	
					if (initBackgroundColor) {
						if (initBackgroundColor == 'transparent')
							val.style.backgroundColor = '';// Removing CSS property
						else
							val.style.backgroundColor = initBackgroundColor;// restoring the original background color						
					}//if (initBackgroundColor)
				}// if (chosen_override_coolaxs_highlight_titles_colors_class_background_color)	

			});// document.querySelectorAll("h1, h2, h3, h4, h5, h6, h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a").forEach(val => 

		}// if (highlightPageTitlesValue == "false")
		else {
			// I chose also all a tags inside headers because in dark contrast mode the a tag text gets the dark contrast yellew text so this overrides the text color 
			document.querySelectorAll("h1, h2, h3, h4, h5, h6, h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a").forEach(val => {
				// console.log(val);//for debug
				
				// override titles background color from the plugin admin settings and store the previous color as a data attribute inside the html tag for restoring it later
				if (chosen_override_coolaxs_highlight_titles_colors_class_background_color) {// it appesrs twice - this is the first

					var cssObj = window.getComputedStyle(val, null);
					var currentBackgroundColor = cssObj.getPropertyValue("background-color");// gets the actual background-color even if not set in the html tag
					
					//console.log(" Before: " + val + " currentBackgroundColor: " + currentBackgroundColor);		
					if ( ! currentBackgroundColor) currentBackgroundColor = 'transparent';
						var initBackgroundColor = val.getAttribute('data-coolaxs-initBackgroundColor');						
						if ( ! initBackgroundColor) {
							// if it there is no initBackgroundColor we store the currentBackgroundColor of the tag in the data attribute as initBackgroundColor
							initBackgroundColor = currentBackgroundColor;						
							val.setAttribute("data-coolaxs-initBackgroundColor", initBackgroundColor);
						}
						currentBackgroundColor = chosen_accessibilty_titles_background_color;
						//console.log("initBackgroundColor => currentBackgroundColor: " + currentBackgroundColor);					
						val.style.backgroundColor = currentBackgroundColor;
				}// if (chosen_override_coolaxs_highlight_titles_colors_class_background_color)	
				
				val.classList.add('coolaxs_highlight_titles_colors');
			});// document.querySelectorAll("h1, h2, h3, h4, h5, h6, h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a").forEach(val => 
			
		}// else of    if (highlightPageTitlesValue == "false")
		
		// update button background		
		var coolaxs_highlight_titles = localStorage.getItem('coolaxs_highlightPageTitles');
		//console.log("coolaxs_highlight_titles: " + coolaxs_highlight_titles);	
		if (coolaxs_highlight_titles == "true") {
			document.querySelector('#coolaxs_highlight_titles').classList.add('coolaxs_acivated_button');
		} else {
			document.querySelector('#coolaxs_highlight_titles').classList.remove('coolaxs_acivated_button');
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

	var coolaxs_highlight_titles_item = document.querySelector('#coolaxs_highlight_titles');
	coolaxs_highlight_titles_item.addEventListener("click", coolaxs_highlight_titles_ClickedOrKeyPressed, false);
	coolaxs_highlight_titles_item.addEventListener("keypress", coolaxs_highlight_titles_ClickedOrKeyPressed, false);	
	function coolaxs_highlight_titles_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleHighlightTitles();
		// event.preventDefault();// אחרת יש גלילה של המסך		
		// event.stopPropagation ();				
		// return false;
	}	

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
	
			document.querySelectorAll("body *").forEach(val => {
					val.classList.remove('coolaxs_bright_contrast');	
					if ( coolaxs_hasBkgcolor(val)  )  val.classList.remove('coolaxs_bright_contrast_bkg_color');	
			});	
			document.querySelectorAll("li a").forEach(val => {
					val.classList.remove('coolaxs_bright_contrast');	
					if ( coolaxs_hasBkgcolor(val)  )  val.classList.remove('coolaxs_bright_contrast_bkg_color');	
			});				
			document.querySelectorAll("body,html").forEach(val => {
					val.classList.remove('coolaxs_bright_contrast');	
					if ( coolaxs_hasBkgcolor(val)  )  val.classList.remove('coolaxs_bright_contrast_bkg_color');	
			});	
			
		}
		else {

			// BackgroundImage: normal to bright 
			coolaxs_toggleImageOrBackgroundImageBrightOrDark(coolaxs_str_normal_image,str_bright_image);

			document.querySelectorAll("body *").forEach(val => {
					val.classList.remove('coolaxs_bright_contrast');	
					if ( coolaxs_hasBkgcolor(val)  )  val.classList.add('coolaxs_bright_contrast_bkg_color');	
			});	
			document.querySelectorAll("li a").forEach(val => {
					val.classList.remove('coolaxs_bright_contrast');	
					if ( coolaxs_hasBkgcolor(val)  )  val.classList.add('coolaxs_bright_contrast_bkg_color');	
			});				
			document.querySelectorAll("body,html").forEach(val => {
					val.classList.remove('coolaxs_bright_contrast');	
					if ( coolaxs_hasBkgcolor(val)  )  val.classList.add('coolaxs_bright_contrast_bkg_color');	
			});			

		}// else of if (brightContrastValue == "false")

		// update button background		
		var coolaxs_bright_contrast = localStorage.getItem('COOL_ACCESSIBILITY_BrightContrast');
		//console.log("coolaxs_bright_contrast: " + coolaxs_bright_contrast);	
		if (coolaxs_bright_contrast == "true") {
			document.querySelector('#coolaxs_bright_contrast').classList.add('coolaxs_acivated_button');
		} else {
			document.querySelector('#coolaxs_bright_contrast').classList.remove('coolaxs_acivated_button');				
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
		document.querySelector('#coolaxs_bright_contrast').classList.remove('coolaxs_acivated_button');		
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

	var coolaxs_bright_contrast_item = document.querySelector('#coolaxs_bright_contrast');
	coolaxs_bright_contrast_item.addEventListener("click", coolaxs_bright_contrast_ClickedOrKeyPressed, false);
	coolaxs_bright_contrast_item.addEventListener("keypress", coolaxs_bright_contrast_ClickedOrKeyPressed, false);	
	function coolaxs_bright_contrast_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleBrightContrast();
	
		event.preventDefault();// אחרת יש גלילה של המסך	
	}	
	
	
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

			document.querySelectorAll("body *").forEach(val => {
					val.classList.remove('coolaxs_dark_contrast');	
					/* if ( coolaxs_hasBkgcolor(val)  )  */ val.classList.remove('coolaxs_dark_contrast_bkg_color');	
			});					
			document.querySelectorAll("li a").forEach(val => {
					val.classList.remove('coolaxs_dark_contrast');	
					if ( coolaxs_hasBkgcolor(val)  )  val.classList.remove('coolaxs_dark_contrast_bkg_color');	
			});		
			document.querySelectorAll("body,html").forEach(val => {
					val.classList.remove('coolaxs_dark_contrast');	
					/* if ( coolaxs_hasBkgcolor(val)  )  */ val.classList.remove('coolaxs_dark_contrast_bkg_color');	
			});		
			document.querySelectorAll("img").forEach(val => {
					val.classList.remove('coolaxs_dark_contrast');	
					/* if ( coolaxs_hasBkgcolor(val)  )  */ val.classList.remove('coolaxs_dark_contrast_bkg_color');	
			});					
			document.querySelectorAll("img").forEach(val => {
					val.classList.remove('coolaxs_dark_contrast_img');	
			});		
			document.querySelectorAll('.coolaxs_buttons').forEach(val => {
					val.classList.remove('coolaxs_dark_contrast2');	
			});				
	
		}
		else {

			// BackgroundImage: normal to dark 
			coolaxs_toggleImageOrBackgroundImageBrightOrDark(coolaxs_str_normal_image,str_dark_image);
	
			document.querySelectorAll("body *").forEach(val => {
					val.classList.add('coolaxs_dark_contrast');	
					//  ! val.classList.contains( "coolaxs_highlight_titles_colors" ))) in the following because coolaxs_highlight_titles_colors class already overrides the background color and we don't want to override it
					if (( coolaxs_hasBkgcolor(val)  ) && ( ! val.classList.contains( "coolaxs_highlight_titles_colors" )))
						val.classList.add('coolaxs_dark_contrast_bkg_color');	
			});					
			document.querySelectorAll("li a").forEach(val => {
					val.classList.add('coolaxs_dark_contrast');	
					//  ! val.classList.contains( "coolaxs_highlight_titles_colors" ))) in the following because coolaxs_highlight_titles_colors class already overrides the background color and we don't want to override it
					if (( coolaxs_hasBkgcolor(val)  ) && ( ! val.classList.contains( "coolaxs_highlight_titles_colors" )))
						val.classList.add('coolaxs_dark_contrast_bkg_color');	
			});		
			document.querySelectorAll("body,html").forEach(val => {
					val.classList.add('coolaxs_dark_contrast');// I put the if statement in comment because if there is no color defined it will be white
					// if ( coolaxs_hasBkgcolor(val)  )
					val.classList.add('coolaxs_dark_contrast_bkg_color');	
			});		
			/* it wasn't in the original but because I copied it from the above remove class I thought maybe it belongs here as add class
			document.querySelectorAll("img").forEach(val => {
					val.classList.add('coolaxs_dark_contrast');	
					// if ( coolaxs_hasBkgcolor(val)  ) 
					val.classList.add('coolaxs_dark_contrast_bkg_color');	
			});		
			*/			
			document.querySelectorAll("img").forEach(val => {
					val.classList.add('coolaxs_dark_contrast_img');// change brightness to 90% from 100% so it won't be too bright
			});		
			document.querySelectorAll('.coolaxs_buttons').forEach(val => {
					val.classList.add('coolaxs_dark_contrast2');	
			});					

		}// else of if (darkContrastValue == "false")

		// update button background		
		var coolaxs_dark_contrast = localStorage.getItem('COOL_ACCESSIBILITY_DarkContrast');
		//console.log("coolaxs_dark_contrast: " + coolaxs_dark_contrast);	
		if (coolaxs_dark_contrast == "true") {
			document.querySelector('#coolaxs_dark_contrast').classList.add('coolaxs_acivated_button');
		} else {
			document.querySelector('#coolaxs_dark_contrast').classList.remove('coolaxs_acivated_button');
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
		document.querySelector('#coolaxs_dark_contrast').classList.remove('coolaxs_acivated_button');	
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

	var coolaxs_dark_contrast_item = document.querySelector('#coolaxs_dark_contrast');
	coolaxs_dark_contrast_item.addEventListener("click", coolaxs_dark_contrast_ClickedOrKeyPressed, false);
	coolaxs_dark_contrast_item.addEventListener("keypress", coolaxs_dark_contrast_ClickedOrKeyPressed, false);	
	function coolaxs_dark_contrast_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleDarkContrast();
		
		event.preventDefault();// אחרת יש גלילה של המסך		
	}	
	
	// -------------------------------------------------------------	ניגודיות כהה  - סוף -----------------------------------------------------------------	
		

		
		
		
		
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	מניעת אנימציה - התחלה -----------------------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// the following should be at every animated gif or static so jquery could toggle between them automatically
	var coolaxs_str_normal_image = "_static.gif";
	var coolaxs_str_animated_gif_image = "_animated.gif";		
	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------

	// it is called from 2 places: from coolaxs_reCreateStopAnimation() & from ('#coolaxs_stop_animations').("click keypress", function(event){
	function coolaxs_stopAnimation(value) {
		if (value === null)
			return;		
			
		//alert("stopAnimationValue value: "+value);
		// החלפת כל תמונות 'גיף' שיש בהם אנימציה ל'גיף' סטטי וההפך
		if (value == "true") {
			coolaxs_toggleImageSource(coolaxs_str_animated_gif_image, coolaxs_str_normal_image);

			document.querySelectorAll(".flexslider").forEach(val => {
				if (val.length > 0) val.flexslider("pause");// length tests whether an element exists			
			});		
			document.querySelectorAll('.flexslider2').forEach(val => {
				if (val.length > 0) val.flexslider("pause");// length tests whether an element exists		
			});	

			htmlElement.classList.add('coolaxs_prevent_animations');





			
			
			//	.....................	Disable all automatic video autoplay in the webpage ....start .................
			// if iframe src autoplay=1 then autoplay=0 and store data autoplayoriginal = "1" to revert back to

		var elements = document.getElementsByTagName('iframe');
		var elArray = Array.prototype.slice.call(elements);  // Convert node list to array
		// Now, enumerate the array with .forEach()
		elArray.forEach(function(val, index){			
			
				var currentURL = val.getAttribute('src');
				//console.log("currentURL: " + currentURL);
				if(currentURL.indexOf("autoplay=") != -1)
				{
					//autoplay present in src; so lets add it
					if(currentURL.indexOf("autoplay=1") >- 1)  {
						//replace autoplay=1 with autoplay=0
						var updatedURL = currentURL.replace('autoplay=1', 'autoplay=0');
						val.setAttribute('src', updatedURL);
						// store autoplayoriginal
						val.setAttribute('data-coolaxs-autoplayoriginal', "1");
						//console.log("cool accessibility plugin coolaxs_prevent_animations part : " + updatedURL + " after storing autoplayoriginal: 1");							
					}
				}// if(currentURL.indexOf("autoplay=") != -1)
			});// elArray.forEach(function(val, index)	
			
			//	.....................	Disable all automatic video autoplay in the webpage ....end .................				


			//console.log("before pause videos: ");

			// pause videos ?
			var all_videos = document.getElementsByTagName('video');
			var all_videos_array = Array.prototype.slice.call(all_videos);  // Convert node list to array
			console.log("all_videos_array" + all_videos_array);
			// Now, enumerate the array with .forEach()
			all_videos_array.forEach(function(one_video, index){	
				console.log("one_video: " + one_video);
				//if (one_video instanceof HTMLMediaElement)	
				one_video.autoplay = false();//play();				
				one_video.pause();//play();
			});

			// stops iframe videos - I verified that it stops youtube videos but if they have autoplay they start again - if you click with the mouse on the video it pauses
			var all_iframes = document.getElementsByTagName('iframe');
			var all_iframes_array = Array.prototype.slice.call(all_iframes);  // Convert node list to array
			//console.log("all_iframes_array" + all_iframes_array);
			// Now, enumerate the array with .forEach()
			all_iframes_array.forEach(function(one_iframe, index){	
				//console.log("one_iframe: " + one_iframe);
				var url = one_iframe.getAttribute('src');
				one_iframe.setAttribute('src', '');
				one_iframe.setAttribute('src', url);
			});		

		}  else {
			coolaxs_toggleImageSource(coolaxs_str_normal_image, coolaxs_str_animated_gif_image);

			//JS
			document.querySelectorAll(".flexslider").forEach(val => {
				if (val.length > 0) val.flexslider("play");// length tests whether an element exists			
			});		
			document.querySelectorAll('.flexslider2').forEach(val => {
				if (val.length > 0) val.flexslider("play");// length tests whether an element exists		
			});	

			htmlElement.classList.remove('coolaxs_prevent_animations');
			
			//	.....................	Recreate all automatic video autoplay in the webpage ....start .................
			// if iframe src autoplay exist and autoplay=0 then if data autoplayoriginal = "1" change to autoplay=1 and remove autoplayoriginal data value

			var elements = document.getElementsByTagName('iframe');
			var elArray = Array.prototype.slice.call(elements);  // Convert node list to array
			// Now, enumerate the array with .forEach()
			elArray.forEach(function(val, index){			
			
				var currentURL = val.getAttribute('src');
				if(currentURL.indexOf("autoplay=") != -1)
				{
					//autoplay present in src;
					if(currentURL.indexOf("autoplay=0") >- 1)  {
						//autoplay=0 present in src; 
						var autoplayOriginal = val.getAttribute('data-coolaxs-autoplayoriginal');							
						if (autoplayOriginal == "1") {
							var updatedURL = currentURL.replace('autoplay=0', 'autoplay=1');	
							val.setAttribute('src', updatedURL);
							//console.log("cool accessibility plugin coolaxs_prevent_animations part : " + updatedURL + " after getting autoplayoriginal: 1");									
							val.removeAttribute('data-coolaxs-autoplayoriginal');// remove autoplayoriginal data value
						}// if (autoplayOriginal == "1")
					}
				}// if(currentURL.indexOf("autoplay=") != -1)
			});// elArray.forEach(function(val, index)	
			
			
			//	.....................	Recreate all automatic video autoplay in the webpage ....end .................		
			
		}// else of if (window.coolaxs_stop_animations);		

		// update button background		
		var coolaxs_stop_animations = localStorage.getItem('COOL_ACCESSIBILITY_StopAnimation');
		//console.log("coolaxs_stop_animations: " + coolaxs_stop_animations);	
		if (coolaxs_stop_animations == "true") {
			document.querySelector('#coolaxs_stop_animations').classList.add('coolaxs_acivated_button');
		} else {
			document.querySelector('#coolaxs_stop_animations').classList.remove('coolaxs_acivated_button');
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
			stopAnimationValue = "true";
			
			// stop all animations
			document.querySelectorAll('*').forEach(val => {
				const animations_Array = val.getAnimations();
				animations_Array.forEach(function(val, index){
					val.pause();
				});// elArray.forEach(function(value, index)
			});	
		} else {
			stopAnimationValue = "false";	
		}			
		
		// console.log("stopAnimationValue: " + stopAnimationValue);	
		localStorage.setItem('COOL_ACCESSIBILITY_StopAnimation', stopAnimationValue);	

		coolaxs_stopAnimation(stopAnimationValue);
	}// function coolaxs_toggleStopAnimation()		
	
	// toggle Stop Animation
	var coolaxs_stop_animations_item = document.querySelector('#coolaxs_stop_animations');
	coolaxs_stop_animations_item.addEventListener("click", coolaxs_stop_animations_ClickedOrKeyPressed, false);
	coolaxs_stop_animations_item.addEventListener("keypress", coolaxs_stop_animations_ClickedOrKeyPressed, false);	
	function coolaxs_stop_animations_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleStopAnimation();
		
		event.preventDefault();// אחרת יש גלילה של המסך		
	}	
	
	function coolaxs_toggleImageSource(str_origin,str_target) {
		var debug = false; // false // true
		
		var elements = document.getElementsByTagName('img');
		var elArray = Array.prototype.slice.call(elements);  // Convert node list to array
		// Now, enumerate the array with .forEach()
		elArray.forEach(function(value, index){		
			var source_image_url = value.getAttribute('src');
			
			if(debug) console.log("source_image_url: "+source_image_url);
						
			var n = source_image_url.indexOf(str_origin);
			if (n > -1) {
				if(debug) console.log("before: " +source_image_url);					
				
				var image_name_without_extension = source_image_url.substr(0,n);
				//var extension = strUrl.substr(n + str_origin.length);// like "png" or "jpg"							
				var new_source_image_url = image_name_without_extension + str_target;

				if(debug) console.log("after: " +new_source_image_url);	
				// החלפת תמונה 
				var replaced_source_image_url = source_image_url.replace(source_image_url, new_source_image_url);
				value.setAttribute('src', replaced_source_image_url);
			}// if (n > -1)
				
		});// elArray.forEach(function(value, index)		
	
	}// coolaxs_toggleImageSource(str_origin,str_target)			
				
		
	// -------------------------------------------------------------	מניעת אנימציה - סוף -----------------------------------------------------------------			
		


	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	זום טקסט - התחלה -----------------------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	

	// it is called from 2 places: from coolaxs_reCreateZoomText() & from ('#coolaxs_text_zoom').("click keypress", function(event){
	function coolaxs_zoomText(value) {
		if (value === null)
			return;		
		//alert("zoomTextValue value: "+value);// value = true / false
		
		// the implemintation is above in the following statements:
		// ---------------------------------------------------------------
		// update button background		
		var coolaxs_text_zoom = localStorage.getItem('coolaxs_textZoomWindow');
		//console.log("coolaxs_text_zoom: " + coolaxs_text_zoom);	
		if (coolaxs_text_zoom == "true") {
			document.querySelector('#coolaxs_text_zoom').classList.add('coolaxs_acivated_button');	
		} else {
			document.querySelector('#coolaxs_text_zoom').classList.remove('coolaxs_acivated_button');	
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
	var coolaxs_text_zoom_item = document.querySelector('#coolaxs_text_zoom');
	coolaxs_text_zoom_item.addEventListener("click", coolaxs_text_zoom_ClickedOrKeyPressed, false);
	coolaxs_text_zoom_item.addEventListener("keypress", coolaxs_text_zoom_ClickedOrKeyPressed, false);	
	function coolaxs_text_zoom_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleTextZoomWindow();
		
		event.preventDefault();// אחרת יש גלילה של המסך		
	}
	
	// -------------------------------------------------------------	זום טקסט - סוף -----------------------------------------------------------------			
		
		
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------------------------------	גופן קריא - התחלה -----------------------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	

	// it is called from 2 places: from coolaxs_reCreateReadableFont() & from ('#coolaxs_readable_font').("click keypress", function(event){
	function coolaxs_readableFont(value) {
		if (value === null)
			return;		
		//alert("readableFontValue value: "+value);
		if (value == "true") {
			document.querySelectorAll("*,body,a,span,li *").forEach(val => {
				val.classList.add("coolaxs_readable_font" );	
			});		
		}  else {
			// revert to original font
			document.querySelectorAll("*,body,a,span,li *").forEach(val => {
				val.classList.remove("coolaxs_readable_font" );	
			});	
		}// else of if (window.coolaxs_highlight_links);		
		
		// update button background		
		var coolaxs_readable_font = localStorage.getItem('COOL_ACCESSIBILITY_ReadableFont');
		//console.log("coolaxs_readable_font: " + coolaxs_readable_font);	
		if (coolaxs_readable_font == "true") {
			document.querySelector('#coolaxs_readable_font').classList.add("coolaxs_acivated_button");	
		} else {
			document.querySelector('#coolaxs_readable_font').classList.remove("coolaxs_acivated_button");
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

	var coolaxs_readable_font_item = document.querySelector('#coolaxs_readable_font');
	coolaxs_readable_font_item.addEventListener("click", coolaxs_readable_font_ClickedOrKeyPressed, false);
	coolaxs_readable_font_item.addEventListener("keypress", coolaxs_readable_font_ClickedOrKeyPressed, false);	
	function coolaxs_readable_font_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleReadableFont();
		
		event.preventDefault();// אחרת יש גלילה של המסך
	}
	// -------------------------------------------------------------	גופן קריא - סוף -----------------------------------------------------------------			
		

	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------- White cursor - start ----------------	 סמן בצבע לבן - התחלה ---------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// could be erased - mouse cursor function
	// http://jsbin.com/qexawe/edit?js,output		
	
	// it is called from 2 places: from coolaxs_reCreateBigWhiteCursor() & from ('#coolaxs_big_white_cursor').("click keypress", function(event){
	function coolaxs_bigWhiteCursor(value) {

		if (value === null)
			return;		
		//alert("bigWhiteCursorValue: "+value);
		var not_focusable = document.querySelectorAll('* :not(a[href], button, [href], input, select, textarea, details, [tabindex]:not([tabindex="-1"],a,span)');
		var focusable = document.querySelectorAll('a[href], button, [href], input, select, textarea, details, [tabindex]:not([tabindex="-1"])');
		if (value == "true") {
			not_focusable.forEach(val => {	val.classList.add('coolaxs_big_white_cursor');				});	
			focusable.forEach(val => {			val.classList.add('coolaxs_cursor_big_pointer_white');	});	
		}  else {
			// revert to original cursor
			not_focusable.forEach(val => {	val.classList.remove('coolaxs_big_white_cursor');					});	
			focusable.forEach(val => {			val.classList.remove('coolaxs_cursor_big_pointer_white');	});	
		}// if (value == "true")
			
		// update button background		
		var coolaxs_big_white_cursor = localStorage.getItem('COOL_ACCESSIBILITY_BigWhiteCursor');
		//console.log("coolaxs_big_white_cursor: " + coolaxs_big_white_cursor);	
		if (coolaxs_big_white_cursor == "true") {
			document.querySelector('#coolaxs_big_white_cursor').classList.add('coolaxs_acivated_button');	
		} else {
			document.querySelector('#coolaxs_big_white_cursor').classList.remove('coolaxs_acivated_button');	
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

		document.querySelector('#coolaxs_big_white_cursor').classList.remove('coolaxs_acivated_button');	
			
		// revert to original cursor
		var not_focusable = document.querySelectorAll('* :not(a[href], button, [href], input, select, textarea, details, [tabindex]:not([tabindex="-1"],a,span)');
		var focusable = document.querySelectorAll('a[href], button, [href], input, select, textarea, details, [tabindex]:not([tabindex="-1"])');	
		not_focusable.forEach(val => {	val.classList.remove('coolaxs_big_white_cursor');					});	
		focusable.forEach(val => {			val.classList.remove('coolaxs_cursor_big_pointer_white');	});	
				
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

	var coolaxs_big_white_cursor_item = document.querySelector('#coolaxs_big_white_cursor');
	coolaxs_big_white_cursor_item.addEventListener("click", coolaxs_big_white_cursor_ClickedOrKeyPressed, false);
	coolaxs_big_white_cursor_item.addEventListener("keypress", coolaxs_big_white_cursor_ClickedOrKeyPressed, false);	
	function coolaxs_big_white_cursor_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleBigWhiteCursor();
		event.preventDefault();// אחרת יש גלילה של המסך
	}
	
	
	
	// -------------------------------------- White cursor - end ----------------	 סמן בצבע לבן - סוף -------------------------------------------------		
	
	
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------- Black cursor - start ----------------	 סמן בצבע שחור - התחלה -------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	

	// it is called from 2 places: from coolaxs_reCreateBigBlackCursor() & from ('#coolaxs_big_black_cursor').("click keypress", function(event){
	function coolaxs_bigBlackCursor(value) {
		if (value === null)
			return;		
		//alert("bigBlackCursorValue: "+value);

		var not_focusable = document.querySelectorAll('* :not(a[href], button, [href], input, select, textarea, details, [tabindex]:not([tabindex="-1"],a,span)');
		var focusable = document.querySelectorAll('a[href], button, [href], input, select, textarea, details, [tabindex]:not([tabindex="-1"])');
		if (value == "true") {
			not_focusable.forEach(val => {	val.classList.add('coolaxs_big_black_cursor');				});	
			focusable.forEach(val => {			val.classList.add('coolaxs_cursor_big_pointer_black');	});	
		}  else {
			// revert to original cursor
			not_focusable.forEach(val => {	val.classList.remove('coolaxs_big_black_cursor');					});	
			focusable.forEach(val => {			val.classList.remove('coolaxs_cursor_big_pointer_black');	});	
		}// if (value == "true")

		// update button background		
		var coolaxs_big_black_cursor = localStorage.getItem('COOL_ACCESSIBILITY_BigBlackCursor');
		//console.log("coolaxs_big_black_cursor: " + coolaxs_big_black_cursor);	
		if (coolaxs_big_black_cursor == "true") {
			document.querySelector('#coolaxs_big_black_cursor').classList.add('coolaxs_acivated_button');	
		} else {
			document.querySelector('#coolaxs_big_black_cursor').classList.remove('coolaxs_acivated_button');	
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
		document.querySelector('#coolaxs_big_black_cursor').classList.remove('coolaxs_acivated_button');	
			
		var not_focusable = document.querySelectorAll('* :not(a[href], button, [href], input, select, textarea, details, [tabindex]:not([tabindex="-1"],a,span)');
		var focusable = document.querySelectorAll('a[href], button, [href], input, select, textarea, details, [tabindex]:not([tabindex="-1"])');	
		not_focusable.forEach(val => {	val.classList.remove('coolaxs_big_black_cursor');					});	
		focusable.forEach(val => {			val.classList.remove('coolaxs_cursor_big_pointer_black');	});		
				
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

	var coolaxs_big_black_cursor_item = document.querySelector('#coolaxs_big_black_cursor');
	coolaxs_big_black_cursor_item.addEventListener("click", coolaxs_big_black_cursor_ClickedOrKeyPressed, false);
	coolaxs_big_black_cursor_item.addEventListener("keypress", coolaxs_big_black_cursor_ClickedOrKeyPressed, false);	
	function coolaxs_big_black_cursor_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleBigBlackCursor();
		event.preventDefault();// אחרת יש גלילה של המסך
	}
	// -------------------------------------- Black cursor - end ----------------	 סמן בצבע שחור - סוף -------------------------------------------------		

	// -----------------------------------------------------------------------------------------------------------------------------------------------------	
	// -------------------------------------- Keyboard navigation - start ----------------	 ניווט במקלדת - התחלה -------------------------------------------------			
	// -----------------------------------------------------------------------------------------------------------------------------------------------------	

	var accessibilty_skip_menu_option = coolaxs_accessibilty_skip_menu_button_mode;// this was set in the php file 
	//alert(accessibilty_skip_menu_option);
	var debug_accessibilty_skip_menu_option = false;// false // true
	if (debug_accessibilty_skip_menu_option) console.log("getting variable from PHP : coolaxs_accessibilty_skip_menu_button_mode " + accessibilty_skip_menu_option);
	
	switch(accessibilty_skip_menu_option) {
		case "skip_menu_button_if_nav_tag":
		
			var all_navs_Array = document. getElementsByTagName("nav");
			if( all_navs_Array.length > 0 )
			{
				if (debug_accessibilty_skip_menu_option) console.log(": <nav> tag exist "); // it exists
				document.querySelector('#coolaxs_skip_to_page_content_button').style.display = "block";	
			} else {
				if (debug_accessibilty_skip_menu_option) console.log(" : No <nav> tag");
				document.querySelector('#coolaxs_skip_to_page_content_button').style.display = "none";	
			}
			break;
			
		case "if_has_coolaxs_navigation_class":

			var is_coolaxs_navigation_nodes = document.getElementsByClassName('coolaxs_navigation');
			if (is_coolaxs_navigation_nodes.length > 0) // check if a class exists
			{
				if (debug_accessibilty_skip_menu_option) console.log(" : coolaxs_navigation class exist"); // it exists
				document.querySelector('#coolaxs_skip_to_page_content_button').style.display = "block";
			} else {
				if (debug_accessibilty_skip_menu_option) console.log(" : No coolaxs_navigation class");
				document.querySelector('#coolaxs_skip_to_page_content_button').style.display = "none";
			}
			break;
			
		case "always":			if (debug_accessibilty_skip_menu_option) console.log(" : always");	
				document.querySelector('#coolaxs_skip_to_page_content_button').style.display = "block";	
			break;
			
		case "never":			if (debug_accessibilty_skip_menu_option) console.log(" : never");	
		default:
			//alert("No nav tag");
			document.querySelector('#coolaxs_skip_to_page_content_button').style.display = "none";	
	} 	
	
	// it is called from 2 places: from coolaxs_reCreateKeyboardNavigation() & from ('#coolaxs_keyboard_navigation').("click keypress", function(event){
	function coolaxs_keyboardNavigation(value) {
		if (value === null)
			return;		
		//alert("keyboardNavigationValue: "+value);
		if (value == "true") {
			// there are many places in the style.css file just for the focus - this class activate these css elements
			document.body.classList.add('coolaxs_focus_css_activated');	
		} else {
			document.body.classList.remove('coolaxs_focus_css_activated');	
		}// if (value == "true")
			
		// update button background		
		var coolaxs_keyboard_navigation = localStorage.getItem('COOL_ACCESSIBILITY_KeyboardNavigation');
		//console.log("coolaxs_keyboard_navigation: " + coolaxs_keyboard_navigation);	
		if (coolaxs_keyboard_navigation == "true") {
			document.querySelector('#coolaxs_keyboard_navigation').classList.add("coolaxs_acivated_button");	
		} else {
			document.querySelector('#coolaxs_keyboard_navigation').classList.remove("coolaxs_acivated_button");				
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
			document.querySelectorAll('.coolaxs_buttons').forEach(val => {
				val.setAttribute('tabindex', 0);// because tabindex on the html caused scolling on the page
			});			
		}
		else	{
			keyboardNavigationValue = "false";
			document.querySelectorAll('.coolaxs_buttons').forEach(val => {
				val.removeAttribute('tabindex');
			});	
		}
		//console.log("keyboardNavigationValue: " + keyboardNavigationValue);
		 
		localStorage.setItem('COOL_ACCESSIBILITY_KeyboardNavigation', keyboardNavigationValue);	

		coolaxs_keyboardNavigation(keyboardNavigationValue);
		
	}// function coolaxs_toggleKeyboardNavigation()
	
	
	// 	ניווט מקלדת - מסגרת אדומה עם טקסט שחור על רקע צהוב	
	// toggle coolaxs_keyboard_navigation	
	var coolaxs_keyboard_navigation_item = document.querySelector('#coolaxs_keyboard_navigation');
	coolaxs_keyboard_navigation_item.addEventListener("click", coolaxs_keyboard_navigation_ClickedOrKeyPressed, false);
	coolaxs_keyboard_navigation_item.addEventListener("keypress", coolaxs_keyboard_navigation_ClickedOrKeyPressed, false);	
	function coolaxs_keyboard_navigation_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleKeyboardNavigation();
		event.preventDefault();// אחרת יש גלילה של המסך
	}
	// -------------------------------------- Keyboard navigation - end ----------------	 ניווט במקלדת - סוף -------------------------------------------------		

	

	

	
	
	
	
	
	
window.coolaxs_keyboard_nav = false;		
	


	// this solves the problem that on loading the page after clearing the cache and refershing the page with Ctrl 5
	// all the accessibility icons appear on the upper right of the page before the page has finished loading
	// so we hide it in style.css and show it when the page is ready with JQuery in menu.js
	document.querySelector('.coolaxs_accessibility_panel_container').style.display = "flex";		
	
	var coolaxs_mobile_accessibility_panel1 = document.querySelector('.coolaxs_top_or_bottom_mobile_pannel');
	var coolaxs_mobile_accessibility_panel2 = document.querySelector('.coolaxs_right_mobile_pannel');
	var coolaxs_mobile_accessibility_panel3 = document.querySelector('.coolaxs_left_mobile_pannel');		
	coolaxs_mobile_accessibility_panel1.style.display = "none";	
	coolaxs_mobile_accessibility_panel2.style.display = "none";	
	coolaxs_mobile_accessibility_panel3.style.display = "none";	
	
	// נגישות		
	coolaxs_reCreateaccessibilityPanelAnchorSide();
	// תתי-תפריט הנגישות סגורים בהתחלה
	// these must be must be AFTER coolaxs_reCreateaccessibilityPanelAnchorSide();
	
    var coolaxs_accessibility_panel = document.querySelector('.coolaxs_accessibility_panel');
	coolaxs_accessibility_panel.style.display = 'flex';	
    var coolaxs_accessibility_panel_container = document.querySelector('.coolaxs_accessibility_panel_container');
	coolaxs_accessibility_panel_container.style.display = 'none'; //  hidden by default
	
	var coolaxs_button_group_font_size = document.querySelector('#coolaxs_button_group_font_size');
	coolaxs_button_group_font_size.style.display = 'none'; // hidden by default
	var coolaxs_button_group_letter_spacing = document.querySelector('#coolaxs_button_group_letter_spacing');
	coolaxs_button_group_letter_spacing.style.display = 'none'; // hidden by default
	var coolaxs_button_group_word_spacing = document.querySelector('#coolaxs_button_group_word_spacing');
	coolaxs_button_group_word_spacing.style.display = 'none'; // hidden by default
	var coolaxs_button_group_line_height = document.querySelector('#coolaxs_button_group_line_height');
	coolaxs_button_group_line_height.style.display = 'none'; // hidden by default
	var coolaxs_button_group_accessibility_settings = document.querySelector('#coolaxs_button_group_accessibility_settings');
	coolaxs_button_group_accessibility_settings.style.display = 'none'; // hide	

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

        if ( ! coolaxs_checkKeyboard(this,e)){
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
	
	// it is called from 2 places: from coolaxs_reCreateKeyboardShortcutsaccessibilityPanel() & from ('#coolaxs_toggle_keyboard_shortcuts_accessibility_panel').("click keypress", function(event)
	function coolaxs_KeyboardShortcuts(KeyboardShortcutsValue) {
		if (KeyboardShortcutsValue === null)
			return;
		//alert("coolaxs_KeyboardShortcuts value: "+value);

		// this is handled in: onkeydown = function(e){} above
		
		// update button background		
		var keyboardShortcuts = localStorage.getItem('COOL_ACCESSIBILITY_KeyboardShortcuts');
		//console.log("coolaxs_highlight_titles: " + coolaxs_highlight_titles);	
		if (KeyboardShortcutsValue == "true") {
			document.querySelector('#coolaxs_toggle_keyboard_shortcuts_accessibility_panel').classList.add("coolaxs_acivated_button");	
		} else {
			document.querySelector('#coolaxs_toggle_keyboard_shortcuts_accessibility_panel').classList.remove("coolaxs_acivated_button");	
			
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
	
	var coolaxs_toggle_keyboard_shortcuts_accessibility_panel_item = document.querySelector('#coolaxs_toggle_keyboard_shortcuts_accessibility_panel');
	coolaxs_toggle_keyboard_shortcuts_accessibility_panel_item.addEventListener("click", coolaxs_toggle_keyboard_shortcuts_accessibility_panel_ClickedOrKeyPressed, false);
	coolaxs_toggle_keyboard_shortcuts_accessibility_panel_item.addEventListener("keypress", coolaxs_toggle_keyboard_shortcuts_accessibility_panel_ClickedOrKeyPressed, false);	
	function coolaxs_toggle_keyboard_shortcuts_accessibility_panel_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleKeyboardShortcutsaccessibilityPanel();
		event.preventDefault();// אחרת יש גלילה של המסך		
	}
	// -------------------------------------- TOGGLE accessibility keyboard shortcuts - end ----------------	 הפעלת קיצורי דרך במקלדת לנגישות - סוף -------------------------------------------------	
		

		
		

// -------------------------------------- SHOW accessibility keyboard shortcuts - start ----------------	 תצוגת קיצורי דרך במקלדת לנגישות - התחלה -------------------------------------------------	


	

	// it is called from 2 places: from coolaxs_reCreateKeyboardShortcutsaccessibilityPanel() & from ('#coolaxs_toggle_keyboard_shortcuts_accessibility_panel').("click keypress", function(event)
	function coolaxs_ShowKeyboardShortcuts(ShowKeyboardShortcutsValue) {
		if (ShowKeyboardShortcutsValue === null)
			return;
		//alert("coolaxs_KeyboardShortcuts value: "+value);
		
		// update button background		
		var ShowKeyboardShortcutsValue = localStorage.getItem('COOL_ACCESSIBILITY_ShowKeyboardShortcuts');
		//console.log("coolaxs_highlight_titles: " + coolaxs_highlight_titles);	
		if (ShowKeyboardShortcutsValue == "true") {
			document.querySelectorAll('.coolaxs_buttons span').forEach(val => {
					val.style.display = "block";// querySelectorAll & display = "block" NOT "flex"	
			});					
			document.querySelector('#coolaxs_show_keyboard_shortcuts_accessibility_panel').classList.add('coolaxs_acivated_button');	
			document.querySelectorAll('.coolaxs_buttons_group').forEach(val => {
					val.classList.add('coolaxs_show_keyboard_shortcuts');		
			});		
				
			// if we show the shortcuts they should be active
			localStorage.setItem('COOL_ACCESSIBILITY_KeyboardShortcuts', "true");		coolaxs_KeyboardShortcuts("true");			
		} else {
			document.querySelectorAll('.coolaxs_buttons span').forEach(val => {
					val.style.display = "none";// querySelectorAll & display = "block" NOT "flex"	
			});				
			document.querySelector('#coolaxs_show_keyboard_shortcuts_accessibility_panel').classList.remove('coolaxs_acivated_button');	
			document.querySelectorAll('.coolaxs_buttons_group').forEach(val => {
					val.classList.remove('coolaxs_show_keyboard_shortcuts');		
			});	
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

	var coolaxs_show_keyboard_shortcuts_accessibility_panel_item = document.querySelector('#coolaxs_show_keyboard_shortcuts_accessibility_panel');
	coolaxs_show_keyboard_shortcuts_accessibility_panel_item.addEventListener("click", coolaxs_show_keyboard_shortcuts_accessibility_panel_ClickedOrKeyPressed, false);
	coolaxs_show_keyboard_shortcuts_accessibility_panel_item.addEventListener("keypress", coolaxs_show_keyboard_shortcuts_accessibility_panel_ClickedOrKeyPressed, false);	
	function coolaxs_show_keyboard_shortcuts_accessibility_panel_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleShowKeyboardShortcutsaccessibilityPanel(); 
		event.preventDefault();
	}

	// -------------------------------------- SHOW accessibility keyboard shortcuts - end ----------------	 תצוגת קיצורי דרך במקלדת לנגישות - סוף -------------------------------------------------	
		










		
	
	// -------------------------------------- opened accessibility panel - start ----------------	 פתיחת תפריט הנגישות - התחלה -------------------------------------------------	

	function coolaxs_toggleaccessibilityPanel(duration = 600) {

		if (htmlElement.classList.contains("coolaxs_mobile"))
			coolaxs_mobileToggleaccessibilityPanel(duration);
		else 
			coolaxs_desktopToggleaccessibilityPanel(duration);
		
		// החלפת אייקון			
		var opened_accessibility_panel = localStorage.getItem('COOL_ACCESSIBILITY_opened_accessibility_panel');	
		//console.log("opened_accessibility_panel: " + opened_accessibility_panel);	
		
		var val	= '.coolaxs_toggle_accessibility_panel img';
		var current_source_image_url = document.querySelector(val).getAttribute('src');
		
		if (opened_accessibility_panel == "true") {
			var n = current_source_image_url.indexOf("opened");

			if (n == -1) 	{
				var replaced_current_source_image_url = current_source_image_url.replace("closed","opened");// החלפת אייקון 	
				document.querySelector(val).setAttribute('src', replaced_current_source_image_url);
			}			
		} 
		else {
			var n = current_source_image_url.indexOf("closed");
			if (n == -1) 	{
				var replaced_current_source_image_url = current_source_image_url.replace("opened","closed");// החלפת אייקון 	
				document.querySelector(val).setAttribute('src', replaced_current_source_image_url);
			}
		}

			
	}// coolaxs_toggleaccessibilityPanel(duration = 600) {
	
	// for coolaxs_mobile
	function coolaxs_mobileToggleaccessibilityPanel(duration = 600) {
		// Set the effect type
		var effect = 'slide';
		// Set the options for the effect type chosen
		//var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
		
		coolaxs_accessibility_panel.style.display = 'flex';
		
		// IMPORTANT  ! : this is the direction of the coolaxs_mobile menu - not the sub menu - when clicking the coolaxs_toggle_accessibility_panel icon
		// חשוב ! - כיוון הפתיחה של התפריט - לא של תת התפריט - בזמן לחיצה על אייקון תפריט הנגישות בצד ימין למטה
		var slide_direction1;
		if (document.body.classList.contains("COOL_ACCESSIBILITY_bottom_accessibility_panel"))
			slide_direction1 = "down";
		else
			slide_direction1 = "up";			
				
		var slide_direction2 = "right";
		var slide_direction3 = "left";		
		var options1 = { direction: slide_direction1 };		
		var options2 = { direction: slide_direction2 };		
		var options3 = { direction: slide_direction3 };
		
		var coolaxs_mobile_accessibility_panel1 = document.querySelector('.coolaxs_top_or_bottom_mobile_pannel');
		var coolaxs_mobile_accessibility_panel2 = document.querySelector('.coolaxs_right_mobile_pannel');
		var coolaxs_mobile_accessibility_panel3 = document.querySelector('.coolaxs_left_mobile_pannel');		
		coolaxs_mobile_accessibility_panel1.coolaxs_slideToggle(slide_direction1,duration);	
		coolaxs_mobile_accessibility_panel2.coolaxs_slideToggle(slide_direction2,duration);		
		coolaxs_mobile_accessibility_panel3.coolaxs_slideToggle(slide_direction3,duration);		

	}// coolaxs_mobileToggleaccessibilityPanel(duration = 600) {
	
 	function coolaxs_desktopToggleaccessibilityPanel(duration = 600) {
		var coolaxs_accessibility_panel_container = document.querySelector('.coolaxs_accessibility_panel_container');
		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
		coolaxs_accessibility_panel_container.coolaxs_slideToggle(slide_direction,duration);		
	}// coolaxs_desktopToggleaccessibilityPanel(duration = 600) {

	
	// החלפת תמונה בזמן פוקוס

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
	var coolaxs_toggle_accessibility_panel_items = document.querySelectorAll('.coolaxs_toggle_accessibility_panel');
	coolaxs_toggle_accessibility_panel_items.forEach(val => {
		val.addEventListener("click", coolaxs_toggle_accessibility_panel_ClickedOrKeyPressed, false);
		val.addEventListener("keypress", coolaxs_toggle_accessibility_panel_ClickedOrKeyPressed, false);				
	});					
	function coolaxs_toggle_accessibility_panel_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
			 return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}
		coolaxs_toggleOpenedaccessibilityPanelState();
		event.preventDefault();
	}	

	
	// יצירה מחדש של פתיחת תפריט הנגישות 
	function coolaxs_reCreateOpenedaccessibilityPanel() { 
		var opened_accessibility_panel = localStorage.getItem('COOL_ACCESSIBILITY_opened_accessibility_panel');	
		if (opened_accessibility_panel == "true")
			 coolaxs_toggleaccessibilityPanel();// open it because on page load it is hidden by default
	}// function coolaxs_reCreateOpenedaccessibilityPanel()		
	
	

	
	
	
	
	function coolaxs_resetaccessibilityPanelAnchorSidecClasses() {
		document.body.classList.remove('COOL_ACCESSIBILITY_right_accessibility_panel');	
		document.body.classList.remove('COOL_ACCESSIBILITY_left_accessibility_panel');			
		document.body.classList.remove('COOL_ACCESSIBILITY_bottom_accessibility_panel');			
		document.body.classList.remove('COOL_ACCESSIBILITY_top_accessibility_panel');			
	}// coolaxs_resetaccessibilityPanelAnchorSidecClasses()
	
	function coolaxs_reCreateaccessibilityPanelAnchorSide() {
		// רק אם מישהו השתמש בתפריט הנגישות 
 		if ( localStorage.getItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide')) {
			var anchorSide = localStorage.getItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide');

			switch(anchorSide) {
				case "right": coolaxs_createRightaccessibilityPanelAnchor();					break;
				case "left": coolaxs_createLeftaccessibilityPanelAnchor();						break;
				case "bottom": coolaxs_createBottomaccessibilityPanelAnchor();		break;	
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
		document.body.classList.add('COOL_ACCESSIBILITY_right_accessibility_panel');	
		window.coolaxs_slide_accessibility_menu_direction = "right";		
		coolaxs_resize();// for mobile top & bottom different buttons		
	}	
	function coolaxs_createLeftaccessibilityPanelAnchor() {
		localStorage.setItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide', "left");
		coolaxs_resetaccessibilityPanelAnchorSidecClasses();		
		document.body.classList.add('COOL_ACCESSIBILITY_left_accessibility_panel');	
		window.coolaxs_slide_accessibility_menu_direction = "left";		
		coolaxs_resize();// for mobile top & bottom different buttons		
	}	
	function coolaxs_createBottomaccessibilityPanelAnchor() {
		localStorage.setItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide', "bottom");	
		coolaxs_resetaccessibilityPanelAnchorSidecClasses();			
		document.body.classList.add('COOL_ACCESSIBILITY_bottom_accessibility_panel');	
		window.coolaxs_slide_accessibility_menu_direction = "down";	
		coolaxs_resize();// for mobile top & bottom different buttons		
	}		
	function coolaxs_createTopaccessibilityPanelAnchor() {
		localStorage.setItem('COOL_ACCESSIBILITY_accessibilityPanelAnchorSide', "top");	
		coolaxs_resetaccessibilityPanelAnchorSidecClasses();			
		document.body.classList.add('COOL_ACCESSIBILITY_top_accessibility_panel');	
		window.coolaxs_slide_accessibility_menu_direction = "up";	
		coolaxs_resize();// for mobile top & bottom different buttons
	}		
	
	// צד עגינה של תפריט הנגישות	
	var coolaxs_right_accessibility_panel_item = document.querySelector('#coolaxs_right_accessibility_panel');
	coolaxs_right_accessibility_panel_item.addEventListener("click", coolaxs_right_accessibility_panel_ClickedOrKeyPressed, false);
	coolaxs_right_accessibility_panel_item.addEventListener("keypress", coolaxs_right_accessibility_panel_ClickedOrKeyPressed, false);	
	function coolaxs_right_accessibility_panel_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
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
	}	
	
	
	

	var coolaxs_left_accessibility_panel_item = document.querySelector('#coolaxs_left_accessibility_panel');
	coolaxs_left_accessibility_panel_item.addEventListener("click", coolaxs_left_accessibility_panel_ClickedOrKeyPressed, false);
	coolaxs_left_accessibility_panel_item.addEventListener("keypress", coolaxs_left_accessibility_panel_ClickedOrKeyPressed, false);	
	function coolaxs_left_accessibility_panel_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
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
	}		
	
	
	

	var coolaxs_bottom_accessibility_panel_item = document.querySelector('#coolaxs_bottom_accessibility_panel');
	coolaxs_bottom_accessibility_panel_item.addEventListener("click", coolaxs_bottom_accessibility_panel_ClickedOrKeyPressed, false);
	coolaxs_bottom_accessibility_panel_item.addEventListener("keypress", coolaxs_bottom_accessibility_panel_ClickedOrKeyPressed, false);	
	function coolaxs_bottom_accessibility_panel_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
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
	}		
	
	
	
	
	
	


	var coolaxs_top_accessibility_panel_item = document.querySelector('#coolaxs_top_accessibility_panel');
	coolaxs_top_accessibility_panel_item.addEventListener("click", coolaxs_top_accessibility_panel_ClickedOrKeyPressed, false);
	coolaxs_top_accessibility_panel_item.addEventListener("keypress", coolaxs_top_accessibility_panel_ClickedOrKeyPressed, false);	
	function coolaxs_top_accessibility_panel_ClickedOrKeyPressed(event) {
		if ( ! (event.which === 13 // 'Enter' key pressed 
		 || event.type === 'click')) {
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
	}		
	
	
	
	
	
	
	// -------------------------------------- opened accessibility panel - end ----------------	 פתיחת תפריט הנגישות - סוף -------------------------------------------------	
	
		

	function coolaxs_toggleFontSizeGroup() { 

 		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
 		var duration = 600;
		
		coolaxs_button_group_font_size.coolaxs_slideToggle(slide_direction,duration);

	}// function coolaxs_toggleFontSizeGroup()
	
	// כפתור הצגת שינוי גודל טקסט - פאנל נגישות

	var coolaxs_font_size_group_item = document.querySelector('#coolaxs_font_size_group');
	coolaxs_font_size_group_item.addEventListener("click", coolaxs_font_size_groupClickedOrKeyPressed, false);
	coolaxs_font_size_group_item.addEventListener("keypress", coolaxs_font_size_groupClickedOrKeyPressed, false);	
	function coolaxs_font_size_groupClickedOrKeyPressed(event) {
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		} 
		coolaxs_toggleFontSizeGroup();
		event.preventDefault();// אחרת יש גלילה של המסך		
	}	
	
	
	
	
	
	
	
	
	function coolaxs_toggleLetterSpacingGroup() { 
 		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
 		var duration = 600;
		coolaxs_button_group_letter_spacing.coolaxs_slideToggle(slide_direction,duration);
	}// function coolaxs_toggleLetterSpacingGroup()	
	

	// כפתור הצגת שינוי מרחק בין אותיות - פאנל נגישות
	var coolaxs_letter_spacing_group_item = document.querySelector('#coolaxs_letter_spacing_group');
	coolaxs_letter_spacing_group_item.addEventListener("click", coolaxs_letter_spacing_groupClickedOrKeyPressed, false);
	coolaxs_letter_spacing_group_item.addEventListener("keypress", coolaxs_letter_spacing_groupClickedOrKeyPressed, false);	
	function coolaxs_letter_spacing_groupClickedOrKeyPressed(event) {
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}  
		coolaxs_toggleLetterSpacingGroup();
		event.preventDefault();// אחרת יש גלילה של המסך
	}



	function coolaxs_toggleWordSpacingGroup() { 
 		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
 		var duration = 600;
		coolaxs_button_group_word_spacing.coolaxs_slideToggle(slide_direction,duration);
	}// function coolaxs_toggleWordSpacingGroup()		
	
	// כפתור הצגת שינוי מרחק בין מילים - פאנל נגישות
	var coolaxs_word_spacing_group_item = document.querySelector('#coolaxs_word_spacing_group');
	coolaxs_word_spacing_group_item.addEventListener("click", coolaxs_word_spacing_groupClickedOrKeyPressed, false);
	coolaxs_word_spacing_group_item.addEventListener("keypress", coolaxs_word_spacing_groupClickedOrKeyPressed, false);	
	function coolaxs_word_spacing_groupClickedOrKeyPressed(event) {
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}  
		coolaxs_toggleWordSpacingGroup();
		event.preventDefault();// אחרת יש גלילה של המסך		
	}
	
	
	
	
	function coolaxs_toggleLineHeightGroup() { 
		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
 		var duration = 600;
		coolaxs_button_group_line_height.coolaxs_slideToggle(slide_direction,duration);
	}// function coolaxs_toggleLineHeightGroup()
	
	// כפתור הצגת שינוי גובה שורה - פאנל נגישות	
	var coolaxs_line_height_group_item = document.querySelector('#coolaxs_line_height_group');
	coolaxs_line_height_group_item.addEventListener("click", coolaxs_line_height_groupClickedOrKeyPressed, false);
	coolaxs_line_height_group_item.addEventListener("keypress", coolaxs_line_height_groupClickedOrKeyPressed, false);	
	function coolaxs_line_height_groupClickedOrKeyPressed(event) {
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}  
		coolaxs_toggleLineHeightGroup();
		event.preventDefault();// אחרת יש גלילה של המסך	
	}
	
	
	// כפתור הצגת הגדרות פאנל נגישות	
	function coolaxs_toggleaccessibilitySettingsGroup() { 
		var slide_direction = window.coolaxs_slide_accessibility_menu_direction;
 		var duration = 600;
		coolaxs_button_group_accessibility_settings.coolaxs_slideToggle(slide_direction,duration);
	}// function coolaxs_toggleaccessibilitySettingsGroup()


	var coolaxs_accessibility_settings_group_item = document.querySelector('#coolaxs_accessibility_settings_group');
	coolaxs_accessibility_settings_group_item.addEventListener("click", coolaxs_accessibility_settings_groupClickedOrKeyPressed, false);
	coolaxs_accessibility_settings_group_item.addEventListener("keypress", coolaxs_accessibility_settings_groupClickedOrKeyPressed, false);	
	function coolaxs_accessibility_settings_groupClickedOrKeyPressed(event) {
		if ( ! (event.which === 13  || event.type === 'click')) {
			return;// if an event wasn't a mouse click or a keboard 'Enter' key pressed
		}  
		coolaxs_toggleaccessibilitySettingsGroup();
		event.preventDefault();// אחרת יש גלילה של המסך		
	}
	
});// ready(() => { 



function coolaxs_hasBkgcolor(val) { 
	var cssObj = window.getComputedStyle(val, null);
	var color = cssObj.getPropertyValue("background-color");// gets the actual background-color even if not set in the html tag
	
	return color != 'transparent' && color != 'rgba(0, 0, 0, 0)';
}

function coolaxs_getBackgroundImageUrl(element) {

	var cssObj = window.getComputedStyle(element, null);// this get the actual line-height even if not set in the html tag
	var imageUrl = cssObj.getPropertyValue("background-image");	
	
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
	var all_divs_Array = document. getElementsByTagName("div");
	for (let i = 0; i < all_divs_Array.length; i++) {
		var val = all_divs_Array[i];
		coolaxs_toggleBrightOrDark(i, val,str_origin,str_target,true/* is_background_image */);
 	}

	//	check all <img> src
	var all_imgs_Array = document. getElementsByTagName("img");
	for (let i = 0; i < all_imgs_Array.length; i++) {
		var val = all_imgs_Array[i];
		coolaxs_toggleBrightOrDark(i, val,str_origin,str_target,false/* is_background_image */);
 	}
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
		strUrl = val.getAttribute('src');

	if ((strUrl != "none") && (strUrl != "") && (strUrl.length > 0)) {
		if(debug) console.log( i + ") str_origin: "  + str_origin + " ,str_target: "  + str_target + " , url: " +strUrl);				

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
						// val.style.backgroundImage = new_background;
					// } else {
						// if(debug) console.log("image does NOT Exists: " +newUrl);
					// }// else of	if (exists)
					
					if (is_background_image) {
						var new_background = 'url('+ newUrl +')';
						val.style.backgroundImage = new_background;
					} else
						val.setAttribute('src', newUrl);	
					
					val.setAttribute('data-coolaxs-contrast_type', str_normal_image_type);
				}// if (n > -1)
			}// for(i=0;i<3;i++)
		} 
		else if (str_target == "_normal_contrast") {
					
			var str_target_image_type = val.getAttribute('data-coolaxs-contrast_type');
			val.setAttribute('data-coolaxs-contrast_type', null);// reset
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
						// val.style.backgroundImage = new_background;					
					// } else {
						// if(debug) console.log("image does NOT Exists: " +newUrl);
					// }
					
					if (is_background_image) {
						var new_background = 'url('+ newUrl +')';
						val.style.backgroundImage = new_background;
					} else
						val.setAttribute('src', newUrl);
						
				}// if (n > -1)
			}// for(u=0;u<2;u++)
		} else {
			if(debug) console.log("not origin or target");		
		}		

	}// if (strUrl != "") 
		
 }//  function coolaxs_toggleBrightOrDark(str_origin,str_target)



function coolaxs_append_4_text_flyouts(mbp) {
	let div1 = document.createElement('div'); div1.classList.add('coolaxs_buttons_group');
	div1.appendChild(document.querySelector("#coolaxs_font_size_group"));
	div1.appendChild(document.querySelector("#coolaxs_button_group_font_size"));

	let div2 = document.createElement('div'); div2.classList.add('coolaxs_buttons_group');
	div2.appendChild(document.querySelector("#coolaxs_line_height_group"));
	div2.appendChild(document.querySelector("#coolaxs_button_group_line_height"));

	let div3 = document.createElement('div'); div3.classList.add('coolaxs_buttons_group');
	div3.appendChild(document.querySelector("#coolaxs_letter_spacing_group"));
	div3.appendChild(document.querySelector("#coolaxs_button_group_letter_spacing"));

	let div4 = document.createElement('div'); div4.classList.add('coolaxs_buttons_group');
	div4.appendChild(document.querySelector("#coolaxs_word_spacing_group"));
	div4.appendChild(document.querySelector("#coolaxs_button_group_word_spacing"));

	mbp.appendChild(div1);
	mbp.appendChild(div2);
	mbp.appendChild(div3);
	mbp.appendChild(div4);
}


HTMLElement.prototype.coolaxs_slideToggle = function(side, duration, callback) {
	var el = this;
	var isClosed = (this.clientHeight === 0);

	if (typeof duration === 'undefined') duration = 400;
	if (typeof isClosed === 'undefined') isClosed = false;

	el.style.overflow = "hidden";
	if (isClosed) el.style.display = "block";

	var elStyles        = window.getComputedStyle(el);
	var elWidth        = parseFloat(elStyles.getPropertyValue('width'));
	var elHeight        = parseFloat(elStyles.getPropertyValue('height'));
	var stepWidth          = elWidth        / duration;
	var stepHeight        = elHeight        / duration;
	var start;

	function step(timestamp) {
		if (start === undefined) start = timestamp;
		var elapsed = timestamp - start;
		el.style.display = "flex";
		
		if (isClosed) {	// OPEN MENU
			if (side == "right")// RIGHT MENU
				el.style.transform = `translate(${(stepWidth     * (-2)    * elapsed+2*elWidth)}px,          ${((0  )    * 1*  elapsed + 0*elHeight)}px)`;
			else if (side == "left")// LEFT MENU
				el.style.transform = `translate(${(stepWidth     * (2)    * elapsed - 2*elWidth)}px,          ${((0  )    * 1*  elapsed + 0*elHeight)}px)`;
			else if (side == "up")// UP MENU
				el.style.transform = `translate(${(0        * elapsed)}px,${((stepHeight  )    * 1*  elapsed - 1 *elHeight)}px)`;
			else if (side == "down")// DOWN MENU
				el.style.transform = `translate(${(0        * elapsed)}px,${((stepHeight  )   * (-1) *  elapsed + 1 *elHeight)}px)`;
		} else {		// CLOSE MENU
			if (side == "right")// RIGHT MENU
				el.style.transform = `translate(${(stepWidth        * elapsed)}px,${((0  )    * (-1)*  elapsed + 0*elHeight)}px)`;
			else if (side == "left")// LEFT MENU
				el.style.transform = `translate(${(stepWidth      * (-1)    * elapsed)}px,${((0  )    * (-1)*  elapsed + 0*elHeight)}px)`;
			else if (side == "up")// UP MENU
				el.style.transform = `translate(${(0        * elapsed)}px,${((stepHeight  )    * (-1)*  elapsed - 0 *elHeight)}px)`;
			//else if (side == "down")// DOWN MENU
			//	el.style.transform = `translate(${(0        * elapsed)}px,${((stepHeight  )   * (1) *  elapsed + 0 *elHeight)}px)`;

			if ((side == "up") || (side == "down")) {
				  el.style.height = elHeight - (stepHeight * elapsed) + "px";
			}
		}

		if (elapsed >= duration) {
			el.style.width        = "";  
			el.style.height        = "";
			el.style.overflow      = "";
			if (!isClosed) el.style.display = "none";
			if (typeof callback === 'function') callback();
		} else {
		  window.requestAnimationFrame(step);
		}
	}// function step(timestamp)

	window.requestAnimationFrame(step);
};

	

