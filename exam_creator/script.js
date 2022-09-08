var Question = 0;

function addTemplate() {

    Question++;
    var div = document.createElement('div');
    div.id = `${Question}`;
    div.innerHTML = `<div>
    <form action = "#" id = "${Question}">
    <label>Question${Question}</label>
    <input id = "q${Question}" type = "text" ><br><br>
    <label>option 1 : </label>
    <input type = "radio" class = "o${Question}1"></input>
    <input type = "text" class = "o${Question}1"></input>
    <label>option 2 : </label>
    <input type = "radio" class = "o${Question}2"></input>
    <input type = "text" class = "o${Question}2"></input>
    <label>option 3 : </label>
    <input type = "radio" class = "o${Question}3"></input>
    <input type = "text" class = "o${Question}3"></input>
    <label>option 4 : </label>
    <input type = "radio" class = "o${Question}4"></input>
    <input type = "text" class = "o${Question}4"></input>
    </form>
    </div>`;
    div.className = `temptainer`;
    document.body.appendChild(div);
}