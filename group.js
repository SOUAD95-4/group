


let listName = [];

document.querySelector("#add").addEventListener("click", addNameTab)

function addNameTab() {
    let newName = document.querySelector("#name").value;

    console.log(newName);

    listName.push(newName);

    console.log(listName);


    //rajouter une ligne

    addLine(newName);

//LA PREMIÉRE PARTIE

}
//add line #id newLine
function addLine(newName){

    const myLine = document.querySelector("#newLine")

    const myLi = document.createElement("li") //create a li

    myLi.innerText = newName; // add name in li

     myLine.appendChild(myLi) // paste child to parent
    //editButton(myLi)
    }

/// create div edit and delete

function editButton(element){

    const myLine = document.querySelector(element);

   //div
    const myDiv = document.createElement("div");

    //button
    const myButtonDelete = document.createElement("button")
    //button
    
    myLine.appendChild(myDiv,myButtonDelete)
}