// add your code here to make the calculator work

//						GLOBAL VARIABlES						//
var resultat;

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
		afficherResultat();
	}
}

//Function to clean the result div when c is clicked
function cleanOperation(){
	$('#result').html('');
}

//Function to print the result on the calc
function afficherResultat(){
	$('#result').html(resultat);	
}