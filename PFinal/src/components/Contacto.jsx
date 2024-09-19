import '../style/Contacto.css'


function Contact() {
    return (
        <div className="contacoCont">
            <div className="linea2"></div>
            <div className="sobreN"><h1>CONTACTO</h1></div>
            <div className="linea"></div>
            <br />
            <div className='textContact'>
                <h3>Información de contacto</h3>
                <br />
                <p>Número de Teléfono: 2663-0178</p>
                <p>Whatsapp: 8304-5484</p>
                <p>Dirección: Puntarenas, Barranca, Riojalandia De la Escuela 50 mts Este y 150 mts Norte, Frente a Pulpería Los Pitufos</p>
                <p>Visítanos en <a href="https://www.facebook.com/p/Panaderia-Riojalandia-100057884520256/?_rdr">Facebook</a></p>
            </div>
        </div>
    )
}
export default Contact