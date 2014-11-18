$(document).ready(function() {
    function getPi() 
                {return Math.PI}

                function getRandom() 
                {return Math.random()}

                function change()
                {
                    var temp = document.calculator.text.value;

                    if (temp.substring(0,1) == "-") 
                    {document.calculator.list.value = "";
                     document.calculator.text.value = 0 - document.calculator.text.value * 1}

                    if (temp.substring(0,1) != "-") 
                    {document.calculator.list.value ="";
                     document.calculator.text.value = "-" +    temp.substring(0,temp.length)}
                }

                function recip(x)
                {document.calculator.text.value = (1/(x))}
                function raisePower(x)
                {

                    var y = 0

                    y = prompt("What is the exponent?", "")

                    document.calculator.text.value = Math.pow(x,y)
                }
});