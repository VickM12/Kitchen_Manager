# Kitchen_Manager

### Target Audience
Chefs, restauranteurs, and kitchen managers

### Problem
Often times chefs rely on multiple programs to track the operations of their kitchen. This can take away productivity as they move from one program to another to update inventory, manage menues, and track recipe and food costs.

### Solution
Kitchen_Manager tries to simplify a chef's workflow by offering inventory management, menu development and pricing, and recipe costing and development in one place. Chefs will be able to see immediately what their purchase price, actual price, and suggested menu price are based on their orders and portion size. In future developments, chefs will also be able to add staff profiles and write schedules all under one roof.  

### The App Itself

Kitchen_Manager uses javascript in conjuntion with Node and .jsx files to display online. 

The app is currently made up of three main modules: Inventory Manager, Recipe Manager, and Menu Manager. 

In the Inventory Manager, chefs can input their product name, the pack type it comes in, the pack size, price, and amount they have on hand. . They can also edit this information. In future deployments, this information will be available in the Recipe Manager and chefs will be able to connect to their purveyor's sites and pull this information from their orders.

The Recipe Manager offers some key features every chef needs. Currently, a chef must start a new recipe card and then manually add new ingredients. They must also manually enter in their actual Food Cost based on the yield percentage of their product and the amount their reicpe calls for and enter a Menu Price based on their food cost percent, but we have included helpful formulas printed in the form to aid in this process. Recipes are then displayed in a table format detaining the ingredients' names, the amount used, their unit of measure, their yield percent, their purchase price, their food cost, the total cost of the recipe, the menu price, and the method of prep. 

In the Menu Manager we strived to add tools to help chefs and restauranteurs see at a glance how much their menus are costing them. To create a new menu, select the Add New Menu button at the top of the screen. You will be directed to a drop down menu of all available reciepes currently saved in the recipe manager. Upon selecting one, you will be taken to a form where you can enter which section of the menu the dish will go on, which station will prepare it, and edit its food cost and menu price. The id number at the bottom of the form should be saved and not touched. After adding this first dish to the menu, chefs can go in and add new dishes, just like in the recipe manager when adding new ingredients to a recipe. The reccipe id should be saved, copied, and pasted into the form. When a chef goes to view a menu, they will see their dishes they have added. Under each dish is a link to its related recipe, linked via the id number in the previous forms. 

### Known Bugs
Currently, when the Add New Dish button is clicked, the user must input all the information themselves, rather than be able to select the dish from the recipe database like they can with the Add Nem Menu function. Recipe data has been able to be transferred and connected at this point. 

Currently only one ingredient at a time can be entered into a recipe.

Recipe Manager and Inventory Manager are not synced up yet.

Edit forms in Menu and Recipe Forms rewrite all data in each menu/recipe with information from only one item. Upon editing a recipe or menu, both must be rewritten manually. 

