window.onload=function(){

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	/*
	REGEX:
		Controlaremos que el user no pueda introducir caracteres que no sean los esperaods.
		De esta forma la posibilidad de que cometa un error será prácticamente minimo.
	*/
	user: /^[a-zA-Z0-9]{5,10}$/, // Admite 5-10 caracteres alfanumericos.
	name: /^[a-zA-Z]{3,10}$/, // Admite 3-10 caracteres alfanumericos.
	password: /^.{8,}$/, // Admite 8 caracteres como minimo.
	email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/, // Admite un email valido.
	phone: /^[0-9]{10}$/, // Admite 10 caracteres numericos.
}

	/* 
	FUNCIONES:
		Seteamos los eventos de los inputs en el formulario como false para que no se ejecuten
		al iniciar la pagina.
	*/
const fields = { user: false, name: false, password: false, email: false, phone: false};



const complexFormValidation = (e) => { /* validar formulario */

	switch (e.target.name) {
		case "user": validField(expresiones.user, e.target, 'user');
		break;
		case "name": validField(expresiones.name, e.target, 'name');
		break;
		case "password": validField(expresiones.password, e.target, 'password'); validarPassword2();
		break;
		case "password2": validarPassword2();
		break;
		case "email": validField(expresiones.email, e.target, 'email');
		break;
		case "phone": validField(expresiones.phone, e.target, 'phone');
		break;
	}
}

/* 
	FUNCIONES:
		Validamos los campos del formulario.
			- Si el campo es valido, se setea el campo como true.
			- Si el campo es invalido, se setea el campo como false.
			- Si el campo es vacio, se setea el campo como false.
*/

const validField = (expresion, input, field) => {
	if(expresion.test(input.value)){
		document.getElementById(`g${field}`).classList.remove('formGroup-incorrecto');
		document.getElementById(`g${field}`).classList.add('formGroup-correcto');
		document.querySelector(`#g${field} i`).classList.add('fa-check-circle');
		document.querySelector(`#g${field} i`).classList.remove('fa-times-circle');
		document.querySelector(`#g${field} .form_in-error`).classList.remove('form_in-error-activo');
		fields[field] = true;
	} else {
		document.getElementById(`g${field}`).classList.add('formGroup-incorrecto');
		document.getElementById(`g${field}`).classList.remove('formGroup-correcto');
		document.querySelector(`#g${field} i`).classList.add('fa-times-circle');
		document.querySelector(`#g${field} i`).classList.remove('fa-check-circle');
		document.querySelector(`#g${field} .form_in-error`).classList.add('form_in-error-activo');
		fields[field] = false;
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
/*
	FUNCIONES:
		- Comprobamos que todos los campos esten validados.
		- Si todos los campos estan validados, se envia el formulario.
		- Si no, se muestra un mensaje de error.
*/

inputs.forEach((input) => {
	input.addEventListener('keyup', complexFormValidation);
	input.addEventListener('blur', complexFormValidation);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	// Check if all fields is not empty
	if(fields.user && fields.name && fields.password && fields.phone){
		alert('Formulario enviado correctamente');
		console.log(fields);
		console.log(fields.user);
		console.log(fields.name);
		console.log(fields.email);
		console.log(fields.phone);
		console.log(fields.opention);
	} else {
		alert('Por favor, rellene todos los campos');
		console.log(fields);
		console.log(fields.user);
		console.log(fields.name);
		console.log(fields.email);
		console.log(fields.phone);
		console.log(fields.opention);
	}

});



};