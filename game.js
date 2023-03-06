

const playerinputOne = document.querySelector('.playerinputOne');
const playerButtonone = document.querySelector('.playerButtonone');
const playeroneError = document.querySelector('.playeroneError');
const player = document.querySelector('.player');
const playerOne = document.querySelector('.playerOne');
const playertwo = document.querySelector('.playertwo');
const playerinputtwo = document.querySelector('.playerinputtwo');
const playerButtontwo = document.querySelector('.playerButtontwo');
const playertwoError = document.querySelector('.playertwoError');
const change = document.querySelector('.change');

let playernumber;
let changeNumber = 3;

playerButtonone.addEventListener("click",function(){
      if(playerinputOne.value){
           if(playerinputOne.value - 20){
            if(playerinputOne.value >0 && playerinputOne.value<10){
                  playeroneError.innerHTML=""
                  playernumber=playerinputOne.value;
                  player.innerHTML="Player Two";
                  playerOne.style.display="none";
                  playertwo.style.display="block";
                  

            }else{
                  playeroneError.innerHTML= "Me me Value Between 1 to 10";              
            }

           }else{
            playeroneError.innerHTML="Do not Give String Value";
           }
      }else{
            playeroneError.innerHTML="Please Give me One Value" ;
      }
})




playerButtontwo.addEventListener("click",function(){
      if(playerinputtwo.value){
           if(playerinputtwo.value - 20){
            if(playerinputtwo.value >0 && playerinputtwo.value<10){
                  playertwoError.innerHTML=""
                  changeNumber--
                  if(changeNumber !== 0){
                        if(playernumber==playerinputtwo.value){
                              playertwoError.innerHTML="Player Two Winer";
                              playertwoError.style.color="red";
                        }else{
                              console.log("l")
                             change.innerHTML = changeNumber
                        }

                  }else{
                     
                     change.innerHTML="Game Over";
                     playertwoError.innerHTML="Player One Winer";
                     playertwoError.style.color="red";
                  }
                 
                  // playernumber=playerinputtwo.value;
                  // player.innerHTML="Player Two";
                  // playerOne.style.display="none";
                  // playertwo.style.display="block";
                  

            }else{
                  playertwoError.innerHTML= "Me me Value Between 1 to 10";              
            }

           }else{
            playertwoError.innerHTML="Do not Give String Value";
           }
      }else{
            playertwoError.innerHTML="Please Give me One Value" ;
      }
})





// let stop = setInterval(() => {
      
// }, 200);
