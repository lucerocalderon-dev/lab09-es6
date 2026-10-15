import estudiantes, { curso } from "./datos.js";
import reporte, { promedio } from "./calculos.js";

const nuevoEstudiante = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevoEstudiante];

console.log(`Curso: ${curso}`);
todos.forEach(estudiante => console.log(reporte(estudiante)));

document.querySelector("#nombre-curso").textContent = `Curso: ${curso}`;
const ulReportes = document.querySelector("#reportes");

todos.forEach(estudiante => {
    const li = document.createElement("li");
    li.textContent = reporte(estudiante);
    ulReportes.appendChild(li);
});