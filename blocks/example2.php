<?php
/**
 * Block Example #1
**/

namespace karon\example2;

// Constants
define( __NAMESPACE__ . '\NAME', 'example2' );
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
		'title'       => 'Karon Example #2',
		'icon'        => 'carrot',
		'category'    => 'layout',
		'description' => 'This is description for Example #2',
		'attributes' => [
			'preview'   => [
				'type'    => 'bool',
				'default' => false,
			],
			'typeHere' => [
				'type'    => 'string',
				'default' => '',
			],
		],
		'render_callback' => function( $attributes = [], $content = '' ) {
			ob_start();
			?>
			<div class="karon-block-<?php echo esc_attr( NAME ); ?>">
				<p><strong>karon/<?php echo esc_html( NAME ); ?></strong></p>
				<pre><?php print_r( $attributes ); ?></pre>
			</div>
			<?php
			return ob_get_clean();
		},
	) );
}
add_action( 'init', __NAMESPACE__ . '\init' );
