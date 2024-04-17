const lightbulbSwith = document.querySelector("#lightbulb-swith");
let isLightbulbOn = false;
const lightbulb = document.querySelector('.lightbulb');

lightbulbSwith.addEventListener('click', function() {
    if (isLightbulbOn) {
        isLightbulbOn = false;
        lightbulb.setAttribute('src', 'off.png');
    } else {
        isLightbulbOn = true;
        lightbulb.setAttribute('src', 'on.png');
    }
})

lightbulbImage.src = 'on.png';