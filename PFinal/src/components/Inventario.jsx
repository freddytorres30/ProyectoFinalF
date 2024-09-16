import React, { useEffect, useState } from 'react';
import '../style/Admin.css';
import { useNavigate } from 'react-router-dom';
import getProducts from '../services/GetProducts';

function TablaInventario() {
    const [productos, setProductos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const productosData = await getProducts();
                setProductos(productosData);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        }

        fetchProducts();
    }, []);

    function cerrarSesion() {
        localStorage.removeItem('Autenticado');
        navigate('/');
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
                        <th>Tipo</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.tipo}</td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.precio}</td>
                            <td>
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaInventario;
