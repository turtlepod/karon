
const {
	__
} = wp.i18n;

const {
	registerBlockType
} = wp.blocks;

const {
	InspectorControls,
	BlockControls,
	RichText,
} = wp.editor;

const {
	Fragment
} = wp.element;

const {
	IconButton,
	TextControl,
	TextareaControl,
	ServerSideRender,
	PanelBody,
	PanelRow,
	RadioControl,
	SelectControl,
} = wp.components;

registerBlockType( 'karon/example3', {
	edit: ( props ) => {
			return [
				<Fragment>

					{ props.isSelected ? (

						<div>
							<Fragment>
								<TextAreaControl
									type="text"
									placeholder="Text"
									value={ props.attributes.textInput }
									onChange={ ( value ) => props.setAttributes( { textInput: value } ) }
								/>
							</Fragment>
						</div>

					) : (

						<div>
							<ServerSideRender
								block={ props.name }
								attributes={ props.attributes }
							/>
						</div>

					) }
				</Fragment>
			];
	},
	save: () => null,
} );
