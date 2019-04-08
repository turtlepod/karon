/**
 * Example Block #1
 */
const {
	__
} = wp.i18n;
wp.i18n.setLocaleData({ '': {} }, 'karon');

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

registerBlockType( 'karon/example1', {
	edit: ( props ) => {
			return [
				!! props.isSelected && (
					<InspectorControls>
						<PanelBody
							title={ __( 'Block Settings', 'karon' ) }
							initialOpen={ false }
						>
							<PanelRow>
								<label>{ __( 'Select Something', 'karon' ) }</label>
								<SelectControl
									value={ props.attributes.aSelectOption }
									options={ [
										{
											label: __( 'Red', 'karon' ),
											value: 'red',
										},
										{
											label: __( 'Green', 'karon' ),
											value: 'green',
										},
										{
											label: __( 'Blue', 'karon' ),
											value: 'blue',
										},
									] }
									onChange={ ( value ) => {
										props.setAttributes( { aSelectOption: value } )
									} }
								/>
							</PanelRow>
							<PanelRow>
								<label>{ __( 'Pick Something', 'karon' ) }</label>
								<RadioControl
									selected={ props.attributes.aRadioOption }
									options={ [
										{
											label: __( 'Banana', 'karon' ),
											value: 'banana',
										},
										{
											label: __( 'Apple', 'karon' ),
											value: 'apple',
										},
									] }
									onChange={ ( value ) => {
										props.setAttributes( { aRadioOption: value } )
									} }
								/>
							</PanelRow>
						</PanelBody>
					</InspectorControls>
				),
				<Fragment>
					<BlockControls>
						<div className="components-toolbar">
							<IconButton
								icon={ props.attributes.preview ? 'edit' : 'welcome-view-site' }
								label={ props.attributes.preview ? __( 'Edit', 'karon' ) : __( 'Preview', 'karon' ) }
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
									placeholder={ __( "Text Input", 'karon' ) }
									value={ props.attributes.aTextInput }
									onChange={ ( value ) => props.setAttributes( { aTextInput: value } ) }
								/>
								<TextareaControl
									type="text"
									placeholder={ __( "Text area field", 'karon' ) }
									value={ props.attributes.aTextArea }
									onChange={ ( value ) => props.setAttributes( { aTextArea: value } ) }
								/>
							</Fragment>
						</div>

					) }
				</Fragment>
			];
	},
	save: () => null,
} );
