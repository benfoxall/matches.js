
test( "straight compare", function() {
	var found = matches('dog', ['cat', 'fish', 'dog', 'rabbit']);
	equal(found, 'dog');

	found = matches('fish', ['cat', 'fish', 'dog', 'rabbit']);
	equal(found, 'fish');
});


// if we use edit distance - it will always return something
// test( "not found", function() {
// 	var found = matches('kitten', ['cat', 'fish', 'dog', 'rabbit']);
// 	equal(found, undefined);
// });


test( "matching substring", function() {
	var found = matches('rover', ['landrover', 'rover', 'peugot', 'madza']);
	equal(found, 'rover');
});


test( "matching substring", function() {
	var found = matches('peugot 205', ['landrover', 'rover', 'peugot', 'madza']);
	equal(found, 'peugot');
});