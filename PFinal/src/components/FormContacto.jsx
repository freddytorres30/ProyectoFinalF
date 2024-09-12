


function FormularioContacto() {
    return (
        <div className="container">
            <h1>Formulario de Contacto</h1>
            
            <div className="borde">
                <form id="formPc"/>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="correo">Correo electrónico:</label>
                        <input type="email" id="correo" name="correo" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sede">Sede:</label>
                        <select id="sede" name="sede">
                            <option>Seleccionar Sede</option>
                            <option>Sede El Huerto</option>
                            <option>Sede Hub Santa Ana</option>
                            <option>Sede Edunamica Nosara</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fechaSalida">Fecha de salida:</label>
                        <input type="date" id="fechaSalida" name="fechaSalida" />
                    </div>
                    <div className="consulta">
                        <label htmlFor="codigo">Consulta:</label>
                        <input type="text" id="codigo" name="codigo" />
                    </div>
                    <div className="check">
                        <input type="checkbox" id="confirmacion" name="confirmacion" />
                        <label htmlFor="confirmacion">He leído y acepto las condiciones anteriores.</label>
                    </div>
                    <div>
                        <span id="error-message" className="error-message">Por favor, acepta los términos y
                            condiciones.</span>
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