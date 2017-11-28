// add your code here to make the calculator work

//						GLOBAL VARIABlES						//
var result;

						//		EventListeners		//

//Event when a button is clicked
$('.btn').click(addNumber);



						//		Functions		//
//Function to add the number, with some tests to neutralize operators.
function addNumber () {
	getNumber = $(this).html();

	if (getNumber != "c" & getNumber != "=" & getNumber != "-" & getNumber != "+" & getNumber != "*" & getNumber != "/"){
		$('#result').append(getNumber);		
	}
	else if (getNumber == "c"){
		cleanOperation();
	}
	else if (getNumber == "-" | getNumber == "+" | getNumber == "*" | getNumber == "/"){
		t	
	}
	else if (getNumber == "="){
		printResult();
	}
}

//Function to clean the result div when c is clicked
function cleanOperation(){
	$('#result').html('');
}

//Function to print the result on the calc
function printResult(){
	$('#result').html(result);	
}
