let isPink = true;

function changeColors() {
    const page = document.getElementById("page");
    const boxes = document.querySelectorAll(".boxConcepts");
    const title = document.querySelector(".title h1");
    const table = document.querySelector("table");

    if (isPink) {
        page.style.backgroundColor = "black";
        page.style.color = "#ec94be";

        boxes.forEach(b => {
            b.style.backgroundColor = "black";
            b.style.borderColor = "#f4bcd9";
            b.style.boxShadow = "-5px 5px 0 #f4bcd9";
        });

        if (title) {
            title.style.backgroundColor = "#ad2175";
            title.style.color = "black";
        }
        if (table) {
            table.style.borderColor = "#f4bcd9";
            table.querySelectorAll("th, td").forEach(cell => {
                cell.style.borderColor = "#f4bcd9";
            });
        }

    } else {
        page.style.backgroundColor = "#ad2175";
        page.style.color = "black";

        boxes.forEach(b => {
            b.style.backgroundColor = "#f4bcd9";
            b.style.borderColor = "black";
            b.style.boxShadow = "-5px 5px 0 black";
        });

        if (title) {
            title.style.backgroundColor = "#f4bcd9";
            title.style.color = "black";
        }

        if (table) {
            table.style.borderColor = "black";
            table.querySelectorAll("th, td").forEach(cell => {
                cell.style.borderColor = "black";
            });
        }
    }

    isPink = !isPink;
}