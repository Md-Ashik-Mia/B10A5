function handleNavigationButtonById(id){
    document.getElementById("donationButton").classList.remove("bg-[#B4F461]")
    document.getElementById("historyButton").classList.remove("bg-[#B4F461]")
    document.getElementById("donationButton").classList.add("bg-transparent")
    document.getElementById("historyButton").classList.add("bg-transparent")
    document.getElementById(id).classList.remove("bg-transparent");
    document.getElementById(id).classList.add("bg-[#B4F461]");
    showSection(id)
}

function showSection(id){
    if(id=='donationButton'){
        document.getElementById("historySection").classList.add("hidden")
        document.getElementById("cards-container").classList.remove("hidden")
    }
    else{
        document.getElementById("cards-container").classList.add("hidden")
        document.getElementById("historySection").classList.remove("hidden")
    }

}

function makeHistoryPost(header,inputValue){
    var historySection = document.getElementById("historySection")
    newCard =document.createElement("div")
    newCard.innerHTML=`<div class="card bg-white w-full shadow-xl border-y-4">
          <div class="card-body">
            <h2 class="card-title text-black lg:text-4xl ">${"You have donated "+inputValue +" $ For the Campaign of "+header}</h2>
            <p class="text-black lg:text-2xl">${new Date()} </p>
          </div>
        </div>`
    historySection.appendChild(newCard)
    console.log("this is header",header)
}


function balanceHandle(e,inputValue,totalBalance){
    var currentButton =
    e.target.parentNode.parentNode.firstElementChild.firstElementChild
      .children[1];
  var cardValue = parseInt(currentButton.innerText);
  currentButton.innerText = cardValue + inputValue;
  totalBalance.innerText = parseInt(totalBalance.innerText) - inputValue;
}