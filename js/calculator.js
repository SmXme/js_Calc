// add your code here to make the calculator work

						//		EventListeners		//

//Event when a button is clicked
$('.btn').click(addNumber);



						//		Functions		//
function addNumber () {
	$('#result').append($(this).html());
}