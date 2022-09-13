console.log("connected");
const bubble = document.querySelector('.bubble');
let bubbleTextMain = document.querySelector('.bubble :nth-child(2)');
let bubbleTextSecondary = document.querySelector('.bubble :nth-child(3)');
console.log(bubbleTextMain.textContent);
let index = 0;

carouselArray = [
    'original',
    'authentic',
    'legendary',
    'alluring',
    'genuine',
    'beautiful',
]
//change to onload
bubble.addEventListener('mouseover', function () {
    console.log("mouseover");
    const carousel = setTimeout(rotateCarousel, 5000);


});

const rotateCarousel = function () {
    bubbleTextMain.textContent = `Creating ${carouselArray[index]} websites`
    // bubble.append(bubbleTextMain);
    index++;

};