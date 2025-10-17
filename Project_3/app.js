function greetUser() {
    let nameInput = document.getElementById("userName");
    const name = nameInput.value.trim();
    const greeting = document.getElementById("greeting");

    if (nameInput != "") {
        greeting.textContent = `Hello , ${name}`;
    } else {
        greeting.textContent = "Hello";
    }

    nameInput.value = "";
}

function changeColor(element, color) {
    element.style.background = color;
    element.style.color = "white";
}
