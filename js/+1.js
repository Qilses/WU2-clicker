function addPlusOne() {
    // Create the +1 element
    const plusOne = document.createElement("div");
    plusOne.className = "plus-one";
    plusOne.textContent = "+" + moneyPerClick;

    // Append the element to the container
    const container = document.getElementById("plus-one-container");
    container.appendChild(plusOne);

    // Remove the element after the animation finishes (1 second in this case)
    setTimeout(() => {
        plusOne.remove();
    }, 1000);  // Matches the CSS animation duration (1 second)
}
