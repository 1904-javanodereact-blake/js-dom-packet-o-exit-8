// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
function getUSA(){
    
     

// Find the html element that contains "USA".
// Print that element's contents.
const usa = document.getElementsByTagName('*');
    for(let i=0; i<usa.length; i++)
    {
        if(usa[i].textContent === 'USA'){
            console.log(usa[i].textContent);
        }
    }
}
// 2. Sales
// Define function getPeopleInSales()
function getPeopleInSales(){
// Print the names of all the people in the sales department.

const salesDept = document.getElementsByTagName('*');

for (let i=0; i<salesDept.length; i++){
    if(salesDept[i].textContent === 'Sales'){
        console.log(salesDept[i].parentNode.textContent);
    }    
}
}
// 3. Click Here
// Define function getAnchorChildren()
function getAnchorChildren() {

// Find all anchor elements with a <span> child.
const tagSpan = document.getElementsByTagName('span');

 for (let i=0; i<tagSpan.length; i++){
        console.log(tagSpan[i].textContent);
    }  
// Print the contents of <span>

}
// 4. Hobbies
// Define function getHobbies()
function getHobbies() {
// Find all checked options in the 'skills' select element.
const skills = document.getElementsByName('skills');
// Print the value and the contents.
for (let i=0; i<skills.length; i++){
    console.log(skills[i].textContent);
}  
}
// 5. Custom Attribute
// Define function getCustomAttribute()
function getCustomAttribute(){
// Find all elements with "data-customAttr" attribute
const customAttr = document.querySelectorAll('[data-customAttr]');

// Print the value of the attribute.
for (let i=0; i<customAttr.length; i++){
    console.log(customAttr[i]);
}
// Print the element that has the attribute. 
}


    // 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="n1" class="nums" type="text"/>

// let n1 = document.getElementById("num1");
// let n2 = document.getElementById("num2");

// n1.addEventListener("input", () => addition(n1.value, n2.value));
// n2.addEventListener("input", () => addition(n1.value, n2.value));

// 	<input id="n2" class="nums" type="text"/>

// 	<h3>Sum: <span id="sum"></span></h3>  
// function addition(n1, n2){
// const sum = +n1 + +n2;

// if(sum !== NaN)
// {
//     document.getElementById("sum").innerHTML = sum;
// }
//    else {
//        console.log('cannot added');
//    } 

// }
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

// const skill = document.getElementsByName('skills');
// skill = addEventListener("change", ()=> {

//     console.log(skill.value);

// });


    // skill[0].addEventListener("change", (event) => {
    // alert(`Are you sure ${skill[0].value} is one of your skills?`);
    // });

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor





    let colors = document.getElementsByName("favoriteColor");
    let oldColor = null;
    console.log(colors);
    for (let i=0; i<colors.length; i++){
            
            colors[i].addEventListener("click", (event) => {
                if(oldColor === null){
                    alert(`so your favorite color is: ${colors[i].value}`);
                    console.log(`so your favorite color is: ${colors[i].value}`);
                    oldColor = colors[i].value;
                    console.log(`old Color: ${oldColor}`);
                }else{
                    alert(`So you like ${colors[i].value} more than ${oldColor}`);
                     console.log(`So you like ${colors[i].value} more than ${oldColor}`);
                     
                }
                let c = colors[i].value;
                console.log(c);
                colors.style.backgroundColor = c;
            });
            
        }
    

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
let employee = document.getElementsByClassName("empName");
for(let i = 0; i<employee.length; i++) {
        

employee[i].addEventListener("mouseover", ()=> {
    
    console.log(employee[i].textContent);
    employee[i].style.display = "none";

});

employee[i].addEventListener("mouseout", ()=> {
        
    employee[i].style.display="block";
    });   

}



// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let currentTime = document.getElementById("currentTime");
let time = hour + ":" + minutes + ":" + seconds; 
currentTime.textContent = (time);

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

let helloWorld = document.getElementById("helloWorld");
helloWorld.addEventListener("click", function textColor() {
    let randColor= Math.floor(Math.random()*16777215).toString(16);
    randColor = "#"+randColor;
    console.log(randColor);
        helloWorld.style.color = randColor;
        //textColor.setTimeOut(textColor,3000);
    // textColor.setTimeout(() => {
        
    // },  3000);
})
//.delay(3000);

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDOM(node, func)