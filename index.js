var display = document.getElementById("display");
var buttons = document.getElementsByClassName("ac");
console.log(buttons);
var operand1 = 0;


for(var i=0; i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute("data-value");
        if(value=="="){
            display.innerText=eval(display.innerText);
        }
        else if(value=="AC"){
         display.innerText ="";
        }        
        else{
            operand1 = parseFloat(display.textContent);
            display.innerText += value;
        }
        
    });
}
