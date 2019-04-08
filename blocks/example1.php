<?php
/**
 * Block Example #1
**/

namespace karon\example1;

// Constants.
define( __NAMESPACE__ . '\VERSION',  KARON_VERSION );
define( __NAMESPACE__ . '\PLUGIN',   'karon' );
define( __NAMESPACE__ . '\BLOCK',    'example1' );
define( __NAMESPACE__ . '\NAME',     PLUGIN . '/' . BLOCK  );
define( __NAMESPACE__ . '\PATH',     plugin_dir_path( __FILE__ ) . BLOCK . '/' );
define( __NAMESPACE__ . '\URL',      plugin_dir_url( __FILE__ ) . BLOCK . '/' );

/**
 * Registers block assets.
 */
function init() {
	// Register Block Editor JS.
	wp_register_script(
		PLUGIN . '-' . BLOCK . '-block-editor',
		URL . 'block.js',
		[
			'wp-i18n',
			'wp-blocks',
			'wp-components',
			'wp-editor',
			'wp-element',
		],
		VERSION
	);

	// Register Block Editor CSS.
	wp_register_style(
		PLUGIN . '-' . BLOCK . '-block-editor',
		URL . 'editor.css',
		['karon'],
		VERSION
	);

	// Register Block Style.
	wp_register_style(
		PLUGIN . '-' . BLOCK . '-block',
		URL . 'style.css',
		['karon'],
		VERSION
	);

	// Register Block.
	register_block_type( NAME, array(
		'editor_script'   => PLUGIN . '-' . BLOCK . '-block-editor',
		'editor_style'    => PLUGIN . '-' . BLOCK . '-block-editor',
		'style'           => PLUGIN . '-' . BLOCK . '-block',
		'title'           => 'Karon Example #1',
		'icon'            => 'carrot',
		'category'        => 'layout',
		'keywords'        => ['qwerty', 'asdf'],
		'description'     => 'This is description for Example #1',
		'attributes'      => [
			'preview' => [
				'type' => 'bool',
				'default' => false,
			],
			'aTextInput' => [
				'type' => 'string',
				'default' => '',
			],
			'aTextArea' => [
				'type' => 'string',
				'default' => '',
			],
			'aSelectOption' => [
				'type' => 'string',
				'default' => 'red',
			],
			'aRadioOption' => [
				'type' => 'string',
				'default' => 'apple',
			],
		],
		'render_callback' => function( $attributes = [], $content = '' ) {
			ob_start();
			?>
			<div class="karon-block karon-block-<?php echo esc_attr( BLOCK ); ?>">
				<p><strong><?php echo esc_html( NAME ); ?></strong></p>
				<pre><?php print_r( $attributes ); ?></pre>
			</div>
			<?php
			return ob_get_clean();
		},
	) );
}
add_action( 'init', __NAMESPACE__ . '\init' );
