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

const capturarDatos = (nombre, apellido, mail, motivo, mensaje) => ({
	nombre,
	apellido,
	mail,
	motivo,
	mensaje,
});

const generarAlert = (datos) => {
	alert(
		`DE: ${datos.nombre} ${datos.apellido} (${datos.mail})\n- ASUNTO: ${datos.motivo}\n- MENSAJE: \n${datos.mensaje}.`
	);
};
