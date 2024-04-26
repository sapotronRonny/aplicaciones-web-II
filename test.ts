console.log("hola mundo")

interface Paciente {
    ID_PACIENTE: number;
    nombre: string;
    CI: number;
}

const paciente = [
{
    ID_PACIENTE:1,
    nombre: "MAarcelo",
    CI: 2345323456
},{
    ID_PACIENTE:2,
    nombre: "Cuevana",
    CI: 2345323457
},{
    ID_PACIENTE:3,
    nombre: "Diestefano",
    CI: 2345323458
},{
    ID_PACIENTE:4,
    nombre: "Boderin",
    CI: 2345323459
},{
    ID_PACIENTE:5,
    nombre: "Elbichosiu",
    CI: 2345323450
}
]


const tipo_de_examen = [
{
    ID_EXAMEN:1,
    DESCRIPCION: "Examen de sangre",
    INDICACIONES: "yyyy arepujala arremangala, arrepujala, arremangala"
},{
    ID_EXAMEN:2,
    DESCRIPCION: "Examen de prostata",
    INDICACIONES: "arepujala arremangala, arrepujala"
},{
    ID_EXAMEN:3,
    DESCRIPCION: "Examen de heces",
    INDICACIONES: "arepujala arremangala"
},{
    ID_EXAMEN:4,
    DESCRIPCION: "Pruebas genéticas",
    INDICACIONES: "arepujala "
},{
    ID_EXAMEN:5,
    DESCRIPCION: "Examenes de tiroides",
    INDICACIONES: "erremangala"
}
]



const resultado = [
{

    ID_RESULTADOS:1,
    RESULTADO_TEST: "POSITIVO",
    VALOR_PAGA: 100.00,
    OBSERVACIONES:"REALIZAR MASAJES",
    paciente:{
        ID_PACIENTE:1,
        nombre: "MAarcelo",
        CI: 2345323456
    },
    tipo_de_examen:{
        ID_EXAMEN:1,
        DESCRIPCION: "Examen de sangre",
        INDICACIONES: "yyyy arepujala arremangala, arrepujala, arremangala"
    }
},{

    ID_RESULTADOS:2,
    RESULTADO_TEST: "NEGATIVO",
    VALOR_PAGA: 230.00,
    OBSERVACIONES:"REDUCIR NIVELES DE ESTRES",
    paciente:{
        ID_PACIENTE:1,
        nombre: "MAarcelo",
        CI: 2345323456
    },
    tipo_de_examen:{
        ID_EXAMEN:2,
        DESCRIPCION: "Examen de prostata",
        INDICACIONES: "arepujala arremangala, arrepujala"
    }
},{

    ID_RESULTADOS:3,
    RESULTADO_TEST: "POSITIVO",
    VALOR_PAGA: 250.00,
    OBSERVACIONES:"REPOSO",
    paciente:{
        ID_PACIENTE:2,
        nombre: "Cuevana",
        CI: 2345323457
    },
    tipo_de_examen:{
        ID_EXAMEN:1,
        DESCRIPCION: "Examen de sangre",
        INDICACIONES: "yyyy arepujala arremangala, arrepujala, arremangala"
    }
},{

    ID_RESULTADOS:4,
    RESULTADO_TEST: "INDETERMINADO",
    VALOR_PAGA: 300.00,
    OBSERVACIONES:"COMER MENOS EN LA NOCHE",
    paciente:{
        ID_PACIENTE:3,
        nombre: "Diestefano",
        CI: 2345323458
    },
    tipo_de_examen:{
        ID_EXAMEN:5,
        DESCRIPCION: "Examenes de tiroides",
        INDICACIONES: "erremangala"
    }
},{

    ID_RESULTADOS:5,
    RESULTADO_TEST: "POSITIVO",
    VALOR_PAGA: 50.00,
    OBSERVACIONES:"N/A",
    paciente:{
        ID_PACIENTE:2,
        nombre: "Cuevana",
        CI: 2345323457
    },
    tipo_de_examen:{
        ID_EXAMEN:4,
        DESCRIPCION: "Pruebas genéticas",
        INDICACIONES: "arepujala "
    }
}
]

//////////////////////////////////////////////////////////
console.log("----PACIENTES----")
paciente.forEach(p => {
    console.log(`ID: ${p.ID_PACIENTE}, Nombre: ${p.nombre}, CI: ${p.CI}`);
})

console.log("")
console.log("----TIPOS DE EXAMENES----")
for (let indice in tipo_de_examen) {
    const examen = tipo_de_examen[indice];
    console.log(`ID_EXAMEN: ${examen.ID_EXAMEN}, DESCRIPCION: ${examen.DESCRIPCION}, INDICACIONES: ${examen.INDICACIONES}`);
}

console.log("")
console.log("----RESULTADOS----")
console.log("Resultados:");
for (const res of resultado) {
    console.log(`ID: ${res.ID_RESULTADOS}`);
    console.log(`Resultado del test: ${res.RESULTADO_TEST}`);
    console.log(`Valor a pagar: ${res.VALOR_PAGA}`);
    console.log(`Observaciones: ${res.OBSERVACIONES}`);
    console.log(`Paciente: ID ${res.paciente.ID_PACIENTE}, Nombre ${res.paciente.nombre}, CI ${res.paciente.CI}`);
    console.log(`Tipo de examen: ID ${res.tipo_de_examen.ID_EXAMEN}, Descripción ${res.tipo_de_examen.DESCRIPCION}, Indicaciones ${res.tipo_de_examen.INDICACIONES}`);
    console.log("-------------------------");
}

//////////////////////////////////////////////////////////////////////

function buscarPacientePorID(id: number, callback: (paciente: Paciente | undefined) => void): void {
    const pacienteEncontrado = paciente.find(p => p.ID_PACIENTE === id);
    callback(pacienteEncontrado);
}


const idBuscado = 3;
buscarPacientePorID(idBuscado, (pacienteEncontrado) => {
    if (pacienteEncontrado) {
        console.log("Paciente encontrado:", pacienteEncontrado);
    } else {
        console.log("Paciente no encontrado");
    }
});

//////////////////////////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  