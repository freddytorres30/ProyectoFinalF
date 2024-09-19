import React, { useEffect, useState, useCallback } from 'react';
import '../style/Admin.css';
import { useNavigate } from 'react-router-dom';
import getProducts from '../services/GetProducts';
import updateProduct from '../services/updateProducts';
import deleteProduct from '../services/DeleteProducts';

function TablaInventario() {
    const [productos, setProductos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
        
    //     async function fetchProducts() {
    //         try {
    //             const productosData = await getProducts();
    //             setProductos(productosData);
    //         } catch (error) {
    //             console.error('Error al obtener los productos:', error);
    //         }
    //     }

    //     fetchProducts();
    // }, []);

     const load_product=useCallback(()=>{
      const fetchProducts = async () => {
        try {
            const productosData = await getProducts();
            setProductos(productosData);
        } catch (error) {
          console.error("Error fetching Products", error);
        }
      };
      fetchProducts()
     })
    
    useEffect(()=>load_product(),[load_product])

    function cerrarSesion() {
        localStorage.removeItem('Autenticado');
        navigate('/');
    }

    function clickEditar(producto) {
        setCurrentProduct(producto);
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
        setCurrentProduct(null);
    }

    async function guardar(editedProduct) {
        if (currentProduct) {
            try {
                await updateProduct(currentProduct.id, editedProduct);
                setProductos(prevProducts =>
                    prevProducts.map(p =>
                        p.id === currentProduct.id ? editedProduct : p
                    )
                );
                setShowModal(false);
                setCurrentProduct(null);
            } catch (error) {
                console.error('Error al actualizar el producto:', error);
            }
        }
    }

    async function clickEliminar(productId) {
        try {
            await deleteProduct(productId);
            setProductos(prevProducts =>
                prevProducts.filter(product => product.id !== productId)
            );
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    }

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
                                <button onClick={() => clickEditar(producto)}>Editar</button>
                                <button onClick={() => clickEliminar(producto.id)}>Eliminar</button>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal de edición */}
            {showModal && currentProduct && (
                <Modal
                    product={currentProduct}
                    onClose={handleCloseModal}
                    onSave={guardar} />
            )}
        </div>
    );
}

function Modal({ product, onClose, onSave }) {
    const [editedProduct, setEditedProduct] = useState(product);

    useEffect(() => {
        setEditedProduct(product);
    }, [product]);

    function handleInputChange(e) {
        const { name, value } = e.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value,
        });
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Editar Producto</h2>
                <form>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="nombre"
                            value={editedProduct.nombre}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label> Tipo:
                        <input
                            type="text" name="tipo"
                            value={editedProduct.tipo} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label> Cantidad:
                        <input
                            type="number" name="cantidad"
                            value={editedProduct.cantidad} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label> Precio:
                        <input
                            type="number" name="precio"
                            value={editedProduct.precio} onChange={handleInputChange}/>
                    </label>
                    <br />
                    <button type="button" onClick={() => onSave(editedProduct)}>Guardar Cambios</button>
                </form>
            </div>
        </div>
    );
}

export default TablaInventario;
