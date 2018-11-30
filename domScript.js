const changeColor = document.querySelector('.red-square');
changeColor.addEventListener("click", function() {
    changeColor.style.backgroundColor = 'limegreen';
});

const changeList = document.querySelectorAll('.list-change');
    for (let i = 0; i < changeList.length; i++) {
        const currentEle = changeList[i];

        currentEle.innerText = "modified by Javascript";
    }