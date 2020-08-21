
let counter = 0;

const addItem =()=>{
    counter++;
    let newFields = document.getElementById('form').cloneNode(true);
    newFields.id=''
    let newField=newFields.childNodes;
    for (let i =0; i <newField.length;i++){
        let theName =newField[i].name
        if (theName)
        newField[i].name = theName + counter;
    }
    let insertHere = document.getElementById("form");
    return(
    insertHere.parentNode.insertAfter(newFields, insertHere)
    );
}
document.getElementById(addNewItem).onclick(addItem())

module.exports= addItem();