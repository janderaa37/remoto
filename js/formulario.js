window.onload = function() {

    //Selectores
    const inputs = document.querySelectorAll("input");
    const form = document.forms["form"];
    const button = document.querySelector("#send");
    const error = document.querySelectorAll("#content div div");
    const errorReason = document.querySelectorAll("#content div div:hover:after");

    console.log(errorReason);

    const phone = /(\+[0-9]{2})?[ -]*[6-7][ -]*([0-9][ -]*){8}$/
    const mail = /\S+@\S+\.[a-z]{2,3}$/
    const pass = /([A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]){8,16}/

    //Reseteo del formulario
    form.reset();

    //Listeners
    inputs.forEach(input => {
        input.onfocus = () => {
            input.previousElementSibling.classList.add('top');
        }
        input.onblur = () => {
            if (input.value.trim().length == 0) {
                input.previousElementSibling.classList.remove('top');
            }
        }
    });

    button.addEventListener("click", checkForm)

    function checkForm() {
        //Comprovación nombre. Debe tener de 1 a 20 caracteres.
        if (form.name.value.length < 21 && form.name.value.length > 0) {
            error[0].style.backgroundImage = "url('../images/success_icon.png')";
            error[0].style.visibility = "visible";
        } else {
            error[0].style.visibility = "visible";
        }

        var date = form.birthdate.value.split("/");
        var birthDate = new Date(date[1], date[0], date[2]);
        if (!isNaN(birthDate)) {
            error[1].style.backgroundImage = "url('../images/success_icon.png')";
            error[1].style.visibility = "visible";
        } else {
            error[1].style.visibility = "visible";
        }

        if (phone.test(form.phone.value) == true) {
            error[3].style.backgroundImage = "url('../images/success_icon.png')";
            error[3].style.visibility = "visible";
        } else {
            error[3].style.visibility = "visible";
        }

        // if (mail.test(form.email.value) == true) {
        //     error[4].style.backgroundImage = "url('../images/success_icon.png')";
        //     error[4].style.visibility = "visible";
        // } else {
        //     error[4].style.visibility = "visible";
        // }

        // if (pass.test(form.password.value) == true) {
        //     error[5].style.backgroundImage = "url('../images/success_icon.png')";
        //     error[5].style.visibility = "visible";
        // } else {
        //     error[5].style.visibility = "visible";
        // }

        // if (form.password.value = form.repeat.value) {
        //     error[6].style.backgroundImage = "url('../images/success_icon.png')";
        //     error[6].style.visibility = "visible";
        // } else {
        //     error[6].style.visibility = "visible";
        // }

    }
}