const btn = document.getElementById("btn")
const biggerContainer = document.querySelector(".bigger-container");
const aywaa = document.querySelector(".aywaa");
const NoMoney = document.getElementById("No-money");
const Container = document.querySelector(".container");



btn.addEventListener("click", (eo) => {

    biggerContainer.classList.add("active");
    NoMoney.style.display = "none";

    Container.style.display = "block";
});


aywaa.addEventListener("click", (eo) => {

    // biggerContainer.classList.remove("active");
    NoMoney.style.display = "block";
    Container.style.display = "none";

    setTimeout(() => {
        NoMoney.style.display = "block";
        biggerContainer.classList.remove("active");


    }, 3000);

})