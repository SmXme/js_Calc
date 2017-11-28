// add your code here to make the calculator work

//						GLOBAL VARIABlES						//
var result;

						//		EventListeners		//

//Event when a button is clicked
$('.btn').click(addNumber);
$('body').keypress(nbByKeyPress);

						//		Functions		//
//Print numbers, operators or execute some functions on pressure
function nbByKeyPress(){
	switch (event.keyCode) {	

		case 13:
			treatOperation();
			printResult();
			break;
		case 42:
			$('#result').append('*');
			break;
		case 43:
			$('#result').append('+');
			break;
		case 45:
			$('#result').append('-');
			break;
		case 47:
			$('#result').append('/');
			break;
		case 48:
			$('#result').append(0);
			break;
		case 49:
			$('#result').append(1);
			break;
		case 50:
			$('#result').append(2);
			break;
		case 51:
			$('#result').append(3);
			break;
		case 52:
			$('#result').append(4);
			break;
		case 53:
			$('#result').append(5);
			break;
		case 54:
			$('#result').append(6);
			break;
		case 55:
			$('#result').append(7);
			break;
		case 56:
			$('#result').append(8);
			break;
		case 57:
			$('#result').append(9);
			break;
		case 99:
			cleanOperation();
			break;
		default:
			break;
	}
}
//Function to add the number, with some tests to neutralize operators.
function addNumber () {
	getNumber = $(this).html();
	if (getNumber != "c" & getNumber != "="){
		$('#result').append(getNumber);	
	}
	else if (getNumber == "c"){
			cleanOperation();
		}
	else if (getNumber == "="){
		treatOperation();
		printResult();
	}
}

//Function to clean the result div when c is clicked
function cleanOperation(){
	$('#result').html('');
	result="";
}

//Function to print the result on the calc
function printResult(){
	$('#result').html(result);	
}

//Function to check the operation type, and do the treatments on 2 numbers;
function treatOperation(){
	getOperation = $('#result').html();
	isAddition = getOperation.indexOf('+');
	isSubstraction = getOperation.indexOf('-');
	isDivision = getOperation.indexOf('/');
	isMultiplication = getOperation.indexOf('*');
	
		if(isAddition != -1){

			nextChar = getOperation.substr(isAddition+1,1);
			if(nextChar != "" && nextChar != "+" && nextChar != "-" && nextChar != "*" && nextChar != "/"){
				nb1 = getOperation.substr(0,isAddition); 
				nb2 = getOperation.substr(isAddition+1,getOperation.length);
				result = parseInt(nb1) + parseInt(nb2);
			}
		}

		if(isSubstraction != -1){
			nextChar = getOperation.substr(isSubstraction+1,1);
			if(nextChar != "" && nextChar != "+" && nextChar != "-" && nextChar != "*" && nextChar != "/"){
				nb1 = getOperation.substr(0,isSubstraction); 
				nb2 = getOperation.substr(isSubstraction+1,getOperation.length);
				result = parseInt(nb1) - parseInt(nb2);
			}

		}
		if(isMultiplication != -1){
			nextChar = getOperation.substr(isMultiplication+1,1);
			if(nextChar != "" && nextChar != "+" && nextChar != "-" && nextChar != "*" && nextChar != "/"){
				nb1 = getOperation.substr(0,isMultiplication); 
				nb2 = getOperation.substr(isMultiplication+1,getOperation.length);
				result = parseInt(nb1) * parseInt(nb2);
			}
		}
		if(isDivision != -1){
			nextChar = getOperation.substr(isDivision+1,1);
			if(nextChar != "" && nextChar != "+" && nextChar != "-" && nextChar != "*" && nextChar != "/"){
				nb1 = getOperation.substr(0,isDivision); 
				nb2 = getOperation.substr(isDivision+1,getOperation.length);
				result = parseInt(nb1) / parseInt(nb2);
			}
		}
	}