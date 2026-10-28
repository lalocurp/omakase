document.addEventListener('DOMContentLoaded', () => {

    // 1. Control de Pestañas (Navegación dinámica)
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 2. Cálculo dinámico del total en la sección de Pedidos
    const selectProducto = document.getElementById('select_producto');
    const inputCantidad = document.getElementById('cant_producto');
    const inputPrecioUnitario = document.getElementById('precio_unitario');
    const displayTotal = document.getElementById('total_pedido');
    const inputTotal = document.getElementById('input_total');

    function calcularTotal() {
        if (!selectProducto || !inputCantidad) return;

        const optionSeleccionada = selectProducto.options[selectProducto.selectedIndex];
        const precio = parseFloat(optionSeleccionada.getAttribute('data-precio')) || 0;
        const cantidad = parseInt(inputCantidad.value) || 1;

        const total = precio * cantidad;

        inputPrecioUnitario.value = precio.toFixed(2);
        displayTotal.textContent = `$${total.toFixed(2)} MXN`;
        inputTotal.value = total.toFixed(2);
    }

    if (selectProducto && inputCantidad) {
        selectProducto.addEventListener('change', calcularTotal);
        inputCantidad.addEventListener('input', calcularTotal);
    }
});