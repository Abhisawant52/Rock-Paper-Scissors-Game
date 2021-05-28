let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const result_div = document.querySelector('.result > p');
const Rock_div = document.getElementById('Rock');
const Paper_div = document.getElementById('Paper');
const Scissors_div = document.getElementById('Scissors');

function getComputerChoice() {
	const Choice = ['Rock' , 'Paper' , 'Scissors'];
	const RandomNumber = (Math.floor(Math.random() * 3));
	return Choice[RandomNumber];
}
function win(userChoice){
	userScore++;
	const userChoice_div = document.getElementById(userChoice);
	userChoice_div.classList.add('green-glow');
	setTimeout(function(){ userChoice_div.classList.remove('green-glow'); } , 500);
	//console.log(userChoice);
}
function lose(userChoice){
	compScore++;
	const userChoice_div = document.getElementById(userChoice);
	userChoice_div.classList.add('red-glow');
	setTimeout(function(){ userChoice_div.classList.remove('red-glow'); } , 500);
	//console.log(userChoice);
}
function tie(userChoice){
	const userChoice_div = document.getElementById(userChoice);
	userChoice_div.classList.add('gray-glow');
	setTimeout(function(){ userChoice_div.classList.remove('gray-glow'); } , 500);
	//console.log(userChoice);
}

function Compare(userChoice , compChoice){
	//console.log('Computer choise ' + compChoice);
	//console.log('user choise ' + userChoice);
	if(userChoice == compChoice){
		tie(userChoice);
		return 'Both Player selected ' + userChoice + '\n It is a tie';
	}
	else if(userChoice === 'Rock'){
		if(compChoice === 'Paper'){
			lose(userChoice);
			return 'Paper Covers Rock! \n You Lose.';
		}
		else{
			win(userChoice);
			return 'Rock smashes Scissors! \n You Win 🔥 .';
		}
	}
	else if(userChoice === 'Paper'){
		if(compChoice === 'Scissors'){
			lose(userChoice);
			return 'Scissors Cuts Paper! \n You Lose.';
		}else{
			win(userChoice);
			return 'Paper Covers Rock! \n You Win 🔥 .';
		}
	}
	else if(userChoice === 'Scissors'){
		if(compChoice === 'Rock'){
			lose(userChoice);
			return 'Rock smashes Scissors! \n You Lose.';
		}else{
			win(userChoice);
			return 'Scissors Cuts Paper! \n You Win 🔥 .';
		}
	}
}

function game(userChoice){
	const compChoice = getComputerChoice();
	//console.log('Computer choise ' + compChoice);
	//console.log('user choise ' + userChoice);
	const result = Compare(userChoice , compChoice);
	//console.log(result);
	userScore_span.innerHTML = userScore ;
	compScore_span.innerHTML = compScore;
	result_div.innerText = result;
}

function main(){
Rock_div.addEventListener('click', function(){
	game("Rock");
})
Paper_div.addEventListener('click', function(){
	game("Paper");
})
Scissors_div.addEventListener('click', function(){
	game("Scissors");
})

}

main();