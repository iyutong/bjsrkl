function flip() {
const element = document.querySelector(".card");
        if (element.style.transform == "rotateY(180deg)") {
            /*element.style.transform = "rotateY(0deg)";*/
        } else {
            S.init();
            element.style.transform = "rotateY(180deg)";
        }
};