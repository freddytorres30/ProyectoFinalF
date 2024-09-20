import '../style/Admin.css';
import React, { useState, useEffect } from 'react';
import postProducts from '../services/PostProducts';

const ProductModal = ({ isOpen, onClose, product, onSave }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        cantidad: '',
        precio: '',
        tipo: '',
        descripcion: '',
        imagenes: [], 
    });

    useEffect(() => {
        if (product) {
            setFormData({
                nombre: product.nombre || '',
                cantidad: product.cantidad || '',
                precio: product.precio || '',
                tipo: product.tipo || '',
                descripcion: product.descripcion || '',
                imagenes: product.imagenes || [], 
            });
        } else {
            setFormData({
                nombre: '',
                cantidad: '',
                precio: '',
                tipo: '',
                descripcion: '',
                imagenes: [], 
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (files) => {
        const imagePromises = Array.from(files).map((file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64 = reader.result.split(',')[1]; 
                    resolve(base64);
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises).then((base64Images) => {
            setFormData((prevData) => ({
                ...prevData,
                imagenes: base64Images,
            }));
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (product) {
                await postProducts({ ...formData, id: product.id });
            } else {
                await postProducts(formData);
            }
    
            setFormData({
                nombre: '',
                cantidad: '',
                precio: '',
                tipo: '',
                descripcion: '',
                imagenes: [],
            });
            onSave();
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };
    

    const handleDelete = async () => {
        if (!product) return;
        try {
            await postProducts({ ...product, _method: 'DELETE' });
            onSave();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleCancel = () => {
        setFormData({
            nombre: '',
            cantidad: '',
            precio: '',
            tipo: '',
            descripcion: '',
            imagenes: [], 
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{product ? 'Editar Producto' : 'Agregar Producto'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Tipo:
                        <select
                            name="tipo"
                            value={formData.tipo}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecciona un tipo</option>
                            <option value="pan">Pan</option>
                            <option value="pan dulce">Pan Dulce</option>
                            <option value="repostería">Repostería</option>
                            <option value="pastelería">Pastelería</option>
                        </select>
                    </label>
                    <label>
                        Cantidad:
                        <input
                            type="number"
                            name="cantidad"
                            value={formData.cantidad}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Precio:
                        <input
                            type="number"
                            step="0.01"
                            name="precio"
                            value={formData.precio}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Descripción:
                        <textarea
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Imagen:
                        <input
                            type='file'
                            multiple
                            onChange={(e) => handleImageChange(e.target.files)}
                        />
                    </label>

                    <div className="modal-buttons">
                        <button type="submit">{product ? 'Actualizar Producto' : 'Agregar Producto'}</button>
                        {product && (
                            <button type="button" onClick={handleDelete}>
                                Eliminar Producto
                            </button>
                        )}
                        <button type="button" onClick={handleCancel}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;
