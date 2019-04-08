<?php
/**
 * Block Example #1
**/

/**
 * Registers block assets.
 */
function karon_example1_block_init() {
	$prefix = 'karon-example1';

	// Register Block Editor JS.
	wp_register_script(
		"{$prefix}-block-editor",
		KARON_URL . 'blocks/example1/block.js',
		[
			'wp-i18n',
			'wp-blocks',
			'wp-components',
			'wp-editor',
			'wp-element',
		],
		KARON_VERSION
	);

	// Register Block Editor CSS.
	wp_register_style(
		"{$prefix}-block-editor",
		KARON_URL . 'blocks/example1/editor.css',
		[],
		KARON_VERSION
	);

	// Register Block Style.
	wp_register_style(
		"{$prefix}-block",
		KARON_URL . 'blocks/example1/style.css',
		[],
		KARON_VERSION
	);

	// Register Block.
	register_block_type( 'karon/example1',[
		'editor_script'   => "{$prefix}-block-editor",
		'editor_style'    => "{$prefix}-block-editor",
		'style'           => "{$prefix}-block",
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
			<div class="karon-block karon-block-example1">
				<p><strong>karon/example1</strong></p>
				<pre><?php print_r( $attributes ); ?></pre>
			</div>
			<?php
			return ob_get_clean();
		},
	] );
}
add_action( 'init', 'karon_example1_block_init' );
