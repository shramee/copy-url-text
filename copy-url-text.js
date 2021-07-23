function copyText( txt ) {
	var $cpEl = document.querySelector( '#copy-url-text-input' );
	if ( !$cpEl ) {
		$cpEl = document.createElement( 'textarea' );
		$cpEl.id = 'copy-url-text-input';
		$cpEl.style.position = 'fixed';
		$cpEl.style.left = '-9999px';
		document.body.appendChild( $cpEl )
	}
	$cpEl.value = txt;
	$cpEl.select();
	$cpEl.setSelectionRange( 0, 99999 ); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand( "copy" );
}

document.querySelectorAll( '.copy-url-text a:not([download])' ).forEach(
	$el => {
		$el.addEventListener( 'click', e => {
			e.preventDefault();
			fetch( $el.href )
				.then( c => c.text() )
				.then( text => copyText( text ) );
		} )
	}
)
