function addPlusOne() {
    
    const plusOne = document.createElement("div");
    plusOne.className = "plus-one";
    plusOne.textContent = "+" + moneyPerClick;

   
    const container = document.getElementById("plus-one-container");
    container.appendChild(plusOne);

    
    setTimeout(() => {
        plusOne.remove();
    }, 1000); 
}
