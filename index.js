const page = document.querySelector(".main-page");
const onBtn = document.querySelector(".btns .onBtn");
const offBtn = document.querySelector(".btns .ofBtn");
const btnOrgColor = onBtn.style.backgroundColor;

onBtn.addEventListener("click", function(){
    onBtn.style.backgroundColor = "red";
    page.style.backgroundImage = "url('On.svg')";
    offBtn.style.backgroundColor = btnOrgColor;
})

offBtn.addEventListener("click", function(){
    offBtn.style.backgroundColor = "red";
    onBtn.style.backgroundColor = btnOrgColor;
    page.style.backgroundImage = "url('Off.svg')";
})