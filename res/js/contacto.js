window.onload=function(){

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
let opcElegida = 0;

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false,
    option : 3,

}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formGroup-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formGroup-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .form_in-error`).classList.remove('form_in-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formGroup-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formGroup-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .form_in-error`).classList.add('form_in-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`user_passwd2`).classList.add('formGroup-incorrecto');
		document.getElementById(`user_passwd2`).classList.remove('formGroup-correcto');
		document.querySelector(`#user_passwd2 i`).classList.add('fa-times-circle');
		document.querySelector(`#user_passwd2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#user_passwd2 .form_in-error`).classList.add('form_in-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`user_passwd2`).classList.remove('formGroup-incorrecto');
		document.getElementById(`user_passwd2`).classList.add('formGroup-correcto');
		document.querySelector(`#user_passwd2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#user_passwd2 i`).classList.add('fa-check-circle');
		document.querySelector(`#user_passwd2 .form_in-error`).classList.remove('form_in-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked && campos.option == 3){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formGroup-correcto').forEach((icono) => {
			icono.classList.remove('formGroup-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

};