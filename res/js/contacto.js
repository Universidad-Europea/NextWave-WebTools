window.onload=function(){

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
let opcElegida = 0;

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/
}

const fields = {
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
			validField(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validField(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validField(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validField(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validField(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validField = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`g${campo}`).classList.remove('formGroup-incorrecto');
		document.getElementById(`g${campo}`).classList.add('formGroup-correcto');
		document.querySelector(`#g${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#g${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#g${campo} .form_in-error`).classList.remove('form_in-error-activo');
		fields[campo] = true;
	} else {
		document.getElementById(`g${campo}`).classList.add('formGroup-incorrecto');
		document.getElementById(`g${campo}`).classList.remove('formGroup-correcto');
		document.querySelector(`#g${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#g${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#g${campo} .form_in-error`).classList.add('form_in-error-activo');
		fields[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`gpassword2`).classList.add('formGroup-incorrecto');
		document.getElementById(`gpassword2`).classList.remove('formGroup-correcto');
		document.querySelector(`#gpassword2 i`).classList.add('fa-times-circle');
		document.querySelector(`#gpassword2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#gpassword2 .form_in-error`).classList.add('form_in-error-activo');
		fields['password'] = false;
	} else {
		document.getElementById(`gpassword2`).classList.remove('formGroup-incorrecto');
		document.getElementById(`gpassword2`).classList.add('formGroup-correcto');
		document.querySelector(`#gpassword2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#gpassword2 i`).classList.add('fa-check-circle');
		document.querySelector(`#gpassword2 .form_in-error`).classList.remove('form_in-error-activo');
		fields['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(fields.usuario && fields.nombre && fields.password && fields.correo && fields.telefono && terminos.checked && fields.option == 3){
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