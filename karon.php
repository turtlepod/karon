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

/**
 * Bootstrap.
 * Each block scripts are added separately to make sure we can unregister them separately if needed.
 *
 * @since 0.1.0
 */
add_action( 'plugins_loaded', function() {
	$path = trailingslashit( plugin_dir_path( __FILE__ ) );
	require_once( $path . 'blocks/example1.php' );
	require_once( $path . 'blocks/example2.php' );
	require_once( $path . 'blocks/example3.php' );
} );
