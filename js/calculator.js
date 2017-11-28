// add your code here to make the calculator work

//		EventListeners		//
$('.btn').click(addNumber);

//		Functions		//
function addNumber () {
	$('#result').append($(this).html());
}