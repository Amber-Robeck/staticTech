console.log("connected");
const bubble = document.querySelector('.bubble');
const bubbleTextMain = document.querySelector('.bubble :nth-child(2)');
const bubbleTextSecondary = document.querySelector('.bubble :nth-child(3)');
console.log(bubbleTextMain.textContent);

bubble.addEventListener('mouseover', function () {
    console.log("mouseover");
})