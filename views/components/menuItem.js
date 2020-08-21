const addItem =()=>{
    let newField = document.getElementById('newItem');
    let form= document.createElement('input');
form.innerHTML(
    Dish Name <input type="text" name="dishName"/><br/>
section: <input type="text" name="section"/><br/>
Food Cost: <input type="number" name="foodCost"/><br/>
Menu Price: $<input type="number" name="menuPrice"/><br/>
station: <input type="text" name="station"/><br/>
Is Gluten Free: <input type="checkbox" name="isGlutenFree" default={false}/><br/>
<input type="submit" name="" value="Submit Menu"/>})