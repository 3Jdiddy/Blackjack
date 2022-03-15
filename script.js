'use strict';

//Selecting Elements
const score0 = document.querySelector('#current--0');
const score1 = document.querySelector('#current--1');
const boardCards = document.querySelectorAll('.hand');
const btnNew = document.querySelector('.btn--new');
const btnHit = document.querySelector('.btn--hit');
const btnStay = document.querySelector('.btn--stay');
const centerCard = document.querySelector('.card');
const card0 = document.querySelector('#card--0');
const card1 = document.querySelector('#card--1');
const card2 = document.querySelector('#card--2');
const card3 = document.querySelector('#card--3');
const card4 = document.querySelector('#card--4');
const card5 = document.querySelector('#card--5');
const card6 = document.querySelector('#card--6');
const card7 = document.querySelector('#card--7');
const cardExtra0 = document.querySelector('#card--extra0');
const cardExtra1 = document.querySelector('#card--extra1');
const btnClose = document.querySelector('#closeWin');
const btnCloseDefeat = document.querySelector('#closeLose');
const victoryModal = document.querySelector('#victory');
const defeatModal = document.querySelector('#defeat');
const overlay = document.querySelector('.overlay');

//starting conditions
const suits = ['spades', 'diamonds', 'hearts', 'clubs'];
score0.textContent = 0;
score1.textContent = 0;
let playerScore = 0;
let houseScore = 0;
let playerHitCount = 0;
let houseHitCount = 0;

//functions

 function defeat() {
   defeatModal.classList.remove('hidden');
   overlay.classList.remove('hidden');
   btnCloseDefeat.classList.remove('hidden');
 }

 function victory(){
   victoryModal.classList.remove('hidden');
   overlay.classList.remove('hidden');
   btnClose.classList.remove('hidden');
 }

//card functionality

btnClose.addEventListener('click', function () {
  playerScore = 0;
  houseScore = 0;
  playerHitCount = 0;
  score0.textContent = playerScore;
  score1.textContent = houseScore;
  centerCard.src = `/starter/backOfCard.png`;

  card0.src = `/starter/backOfCard.png`;
  card1.classList.add('hidden');
  card2.classList.add('hidden');
  card3.classList.add('hidden');
  card4.src = `/starter/backOfCard.png`;
  card5.classList.add('hidden');
  card6.classList.add('hidden');
  card7.classList.add('hidden');
  cardExtra0.classList.add('hidden');
  cardExtra1.classList.add('hidden');

  btnNew.classList.remove('hidden');
  btnStay.classList.add('hidden');
  btnHit.classList.add('hidden');
  btnClose.classList.add("hidden");
  btnCloseDefeat.classList.add('hidden');

  victoryModal.classList.add('hidden');
  defeatModal.classList.add('hidden');
  overlay.classList.add('hidden');
});

btnCloseDefeat.addEventListener('click', function () {

  playerScore = 0;
  houseScore = 0;
  playerHitCount = 0;
  score0.textContent = playerScore;
  score1.textContent = houseScore;
  centerCard.src = `/starter/backOfCard.png`;

  card0.src = `/starter/backOfCard.png`;
  card1.classList.add('hidden')
  card2.classList.add('hidden');
  card3.classList.add('hidden');
  card4.src = `/starter/backOfCard.png`;
  card5.classList.add('hidden')
  card6.classList.add('hidden');
  card7.classList.add('hidden');
  cardExtra0.classList.add('hidden');
  cardExtra1.classList.add('hidden');

  btnNew.classList.remove('hidden');
  btnStay.classList.add('hidden');
  btnHit.classList.add('hidden');
  btnClose.classList.add('hidden');
  btnCloseDefeat.classList.add('hidden');

  victoryModal.classList.add('hidden');
  defeatModal.classList.add('hidden');
  overlay.classList.add("hidden");
  
});

btnNew.addEventListener('click', function () {
  playerScore = 0;
  houseScore = 0;
  playerHitCount = 0;
  centerCard.src = `/starter/backOfCard.png`;
  card2.classList.add('hidden');
  card3.classList.add('hidden');
  card6.classList.add('hidden');
  card7.classList.add('hidden');
  btnNew.classList.add('hidden');
  btnStay.classList.remove('hidden');
  btnHit.classList.remove('hidden');
  btnClose.classList.remove('hidden');
  btnCloseDefeat.classList.remove('hidden');

  const cardNumberDealPlayer0 = Math.trunc(Math.random() * 13) + 1;
  const cardSuitDealPlayer0 = suits[Math.trunc(Math.random() * 4)];

  const cardNumberDealPlayer1 = Math.trunc(Math.random() * 13) + 1;
  const cardSuitDealPlayer1 = suits[Math.trunc(Math.random() * 4)];

  const cardNumberDealHouse1 = Math.trunc(Math.random() * 13) + 1;
  const cardSuitDealHouse1 = suits[Math.trunc(Math.random() * 4)];

  card1.classList.remove('hidden');
  card5.classList.remove('hidden');

  card0.src = `/starter/PNG-cards-1.3/${cardNumberDealPlayer0}_of_${cardSuitDealPlayer0}.png`;

  card1.src = `/starter/PNG-cards-1.3/${cardNumberDealPlayer1}_of_${cardSuitDealPlayer1}.png`;

  card4.src = `/starter/backOfCard.png`;
  card5.src = `/starter/PNG-cards-1.3/${cardNumberDealHouse1}_of_${cardSuitDealHouse1}.png`;

  if (cardNumberDealPlayer0 >= 10) {
    playerScore += 10;
  } else if (cardNumberDealPlayer0 == 1) {
    if (playerScore + 11 > 21) playerScore += 1;
    else playerScore += 11;
  } else {
    playerScore += cardNumberDealPlayer0;
  }
  if (cardNumberDealPlayer1 >= 10) {
    playerScore += 10;
  } else if (cardNumberDealPlayer1 == 1) {
    if (playerScore + 11 > 21) playerScore += 1;
    else playerScore += 11;
  } else {
    playerScore += cardNumberDealPlayer1;
  }

  if (cardNumberDealHouse1 >= 10) {
    houseScore += 10;
  } else if (cardNumberDealHouse1 == 1) {
    if (houseScore + 11 > 21) houseScore += 1;
    else houseScore += 11;
  } else {
    houseScore += cardNumberDealHouse1;
  }

if (playerScore == 21) {
    victoryModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    btnClose.classList.remove('hidden');
}

  score0.textContent = playerScore;
  score1.textContent = houseScore;
});

btnHit.addEventListener('click', function () {
  //select card
  const cardNumber = Math.trunc(Math.random() * 13) + 1;
  const cardSuit = suits[Math.trunc(Math.random() * 4)];
  centerCard.src = `/starter/PNG-cards-1.3/${cardNumber}_of_${cardSuit}.png`;

  //add score -- face cards are 10, Aces are 1 or 11 -- whichever is best
  if (cardNumber >= 10) {
    playerScore += 10;
  } else if (cardNumber == 1) {
    if (playerScore + 11 > 21) playerScore += 1;
    else playerScore += 11;
  } else {
    playerScore += cardNumber;
  }

  score0.textContent = playerScore;

  switch (playerHitCount) {
    case 0:
      card2.src = `/starter/PNG-cards-1.3/${cardNumber}_of_${cardSuit}.png`;
      card2.classList.remove('hidden');
      break;
    case 1:
      card3.src = `/starter/PNG-cards-1.3/${cardNumber}_of_${cardSuit}.png`;
      card3.classList.remove('hidden');
      break;
    case 2:
      cardExtra0.src = `/starter/PNG-cards-1.3/${cardNumber}_of_${cardSuit}.png`;
      cardExtra0.classList.remove('hidden');
  }

  if (playerScore > 21) {
    defeatModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    btnClose.classList.remove('hidden');
  }

  if (playerScore == 21) {
    victoryModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    btnClose.classList.remove('hidden');
  }

  playerHitCount++;
});

btnStay.addEventListener('click', function () {
  const cardNumberDealHouse0 = Math.trunc(Math.random() * 13) + 1;
  const cardSuitDealHouse0 = suits[Math.trunc(Math.random() * 4)];
  btnStay.classList.add('hidden');
  btnHit.classList.add('hidden');

  card4.src = `/starter/PNG-cards-1.3/${cardNumberDealHouse0}_of_${cardSuitDealHouse0}.png`;
  houseScore += cardNumberDealHouse0;
  score1.textContent = houseScore;

  if (houseScore >= 17) {
      if(houseScore > playerScore){
          defeat();
      } else{
           victory();
      }
  } else {
    const cardNumberDealHouse2 = Math.trunc(Math.random() * 13) + 1; //Really should be done with a loop, but it's 3am
    const cardSuitDealHouse2 = suits[Math.trunc(Math.random() * 4)];
    card6.src = `/starter/PNG-cards-1.3/${cardNumberDealHouse2}_of_${cardSuitDealHouse2}.png`;
    card6.classList.remove("hidden");
    if (cardNumberDealHouse2 >= 10) {
      houseScore += 10;
    } else if (cardNumberDealHouse2 == 1) {
      if (houseScore + 11 > 21) houseScore += 1;
      else houseScore += 11;
    } else {
      houseScore += cardNumberDealHouse2;
    }
    score1.textContent = houseScore;;
    if (houseScore > playerScore) {
      if (houseScore > 21) victory();
      else {
        defeat();
      }
    } else {
      const cardNumberDealHouse3 = Math.trunc(Math.random() * 13) + 1;
      const cardSuitDealHouse3 = suits[Math.trunc(Math.random() * 4)];
      card7.src = `/starter/PNG-cards-1.3/${cardNumberDealHouse3}_of_${cardSuitDealHouse3}.png`;
      card7.classList.remove('hidden');
      if (cardNumberDealHouse3 >= 10) {
        houseScore += 10;
      } else if (cardNumberDealHouse3 == 1) {
        if (houseScore + 11 > 21) houseScore += 1;
        else houseScore += 11;
      } else {
        houseScore += cardNumberDealHouse3;
      }
      score1.textContent = houseScore;
      if (houseScore > playerScore) {
        if (houseScore > 21) victory();
        else{defeat();}
      } else {
        const cardNumberDealHouse4 = Math.trunc(Math.random() * 13) + 1;
        const cardSuitDealHouse4 = suits[Math.trunc(Math.random() * 4)];
        cardExtra1.src = `/starter/PNG-cards-1.3/${cardNumberDealHouse4}_of_${cardSuitDealHouse4}.png`;
        cardExtra1.classList.remove('hidden');
        if (cardNumberDealHouse4 >= 10) {
          houseScore += 10;
        } else if (cardNumberDealHouse4 == 1) {
          if (houseScore + 11 > 21) houseScore += 1;
          else houseScore += 11;
        } else {
          houseScore += cardNumberDealHouse4;
        }
        score1.textContent = houseScore;
        if (houseScore > playerScore) {
          if (houseScore > 21) victory();
          else {
            defeat();
          }
        }
      }
    }
  }
});
