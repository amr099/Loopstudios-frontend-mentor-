window.addEventListener("load", function () {
    navBtn = document.querySelector(".navbtn");
    closeBtn = document.querySelector(".close");
    nav = document.querySelector("nav.mobile");

    console.log(navBtn);

    navBtn.addEventListener("click", function () {
        nav.style.display = "flex";
    });
    closeBtn.addEventListener("click", function () {
        nav.style.display = "none";
    });
});
