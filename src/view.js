/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

import domReady from '@wordpress/dom-ready';

domReady( function () {
	const scrollButton = document.getElementById( 'hco-scroll-btn' );

	document.addEventListener( 'scroll', () => {
		const docEl = document.documentElement;
		const scrollableHeight = docEl.scrollHeight - docEl.clientHeight;
		const GOLDEN_RATIO = 0.5;

		scrollButton.style.display =
			docEl.scrollTop / scrollableHeight > GOLDEN_RATIO
				? 'block'
				: 'none';
	} );

	scrollButton.addEventListener( 'click', () => {
		const behavior = scrollButton.getAttribute( 'behavior' );

		if ( scrollButton.getAttribute( 'scrollto' ) === 'top' ) {
			window.scrollTo( {
				top: 0,
				behavior: behavior,
			} );
		} else {
			document
				.querySelector( scrollButton.getAttribute( 'elementselector' ) )
				.scrollIntoView( { behavior: behavior } );
		}
	} );
} );
