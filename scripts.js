function getparentnode(){
    return document.getElementById("container"); // Use the body tag as the parent node
}

function row(count){
    var row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexDirection = "row";

    for(let i = 0; i < count; ++i){
        let a = document.createElement("div");
        a.style.backgroundColor = "blue";
        a.style.border = "1px solid black";
        a.style.innterText = "Hello World"; 
        a.style.aspectRatio = "1 / 1";
        a.className = "cell";

        a.style.flex = "1";

        row.appendChild(a);
    }

    return row;
}

function insertgrid(parentnode, size){
    for(let i = 0; i < size; ++i){
        let rownode = row(size);
        parentnode.appendChild(rownode);
    }
}

function deletegrid(parentnode){
    while (parentnode.firstChild) {
        parentnode.removeChild(parentnode.firstChild);
    }
}


let button = document.getElementById("submitButton");
button.addEventListener("click", ()=>{
    let inputval =  document.getElementById("inputField").value;

    console.log(inputval);
    deletegrid(getparentnode());
    insertgrid(getparentnode(), inputval);
    document.getElementById("inputField").value = "";

    document.querySelectorAll(".cell").forEach(cell => {
        cell.addEventListener("mouseover", function() {
            this.style.backgroundColor = "red";
        });
    });
});

insertgrid(getparentnode(), 16);
deletegrid(getparentnode());
insertgrid(getparentnode(), 5);

document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("mouseover", function() {
        this.style.backgroundColor = "red";
    });
});