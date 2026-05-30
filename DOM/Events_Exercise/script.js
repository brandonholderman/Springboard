document.addEventListener("DOMContentLoaded", () => {
    let setNewColor = document.querySelector("#color-form");
    let colorInputID = document.querySelector("#color-input");

    let createBoxBtn = document.querySelector("#new-box-button");
    let boxContainer = document.querySelector("#box-container");

    let boxColor = "";
    let counter = 0;

    document.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;
        let red = Math.round((x * 255) / window.innerWidth);
        let blue = Math.round((y * 255) / window.innerHeight);
        let green = Math.floor(Math.random() * 70);
        // boxColor = `rgb(${red}, ${green}, ${blue})`;

        if (e.target.id === "color-input") {
            return;
        } else {
            boxColor = `rgb(${red}, ${green}, ${blue})`;
        }

        // console.log(`Mouse position: (${x}, ${y})`);
        // console.log(`Color: rgb(${red}, ${green}, ${blue})`);
    });

    let createBox = () => {
        let newBox = document.createElement("div");
        let colorCode = document.createElement("p");

        newBox.setAttribute("data-box-id", counter.toString());
        newBox.className = "box";
        newBox.textContent = `[${counter}] + [${boxColor}]`;
        newBox.style.backgroundColor = boxColor;
        newBox.style.color = "white";
        colorCode.textContent = boxColor;

        boxContainer.appendChild(newBox);
        // boxContainer.append(colorCode);
        counter++;
    };

    createBoxBtn.addEventListener("click", (e) => {
        createBox();
    });

    document.addEventListener("keydown", (e) => {
        keyName = e.key;

        if (e.target.id === "color-input") {
            return;
        }

        if (keyName === "n" || keyName === "N") {
            createBox();
            console.log("key pressed " + keyName);
        }
    });

    boxContainer.addEventListener("dblclick", (e) => {
        if (e.target.classList.contains("box")) {
            e.target.remove();
        }
    });

    setNewColor.addEventListener("submit", (e) => {
        e.preventDefault();
        let colorFromInput = colorInputID.value;
        console.log("Color from form input " + colorFromInput);

        let newFormBox = document.querySelectorAll(".box");
        for (box of newFormBox) {
            box.style.backgroundColor = colorFromInput;
        }

        colorInputID.value = "";

        boxColor = colorFromInput;
    });

    document.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("box")) {
            e.target.textContent = `${e.pageX}, ${e.pageY}`;
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.classList.contains("box")) {
            let boxID = e.target.getAttribute("data-box-id");
            e.target.textContent = `${boxID}`;
        }
    });
});