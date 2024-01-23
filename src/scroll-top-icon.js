/**
 *
 * @param {Object} param0 Svg icon properties
 * @param {number} param0.width Svg width
 * @param {number} param0.height Svg height
 * @param {string} param0.color Svg color hex code
 *
 * @return {Element} Svg icon element
 */
export default function ScrollTopIcon( { width = 48, height = 48, color } ) {
	const pathProps = {};

	if ( color ) {
		pathProps.fill = color;
	}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={ width }
			height={ height }
			viewBox="0 0 512 512"
		>
			<path
				{ ...pathProps }
				d="M247.5 137.3c-2.2.8-5.6 2.2-7.5 3.1-1.9 1-44.3 42.6-94.1 92.5-72.8 72.7-91.1 91.6-93 95.6-2 4.1-2.4 6.6-2.4 14 0 7.8.4 9.7 2.7 14 5.6 10.6 14.9 16.6 26.8 17.3 6 .3 8.7 0 13.5-1.8 5.8-2.2 9-5.2 84.3-80.4l78.2-78.1 78.3 78.2c88 88 83.1 83.8 97.7 83.8 18.1 0 31.5-13.4 31.5-31.5 0-14.8 5.7-8.2-96.8-110.7-81.8-81.8-91.8-91.5-97.1-93.9-6.9-3.1-16.2-4-22.1-2.1z"
			/>
		</svg>
	);
}
