// Run Script once DOM is loaded
document.addEventListener("DOMContentLoaded", function()
{
    // Validating password match
    document.querySelector("#check").addEventListener("click", function(event)
    {
        let input1 = document.querySelector("#pass1");
        let input2 = document.querySelector("#pass2");
        if (input2 !== input1)
        {
            input2.style.backgroundColor = "red";
            document.querySelector("#feedback").innerHTML = "No coinciden";
            event.preventDefault();
            alert("Verifique la contraseña ingresada");
        }
    });
});
