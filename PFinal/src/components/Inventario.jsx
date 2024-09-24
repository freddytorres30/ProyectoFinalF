import React, { useEffect, useState, useCallback } from 'react';
import '../style/Admin.css';
import { useNavigate } from 'react-router-dom';
import getProducts from '../services/GetProducts';
import updateProduct from '../services/updateProducts';
import deleteProduct from '../services/DeleteProducts';

function TablaInventario() {
    const [productos, setProductos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [productToDelete, setProductToDelete] = useState(null);
    const navigate = useNavigate();


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

    function clickEliminar(productId) {
        setProductToDelete(productId);
        setShowConfirmModal(true);
    }

    async function confirmDelete() {
        if (productToDelete) {
            try {
                await deleteProduct(productToDelete);
                setProductos(prevProducts =>
                    prevProducts.filter(product => product.id !== productToDelete)
                );
                setShowConfirmModal(false);
                setProductToDelete(null);
            } catch (error) {
                console.error('Error al eliminar el producto:', error);
            }
        }
    }

    function handleCloseConfirmModal() {
        setShowConfirmModal(false);
        setProductToDelete(null);
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
                        <th>Categoria</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Destacado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.categoria}</td>
                            <td>{producto.cantidad}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.destacado ? 'Sí' : 'No'}</td>
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

            {/* Modal de confirmación de eliminación */}
            {showConfirmModal && (
                <ConfirmModal
                    onClose={handleCloseConfirmModal}
                    onConfirm={confirmDelete}
                />
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
        const { name, value, type, checked } = e.target;
        setEditedProduct({
            ...editedProduct,
            [name]: type === 'checkbox' ? checked : value,
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
                    <label> Categoria:
                        <input
                            type="text" name="categoria"
                            value={editedProduct.categoria} onChange={handleInputChange} />
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
                            value={editedProduct.precio} onChange={handleInputChange} />
                    </label>
                    <br />
                    <label> Destacado:
                        <input
                            type="checkbox"
                            name="destacado"
                            checked={editedProduct.destacado}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label> Descripción:
                        <textarea
                            name="descripcion"
                            value={editedProduct.descripcion}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <button type="button" onClick={() => onSave(editedProduct)}>Guardar Cambios</button>
                </form>
            </div>
        </div>
    );
}

function ConfirmModal({ onClose, onConfirm }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>¿Estás seguro de que deseas eliminar este producto?</p>
                <button onClick={onConfirm}>Sí, eliminar</button>
                <button onClick={onClose}>Cancelar</button>
            </div>
        </div>
    );
}

export default TablaInventario;
