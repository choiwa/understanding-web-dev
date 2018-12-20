function setup() {
    // https://www.testdome.com/questions/javascript/image-gallery/18215?questionIds=18215,13919,19288&generatorId=60&type=fromtest&testDifficulty=Easy
    const imagesButtons = document.querySelectorAll('.remove');

    for (let i = 0; i < imagesButtons.length; i++) {
        let currentImage = imagesButtons[i];
        currentImage.addEventListener("click", function() {
            currentImage.parentNode.remove();
        })
    }
}

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);