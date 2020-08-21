
let counter = 0;

const addItem =()=>{
    counter++;
    let newFields = document.getElementById('menuItem').cloneNode(true);
    newFields.id=''
    let newField=newFields.childNodes;
    for (let i =0; i <newField.length;i++){
        let theName =newField[i].name
        if (theName)
        newField[i].name = theName + counter;
    }
    let insertHere = document.getElementById("newItem");
    return(
    insertHere.parentNode.insertAfter(newFields, insertHere)
    );
}

module.exports= addItem();