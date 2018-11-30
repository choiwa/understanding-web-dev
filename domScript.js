// https://btholt.github.io/intro-to-web-dev-v2/dom/
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
const changeColor = document.querySelector('.red-square');
changeColor.addEventListener("click", function() {
    changeColor.style.backgroundColor = 'limegreen';
});

const changeList = document.querySelectorAll('.list-change');
    for (let i = 0; i < changeList.length; i++) {
        const currentEle = changeList[i];

        currentEle.innerText = "modified by Javascript";
    }

const getInnerText = document.querySelector('.get-inner-text')
getInnerText.addEventListener('click', function(event) {
    if (event.target.tagName === 'button') {
        console.log(`You have clicked ${event.target.innerText}`);
    }

    event.stopPropagation();
})