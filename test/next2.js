var done = false;

QUnit.next( function() {

	// This function will be executed as a task when the first
	// test completes.
	// setTimeout to give time for other test to execute.
	// ideally, no additional tests should be executed unless
	// QUnit.nextTest is called.
	setTimeout( function() {
		QUnit.next( function() {
			QUnit.config.queue.length = 0;
			QUnit.config.blocking = false;
		} );
	}, 250 );
} );

QUnit.module( "next2 module" );

QUnit.test( "first test", function( assert ) {
	assert.expect( 1 );
	assert.ok( true, "the first test should be ran" );
} );

QUnit.test( "second test", function( assert ) {
	assert.expect( 1 );
	assert.ok( true, "the second test should be ran" );
} );

QUnit.test( "third test", function( assert ) {
	assert.expect( 1 );
	assert.ok( false, "the third test should not be ran" );
} );

QUnit.done( function( details ) {
	if ( done ) {
		return;
	}

	done = true;

	QUnit.test( "verify tests executed", function( assert ) {
		assert.equal( details.total, 2, "Two tests executed" );
		assert.equal( details.passed, 2, "Two tests passed" );
	} );
} );
