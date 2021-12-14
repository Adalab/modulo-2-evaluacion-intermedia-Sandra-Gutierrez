'use strict';

// Elementos html

const optionSelect = document.querySelector('.js-select');
const optionStone = document.querySelector('.js-optionStone');
const optionPaper = document.querySelector('.js-optionPaper');
const optionScissors = document.querySelector('.js-optionScissors');
const inputStart = document.querySelector('.js-inputStart');

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
      result = 'empate';
    } else if ( computerValue === 'papel' ){
      result = 'Gana el ordenador';
    } else if ( computerValue === 'tijera' ){
      result = 'Gana la jugadora';
    }

  } else if ( userValue === 'papel' ){

    if( computerValue === 'papel' ){
      result = 'empate';
    } else if ( computerValue === 'piedra' ){
      result = 'Gana la jugadora';
    } else if ( computerValue === 'tijera' ){
      result = 'Gana el ordenador';
    }

  } else if (  userValue === 'tijera') {

    if( computerValue === 'tijera' ){
      result = 'empate';
    } else if ( computerValue === 'piedra' ){
      result = 'Gana el ordenador';
    } else if ( computerValue === 'papel' ){
      result = 'Gana la jugadora';
    }

  }
  return result;
}

function handlerClickStartGame(event){

  event.preventDefault()

  // guardar jugada usuario
  const optionUser = saveUserOption();
  console.log(`La jugadora elige: ${optionUser}`);

  // guardar jugada ordenador: FUNCIONA
  const optionComputer = saveUserPc();
  console.log(`El ordenador elige: ${optionComputer}`);

  // comparar jugadas
  const resultGame = compareOptionsUsers(optionUser, optionComputer);
  console.log(`Resultado: ${resultGame}`);
  
}

// Listeners
inputStart.addEventListener('click', handlerClickStartGame);