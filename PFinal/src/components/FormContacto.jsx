


function FormularioContacto() {
    return (
        <div className="container">
            <h1>Formulario de Contacto</h1>
            
            <div className="borde">
                <form id="formPc"/>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre Completo:</label>
                        <input type="text" id="nombre" name="nombre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="correo">Correo electrónico:</label>
                        <input type="email" id="correo" name="correo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numero">Número de teléfono:</label>
                        <input type="email" id="correo" name="correo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sede">Cómo prefiere ser contactada?:</label>
                        <select id="sede" name="sede">
                            <option>Whatsapp</option>
                            <option>Llamada</option>
                            <option>Correo electrónico</option>
                            
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha">Fecha de Preferencia para Contacto::</label>
                        <input type="date" id="fecha" name="fecha" />
                    </div>
                    <div className="consulta">
                        <label htmlFor="codigo">Consulta:</label>
                        <input type="text" id="codigo" name="codigo" />
                    </div>
                    <div>
                        <span id="vacios" className="vacios">Completa todos los datos</span>
                    </div>
            </div>
            <div className="btn">
                <button id="enviar" type="submit" className="submit-btn">Enviar</button>
            </div>
            <form />
        </div>
    )
}
export default FormularioContacto