var items = document.querySelector(".items");
const dd_btn = document.getElementsByClassName("dropdown-btn")[0]
const close_ddm = document.getElementsByClassName("close-menu")[0]
const showNavMenu = () => {
    items.style.right = 0;
}
const hideNavMenu = () => {
    items.style.right = `-${window.innerWidth}px`;
}
items.style.right = `-${window.innerWidth}px`;
if(items.style.right === `-${window.innerWidth}px`){
    items.style.transition = "1s";
}
close_ddm.addEventListener("click", hideNavMenu);
dd_btn.addEventListener("click", showNavMenu);

