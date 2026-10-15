export const promedio = (...notas) => 
    notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

export const estado = (nota, minima = 13) => 
    nota >= minima ? "Aprobado" : "Desaprobado";

const reporte = (estudiante) => {
    const { nombre, notas } = estudiante;
    const prom = promedio(...notas);
    return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

export default reporte;