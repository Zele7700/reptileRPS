let roundWinner = ''
let computerScore = ''
let playerScore = ''


const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')

const txtPlayerScore = document.getElementById('playerScore')
const txtComputerScore = document.getElementById('computerScore')

const playerChoice = document.getElementById('playerChoice')
const computerChoice = document.getElementById('computerChoice')

const btnReptile = document.getElementById('btnReptile')
const btnChunLi = document.getElementById('btnChunLi')
const btnScorpion = document.getElementById('btnScorpion')
const btnOgre = document.getElementById('btnOgre')
const btnYasuo = document.getElementById('btnYasuo')
const btnSett = document.getElementById('btnSett')


let cChoiceImage = document.getElementById('cchoiceImage')
let pChoiceImage = document.getElementById('pchoiceImage')




const popUpMsg = document.getElementById('gameOverPopUp')
const endgameMsg = document.getElementById('gameOverMsg')
const overlay = document.getElementById('overlay')
const btnRestart = document.getElementById('btnRestart')


btnReptile.addEventListener('click', () => handleClick('REPTILE'))
btnChunLi.addEventListener('click', () => handleClick('CHUN-LI'))
btnScorpion.addEventListener('click', () => handleClick('SCORPION'))
btnOgre.addEventListener('click', () => handleClick('OGRE'))
btnYasuo.addEventListener('click', () => handleClick('YASUO'))
btnSett.addEventListener('click', () => handleClick('SETT'))

btnRestart.addEventListener('click', restartGame)
overlay.addEventListener('click', closeGameOverPopup)




function getComputerChoice(){
    let random = Math.floor(Math.random() * 6);
    let choice="";

    if (random === 0){
        choice = "REPTILE"
    }else if (random === 1){
        choice = "CHUN-LI"
    }else if (random === 2){
        choice = "SCORPION"
    }else if (random === 3){
      choice = "OGRE"
    }else if (random === 4){
      choice = "YASUO"
    }else if (random === 5){
      choice = "SETT"
    }

    return choice;
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

function gameRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      roundWinner = 'doubleko'
      playerScore++
      computerScore++
    }
    if (
      (playerChoice === 'REPTILE' && computerChoice === 'OGRE') ||
      (playerChoice === 'REPTILE' && computerChoice === 'SCORPION') ||
      (playerChoice === 'REPTILE' && computerChoice === 'SETT') ||
      (playerChoice === 'OGRE' && computerChoice === 'SETT') ||
      (playerChoice === 'OGRE' && computerChoice === 'SCORPION') ||
      (playerChoice === 'OGRE' && computerChoice === 'YASUO') ||
      (playerChoice === 'SCORPION' && computerChoice === 'CHUN-LI') ||
      (playerChoice === 'SCORPION' && computerChoice === 'YASUO') ||
      (playerChoice === 'SCORPION' && computerChoice === 'SETT') ||
      (playerChoice === 'CHUN-LI' && computerChoice === 'SETT') ||
      (playerChoice === 'CHUN-LI' && computerChoice === 'OGRE') ||
      (playerChoice === 'CHUN-LI' && computerChoice === 'REPTILE') ||
      (playerChoice === 'YASUO' && computerChoice === 'REPTILE') ||
      (playerChoice === 'YASUO' && computerChoice === 'CHUN-LI') ||
      (playerChoice === 'YASUO' && computerChoice === 'SETT') 
       
    ) {
      playerScore++
      roundWinner = 'player'
    }
    if (
      (computerChoice === 'REPTILE' && playerChoice === 'OGRE') ||
      (computerChoice === 'REPTILE' && playerChoice === 'SCORPION') ||
      (computerChoice === 'REPTILE' && playerChoice === 'SETT') ||
      (computerChoice === 'OGRE' && playerChoice === 'SETT') ||
      (computerChoice === 'OGRE' && playerChoice === 'SCORPION') ||
      (computerChoice === 'OGRE' && playerChoice === 'YASUO') ||
      (computerChoice === 'SCORPION' && playerChoice === 'CHUN-LI') ||
      (computerChoice === 'SCORPION' && playerChoice === 'YASUO') ||
      (computerChoice === 'SCORPION' && playerChoice === 'SETT') ||
      (computerChoice === 'CHUN-LI' && playerChoice === 'SETT') ||
      (computerChoice === 'CHUN-LI' && playerChoice === 'OGRE') ||
      (computerChoice === 'CHUN-LI' && playerChoice === 'REPTILE') ||
      (computerChoice === 'YASUO' && playerChoice === 'SETT') ||
      (computerChoice === 'YASUO' && playerChoice === 'REPTILE') ||
      (computerChoice === 'YASUO' && playerChoice === 'CHUN-LI')
    
    ) {
      computerScore++
      roundWinner = 'computer'
    }
}
  
async function handleClick(playerChoice) {
    if (isGameOver()) {
        openGameOverPopup()
      return
    }

    const computerChoice = getComputerChoice()
    gameRound(playerChoice, computerChoice)
    updateChoices(playerChoice, computerChoice)
    await delay(2000)
    
    updateScoreMessage(roundWinner, playerChoice, computerChoice)

    updateScore()

    if (isGameOver()) {
        openGameOverPopup()
        setFinalMessage()
    }
}
  
function delay(duration){
  return new Promise(resolve => {setTimeout(resolve, duration);})
}


async function updateChoices(playersChoice, computersChoice) {
  
  
    if (playersChoice === "REPTILE"){
      pChoiceImage.src="/images/reptile.png"
    } else if (playersChoice === "CHUN-LI"){
      pChoiceImage.src="/images/chunli.jpg"
    }else if (playersChoice === "SCORPION"){
      pChoiceImage.src="/images/scorpion.png"
    }else if (playersChoice === "OGRE"){
      pChoiceImage.src="/images/ogre.jpg"
    }else if (playersChoice === "YASUO"){
      pChoiceImage.src="/images/yasuo.jpg"
    }else if (playersChoice === "SETT"){
      pChoiceImage.src="/images/sett.jpg"
    }


    animateComputerChoice()
    await delay(1400)

    if (computersChoice === "REPTILE"){
      cChoiceImage.src="/images/reptile.png"
    } else if (computersChoice === "CHUN-LI"){
      cChoiceImage.src="/images/chunli.jpg"
    }else if (computersChoice === "SCORPION"){
      cChoiceImage.src="/images/scorpion.png"
    }else if (computersChoice === "OGRE"){
      cChoiceImage.src="/images/ogre.jpg"
    }else if (computersChoice === "YASUO"){
      cChoiceImage.src="/images/yasuo.jpg"
    }else if (computersChoice === "SETT"){
      cChoiceImage.src="/images/sett.jpg"
    }

}

async function animateComputerChoice(){
  let imagesArray = ["/images/reptile.png", "/images/chunli.jpg", "/images/scorpion.png","/images/ogre.jpg","/images/sett.jpg","/images/yasuo.png"];

  for (let i=0; i<5; i++){
    for (let j=0; j<imagesArray.length -1; j++){
      await delay(40);
      cChoiceImage.src= imagesArray[j]
    }
  }
  
}
function updateScore() {
    if (roundWinner === 'doubleko') {
      scoreInfo.textContent = "DOUBLE K.O!"
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'YOU WIN!'
    } else if (roundWinner === 'computer') {
      scoreInfo.textContent = 'FATALITY!'
    }
  
    txtPlayerScore.textContent = `Player: ${playerScore}`
    txtComputerScore.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerChoice, computerChoice) {
    if (winner === 'player') {
      scoreMessage.textContent = playerChoice + "  DEFEATS  " + computerChoice
      return
    }
    if (winner === 'computer') {
      scoreMessage.textContent = playerChoice + " IS DEFEATED BY " + computerChoice
      return
    }
    if (winner === "doubleko"){
      scoreMessage.textContent = playerChoice + " TIES WITH " + computerChoice
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function openGameOverPopup() {
    gameOverPopUp.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeGameOverPopup() {
    gameOverPopUp.classList.remove('active')
    overlay.classList.remove('active')
  }
  
  function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You are victorious!')
      : (endgameMsg.textContent = 'FATALITY')
  }
  
  function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'CHOOSE YOUR FIGHTERR'
    scoreMessage.textContent = 'Best of 5'
    txtPlayerScore.textContent = 'Player: 0'
    txtComputerScore.textContent = 'Computer: 0'

    pChoiceImage.src="/images/p1chardefault.png"
    cChoiceImage.src="/images/p2chardefault.png"


    gameOverPopUp.classList.remove('active')
    overlay.classList.remove('active')
  }
//console.log()
