QUnit.next( function() {

	// This function will be executed as a task when the first
	// test completes.
	// setTimeout to give time for other test to execute.
	// ideally, no additional tests should be executed.
	setTimeout( function() {
		QUnit.config.queue.length = 0;
		QUnit.config.blocking = false;
		QUnit.next();
	}, 250 );
} );

QUnit.module( "next module" );

QUnit.test( "first test", function( assert ) {
	assert.expect( 1 );
	assert.ok( true, "only the first test should be ran" );
} );

QUnit.test( "second test", function( assert ) {
	assert.expect( 1 );
	assert.ok( false, "the second test should not be ran" );
} );

QUnit.test( "third test", function( assert ) {
	assert.expect( 1 );
	assert.ok( false, "the third test should not be ran" );
} );
