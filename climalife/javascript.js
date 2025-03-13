document.addEventListener("DOMContentLoaded", function() {
    let cantidad = 1;
    const cantidadSpan = document.getElementById("cantidad");
    const btnMas = document.getElementById("mas");
    const btnMenos = document.getElementById("menos");
    const formulario = document.getElementById("formularioCompra");
    const confirmacion = document.getElementById("confirmacion");
    const seccionCompra = document.querySelector(".compra");

    btnMas.addEventListener("click", function() {
        cantidad++;
        cantidadSpan.textContent = cantidad;
    });

    btnMenos.addEventListener("click", function() {
        if (cantidad > 1) {
            cantidad--;
            cantidadSpan.textContent = cantidad;
        }
    });

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); 

        seccionCompra.style.display = "none";
        confirmacion.style.display = "block";
    });
});
