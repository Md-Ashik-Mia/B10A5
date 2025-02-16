function handleNavigationButtonById(id){
    document.getElementById("donationButton").classList.remove("bg-[#B4F461]")
    document.getElementById("historyButton").classList.remove("bg-[#B4F461]")
    console.log(document.getElementById(id))
    document.getElementById(id).classList.add("bg-[#B4F461]");
}