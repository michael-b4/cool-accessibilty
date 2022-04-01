=== Cool Accessibility ===

Contributors: michaelb4g
Donate link: 
Tags: Accessibility
Requires at least: 4.8.6 
Tested up to: 5.9.2
Requires PHP: 5.5
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Accessibility plugin - Make the site easier to read and navigate

== Description ==


This free plugin is intended to help you make your website more accessible.

It is responsive and works on desktop computers & mobile devices

You can dock the accessibility panel to any of the 4 sides in desktops and to 2 sides in mobile devices

The accessibility panel opens from an toggle icon that can be set to any of the 4 corners from the admin option panel

All the icons have a keyboard shortcut so you can control the accessibility from the keyboard even with the accessibility panel hidden
If you know any other language beside English and want to help translating the icons names to other languages please leave me a message with your email
 

LEGAL DISCLAIMER: 
This plugin does not guarantee that your website will comply with any regulations.
You can download it and install it at your own risk.
All information has been obtained from sources, which are believed to be reliable, but accuracy and thoroughness cannot be guaranteed. Readers are solely responsible for how they use this plugin and for their results. 

== Installation ==

Best is to install directly from WordPress

 If manual installation is required, please make sure that the plugin files are in a folder named “cool-accessibility” (not two nested folders) in the WordPress plugins folder, usually “wp-content/plugins”.

    Upload the entire cool-accessibility folder to the /wp-content/plugins/ directory.
    Activate the plugin through the ‘Plugins’ menu in WordPress.

You will find ‘Cool accessibility’ options page in your WordPress admin Plugins panel.


== Frequently asked questions ==

= I have updated the highlight links and/or highlight titles overrides colors in the Admin ->PlugIns->Cool Accessiblity Option page , but it doesn't show up on the website ?

1. Verify that the checkboxs above the Color Pickers boxs are enabled in the Option page
2. Force Refresh - Depending on your operating system all you need to do is the following key combination:
		Windows: ctrl + F5
		Mac/Apple: Apple + R or command + R
		Linux: F5


== Screenshots ==

Desktop Screenshots

1. https://drive.google.com/file/d/1BsDVaofMzX1NKMIgn4qWp7jgaes8Ckqt/view?usp=sharing
2. https://drive.google.com/file/d/1XnFEh53gwNmE_HywpF1if28qPpDAoDQ2/view?usp=sharing
3. https://drive.google.com/file/d/1X7vCp_QVMM0JU_oQBcMSOlKEBnrrOWAV/view?usp=sharing

Mobile Screenshots
4.https://drive.google.com/file/d/17oCFVnbr5qh8L1SH_GY1TlpsVsEB6aeT/view?usp=sharing
5.https://drive.google.com/file/d/1m7tNzd6RTbM_9wjqpmyf1Qiql-MCqnpJ/view?usp=sharing

Option Page Screenshot
6. https://drive.google.com/file/d/1GV9nYiLZbZ2iNM4RuAHAeMaaWPFwwiXk/view?usp=sharing


== Changelog ==



== Upgrade notice ==



== Wordpress Admin Options  ==

Wordpress Admin Options (under Wordpress Control Panel->Plugins->cool-accessibility):
Cool Accessibilty Declaration & Icon Screen position Settings
1. Accessibilty Declaration Page Slug (URL ) 
default page slug: site_url/website-accessibility-declaration
(Accessibilty Declaration example at the end of this file)
if you have multiple languages and you are using the Polylang plugin, cool-accessibility plugin will pick the   parallel page in the current language 

2. Accessability Icon position:
Bottom-right (default)
Bottom-left
Top-right
Top-left

3. Skip menu settings

4. Highlight link color override

5. Highlight title background color override





== Advance settings for website developers  ==

------------------------------------------------------
FONT SIZE:
===========
changing the font size intenially doesn't affect the <span> tag



HIGHLIGHT_LINKS:
================
toggles the class 'coolaxs_highlight_links' in all the header tags ( ":focusable,a" )


HIGHLIGHT_TITLES:
=================
toggles the class "coolaxs_highlight_titles_colors" in all the header tags ('h1,h2,h3,h4,h5,h6')
		

READABLE_FONT:
===============
toggles the class "coolaxs_readable_font"	


Keyboard Navigation (Tab / shift Tab icon)
================================
if you want to change things in css - this icon adds the folowing class:
 coolaxs_focus_css_activated

Keyboard Navigation Skip Menu:
=========================

the "skip to page content" message with fixed position is added to the top of the page 
with a css z-index:99 (because the zoom-text magnify glass of the cool-accessibility plug-in should be on top of that)
 if there is a <nav> tag in the page

so this means that if there is a fixed header on the top of the page its z-index should be less than 99



PREVENT ANIMATION:
===================
1.
	// the following suffix should be at every animated gif or static so javascript could toggle between them automatically
	var str_normal_image = "_static.gif";
	var str_animated_gif_image = "_animated.gif";	

2.

the plug in also toggles between these 2 embeded video autoplay modes
so the video will not autoplay upon page load

embeded video <iframe src="...?autoplay=1">
embeded video <iframe src="...?autoplay=0">

3.
if there is an automatic loop flexslider it stops it:



BRIGHT / DARK CONTRAST
=======================
1.
the plug in adds the following classes so you can further modify your css file:
coolaxs_bright_contrast
coolaxs_dark_contrast

2.
there is also an automatic image / background image flipping mode if you prefer by the suffix of the image name

2a.
if you have 3 images - 1 for normal contrast 2. for dark contrast 3. for bright contrast

add to your normal contrast image / background image the following suffix: "_normal_to_both"
so your image name becomes:
  imagename_normal_to_both.jpg
 (or imagename_normal_to_both.png or imagename_normal_to_both.gif)

and provide in the same directory 2 more images (assuming a jpg image type)
imagename_bright_contrast.jpg
imagename_dark_contrast.jpg

2b.
if you have only 2 images - 1 for normal contrast 2. for dark contrast  
and for bright contrast you use the normal contrast image
then modify your original image / background image to this:
imagename_normal_to_dark.jpg
 (or imagename_normal_to_dark.png or imagename_normal_to_dark.gif)

and provide in the same directory 1 more image (assuming a jpg image type)
imagename_dark_contrast.jpg


2c.
if you have only 2 images - 1 for normal contrast 2. for bright contrast  
and for dark contrast you use the normal contrast image
then modify your original image / background image to this:
imagename_normal_to_bright.jpg
 (or imagename_normal_to_bright.png or imagename_normal_to_bright.gif)

and provide in the same directory 1 more image (assuming a jpg image type)
imagename_bright_contrast.jpg





List of all added JavaScript classes
==========================

This is the list of all the classes that the Javascript file adds/toggles so you can modify your CSS file if you want to custom your site to this plugin:
		$html.addClass('coolaxs_mobile');
		$html.addClass('coolaxs_mobile_landscape');
$('#coolaxs_letter_spacing_group').addClass('coolaxs_acivated_button');// to all the cool accessibility plugin buttons

		$( ":focusable,a" ).addClass('coolaxs_highlight_links');
		$( 'h1,h2,h3,h4,h5,h6' ).each(function(i, val){ $(val).addClass( "coolaxs_highlight_titles_colors" );	});
		$(val).addClass( "coolaxs_bright_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).addClass( "coolaxs_bright_contrast_bkg_color" );
		$(val).addClass( "coolaxs_dark_contrast" );	if ( coolaxs_hasBkgcolor(val)  )  $(val).addClass( "coolaxs_dark_contrast_bkg_color" );	
		$("html").addClass("coolaxs_prevent_animations");
		$("*,body,a,span,li *").addClass( "coolaxs_readable_font" );	
		$("*").not(':focusable,a,span').addClass( "coolaxs_big_white_cursor" );	
		$("*").not(':focusable,a,span').addClass( "coolaxs_big_black_cursor" );	
		$('body').addClass('coolaxs_focus_css_activated');// keyboard navigation
		$('body').addClass('COOL_ACCESSIBILITY_right_accessibility_panel');
		$('body').addClass('COOL_ACCESSIBILITY_left_accessibility_panel');
		$('body').addClass('COOL_ACCESSIBILITY_bottom_accessibility_panel');
		$('body').addClass('COOL_ACCESSIBILITY_top_accessibility_panel');






Accessibility declaration example
=========================

########## attaches great importance to providing a high quality, professional and accessible service to all residents, including those with disabilities.

Measures are being carried out in order to make this website accessible.

Accessibility adjustments were made based on the recommendations for Intenet Contents at AA rating.

Browsers support:

This website support popular browsers such as:
Mozila Firefox, Google Chrome
Questions about accessibility:

For questions or suggestions regarding accessibility you may send an email to ##########

Email to: ###@#####

Telephone: ##########
Accessibility adjustments that were made:

In order to meet the accessibility requirements, several adjustments were made to the site:

    Changes to the display – The site is responsive, the site view changes depending on the device used
    Accessibility Menu – You can make a lot of changes to the site view without losing information
    Navigating using a keyboard – By pressing the Tab/Shift Tab button you can switch between areas of the site
 
For your knowledge :

The site uses the ‘local storage’ entries option in the browser to maintain the menu preferences settings and the accessibility of the pages of the site.
This ‘local storage’ is not sent back to the server and therefore does not provide any information about your browsing.
These ‘local storage’ entries are deleted when you delete cookies – and you can set any browser to delete all cookies upon closing the browser
Or alternatively if you want the accessibility menu preferences to be preserved – do not delete the cookies files


Thank you and happy surfing.

