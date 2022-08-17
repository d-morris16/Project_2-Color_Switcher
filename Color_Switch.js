//Create an HTML select dropdown with at least 5 color options in it 
//-use the "onchange" attribute so that every time a user selects a color using the dropdown, 
//it calls your JavaScript function that changes the background color of the BODY to the color selected in the dropdown 



/* 
Step 1: Create a function that will execute from the "onchange" attribute. 
Sep 2: Create the onchange event to call on my function.
Step 3: Create an empty variable that will take in the selected value from the dropdown menu. 
Step 4: Within the function use the document.getElement to change the innerHTML's background
style to be equal to the variable that was selected. 
*/



function backgroundChange() {
  let newColor = document.getElementById("Color_List"); 

  document.getElementById("Colors").style.backgroundColor = newColor.value;
}
