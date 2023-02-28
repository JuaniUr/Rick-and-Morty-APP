

export default function validation(input){
    const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    const errors = {}
    if(!regexEmail.test(input.username)){
        errors.username= 'El username debe ser un email valido!';
    }
    if (!input.username){
        errors.username= 'El nombre es obligatorio';
    }
    if (input.username.length > 35){
        errors.username= 'Nombre debe ser un email Valido';
    }
    if (!regexPassword.test(input.password)){
        errors.password= 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. No Puede contener Simbolos'
    }
    return errors;
}