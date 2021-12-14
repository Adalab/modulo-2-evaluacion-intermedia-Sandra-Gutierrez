'use strict';

// Elementos html

const optionSelect = document.querySelector('.js-select');
const optionStone = document.querySelector('.js-optionStone');
const optionPaper = document.querySelector('.js-optionPaper');
const optionScissors = document.querySelector('.js-optionScissors');
const inputStart = document.querySelector('.js-inputStart');
const resultTitle = document.querySelector('.js-resultTitle');
const pointsUser = document.querySelector('.js-pointsUser');
const pointsComputer = document.querySelector('.js-pointsComputer');
let numClick = 0;

// Funciones

function saveUserOption(){
  const optionGamer = optionSelect.value;
  return optionGamer;
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function saveUserPc(){
  const numPc = getRandomNumber(10);
  let optionPc = '';
  if( numPc <= 3 ){
    optionPc = 'piedra';
  } else if ( numPc > 3 && numPc <= 6 ){
    optionPc = 'papel';
  }else if ( numPc > 6){
    optionPc = 'tijera';
  }
  return optionPc;
}

function compareOptionsUsers( userValue , computerValue){
  let result = '';
  if( userValue === 'piedra' ){
    
    if( computerValue === 'piedra' ){
      result = 'Empate';
    } else if ( computerValue === 'papel' ){
      result = 'Has perdido';
    } else if ( computerValue === 'tijera' ){
      result = 'Has ganado';
    }

  } else if ( userValue === 'papel' ){

    if( computerValue === 'papel' ){
      result = 'Empate';
    } else if ( computerValue === 'piedra' ){
      result = 'Has ganado';
    } else if ( computerValue === 'tijera' ){
      result = 'Has perdido';
    }

  } else if (  userValue === 'tijera') {

    if( computerValue === 'tijera' ){
      result = 'Empate';
    } else if ( computerValue === 'piedra' ){
      result = 'Has perdido';
    } else if ( computerValue === 'papel' ){
      result = 'Has ganado';
    }

  }
  return result;
}

function paintResult(result){
  resultTitle.innerHTML = result;
}

function countPointsUser(result){
  let numUser = 0;

  if( result.includes('Empate') ){
    numUser = 0;
  }else if( result.includes('ganado') ){
    numUser = 1;
  }else if( result.includes('perdido') ){
    numUser = 0;
  }
  
  return numUser;
}

function countPointsComputer(result){
  let numComputer = 0;

  if( result.includes('Empate') ){
    numComputer = 0;
  }else if( result.includes('ganado') ){
    numComputer = 0;
  }else if( result.includes('perdido') ){
    numComputer = 1;
  }

  return numComputer;
}

function renderResultUser(num){
  let pointUser = parseInt(pointsUser.innerHTML);
  let resultUser = pointUser + num;
  pointsUser.innerHTML = resultUser;
}

function renderResultComputer(num){
  let pointPc = parseInt(pointsComputer.innerHTML);
  let resultPc = pointPc + num;
  pointsComputer.innerHTML = resultPc;
}

function countClicks(){
  numClick++
  console.log(`Levamos ${numClick} clicks`)
  if( numClick === 10){
    //renicia juego
    location.reload()
  }
}

function handlerClickStartGame(event){

  event.preventDefault()

  // guardar jugada usuario: FUNCIONA
  const optionUser = saveUserOption();
  console.log(`La jugadora elige: ${optionUser}`);

  // guardar jugada ordenador: FUNCIONA
  const optionComputer = saveUserPc();
  console.log(`El ordenador elige: ${optionComputer}`);

  // comparar jugadas: FUNCIONA
  const resultGame = compareOptionsUsers(optionUser, optionComputer);
  console.log(`Resultado: ${resultGame}`);

  // renderizar resultado: FUNCIONA
  paintResult(resultGame);

  // contar puntos: FUNCIONA
  const numUser = countPointsUser(resultGame);
  const numComputer = countPointsComputer(resultGame);

  // renderizar puntos
  renderResultUser(numUser);
  renderResultComputer(numComputer);

  // reiniciar juego a las 10 interacciones
  countClicks()

}

// Listeners
inputStart.addEventListener('click', handlerClickStartGame);