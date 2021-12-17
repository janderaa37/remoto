window.onload = function() {

    //Selectores
    const inputs = document.querySelectorAll("input");
    const formA = document.forms["formA"];
    const formB = document.forms["formB"];
    const button = document.querySelector("#send");
    const error = document.querySelectorAll("#content div div");

    //Expresiones regulares
    const phone = /(\+[0-9]{2})?[ -]*[6-7][ -]*([0-9][ -]*){8}$/
    const mail = /\S+@\S+\.[A-za-z0-9]{2,3}$/
    const pass = /([A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]){8,16}/

    //Reseteo del formulario
    formA.reset();
    formB.reset();

    //Listeners
    //Para cada input ,cuando el foco está sobre un input se añade el estilo top cuando se elimina el foco en caso de que no haya nada escrito en el input se elimina el estilo top
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
        if (formA.name.value.length < 21 && formA.name.value.length > 0) {
            error[0].style.backgroundImage = "url('../images/success_icon.png')";
            error[0].style.visibility = "visible";
        } else {
            error[0].style.visibility = "visible";
        }

        //Comprovación apellidos. Debe tener de 1 a 30 caracteres.
        if (formA.name.value.length < 31 && formA.name.value.length > 0) {
                error[1].style.backgroundImage = "url('../images/success_icon.png')";
                error[1].style.visibility = "visible";
        } else {
                error[1].style.visibility = "visible";
        }

        //La fecha debe seguir el formato DD/MM/AAAA
        var date = formA.birthdate.value.split("/");
        var birthDate = new Date(date[1], date[0], date[2]);
        if (!isNaN(birthDate)) {
            error[2].style.backgroundImage = "url('../images/success_icon.png')";
            error[2].style.visibility = "visible";
        } else {
            error[2].style.visibility = "visible";
        }

        if (phone.test(formA.surname.value) == true) {
            error[3].style.backgroundImage = "url('../images/success_icon.png')";
            error[3].style.visibility = "visible";
        } else {
            error[3].style.visibility = "visible";
        }

        //El numero de telefono debe seguir el siguente formato, [+##][" " "-"]6##[" " "-"]##[" " "-"]##[" " "-"]## (Los corchetes indican que son caracteres opcionales y los # que puede ser cualquier numero)
        if (phone.test(formA.phone.value) == true) {
            error[3].style.backgroundImage = "url('../images/success_icon.png')";
            error[3].style.visibility = "visible";
        } else {
            error[3].style.visibility = "visible";
        }

        //El email debe seguir el siguiente formato debe tener una cadena seguida de una arroba, otra cadena, un punto y una ultima cadena de 2 a 3 caracteres  
        if (mail.test(formB.email.value) == true) {
            error[4].style.backgroundImage = "url('../images/success_icon.png')";
            error[4].style.visibility = "visible";
        } else {
            error[4].style.visibility = "visible";
        }

        //La contraseña debe tener entre 8 y 16 caracteres incluyendo letras mayusculas y minusculas numeros y caracteres especiales
        if (pass.test(formB.password.value) == true) {
            error[5].style.backgroundImage = "url('../images/success_icon.png')";
            error[5].style.visibility = "visible";
        } else {
            error[5].style.visibility = "visible";
        }

        //La repeticion de la contraseña debe ser igual que la contraseña
        if (formB.password.value = formB.repeat.value) {
            error[6].style.backgroundImage = "url('../images/success_icon.png')";
            error[6].style.visibility = "visible";
        } else {
            error[6].style.visibility = "visible";
        }

    }

}