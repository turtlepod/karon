
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

registerBlockType( 'karon/example1', {
	edit: ( props ) => {
			return [
				!! props.isSelected && (
					<InspectorControls>
						<PanelBody
							title={ __( 'Block Settings' ) }
							initialOpen={ false }
						>
							<PanelRow>
								<label>{ __( 'Select Something' ) }</label>
								<SelectControl
									value={ props.attributes.aSelectOption }
									options={ [
										{
											label: 'Red',
											value: 'red',
										},
										{
											label: 'Green',
											value: 'green',
										},
										{
											label: 'Blue',
											value: 'blue',
										},
									] }
									onChange={ ( value ) => {
										props.setAttributes( { aSelectOption: value } )
									} }
								/>
							</PanelRow>
							<PanelRow>
								<label>{ __( 'Pick Something' ) }</label>
								<RadioControl
									selected={ props.attributes.aRadioOption }
									options={ [
										{
											label: 'Banana',
											value: 'banana',
										},
										{
											label: 'Apple',
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
									placeholder="Text Input"
									value={ props.attributes.aTextInput }
									onChange={ ( value ) => props.setAttributes( { aTextInput: value } ) }
								/>
								<TextareaControl
									type="text"
									placeholder="Text area field"
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
