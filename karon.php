<?php
/**
 * Plugin Name: Karon - Blocks Example
 * Plugin URI: https://github.com/turtlepod/karon
 * Description: Various Blocks Example.
 * Version: 0.1.0
 * Author: David Chandra Purnama
 * Author URI: http://shellcreeper.com/
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU 
 * General Public License version 2, as published by the Free Software Foundation.  You may NOT assume 
 * that you can use any other version of the GPL.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without 
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * @author David Chandra Purnama <david@shellcreeper.com>
 * @license http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

// Constants.
define( 'KARON_URL',      plugin_dir_url( __FILE__ ) );
define( 'KARON_PATH',     plugin_dir_path( __FILE__ ) );
define( 'KARON_VERSION',  defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? time() : '0.1.0' );

/**
 * Bootstrap.
 * Each block scripts are added separately to make sure we can unregister them separately if needed.
 *
 * @since 0.1.0
 */
function karon_init() {
	// Register Global Scripts
	add_action( 'wp_enqueue_scripts', 'karon_scripts' );
	add_action( 'admin_enqueue_scripts', 'karon_scripts' );

	// Load Blocks.
	require_once( KARON_PATH . 'blocks/example1.php' );
	//require_once( KARON_PATH . 'blocks/example2.php' );
	//require_once( KARON_PATH . 'blocks/example3.php' );
}
add_action( 'plugins_loaded', 'karon_init' );

/**
 * Karon Scripts
 *
 * @since 0.1.0
 */
function karon_scripts() {
	wp_register_style(
		'karon',
		KARON_URL . 'assets/karon.css',
		[],
		KARON_VERSION
	);
}
