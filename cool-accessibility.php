<?php
/**
 * Plugin Name: Cool Accessibility
 * Plugin URI: http://www.mywebsite.com/my-first-plugin
 * Description:  Accessibility plugin - Make the site easier to read and navigate
 * Version: 1.0
 * Author: Michael B.
 * Author URI: http://www.mywebsite.com
 * Text Domain: cool-accessibility
 * Domain Path: /languages 
 */
 
 
 // These constants are for the Admin Cool Accessibility plugin option page (in the Wordpress Plugins submenu)
 // Valid constant names
define("coolaxs_BOTTOM_RIGHT",     'bottom_right');
define("coolaxs_BOTTOM_LEFT",     'bottom_left');
define("coolaxs_TOP_RIGHT",     'top_right');
define("coolaxs_TOP_LEFT",     'top_left');
// Important: if you change any of the right side values here you MUST change them also on the plugin JS file and JS.min files
// -------------------------------------------------------------------------------------------------------------------------------------------------
define("coolaxs_SKIP_MENU_BUTTON_IF_NAV_TAG",     'skip_menu_button_if_nav_tag');
define("coolaxs_IF_HAS_COOLAXS_NAVIGATION_CLASS",     'if_has_coolaxs_navigation_class');
define("coolaxs_ALWAYS",     'always');
define("coolaxs_NEVER",     'never');
// Important: if you change any of the right side values here you MUST change them also on the plugin JS file and JS.min files
// -------------------------------------------------------------------------------------------------------------------------------------------------
define("coolaxs_ONLY_LINKS",     'only_links');
define("coolaxs_LINKS_AND_FOCUSABLE",     'links_and_focusable');
// default override colors
define("coolaxs_DEFAULT_HIGHLIGHT_LINKS_COLOR",    '#ef4381');
define("coolaxs_DEFAULT_HIGHLIGHT_TITLES_COLOR",     '#ffe600');


// WordPress – Using Colorpicker in your plugins
// http://jaspreetchahal.org/wordpress-using-colorpicker-in-your-plugins/  	
add_action( 'admin_enqueue_scripts', 'my_color_picker_function' );
 function my_color_picker_function() {
   wp_enqueue_style( 'wp-color-picker' );
   // I inserted the js line: $('.color-picker').wpColorPicker(); at the begining of the plugin js file to save a http request
   wp_enqueue_script( 'script_handle', plugins_url('js/accessibility_admin.js', __FILE__ ), array( 'wp-color-picker' ), false, true );
}
 add_action('wp_head', 'my_style_incl_function', 10);
function my_style_incl_function() {
	wp_enqueue_style( 'wp-color-picker' );
}
 
 // for plugins
add_action( 'init', 'coolaxs_myplugin_load_textdomain' );
function coolaxs_myplugin_load_textdomain() {
	$val = load_plugin_textdomain( 'cool-accessibility', false, basename( dirname( __FILE__ ) ) . '/languages' ); 
	//if ($val) echo "<h1>load</h1>"; else echo "<h1>not loaded</h1>";  
}
 
/*  add_action('plugins_loaded', 'wan_load_textdomain');
function wan_load_textdomain() {
	load_plugin_textdomain( 'cool-accessibility', false, dirname( cool-accessibility(__FILE__) ) . '/languages/' );
}
 */
 function coolaxs_accessibility_menu_resources() {
	// הגדרת תמיכה בג'י קו'ורי
	wp_enqueue_script( 'jquery' );
	
	//wp_register_script( 'jquery-ui.min', get_template_directory_uri().'/js/jquery-ui.min.js', array( 'jquery', 'jquery-ui-core' ), '1', true );	
	wp_register_script( 'jquery-ui.min', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js', array( 'jquery', 'jquery-ui-core' ), '1', true );
    wp_enqueue_script('jquery-ui.min'); 

/* 	wp_enqueue_style( 'coolaxs_style_accessibility_css', 'style_accessibility.css');	
	
	wp_register_script( 'coolaxs_accessibility_menu.js', '/js/coolaxs_accessibility_menu.js', array( 'jquery', 'jquery-ui-core' ), '1.0.0', true );
    wp_enqueue_script('coolaxs_accessibility_menu.js');	
 */
	 //registering javascript and css
	 wp_register_script ( 'coolaxs_accessibility_menu.js', plugins_url ( 'js/accessibility_menu.min.js', __FILE__) );// js/accessibility_menu.min.js
	 wp_register_style ( 'coolaxs_style_accessibility_css', plugins_url ( 'css/style_accessibility.min.css', __FILE__ ) );// style_accessibility.min.css	
	 wp_enqueue_script('coolaxs_accessibility_menu.js');
	wp_enqueue_style('coolaxs_style_accessibility_css');
}
add_action('wp_enqueue_scripts', 'coolaxs_accessibility_menu_resources');
 


// נגישות
// הפונקציה יוצרת לינק שנראה רק כאשר לוחצים על מקש 'טאב' בעת טעינת העמוד ומאפשר דילוג על הצגת כל אפשרויות התפריט הראשי
// it skips and get to div that is assigned the id="content" if available on the page
// this function is called from search.php & from single.php
function coolaxs_accessibility_link_option_skip_menu_to_content() {
?>
<!-- נגישות -->
<!-- the file /js/menu.js has a jQuery bind a click event to the 'coolaxs_skip' link and set focus on the content container-->
<!-- we don’t want regular users to see that link at all times at the top of the page. So we’ll hide it by offsetting its position out off the screen with CSS -->
<!-- When you hit the tab key the first time, the link will receive focus, making the :focus pseudo class kick in, and the link will be visible at the top left of the page -->
<!-- in js coolaxs_keyboardNavigation() it adds the class coolaxs_focus_css_activated and there is a coolaxs_skip and a.coolaxs_skip with that class added -->
<!-- coolaxs_skip_to_page_content_button id is used to also hide this button if there is no <nav> element in the page -->
			<a href="#content" id="coolaxs_skip_to_page_content_button" class="coolaxs_skip coolaxs_skip_rtl"><? _e('Skip to page content','cool-accessibility') ?></a>
<?php

} // coolaxs_accessibility_link_option_skip_menu_to_content() {
 
  
function coolaxs_hook_header() {


	//$lang = get_locale();// get current language
	
	$icons_dir = plugins_url( 'icons', __FILE__ );// gives: http://www.ganim.tali.org.il/wp-content/plugins/cool-accessibility/icons

	// for debug
	// echo "<h1>$icons_dir</h1>";
	$lang_dir = "";
	if ( is_rtl() )
	  $lang_dir = " dir='rtl' ";

	// get the plugin accessibilty_declaration_url option from Wordpress admin
	$cool_accessibility_options = get_option( 'cool_accessibility_option_name' );
	$accessibilty_declaration_url_0 = $cool_accessibility_options['accessibilty_declaration_url_0'];// Accessibilty Declaration URL
    $accessability_icon_position_1 = $cool_accessibility_options['accessability_icon_position_1']; // Accessability Icon position
 	// set accessibilty_skip_menu_button_mode for jquery in the plugin js file so it will decide if it needs to show the skip_menu_button in keyboard navigation mode(when the Tab icon is active)
	$accessibilty_skip_menu_button_mode = $cool_accessibility_options['accessibilty_skip_menu_button_2'];
	if (isset($cool_accessibility_options['override_coolaxs_highlight_links_class_border_bottom_color_3']) || array_key_exists('override_coolaxs_highlight_links_class_border_bottom_color_3', $cool_accessibility_options)) {
		$override_coolaxs_highlight_links_class_border_bottom_color = $cool_accessibility_options['override_coolaxs_highlight_links_class_border_bottom_color_3'];		   
	} else
		$override_coolaxs_highlight_links_class_border_bottom_color = false;// default
	
	if (isset($cool_accessibility_options['accessibilty_highlight_links_color_4']) || array_key_exists('accessibilty_highlight_links_color_4', $cool_accessibility_options)) {
		$accessibilty_highlight_links_color = $cool_accessibility_options['accessibilty_highlight_links_color_4'];		   
	} else
		$accessibilty_highlight_links_color = coolaxs_DEFAULT_HIGHLIGHT_LINKS_COLOR;
	
	$accessibilty_highlight_links_influence_button_mode = $cool_accessibility_options['accessibilty_highlight_links_influence_button_5'];
	if (isset($cool_accessibility_options['override_coolaxs_highlight_titles_class_background_color_6']) || array_key_exists('override_coolaxs_highlight_titles_class_background_color_6', $cool_accessibility_options)) {
		$override_coolaxs_highlight_titles_class_background_color = $cool_accessibility_options['override_coolaxs_highlight_titles_class_background_color_6'];	
	} else
		$override_coolaxs_highlight_titles_class_background_color = false;// default
		
	if (isset($cool_accessibility_options['accessibilty_titles_background_color_7']) || array_key_exists('accessibilty_titles_background_color_7', $cool_accessibility_options)) {
		$accessibilty_titles_background_color = $cool_accessibility_options['accessibilty_titles_background_color_7'];	
	} else
		$accessibilty_titles_background_color = coolaxs_DEFAULT_HIGHLIGHT_TITLES_COLOR;	

	// Wordpress admin radio buttons default values
	if ( ! $accessibilty_skip_menu_button_mode) $accessibilty_skip_menu_button_mode = coolaxs_SKIP_MENU_BUTTON_IF_NAV_TAG;
	if ( ! $accessibilty_highlight_links_influence_button_mode) $accessibilty_highlight_links_influence_button_mode = coolaxs_ONLY_LINKS;	
	
	?>
	<script> <!-- let the javascript file handle this variable -->

		var accessibilty_skip_menu_button_mode = "<?php echo $accessibilty_skip_menu_button_mode; ?>";
		var override_coolaxs_highlight_links_class_border_bottom_color = "<?php echo $override_coolaxs_highlight_links_class_border_bottom_color; ?>";			
		var accessibilty_highlight_links_color = "<?php echo $accessibilty_highlight_links_color; ?>";				
		var accessibilty_highlight_links_influence_button_mode = "<?php echo $accessibilty_highlight_links_influence_button_mode; ?>";		
		var override_coolaxs_highlight_titles_colors_class_background_color = "<?php echo $override_coolaxs_highlight_titles_class_background_color; ?>";			
		var accessibilty_titles_background_color = "<?php echo $accessibilty_titles_background_color; ?>";				
		
	</script>
	<?php  
   
   
	// get the traslated accessability declaration page
	if ($accessibilty_declaration_url_0) 
		$accessibility_declaration_page_slug = $accessibilty_declaration_url_0;		
	else
		$accessibility_declaration_page_slug = 'website-accessibility-declaration';//default	slug if nothing was set in Wordpress admin Plug-in->cool Accessibilty->options

	//default	accessibility position if nothing was set in the wordpress dashboard pPlugins->Cool Accesibility Options
	if ( ! $accessability_icon_position_1) 
		$accessability_icon_position_1 = coolaxs_BOTTOM_RIGHT;	
	
	$accessibility_declaration_page_exist = false; 	
	$accessibility_declaration_page = get_page_by_path( $accessibility_declaration_page_slug );
	if ($accessibility_declaration_page  != null) {
		$accessibility_declaration_page_id = $accessibility_declaration_page->ID;	
		 if ( get_post_status($accessibility_declaration_page_id) ) {	
			// pll_get_post is a Polylang plugin function // It returns the id of the translated post or page as integer to the current language
			 if (function_exists('pll_get_post')) {
				  $accessibility_declaration_page_id = pll_get_post($accessibility_declaration_page_id);
			}
			$accessibility_declaration_page_link = esc_url( get_page_link( $accessibility_declaration_page_id ) );	
			$accessibility_declaration_page_exist = true;
		 }// if ( get_post_status($accessibility_declaration_page_id) ) {	
	}// if ($accessibility_declaration_page  != null)

 	// for debug
	//if (function_exists('pll_current_language')) echo pll_current_language();
	//echo "  " . $accessibility_declaration_page_link; 

?>	
	<div <? echo $lang_dir; ?> id="coolaxs_tail"></div><!-- עבור מסגרת צפה של זום על הטקסט בנגישות - התוכן והמיקום נשלטים ע"י ג'י קו'ורי בקובץ מניו menu.js -->
	
	<div class="coolaxs_toggle_accessibility_panel coolaxs_accessibility_panel_position_<? echo $accessability_icon_position_1;?>">
		<!-- the src image is conroled by js -->
		<div>
			<img src= "<? echo $icons_dir; ?>/accessibility_toggle_closed.png" alt="<? _e('Toggle accessibility panel','cool-accessibility') ?>">
		</div>
		<span>Alt 0</span>
	</div><!-- <div class="coolaxs_toggle_accessibility_panel"> -->
	
	<!-- תפריט נגישות -->
	<!-- תפריט נגישות למחשבים מרזולוציה של 1024 -->	
	<!-- I changed all these coolaxs_buttons to divs with role="button" because they caused page scrolling on the first click when then accessibility menu was docked to the bottom of the screen-->			
	<div class="coolaxs_desktop_accessibility_panel" dir="rtl"><!-- widthout	dir="rtl" in some websites like midrash tmuna it flips the icons and in the right side docking open the submenu to the right instead of to the left -->
		<div class="coolaxs_accessibility_panel_container coolaxs_appos_<? echo $accessability_icon_position_1;?>">	<!-- coolaxs_appos_ stands for coolaxs_accessibility_panel_position_ but it must be a different name than it to work properly because there is alerady a class with that name -->
			<div class="coolaxs_accessibility_panel" >
			
				<div class="coolaxs_buttons_group">
					<div role="button" class="coolaxs_buttons" id="coolaxs_accessibility_settings_group"><img src= "<? echo $icons_dir; ?>/settings.png" alt="<? _e('Accessibility settings','cool-accessibility') ?>"  ><span dir="ltr">Alt S</span></div>	
					<div id="coolaxs_button_group_accessibility_settings">
						<div role="button" class="coolaxs_buttons" id="coolaxs_top_accessibility_panel"><img src= "<? echo $icons_dir; ?>/dock_access_menu_top.png" alt="<? _e('Top accessibility panel','cool-accessibility') ?>"  ><span>Alt 1</span></div>			
						<div role="button" class="coolaxs_buttons" id="coolaxs_right_accessibility_panel"><img src= "<? echo $icons_dir; ?>/dock_access_menu_right.png" alt="<? _e('Right accessibility panel','cool-accessibility') ?>"  ><span>Alt 2</span></div>
						<div role="button" class="coolaxs_buttons" id="coolaxs_bottom_accessibility_panel"><img src= "<? echo $icons_dir; ?>/dock_access_menu_bottom.png" alt="<? _e('Bottom accessibility panel','cool-accessibility') ?>"  ><span>Alt 3</span></div>
						<div role="button" class="coolaxs_buttons" id="coolaxs_left_accessibility_panel"><img src= "<? echo $icons_dir; ?>/dock_access_menu_left.png" alt="<? _e('Left accessibility panel','cool-accessibility') ?>"  ><span>Alt 4</span></div>
						<div role="button" class="coolaxs_buttons" id="coolaxs_show_keyboard_shortcuts_accessibility_panel"><img src= "<? echo $icons_dir; ?>/show_keyboard_shortcuts.png" alt="<? _e('Show keyboard shortcuts accessibility panel','cool-accessibility') ?>"  ><span>Alt 5</span></div>
						<div role="button" class="coolaxs_buttons" id="coolaxs_toggle_keyboard_shortcuts_accessibility_panel"><img src= "<? echo $icons_dir; ?>/toggle_keyboard_shortcuts.png" alt="<? _e('Toggle keyboard shortcuts accessibility panel','cool-accessibility') ?>"  ><span>Alt 6</span></div>
						<?php 
						 if ($accessibility_declaration_page_exist) {// display the '?' button only if the page exist	
						?>
							<div role="button" class="coolaxs_buttons" id="coolaxs_help_accessibility_panel" style="text">
								<a target="_blank" href="<?php echo $accessibility_declaration_page_link; ?>">						
									<img src= "<? echo $icons_dir; ?>/help.png" alt="<? _e('Accessibility declaration','cool-accessibility') ?>"  >
									<span>Alt&nbsp;7</span>
								</a>							
							</div>		
						<?php 
						} //if ($accessibility_declaration_page_exist)
						?>						
						
						

										
					

						
					</div>
				</div>	
				
				 <div role="button" class="coolaxs_buttons" id="coolaxs_reset_all_accessibility"><img src= "<? echo $icons_dir; ?>/revert.png" alt="<? _e('Reset all accessibility','cool-accessibility') ?>"  ><span>Alt Q</span></div>

				<div class="coolaxs_buttons_group">
							 <div role="button" class="coolaxs_buttons" id="coolaxs_font_size_group"><img src= "<? echo $icons_dir; ?>/font_size.png" alt="<? _e('Change font size','cool-accessibility') ?>"  ><span >Alt A</span></div>
							<div id="coolaxs_button_group_font_size">
								<div role="button" class="coolaxs_buttons" id="coolaxs_increase_font_size"><img src= "<? echo $icons_dir; ?>/increase.png" alt="<? _e('Increase font size','cool-accessibility') ?>"  ><span dir="ltr">Alt +</span></div>
								<div role="button" class="coolaxs_buttons" id="coolaxs_reset_font_size"><img src= "<? echo $icons_dir; ?>/revert.png" alt="<? _e('Reset font size','cool-accessibility') ?>"  ><span>Alt X</span></div>
								 <div role="button" class="coolaxs_buttons" id="coolaxs_decrease_font_size"><img src= "<? echo $icons_dir; ?>/decrease.png" alt="<? _e('Decrease font size','cool-accessibility') ?>"  ><span dir="ltr">Alt -</span></div>
							</div>
				</div>
				
				<div class="coolaxs_buttons_group">
					<div role="button" class="coolaxs_buttons" id="coolaxs_line_height_group"><img src= "<? echo $icons_dir; ?>/line_height.png" alt="<? _e('Change line height ','cool-accessibility') ?>"  ><span dir="ltr">Alt H</span></div>	
					<div id="coolaxs_button_group_line_height">
						<div role="button" class="coolaxs_buttons" id="coolaxs_increase_line_height"><img src= "<? echo $icons_dir; ?>/increase.png" alt="<? _e('Increase line height','cool-accessibility') ?>"  ><span>Alt U</span></div>
						<div role="button" class="coolaxs_buttons" id="coolaxs_reset_line_height"><img src= "<? echo $icons_dir; ?>/revert.png" alt="<? _e('Reset line height','cool-accessibility') ?>"  ><span>Alt J</span></div>
						 <div role="button" class="coolaxs_buttons" id="coolaxs_decrease_line_height"><img src= "<? echo $icons_dir; ?>/decrease.png" alt="<? _e('Decrease line height','cool-accessibility') ?>"  ><span>Alt M</span></div>
					</div>
				</div>	
				
				<div class="coolaxs_buttons_group">
					<div role="button" class="coolaxs_buttons" id="coolaxs_letter_spacing_group"><img src= "<? echo $icons_dir; ?>/letter_spacing.png" alt="<? _e('Change letter spacing','cool-accessibility') ?>"  ><span dir="ltr">Alt &gt;</span></div>	
					<div id="coolaxs_button_group_letter_spacing">
						<div role="button" class="coolaxs_buttons" id="coolaxs_increase_letter_spacing"><img src= "<? echo $icons_dir; ?>/increase.png" alt="<? _e('Increase letter spacing','cool-accessibility') ?>"  ><span>Alt R</span></div>
						<div role="button" class="coolaxs_buttons" id="coolaxs_reset_letter_spacing"><img src= "<? echo $icons_dir; ?>/revert.png" alt="<? _e('Reset letter spacing','cool-accessibility') ?>"  ><span>Alt F</span></div>
						 <div role="button" class="coolaxs_buttons" id="coolaxs_decrease_letter_spacing"><img src= "<? echo $icons_dir; ?>/decrease.png" alt="<? _e('Decrease letter spacing','cool-accessibility') ?>"  ><span>Alt V</span></div>
					</div>
				</div>		

				<div class="coolaxs_buttons_group">
					<div role="button" class="coolaxs_buttons" id="coolaxs_word_spacing_group"><img src= "<? echo $icons_dir; ?>/word_spacing.png" alt="<? _e('Change word spacing','cool-accessibility') ?>"  ><span dir="ltr">Alt &lt;</span></div>	
					<div id="coolaxs_button_group_word_spacing">
						<div role="button" class="coolaxs_buttons" id="coolaxs_increase_word_spacing"><img src= "<? echo $icons_dir; ?>/increase.png" alt="<? _e('Increase word spacing','cool-accessibility') ?>"  ><span>Alt E</span></div>
						<div role="button" class="coolaxs_buttons" id="coolaxs_reset_word_spacing"><img src= "<? echo $icons_dir; ?>/revert.png" alt="<? _e('Reset word spacing','cool-accessibility') ?>"  ><span>Alt D</span></div>
						 <div role="button" class="coolaxs_buttons" id="coolaxs_decrease_word_spacing"><img src= "<? echo $icons_dir; ?>/decrease.png" alt="<? _e('Decrease word spacing','cool-accessibility') ?>"  ><span>Alt C</span></div>
					</div>
				</div>			
				

				<div role="button" class="coolaxs_buttons" id="coolaxs_readable_font"><img src= "<? echo $icons_dir; ?>/readable_font.png" alt="<? _e('Readable font','cool-accessibility') ?>"  ><span>Alt G</span></div>
				<div class="coolaxs_buttons" id="coolaxs_highlight_titles"> <img src= "<? echo $icons_dir; ?>/titles.png" alt="<? _e('Highlight titles','cool-accessibility') ?>"  > <span>Alt T</span></div>	
				<div role="button" type="button" class="coolaxs_buttons" id="coolaxs_highlight_links"> <img src= "<? echo $icons_dir; ?>/links.png" alt="<? _e('Highlight links','cool-accessibility') ?>"  > <span>Alt L</span></div>	
				
				<div role="button" class="coolaxs_buttons" id="coolaxs_text_zoom"> <img src= "<? echo $icons_dir; ?>/zoom_text.png" alt="<? _e('Text zoom','cool-accessibility') ?>"  ><span>Alt Z</span> </div>	
				<div role="button" class="coolaxs_buttons" id="coolaxs_invert_colors"><img src= "<? echo $icons_dir; ?>/invert_colors.png" alt="<? _e('Invert colors','cool-accessibility') ?>"  ><span>Alt I</span></div>
				<div role="button" class="coolaxs_buttons" id="coolaxs_bright_contrast"> <img src= "<? echo $icons_dir; ?>/bright_contrast.png" alt="<? _e('Bright contrast','cool-accessibility') ?>"  ><span>Alt W</span> </div>	
				<div role="button" class="coolaxs_buttons" id="coolaxs_dark_contrast"> <img src= "<? echo $icons_dir; ?>/dark_contrast.png" alt="<? _e('Dark contrast','cool-accessibility') ?>"  > <span>Alt B</span></div>	

				<div role="button" class="coolaxs_buttons" id="coolaxs_keyboard_navigation"><img src= "<? echo $icons_dir; ?>/Tab.png" alt="<? _e('Keyboard navigation','cool-accessibility') ?>"  ><span>Alt K</span></div>
				<div role="button" class="coolaxs_buttons" id="coolaxs_big_white_cursor"> <img src= "<? echo $icons_dir; ?>/cursor_size_white.png" alt="<? _e('Big white cursor','cool-accessibility') ?>"  > <span>Alt Y</span></div>	
				<div role="button" class="coolaxs_buttons" id="coolaxs_big_black_cursor"> <img src= "<? echo $icons_dir; ?>/cursor_size_black.png" alt="<? _e('Big black cursor','cool-accessibility') ?>"  > <span>Alt N</span></div>	
				<div role="button" class="coolaxs_buttons" id="coolaxs_stop_animations"><img src= "<? echo $icons_dir; ?>/prevent-animation_transparent_desat.png" alt="<? _e('Prevent animation','cool-accessibility') ?>"  ><span>Alt P</span></div>	


			</div><!-- <div class="coolaxs_accessibility_panel" > -->
		</div><!-- <div class="coolaxs_accessibility_panel_container">	 -->
	</div><!-- <div class="coolaxs_desktop_accessibility_panel">	 -->

	<!-- תפריט נגישות פלאפונים עד רזולוציה של 1024 -->
	<!-- jQuery in /js/menu.js will append(cut & paste) all the coolaxs_buttons here for coolaxs_mobile (because they are with id that should only occur once) -->
	<div class="coolaxs_mobile_accessibility_panel">		
		<div class="coolaxs_accessibility_panel_container">
			<div class="coolaxs_accessibility_panel" >
				<div class="coolaxs_right_mobile_pannel"></div>	
				<div class="coolaxs_left_mobile_pannel"></div>
				<div class="coolaxs_top_or_bottom_mobile_pannel"></div>				
			</div><!-- <div class="coolaxs_accessibility_panel" > -->	
		</div><!-- <div class="coolaxs_accessibility_panel_container">	 -->
	</div><!-- <div class="coolaxs_mobile_accessibility_panel">	 -->
	
	<div class="coolaxs_invertfunction"onclick="coolaxs_invertFunction(this)">
	  <div id="coolaxs_onbutton">
		<div id="coolaxs_movingbutton">
		</div>
	  </div>
	</div>
<?php	

	// נגישות
	// הפונקציה יוצרת לינק שנראה רק כאשר לוחצים על מקש 'טאב' בעת טעינת העמוד ומאפשר דילוג על הצגת כל אפשרויות התפריט הראשי
	// this add the "coolaxs_skip" class
	// this function is called from search.php & from single.php
	coolaxs_accessibility_link_option_skip_menu_to_content();// in functions.php // this should be called the first thing in the page BEFORE the header
	
}// function coolaxs_hook_header() {
add_action('wp_head','coolaxs_hook_header');








/**
 * Generated by the WordPress Option Page generator
 * at http://jeremyhixon.com/wp-tools/option-page/
 */

class CoolAccessibility {
	private $cool_accessibility_options;

	public function __construct() {
		add_action( 'admin_menu', array( $this, 'cool_accessibility_add_plugin_page' ) );
		add_action( 'admin_init', array( $this, 'cool_accessibility_page_init' ) );
	}

	public function cool_accessibility_add_plugin_page() {
		add_plugins_page(
			'Cool Accessibility', // page_title
			'Cool Accessibility', // menu_title
			'manage_options', // capability
			'cool-accessibility', // menu_slug
			array( $this, 'cool_accessibility_create_admin_page' ) // function
		);
	}

	public function cool_accessibility_create_admin_page() {
		$this->cool_accessibility_options = get_option( 'cool_accessibility_option_name' ); ?>

		<div class="wrap">
			<h2>cool-accessibility</h2>
			<p>Cool Accessibilty Declaration, Icon Screen position & Keyboard Navigation 'Skip to page content' button</p>
			<?php settings_errors(); ?>

			<form method="post" action="options.php">
				<?php
					settings_fields( 'cool_accessibility_option_group' );
					do_settings_sections( 'cool-accessibility-admin' );
					submit_button();
				?>
			</form>
		</div>
	<?php }

	public function cool_accessibility_page_init() {
		register_setting(
			'cool_accessibility_option_group', // option_group
			'cool_accessibility_option_name', // option_name
			array( $this, 'cool_accessibility_sanitize' ) // sanitize_callback
		);

		add_settings_section(
			'cool_accessibility_setting_section', // id
			'Settings', // title
			array( $this, 'cool_accessibility_section_info' ), // callback
			'cool-accessibility-admin' // page
		);

		add_settings_field(
			'accessibilty_declaration_url_0', // id
			'Accessibilty Declaration Page Slug (URL )', // title
			array( $this, 'accessibilty_declaration_url_0_callback' ), // callback
			'cool-accessibility-admin', // page
			'cool_accessibility_setting_section' // section
		);

		add_settings_field(
			'accessability_icon_position_1', // id
			'Accessability Icon position', // title
			array( $this, 'accessability_icon_position_1_callback' ), // callback
			'cool-accessibility-admin', // page
			'cool_accessibility_setting_section' // section
		);
		
		add_settings_field(
			'accessibilty_skip_menu_button_2', // id
			"Accessibilty 'Skip to page content' Button (only used in Keyboard Navigation mode - Tab icon button)", // title
			array( $this, 'accessibilty_skip_menu_button_2_callback' ), // callback
			'cool-accessibility-admin', // page
			'cool_accessibility_setting_section' // section
		);
		
		add_settings_field(
			'override_coolaxs_highlight_links_class_border_bottom_color_3', // id
			'Highlight links class coolaxs_highlight_links ', // title
			array( $this, 'override_coolaxs_highlight_links_class_border_bottom_color_3_callback' ), // callback
			'cool-accessibility-admin', // page
			'cool_accessibility_setting_section' // section
		);
		
		add_settings_field(
			'accessibilty_highlight_links_color_4', // id
			'', // title
			array( $this, 'accessibilty_highlight_links_color_4_callback' ), // callback
			'cool-accessibility-admin', // page
			'cool_accessibility_setting_section' // section
		);		

		add_settings_field(
			'accessibilty_highlight_links_influence_button_5', // id
			'Highlight links influence', // title
			array( $this, 'accessibilty_highlight_links_influence_button_5_callback' ), // callback
			'cool-accessibility-admin', // page
			'cool_accessibility_setting_section' // section
		);			

		add_settings_field(
			'override_coolaxs_highlight_titles_class_background_color_6', // id
			'Highlight title class coolaxs_highlight_titles_colors ', // title
			array( $this, 'override_coolaxs_highlight_titles_class_background_color_6_callback' ), // callback
			'cool-accessibility-admin', // page
			'cool_accessibility_setting_section' // section
		);
		add_settings_field(
			'accessibilty_titles_background_color_7', // id
			'', // title
			array( $this, 'accessibilty_titles_background_color_7_callback' ), // callback
			'cool-accessibility-admin', // page
			'cool_accessibility_setting_section' // section
		);				
		
	}

	public function cool_accessibility_sanitize($input) {
		$sanitary_values = array();
		if ( isset( $input['accessibilty_declaration_url_0'] ) ) {
			$sanitary_values['accessibilty_declaration_url_0'] = sanitize_text_field( $input['accessibilty_declaration_url_0'] );
		}

		if ( isset( $input['accessability_icon_position_1'] ) ) {
			$sanitary_values['accessability_icon_position_1'] = $input['accessability_icon_position_1'];
		}
		
		if ( isset( $input['accessibilty_skip_menu_button_2'] ) ) {
			$sanitary_values['accessibilty_skip_menu_button_2'] = $input['accessibilty_skip_menu_button_2'];
		}
		
		if ( isset( $input['override_coolaxs_highlight_links_class_border_bottom_color_3'] ) ) {
			$sanitary_values['override_coolaxs_highlight_links_class_border_bottom_color_3'] = $input['override_coolaxs_highlight_links_class_border_bottom_color_3'];
		}		
		
		if ( isset( $input['accessibilty_highlight_links_color_4'] ) ) {
			$sanitary_values['accessibilty_highlight_links_color_4'] = sanitize_text_field( $input['accessibilty_highlight_links_color_4'] );
		}		

		if ( isset( $input['accessibilty_highlight_links_influence_button_5'] ) ) {
			$sanitary_values['accessibilty_highlight_links_influence_button_5'] = sanitize_text_field( $input['accessibilty_highlight_links_influence_button_5'] );
		}			

		if ( isset( $input['override_coolaxs_highlight_titles_class_background_color_6'] ) ) {
			$sanitary_values['override_coolaxs_highlight_titles_class_background_color_6'] = $input['override_coolaxs_highlight_titles_class_background_color_6'];
		}				
		if ( isset( $input['accessibilty_titles_background_color_7'] ) ) {
			$sanitary_values['accessibilty_titles_background_color_7'] = sanitize_text_field( $input['accessibilty_titles_background_color_7'] );
		}				
		
		
		
		return $sanitary_values;
	}

	public function cool_accessibility_section_info() {
		
	}

	public function accessibilty_declaration_url_0_callback() {

		if (is_rtl()) $text_align = "right"; else $text_align = "left";// get the wordpress admin dashboard user->profile language direction
		
		$site_url = site_url();
		printf(
			"<div dir='ltr' style='text-align: $text_align;'><span style='color:gray;'>$site_url/<span><input class='regular-text' type='text' name='cool_accessibility_option_name[accessibilty_declaration_url_0]' id='accessibilty_declaration_url_0' value='%s' placeholder='website-accessibility-declaration'></div>",
			isset( $this->cool_accessibility_options['accessibilty_declaration_url_0'] ) ? esc_attr( $this->cool_accessibility_options['accessibilty_declaration_url_0']) : ''
		);
	}

	public function accessability_icon_position_1_callback() {
		?> <select name="cool_accessibility_option_name[accessability_icon_position_1]" id="accessability_icon_position_1">
			<?php $selected = (isset( $this->cool_accessibility_options['accessability_icon_position_1'] ) && $this->cool_accessibility_options['accessability_icon_position_1'] === coolaxs_BOTTOM_RIGHT) ? 'selected' : '' ; ?>
			<option value="<?php echo coolaxs_BOTTOM_RIGHT; ?>" <?php echo $selected; ?>>Bottom right</option>
			<?php $selected = (isset( $this->cool_accessibility_options['accessability_icon_position_1'] ) && $this->cool_accessibility_options['accessability_icon_position_1'] === coolaxs_BOTTOM_LEFT) ? 'selected' : '' ; ?>
			<option value="<?php echo coolaxs_BOTTOM_LEFT; ?>" <?php echo $selected; ?>>Bottom left</option>
			<?php $selected = (isset( $this->cool_accessibility_options['accessability_icon_position_1'] ) && $this->cool_accessibility_options['accessability_icon_position_1'] === coolaxs_TOP_RIGHT) ? 'selected' : '' ; ?>
			<option value="<?php echo coolaxs_TOP_RIGHT; ?>" <?php echo $selected; ?>>Top right</option>
			<?php $selected = (isset( $this->cool_accessibility_options['accessability_icon_position_1'] ) && $this->cool_accessibility_options['accessability_icon_position_1'] === coolaxs_TOP_LEFT) ? 'selected' : '' ; ?>
			<option value="<?php echo coolaxs_TOP_LEFT; ?>" <?php echo $selected; ?>>Top left</option>
		</select> <?php
	}

	public function accessibilty_skip_menu_button_2_callback() {
		?>
		<fieldset>
			<?php $checked = ( isset( $this->cool_accessibility_options['accessibilty_skip_menu_button_2'] ) && $this->cool_accessibility_options['accessibilty_skip_menu_button_2'] === coolaxs_SKIP_MENU_BUTTON_IF_NAV_TAG ) ? 'checked' : 'checked' ; ?>
			<label for="accessibilty_skip_menu_button_2-0"><input type="radio" name="cool_accessibility_option_name[accessibilty_skip_menu_button_2]" id="accessibilty_skip_menu_button_2-0" value="<?php echo coolaxs_SKIP_MENU_BUTTON_IF_NAV_TAG; ?>" <?php echo $checked; ?>> If the html page contains a &lt;nav&gt; tag (default)</label><br>
			<?php $checked = ( isset( $this->cool_accessibility_options['accessibilty_skip_menu_button_2'] ) && $this->cool_accessibility_options['accessibilty_skip_menu_button_2'] === coolaxs_IF_HAS_COOLAXS_NAVIGATION_CLASS ) ? 'checked' : '' ; ?>
			<label for="accessibilty_skip_menu_button_2-1"><input type="radio" name="cool_accessibility_option_name[accessibilty_skip_menu_button_2]" id="accessibilty_skip_menu_button_2-1" value="<?php echo coolaxs_IF_HAS_COOLAXS_NAVIGATION_CLASS; ?>" <?php echo $checked; ?>> If the html page contains the class name: coolaxs_navigation</label><br>
			<?php $checked = ( isset( $this->cool_accessibility_options['accessibilty_skip_menu_button_2'] ) && $this->cool_accessibility_options['accessibilty_skip_menu_button_2'] === coolaxs_ALWAYS ) ? 'checked' : '' ; ?>
			<label for="accessibilty_skip_menu_button_2-3"><input type="radio" name="cool_accessibility_option_name[accessibilty_skip_menu_button_2]" id="accessibilty_skip_menu_button_2-3" value="<?php echo coolaxs_ALWAYS; ?>" <?php echo $checked; ?>> Always in Keyboard Navigation mode (when the Tab icon button is active)</label><br>
			<?php $checked = ( isset( $this->cool_accessibility_options['accessibilty_skip_menu_button_2'] ) && $this->cool_accessibility_options['accessibilty_skip_menu_button_2'] === coolaxs_NEVER ) ? 'checked' : '' ; ?>
			<label for="accessibilty_skip_menu_button_2-2"><input type="radio" name="cool_accessibility_option_name[accessibilty_skip_menu_button_2]" id="accessibilty_skip_menu_button_2-2" value="<?php echo coolaxs_NEVER; ?>" <?php echo $checked; ?>> Never</label>
		</fieldset> 
		<?php
				if (is_rtl()) $text_align = "right"; else $text_align = "left";// get the wordpress admin dashboard user->profile language direction
		?> 
		<br>
		<div dir="ltr" style='text-align:<?php echo $text_align; ?>; color:gray;'>
			Skip to page content order:  <br>
			If the html page contains the id: coolaxs_skip_menu_to_this_id<br>
			( Example: &lt;div id="coolaxs_skip_menu_to_this_id" &gt; some text &lt;/div&gt; )<br>
			Clicking or pressing the 'Tab' key when the page loads will show the<br>
			'Skip to page content' button at the top of the page.<br>
			When the 'Skip to page content' button appears clicking or pressing the 'Enter' key<br>
			will skip and highlight the location of the tag with the id within the page<br>
			else it will skip to the first tag it finds in this order:<br>
			<ul>
				<li>First title (&lt;h1&gt; or &lt;h2&gt;...&lt;h6&gt; tags) </li>
				<li>First paragraph (&lt;p&gt; tag) </li>			
				<li>First link (&lt;a&gt; tag) </li>			
			</ul>
		</div>

		<!-- some other code -->
		<?php

	}

	
	
	public function override_coolaxs_highlight_links_class_border_bottom_color_3_callback() {
		printf(
			'<input type="checkbox" name="cool_accessibility_option_name[override_coolaxs_highlight_links_class_border_bottom_color_3]" id="override_coolaxs_highlight_links_class_border_bottom_color_3" value="override_coolaxs_highlight_links_class_border_bottom_color_3" %s> <label dir="ltr" for="override_coolaxs_highlight_links_class_border_bottom_color_3">Use the color below to replace the class highlight color (border-bottom-color) ? </label>',
			( isset( $this->cool_accessibility_options['override_coolaxs_highlight_links_class_border_bottom_color_3'] ) && $this->cool_accessibility_options['override_coolaxs_highlight_links_class_border_bottom_color_3'] === 'override_coolaxs_highlight_links_class_border_bottom_color_3' ) ? 'checked' : ''
		);
	}
	
	
	
	public function accessibilty_highlight_links_color_4_callback() {

		if (is_rtl()) {
			$text_align = "right";
			$flex_direction = "row-reverse";	
		}
		else {
			$text_align = "left";// get the wordpress admin dashboard user->profile language direction
			$flex_direction = "row";			
		}
	
		$site_url = site_url();
		$highlight_links_color = coolaxs_DEFAULT_HIGHLIGHT_LINKS_COLOR;
		printf(
			"<div dir='ltr' style='text-align: $text_align; display:flex; align-items: center; flex-direction: $flex_direction'><input  type='text' class='color-picker' name='cool_accessibility_option_name[accessibilty_highlight_links_color_4]' id='accessibilty_highlight_links_color_4' value='%s' data-default-color='$highlight_links_color' ><span style='margin-bottom:6px;'>&nbsp;Highlight links override color</span></div>",
			isset( $this->cool_accessibility_options['accessibilty_highlight_links_color_4'] ) ? esc_attr( $this->cool_accessibility_options['accessibilty_highlight_links_color_4']) : ''
		);
		?>
			<!--		
 <script type="text/javascript">
  jQuery(document).ready(function($){
           $('.color-picker').wpColorPicker();
  });
</script> -->
			<!--	
		<input type="text" class="color-picker" name="cool_accessibility_option_name[accessibilty_highlight_links_color_4]" value="<?php echo $this->cool_accessibility_options['accessibilty_highlight_links_color_4']; ?>" data-default-color="#ef4381" />
	-->		
	<em id="__mceDel">	<!-- some other code --></em>

			<?php
	}	
	
	public function accessibilty_highlight_links_influence_button_5_callback() {
		?>
		<fieldset>
			<?php $checked = ( isset( $this->cool_accessibility_options['accessibilty_highlight_links_influence_button_5'] ) && $this->cool_accessibility_options['accessibilty_highlight_links_influence_button_5'] === coolaxs_ONLY_LINKS ) ? 'checked' : 'checked' ; ?>
			<label for="accessibilty_highlight_links_influence_button_5-0"><input type="radio" name="cool_accessibility_option_name[accessibilty_highlight_links_influence_button_5]" id="accessibilty_highlight_links_influence_button_5-0" value="<?php echo coolaxs_ONLY_LINKS; ?>" <?php echo $checked; ?>> Only highlight links</label><br>
			<?php $checked = ( isset( $this->cool_accessibility_options['accessibilty_highlight_links_influence_button_5'] ) && $this->cool_accessibility_options['accessibilty_highlight_links_influence_button_5'] === coolaxs_LINKS_AND_FOCUSABLE ) ? 'checked' : '' ; ?>
			<label for="accessibilty_highlight_links_influence_button_5-1"><input type="radio" name="cool_accessibility_option_name[accessibilty_highlight_links_influence_button_5]" id="accessibilty_highlight_links_influence_button_5-1" value="<?php echo coolaxs_LINKS_AND_FOCUSABLE; ?>" <?php echo $checked; ?>> Highlight links and any focusable objects</label><br>
		</fieldset> 
		<?php
	}	
	
	public function override_coolaxs_highlight_titles_class_background_color_6_callback() {
		printf(
			'<input type="checkbox" name="cool_accessibility_option_name[override_coolaxs_highlight_titles_class_background_color_6]" id="override_coolaxs_highlight_titles_class_background_color_6" value="override_coolaxs_highlight_titles_class_background_color_6" %s> <label dir="ltr" for="override_coolaxs_highlight_titles_class_background_color_6">Use the color below to replace the class title background color ? </label>',
			( isset( $this->cool_accessibility_options['override_coolaxs_highlight_titles_class_background_color_6'] ) && $this->cool_accessibility_options['override_coolaxs_highlight_titles_class_background_color_6'] === 'override_coolaxs_highlight_titles_class_background_color_6' ) ? 'checked' : ''
		);
	}	
	
	public function accessibilty_titles_background_color_7_callback() {

		if (is_rtl()) {
			$text_align = "right";
			$flex_direction = "row-reverse";	
		}
		else {
			$text_align = "left";// get the wordpress admin dashboard user->profile language direction
			$flex_direction = "row";			
		}
	
		$site_url = site_url();
		$highlight_titles_color = coolaxs_DEFAULT_HIGHLIGHT_TITLES_COLOR;
		printf(
			"<div dir='ltr' style='text-align: $text_align; display:flex; align-items: center; flex-direction: $flex_direction'><input  type='text' class='color-picker' name='cool_accessibility_option_name[accessibilty_titles_background_color_7]' id='accessibilty_titles_background_color_7' value='%s' data-default-color='$highlight_titles_color' ><span style='margin-bottom:6px;'>&nbsp;Titles override background color</span></div>",
			isset( $this->cool_accessibility_options['accessibilty_titles_background_color_7'] ) ? esc_attr( $this->cool_accessibility_options['accessibilty_titles_background_color_7']) : ''
		);

	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
}














if ( is_admin() ) {
	$cool_accessibility = new CoolAccessibility();	


	
	
}// if ( is_admin() )


/* 
 * Retrieve this value with:
 * $cool_accessibility_options = get_option( 'cool_accessibility_option_name' ); // Array of All Options
 * $accessibilty_declaration_url_0 = $cool_accessibility_options['accessibilty_declaration_url_0']; // Accessibilty Declaration URL
 * $accessability_icon_position_1 = $cool_accessibility_options['accessability_icon_position_1']; // Accessability Icon position
  * $accessibilty_skip_menu_button_2 = $cool_accessibility_options['accessibilty_skip_menu_button_2']; // Accessibilty Skip Menu Button
 */

