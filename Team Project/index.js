const form = document.querySelector('.form');
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const date = document.querySelector('.date');
const box = document.querySelectorAll('.box')[0];

eventListener();
function eventListener() {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        addItem();
    });
}
function addItem() {
    newTitle = title.value.trim();
    newText = text.value.trim();
    newDate = date.value.trim();

    if (newTitle === "") {
        alert("Lütfen başlık ekleyniz. Başlık boş geçilemez")
    }
    else if (newTitle !== "" && newText !== "" && newDate !== "") {
        addItemToBox(newTitle, newText, newDate);
    }
}
function addItemToBox(newTitle, newText, newDate) {
    /**<div class="item" draggable="true" ondragstart="drag(event)" >
        <h4>Ödev 6</h4>
        <span>bu bir ödevdir</span>
        <span>00.00.0000</span>
    </div>*/
    const listItem = document.createElement("div");
    listItem.className = "item"
    listItem.draggable = "true"
    listItem.id = "drag1"
    listItem.ondragstart = function (ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    const titleItem = document.createElement("h4");
    titleItem.appendChild(document.createTextNode(newTitle))

    const textItem = document.createElement("span");
    textItem.appendChild(document.createTextNode(newText));

    const dateItem = document.createElement("span");
    dateItem.appendChild(document.createTextNode(newDate));

    listItem.appendChild(titleItem);
    listItem.appendChild(textItem);
    listItem.appendChild(dateItem);

    box.appendChild(listItem);

    title.value = "";
    text.value = "";
    date.value = "";
}

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function deleteDrop(ev) {
    var data = ev.dataTransfer.getData("text");
    console.log(data)
}