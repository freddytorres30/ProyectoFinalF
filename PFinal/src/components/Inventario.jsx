import '../style/Admin.css'
import { useNavigate } from "react-router-dom";

function TablaInventario() {
    const Navigate = useNavigate()

    function cerrarSesion() {
        localStorage.removeItem('Autenticado');
        Navigate('/');
    };

    return (
        <div className="containerI">
            <button className="cerrar" onClick={cerrarSesion}>Cerrar Sesión</button>
            <h1>Inventario</h1>
            <br />
            <table id="solicitudesTable" className="solicitudes-table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Tipo</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody id="solicitudesCtn"></tbody>
            </table>

        </div>
    )
}
export default TablaInventario