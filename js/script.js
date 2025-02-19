var histroyButton = document.getElementById("historyButton")
histroyButton.addEventListener("click",()=>{
        console.log(histroyButton)
        handleNavigationButtonById('historyButton')
})
var donationButton= document.getElementById("donationButton")
donationButton.addEventListener("click",()=>{
        console.log(donationButton)
        handleNavigationButtonById('donationButton')
})

buttons = document.getElementsByClassName("donateNow")
for (button of buttons){
        button.addEventListener("click",(e)=>{
            e.preventDefault();
            var inputValue= parseInt(e.target.parentNode.firstElementChild.value)
            var currentButton=e.target.parentNode.parentNode.firstElementChild.firstElementChild.children[1]
           var cardValue= parseInt(currentButton.innerText)
           currentButton.innerText=cardValue+inputValue;
        
        })
    }
// var buttonCard1 = document.getElementById("buttonCard1")
// buttonCard1.addEventListener("click",(e)=>{
//       my_modal_4.showModal()
//         e.preventDefault();

// })

