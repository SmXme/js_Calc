// add your code here to make the calculator work

						//		EventListeners		//

//Event when a button is clicked
$('.btn').click(addNumber);



						//		Functions		//
//Function to add the number, with some tests to neutralize operators.
function addNumber () {
	getNumber = $(this).html();
	if (getNumber != "c" & getNumber != "+" & getNumber != "-" & getNumber != "*" & getNumber != "/" & getNumber != "=" ){
		$('#result').append($(this).html());		
	}
	else {
		($(this).html() == "c")
			cleanOperation();
		} 
	}

//Function to clean the result div when c is clicked
function cleanOperation(){
	$('#result').html('');
}