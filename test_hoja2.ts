




function buscarPacientePorID(pacientes, id, callback) {
    // Buscar el paciente con el ID dado
    const pacienteEncontrado = pacientes.find(paciente => paciente.ID_PACIENTE === id);

    // Llamar al callback con el paciente encontrado
    if (pacienteEncontrado) {
        callback(null, pacienteEncontrado); // No hay error, se pasa null como primer argumento
    } else {
        const error = new Error('Paciente no encontrado');
        callback(error, null); // Se pasa el error como primer argumento
    }
}

// Definir una función de callback para mostrar el paciente encontrado
function mostrarPaciente(error, paciente) {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Paciente encontrado:', paciente);
    }
}

// Llamar a la función para buscar un paciente por su ID
const idBuscado = 3; // ID del paciente a buscar
buscarPacientePorID(paciente, idBuscado, mostrarPaciente);