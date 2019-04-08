<?php
/**
 * Plugin Name: Karon - Simple Blocks Example
 * Author     : turtlepod
**/

namespace karon;

define( __NAMESPACE__ . '\VERSION', time() );
define( __NAMESPACE__ . '\PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define( __NAMESPACE__ . '\URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );

add_action( 'init', function() {

	// Blocks Assets.
	add_action( 'enqueue_block_assets', function() {
		wp_enqueue_script(
			'karon-blocks',
			URL . 'assets/js/blocks.build.js',
			[ 'wp-blocks', 'wp-components', 'wp-element', 'wp-editor' ],
			VERSION
		);
		wp_enqueue_style(
			'karon-blocks',
			URL . 'assets/css/editor.css',
			[],
			VERSION
		);
		// Front end.
		if ( ! is_admin() ) {
			wp_enqueue_style(
				'karon',
				URL . 'assets/css/style.css',
				[],
				VERSION
			);
		}
	} );

	// Register Blocks.
	register_block_type( 'karon/example1', [
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
	] );
	register_block_type( 'karon/example2', [
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
			<div class="karon-block karon-block2">
				<p><strong>karon/example2</strong></p>
				<p>Attr: <?php echo json_encode( array_map( 'esc_attr', $attributes ) ); ?></p>
				<p>Content: <?php echo json_encode( $content ); ?></p>
			</div>
			<?php
			return ob_get_clean();
		},
	] );
	register_block_type( 'karon/example3', [
		'title'       => 'Karon Example #3',
		'icon'        => 'carrot',
		'category'    => 'layout',
		'description' => 'This is description for Example #3',
		'attributes' => [
			'textInput' => [
				'type'    => 'string',
				'default' => '',
			],
		],
		'render_callback' => function( $attributes = [], $content = '' ) {
			ob_start();
			?>
			<div class="karon-block karon-block3">
				<p><strong>karon/example3</strong></p>
				<p>Attr: <?php echo json_encode( array_map( 'esc_attr', $attributes ) ); ?></p>
				<p>Content: <?php echo json_encode( $content ); ?></p>
			</div>
			<?php
			return ob_get_clean();
		},
	] );

} );
