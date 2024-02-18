<?php
/**
 * Plugin Name:       Scroll To
 * Description:       Block element of scroll to top or a specific HTML element.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.2
 * Author:            hcoz
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       scroll-to
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function scroll_to_scroll_to_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'scroll_to_scroll_to_block_init' );
