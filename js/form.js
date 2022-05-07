// Run Script once DOM is loaded
document.addEventListener("DOMContentLoaded", function()
{
    // Validating password match
    document.querySelector("#check").addEventListener("click", function(mismatch)
    {
        let input1 = document.querySelector("#pass1");
        let input2 = document.querySelector("#pass2");
        if (input2.value !== input1.value)
        {
            input1.style.backgroundColor = "red";
            input2.style.backgroundColor = "red";
            document.querySelector("#feedback").innerHTML = "No coinciden";
            mismatch.preventDefault();
            alert("Verifique la contraseña ingresada");
            //TODO: replace x focus on password
            // erasing autofocus from name and setting to password 1 (ver javascript 5) -
            //https://www.w3schools.com/jsref/prop_text_autofocus.asp & https://www.w3schools.com/tags/att_input_autofocus.asp
            //TODO: clear both fields?
            //TODO: stop showing #feedback (warning time out)
            //TODO: set background to normal again
            // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        }
        else {
            alert("Muchas gracias, su registro se completó exitosamente. A la brevedad nos estaremos contactando con usted");
        }
    });
});
