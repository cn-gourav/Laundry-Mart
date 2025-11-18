const cursor = document.querySelector("#cursor");
const body = document.querySelector("body");
document.addEventListener("pointermove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    console.log(e.clientX, "x");
    console.log(e.clientY);
});

const itemList = document.querySelector("#item-list");


