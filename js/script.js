var histroyButton = document.getElementById("historyButton");
histroyButton.addEventListener("click", () => {
  handleNavigationButtonById("historyButton");
});
var donationButton = document.getElementById("donationButton");
donationButton.addEventListener("click", () => {
  handleNavigationButtonById("donationButton");
});

buttons = document.getElementsByClassName("donateNow");
for (button of buttons) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    inputField = e.target.parentNode.firstElementChild;
    var totalBalance = document.getElementById("totalBalance");
    var inputValue = parseInt(inputField.value);
    if (
      isNaN(inputValue) ||
      inputValue <= 0 ||
      inputValue > parseInt(totalBalance.innerText)
    ) {
      alert("Please Enter the Correct Amount");
    } else {
      var currentButton =
        e.target.parentNode.parentNode.firstElementChild.firstElementChild
          .children[1];
      var cardValue = parseInt(currentButton.innerText);
      currentButton.innerText = cardValue + inputValue;
      totalBalance.innerText = parseInt(totalBalance.innerText) - inputValue;
//       modal function here
      my_modal_5.showModal();
//       history posting here 
      var historyHeader =e.target.parentNode.parentNode.children[1].innerText
      makeHistoryPost(historyHeader,inputValue)
//       reset the input field 
      inputField.value = "";
    }
  });
}

