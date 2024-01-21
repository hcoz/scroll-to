/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#inspectorcontrols
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * Imports the necessary components that will be used to create
 * the user interface for the block's settings.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/panel/#panelbody
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/radio-control/
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
 */
import { PanelBody, RadioControl, TextControl } from '@wordpress/components';

/**
 * Import neecessary React utilities
 * 
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/#useeffect
 */
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import ScrollTopIcon from './scroll-top-icon';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const { scrollTo, elementId } = attributes;

	useEffect(() => {
		setAttributes({
			scrollTo: scrollTo || 'top',
			elementId: elementId || ''
		});
	}, [scrollTo, elementId]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'scroll-to')}>
					<RadioControl
						label={__('Scroll Target', 'scroll-to')}
						selected={scrollTo}
						options={[
							{ label: __('Top', 'scroll-to'), value: 'top' },
							{ label: __('Element', 'scroll-to'), value: 'element' },
						]}
						onChange={(value) => setAttributes({ scrollTo: value })}
					/>
					{scrollTo === 'element' &&
						<TextControl
							label={__('Target Element ID', 'scroll-to')}
							value={elementId}
							onChange={(value) => setAttributes({ elementId: value })}
						/>}
				</PanelBody>
			</InspectorControls>

			<button { ...blockProps }>
				<ScrollTopIcon { ...blockProps.style } />
			</button>
		</>
	);
}
