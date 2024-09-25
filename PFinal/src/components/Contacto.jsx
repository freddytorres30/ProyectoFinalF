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
                <p>Síguenos en <a href="https://www.facebook.com/p/Panaderia-Riojalandia-100057884520256/?_rdr">Facebook</a></p>
                <p>Dirección: Puntarenas, Barranca, Riojalandia De la Escuela 50 mts Este y 150 mts Norte, Frente a Pulpería Los Pitufos</p>

            </div>
            <br />
            <div className='textContact'>
                <h3>Horario de atención</h3>
                <br />
                <p>Lunes a viernes: 5 am a 11 am y de 1:30 pm a 5:30 pm</p>
                <p>sábado: 5 am a 11 am y de 1:30 pm a 5:00 pm</p>
                <p>Domingo: 5 am a 10am</p>
            </div>
        </div>
    )
}
export default Contact