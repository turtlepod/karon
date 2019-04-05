
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

registerBlockType( 'karon/example2', {
	edit: ( props ) => {
			return [
				<Fragment>
					<BlockControls>
						<div className="components-toolbar">
							<IconButton
								icon={ props.attributes.preview ? 'edit' : 'welcome-view-site' }
								label={ props.attributes.preview ? __( 'Edit' ) : __( 'Preview' ) }
								onClick={ ( event ) => {
									event.stopPropagation();
									props.setAttributes( { preview: ! props.attributes.preview } );
									event.target.blur();
								} }
								className='components-toolbar__control'
							/>
						</div>
					</BlockControls>

					{ props.attributes.preview ? (

						<div>
							<ServerSideRender
								block={ props.name }
								attributes={ props.attributes }
							/>
						</div>

					) : (

						<div>
							<Fragment>
								<TextControl
									type="text"
									placeholder="Text"
									value={ props.attributes.typeHere }
									onChange={ ( value ) => props.setAttributes( { typeHere: value } ) }
								/>
							</Fragment>
						</div>

					) }
				</Fragment>
			];
	},
	save: () => null,
} );
