const body = document.querySelector("body");
const userChoice = document.querySelectorAll(".box");
const result = document.querySelector("#result");
let UserScrore = document.querySelector("#Usercount");
let comScrore = document.querySelector("#Comcount");
let clickCountDIv = document.querySelector("#clickCount");

let usercount = 0;
let computercount = 0;
let clickCount = 5;

// for boxDisabled----------------------------------
const buttonDisabled=()=>{
    for(userByyton of userChoice){
        userByyton.disabled= true
    }
}
const buttonEnable=()=>{
    for(userByyton of userChoice){
        userByyton.disabled= false
    }
}

userChoice.forEach((val) => {
  let userclick = val.id;
  //    console.log(userclick);
  val.addEventListener("click", () => {
    let computerChoice = randomChoice();
    if (userclick === computerChoice) {
      result.innerHTML = "Match Draw";
    } else if (userclick === "Rock" && computerChoice === "Defence") {
      result.innerHTML = `Win Computer ${computerChoice} kill  
         ${userclick}`;
      computercount++;
      comScrore.innerText = computercount;
    } else if (userclick === "Rock" && computerChoice === "Scissor") {
      result.innerHTML = `Win User ${userclick} kill  ${computerChoice}`;
      usercount++;
      UserScrore.innerText = usercount;
    } else if (userclick === "Defence" && computerChoice === "Scissor") {
      result.innerHTML = `Win Computer ${computerChoice} kill  ${userclick}`;
      computercount++;
      comScrore.innerText = computercount;
    } else if (userclick === "Defence" && computerChoice === "Rock") {
      result.innerHTML = `Win User ${userclick} kill  
        ${computerChoice}`;

      usercount++;
      UserScrore.innerText = usercount;
    } else if (userclick === "Scissor" && computerChoice === "Rock") {
      result.innerHTML = `Win User ${userclick} kill  ${computerChoice}`;

      usercount++;
      UserScrore.innerText = usercount;
    } else if (userclick === "Scissor" && computerChoice === "Defence") {
      result.innerHTML = `Win Computer ${computerChoice} kill  ${userclick}`;

      computercount++;
      comScrore.innerText = computercount;
    }
    clickCount--
    clickCountDIv.innerText = clickCount;

    if (clickCount ===0){
      if (usercount > computercount){
        popup.innerHTML=" <h4>Game Over You Win</h4>"
      }else if(usercount === computercount){
       
        popup.innerHTML="<h4>Game Over  Match Draw</h4>"
      }
       else {
        popup.innerHTML="<h4>Game Over Computer Win</h4>"
      }
    //   UserScrore.innerHTML= usercount = 0;
    //   comScrore.innerHTML= computercount = 0;
      clickCountDIv.innerText = clickCount = 5
      body.append(popup);
      popup.append(close)
      buttonDisabled()
      popup.style.display="block";
    }
  });
});
let j = true;
let close = document.createElement("span");
close.innerText="❌";
close.onclick=()=>{
     popup.style.display="none";
     UserScrore.innerHTML= usercount = 0;
     comScrore.innerHTML= computercount = 0;
     buttonEnable();
    }
   
let popup = document.createElement("span");
popup.setAttribute("class","popup")

const randomChoice = () => {
  const options = ["Rock", "Defence", "Scissor"];
  const randomIndx = parseInt(Math.random() * 3);
  let computerChoice = options[randomIndx];
  return computerChoice;
};

