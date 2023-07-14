//----Burger Bar 

let burger = document.getElementById("burgerBar");
let navigation = document.getElementById("navBar");

burger.addEventListener("click", function () {
    navigation.classList.toggle("navActive");
});



//----input el
let inputTag = document.getElementById('input-tag');
let btnAdd = document.getElementById('btn-tag');
let elementUl = document.getElementById('ulItem');

btnAdd.addEventListener('click', function () {
    let userValue = inputTag.value;

    if (userValue == " ") {
        return;
    }

    let liTag = document.createElement('li');
    liTag.textContent = userValue;
    elementUl.appendChild(liTag);

    inputTag.value = " ";

})
