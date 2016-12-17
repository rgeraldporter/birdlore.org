var Main = (function () { 'use strict';

var template = (function () {

    return {
        data () {
            return {
                email: 'rob@inpictures.ca'
            };
        }
    }
}());

let addedCss = false;
function addCss () {
	var style = document.createElement( 'style' );
	style.textContent = "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  \n    \n    .main[svelte-2650104386], [svelte-2650104386] .main {\n        padding: 1em;\n    }\n";
	document.head.appendChild( style );

	addedCss = true;
}

function renderMainFragment ( root, component ) {
	var div = document.createElement( 'div' );
	div.setAttribute( 'svelte-2650104386', '' );
	div.className = "main";
	
	var h1 = document.createElement( 'h1' );
	
	div.appendChild( h1 );
	h1.appendChild( document.createTextNode( "BirdLore.org" ) );
	div.appendChild( document.createTextNode( "\n\n    " ) );
	
	var p = document.createElement( 'p' );
	
	div.appendChild( p );
	p.appendChild( document.createTextNode( "Help digitize historical bird records." ) );
	div.appendChild( document.createTextNode( "\n\n    " ) );
	
	var h3 = document.createElement( 'h3' );
	
	div.appendChild( h3 );
	h3.appendChild( document.createTextNode( "The process" ) );
	div.appendChild( document.createTextNode( "\n\n    " ) );
	
	var p1 = document.createElement( 'p' );
	
	div.appendChild( p1 );
	p1.appendChild( document.createTextNode( "Once this is set up the process will be:" ) );
	div.appendChild( document.createTextNode( "\n\n    " ) );
	
	var ul = document.createElement( 'ul' );
	
	div.appendChild( ul );
	
	var li = document.createElement( 'li' );
	
	ul.appendChild( li );
	li.appendChild( document.createTextNode( "Identify a historical record source" ) );
	ul.appendChild( document.createTextNode( "\n    " ) );
	
	var li1 = document.createElement( 'li' );
	
	ul.appendChild( li1 );
	li1.appendChild( document.createTextNode( "Verify it is not already documented on eBird" ) );
	ul.appendChild( document.createTextNode( "\n    " ) );
	
	var li2 = document.createElement( 'li' );
	
	ul.appendChild( li2 );
	li2.appendChild( document.createTextNode( "Transcribe to a digital format" ) );
	ul.appendChild( document.createTextNode( "\n    " ) );
	
	var li3 = document.createElement( 'li' );
	
	ul.appendChild( li3 );
	li3.appendChild( document.createTextNode( "Import to eBird" ) );
	div.appendChild( document.createTextNode( "\n\n    " ) );
	
	var h31 = document.createElement( 'h3' );
	
	div.appendChild( h31 );
	h31.appendChild( document.createTextNode( "Criteria" ) );
	div.appendChild( document.createTextNode( "\n\n    " ) );
	
	var p2 = document.createElement( 'p' );
	
	div.appendChild( p2 );
	p2.appendChild( document.createTextNode( "Initially, all records should be either a published account of bird species observations, or a hand-written account by a known source." ) );
	div.appendChild( document.createTextNode( "\n\n    " ) );
	
	var p3 = document.createElement( 'p' );
	
	div.appendChild( p3 );
	p3.appendChild( document.createTextNode( "Any textual data submitted should be accompanied by an original photocopy for verification." ) );
	div.appendChild( document.createTextNode( "\n\n    " ) );
	
	var h32 = document.createElement( 'h3' );
	
	div.appendChild( h32 );
	h32.appendChild( document.createTextNode( "Roadmap" ) );
	div.appendChild( document.createTextNode( "\n\n    " ) );
	
	var p4 = document.createElement( 'p' );
	
	div.appendChild( p4 );
	p4.appendChild( document.createTextNode( "This site obviously isn't ready yet to facilitate any of this. Some things that need to get done:" ) );
	div.appendChild( document.createTextNode( "\n\n    " ) );
	
	var ul1 = document.createElement( 'ul' );
	
	div.appendChild( ul1 );
	
	var li4 = document.createElement( 'li' );
	
	ul1.appendChild( li4 );
	li4.appendChild( document.createTextNode( "Create a login/user/registration system" ) );
	ul1.appendChild( document.createTextNode( "\n    " ) );
	
	var li5 = document.createElement( 'li' );
	
	ul1.appendChild( li5 );
	li5.appendChild( document.createTextNode( "Create a means of submitting a source (photo upload)" ) );
	ul1.appendChild( document.createTextNode( "\n    " ) );
	
	var li6 = document.createElement( 'li' );
	
	ul1.appendChild( li6 );
	li6.appendChild( document.createTextNode( "Create a way to browse sources" ) );
	ul1.appendChild( document.createTextNode( "\n    " ) );
	
	var li7 = document.createElement( 'li' );
	
	ul1.appendChild( li7 );
	li7.appendChild( document.createTextNode( "Add tools to transcribe sources to a format eBird can recognize (this is partly complete)" ) );
	ul1.appendChild( document.createTextNode( "\n    " ) );
	
	var li8 = document.createElement( 'li' );
	
	ul1.appendChild( li8 );
	li8.appendChild( document.createTextNode( "Add peer review process before submission to eBird" ) );
	ul1.appendChild( document.createTextNode( "\n    " ) );
	
	var li9 = document.createElement( 'li' );
	
	ul1.appendChild( li9 );
	li9.appendChild( document.createTextNode( "Allow for open data downloads of all data submitted here" ) );
	div.appendChild( document.createTextNode( "\n\n    " ) );
	
	var p5 = document.createElement( 'p' );
	
	div.appendChild( p5 );
	p5.appendChild( document.createTextNode( "You can contact me at " ) );
	var text39 = document.createTextNode( root.email );
	p5.appendChild( text39 );
	p5.appendChild( document.createTextNode( " for any information or to contribute." ) );

	return {
		mount: function ( target, anchor ) {
			target.insertBefore( div, anchor );
		},

		update: function ( changed, root ) {
			text39.data = root.email;
		},

		teardown: function ( detach ) {
			if ( detach ) {
				div.parentNode.removeChild( div );
			}
		}
	};
}

function Main ( options ) {
	options = options || {};

	var component = this;
	var state = Object.assign( template.data(), options.data );

	var observers = {
		immediate: Object.create( null ),
		deferred: Object.create( null )
	};

	var callbacks = Object.create( null );

	function dispatchObservers ( group, newState, oldState ) {
		for ( var key in group ) {
			if ( !( key in newState ) ) continue;

			var newValue = newState[ key ];
			var oldValue = oldState[ key ];

			if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

			var callbacks = group[ key ];
			if ( !callbacks ) continue;

			for ( var i = 0; i < callbacks.length; i += 1 ) {
				var callback = callbacks[i];
				if ( callback.__calling ) continue;

				callback.__calling = true;
				callback.call( component, newValue, oldValue );
				callback.__calling = false;
			}
		}
	}

	this.fire = function fire ( eventName, data ) {
		var handlers = eventName in callbacks && callbacks[ eventName ].slice();
		if ( !handlers ) return;

		for ( var i = 0; i < handlers.length; i += 1 ) {
			handlers[i].call( this, data );
		}
	};

	this.get = function get ( key ) {
		return key ? state[ key ] : state;
	};

	this.set = function set ( newState ) {
		var oldState = state;
		state = Object.assign( {}, oldState, newState );
		
		dispatchObservers( observers.immediate, newState, oldState );
		if ( mainFragment ) mainFragment.update( newState, state );
		dispatchObservers( observers.deferred, newState, oldState );
	};

	this._mount = function mount ( target, anchor ) {
		mainFragment.mount( target, anchor );
	}

	this.observe = function ( key, callback, options ) {
		var group = ( options && options.defer ) ? observers.deferred : observers.immediate;

		( group[ key ] || ( group[ key ] = [] ) ).push( callback );

		if ( !options || options.init !== false ) {
			callback.__calling = true;
			callback.call( component, state[ key ] );
			callback.__calling = false;
		}

		return {
			cancel: function () {
				var index = group[ key ].indexOf( callback );
				if ( ~index ) group[ key ].splice( index, 1 );
			}
		};
	};

	this.on = function on ( eventName, handler ) {
		var handlers = callbacks[ eventName ] || ( callbacks[ eventName ] = [] );
		handlers.push( handler );

		return {
			cancel: function () {
				var index = handlers.indexOf( handler );
				if ( ~index ) handlers.splice( index, 1 );
			}
		};
	};

	this.teardown = function teardown ( detach ) {
		this.fire( 'teardown' );

		mainFragment.teardown( detach !== false );
		mainFragment = null;

		state = {};
	};

	this.root = options.root;
	this.yield = options.yield;

	if ( !addedCss ) addCss();
	
	var mainFragment = renderMainFragment( state, this );
	if ( options.target ) this._mount( options.target );
}

return Main;

}());