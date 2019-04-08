<?php
/**
 * Block Example #1
 *
 * Register client-side assets (scripts and stylesheets) for WP block.
 */

namespace karon\example1;

// Constants
define( __NAMESPACE__ . '\NAME', 'example1' );
define( __NAMESPACE__ . '\PATH', trailingslashit( trailingslashit( plugin_dir_path( __FILE__ ) ) . NAME ) );
define( __NAMESPACE__ . '\URL', trailingslashit( trailingslashit( plugin_dir_url( __FILE__ ) ) . NAME ) );

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
 */
function init() {
	// Register Block Editor JS.
	wp_register_script(
		NAME . '-block-editor',
		URL . 'block.js',
		[
			'wp-i18n',
			'wp-blocks',
			'wp-components',
			'wp-editor',
			'wp-element',
		],
		filemtime( PATH . 'block.js' )
	);

	// Register Block Editor CSS.
	wp_register_style(
		NAME . '-block-editor',
		URL . 'editor.css',
		[],
		filemtime( PATH . 'editor.css' )
	);

	// Register Block Style.
	wp_register_style(
		NAME . '-block',
		URL . 'style.css',
		[],
		filemtime( PATH . 'style.css' )
	);

	// Register Block.
	register_block_type( 'karon/' . NAME, array(
		'editor_script' => NAME . '-block-editor',
		'editor_style'  => NAME . '-block-editor',
		'style'         => NAME . '-block',

		'title'       => 'Karon Example #1',
		'icon'        => 'megaphone',
		'category'    => 'layout',
		'description' => 'This is description for Example #1',
		'attributes'  => [
			'preview'   => [
				'type'    => 'bool',
				'default' => false,
			],
			'aTextInput' => [
				'type'    => 'string',
				'default' => '',
			],
			'aTextArea' => [
				'type'    => 'string',
				'default' => '',
			],
			'aSelectOption'  => [
				'type'    => 'string',
				'default' => 'red',
			],
			'aRadioOption'  => [
				'type'    => 'string',
				'default' => 'apple',
			],
		],
		'render_callback' => function( $attributes = [], $content = '' ) {
			ob_start();
			?>
			<div class="karon-block karon-block1">
				<p><strong>karon/example1</strong></p>
				<p>Attr: <?php echo json_encode( array_map( 'esc_attr', $attributes ) ); ?></p>
				<p>Content: <?php echo json_encode( $content ); ?></p>
			</div>
			<?php
			return ob_get_clean();
		},
	) );
}
add_action( 'init', __NAMESPACE__ . '\init' );
