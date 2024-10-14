function addPlusOne() {
    // Create a new element for the "+1"
    const plusOne = document.createElement("div");
    plusOne.className = "plus-one";
    plusOne.textContent = "+" + moneyPerClick;

    // Append the element to the container
    const container = document.getElementById("plus-one-container");
    container.appendChild(plusOne);

    // Remove the element after animation ends
    setTimeout(() => {
        plusOne.remove();
    }, 1000);  // 1 second (matches the animation duration)
    
}