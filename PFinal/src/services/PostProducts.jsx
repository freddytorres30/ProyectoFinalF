
async function postProducts(data) {
    try {

       
        const response = await fetch("http://localhost:3000/productos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });


        return await response.json();


    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}
export default postProducts