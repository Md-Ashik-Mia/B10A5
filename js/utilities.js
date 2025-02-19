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