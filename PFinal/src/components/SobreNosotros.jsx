import '../style/Contacto.css'
import FluidExample from './ImagenPrincipal'


function Nosotros() {
    return (
        <div className="contacoCont">
            <div className="linea2"></div>
            <div className="sobreN"><h1>SOBRE NOSOTROS</h1></div>
            <div className="linea"></div>
    
            <FluidExample/>
            <br />
            <div className='textAbout'>

                <p>En panadería y repostería riojalandia nos enfocamos en ofrecer una atención única a cada cliente
                    Con más de 20 años brindando el mejor servicio y calidad a nuestros clientes
                    Nuestro negocio es el resultado del trabajado y pasión, comprometidos con la calidad y sabor
                    Nos esforzamos por ser más que una simple panadería, queremos ser parte de su día a día, desde tu baguette fresco cada mañana, hasta un delicioso y hermoso pastel para celebrar tus momentos especiales
                    Ven y descubre por qué somos la panadería favorita de la comunidad, los esperamos con los brazos abiertos y un aroma irresistible.</p>
            </div>
            <br />
            <div className='textAbout'>
                <h2>Misión</h2>
                <p>Nuestra misión es proporcionar a nuestra comunidad panes y productos de repostería elaborados con los mejores ingredientes, respetando las tradiciones panaderas y fomentando un ambiente cálido y acogedor donde nuestros clientes se sientan como en casa. Queremos ser el lugar de encuentro donde cada bocado evoca el sabor y la calidez del hogar.</p>
            </div>
            <br />
            <div className='textAbout'>
                <h2>Valores</h2>
                <br />
                <p><strong>Calidad:</strong>Nos comprometemos a utilizar solo los mejores ingredientes para garantizar que cada producto que sale de nuestro horno sea excepcional.</p>
                <p><strong>Tradición:</strong>Respetamos las recetas y técnicas tradicionales, honrando el legado de nuestra familia.</p>
                <p><strong>Comunidad:</strong>Creemos en el poder de la comunidad y nos esforzamos por apoyar a otros negocios locales y participar en eventos comunitarios</p>
                <p><strong>Sostenibilidad:</strong>Trabajamos para minimizar nuestro impacto ambiental utilizando prácticas sostenibles en la producción y en la gestión de residuos.</p>
                <p><strong>Calidez:</strong>Valoramos las relaciones con nuestros clientes, ofreciendo un servicio amable y personalizado que los haga sentir parte de nuestra familia.
                </p>
            </div>
        </div>
    )
}
export default Nosotros