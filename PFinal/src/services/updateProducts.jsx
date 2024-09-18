// services/updateProducts.js

export async function updateProduct(id, updatedProduct) {
    try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Error al actualizar el producto: ${response.status} - ${errorDetails}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error en updateProduct:', error);
        throw error;
    }
}

export default updateProduct;
