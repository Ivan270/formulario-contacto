let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	let datosFormulario = capturarDatos();
	generarAlert(datosFormulario);
});
let capturarDatos = () => {
	let datos = { nombre: '', apellido: '', mail: '', motivo: '', mensaje: '' };
	datos.nombre = usuarioNombre.value;
	datos.apellido = usuarioApellido.value;
	datos.mail = usuarioMail.value;
	datos.motivo = usuarioMotivo.value;
	datos.mensaje = usuarioMensaje.value;
	return datos;
};
let generarAlert = (datos) => {
	alert(
		`DE: ${datos.nombre} ${datos.apellido} (${datos.mail})\n- ASUNTO: ${datos.motivo}\n- MENSAJE: \n${datos.mensaje}.`
	);
};
