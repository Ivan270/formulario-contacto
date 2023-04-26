let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	let datosFormulario = capturarDatos(
		usuarioNombre.value,
		usuarioApellido.value,
		usuarioMail.value,
		usuarioMotivo.value,
		usuarioMensaje.value
	);
	generarAlert(datosFormulario);
	form.reset();
});

let capturarDatos = (nombre, apellido, mail, motivo, mensaje) => ({
	nombre,
	apellido,
	mail,
	motivo,
	mensaje,
});

let generarAlert = (datos) => {
	alert(
		`DE: ${datos.nombre} ${datos.apellido} (${datos.mail})\n- ASUNTO: ${datos.motivo}\n- MENSAJE: \n${datos.mensaje}.`
	);
};
