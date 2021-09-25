function compute()
{
    var principal = document.getElementById("principal").value; //Get users pricipal input

    if (principal > 0){
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;      //Get initial values
        let interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);     //Gets the current year and adds it to the years input by user
        result = document.getElementById("result")
        result.innerHTML = "<p>With an Initial Deposit of $<mark>"+ principal +" </mark>,<br>an interest rate of <mark>" + rate + "% </mark>.<br>You will make in interest $<mark>"+interest+" </mark>,<br>in the year <mark>"+year+" </mark></p>";
        return
        //Set the text value where the result ID is being held to the above text. Marks are used for highlighting the text.
    } 
    // Function to heck and make sure that the principal text field isnt empty 
    if (principal <= 0 || principal.isEmpty()){
        alert("Please enter a positive value for principal");
        return
    }       
}

function updateRate()
{
    var retval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=retval;
      
}
        