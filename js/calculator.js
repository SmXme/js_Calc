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
	result=0;
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
				intNb1 = parseInt(nb1); 
				intNb2 = parseInt(nb2);
				result = intNb1 + intNb2;
			}
		}

		if(isSubstraction != -1){
			nextChar = getOperation.substr(isSubstraction+1,1);
			if(nextChar != "" && nextChar != "+" && nextChar != "-" && nextChar != "*" && nextChar != "/"){
				nb1 = getOperation.substr(0,isSubstraction); 
				nb2 = getOperation.substr(isSubstraction+1,getOperation.length);
				intNb1 = parseInt(nb1); 
				intNb2 = parseInt(nb2);
				result = intNb1 - intNb2;
			}

		}
		if(isMultiplication != -1){
			nextChar = getOperation.substr(isMultiplication+1,1);
			if(nextChar != "" && nextChar != "+" && nextChar != "-" && nextChar != "*" && nextChar != "/"){
				nb1 = getOperation.substr(0,isMultiplication); 
				nb2 = getOperation.substr(isMultiplication+1,getOperation.length);
				intNb1 = parseInt(nb1); 
				intNb2 = parseInt(nb2);
				result = intNb1 * intNb2;
			}
		}
		if(isDivision != -1){
			nextChar = getOperation.substr(isDivision+1,1);
			if(nextChar != "" && nextChar != "+" && nextChar != "-" && nextChar != "*" && nextChar != "/"){
				nb1 = getOperation.substr(0,isDivision); 
				nb2 = getOperation.substr(isDivision+1,getOperation.length);
				intNb1 = parseInt(nb1); 
				intNb2 = parseInt(nb2);
				result = intNb1 / intNb2;
			}
		}
	}