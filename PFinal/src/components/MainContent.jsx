import '../style/Home.css'
import Button from 'react-bootstrap/Button';
import { FaFacebookF, FaWhatsapp, FaPhone } from 'react-icons/fa';


function Main() {
    return (
        <div >
            <br />
            <h1>¡Conoce todos nuestros Productos!</h1>
            <br />
            <div className='promo'>
                <div><img src="src\img\Betterimage.ai_1727234735348.jpeg" alt="" width={500} /></div>
                <div className='mainText'><p>Te invitamos a visitar nuestra página de productos, donde encontrarás una variedad de panes recién horneados, pasteles irresistibles y deliciosos postres que harán que tu día sea más especial. Cada bocado está hecho con amor y los mejores ingredientes.</p><Button href="/Productos" variant="primary" size="lg" 
                    style={{ backgroundColor:'#FF1493' }}>
                        Ir a Productos
                    </Button>{' '}</div>
            </div>
            <br />
            <h1>¡Haz que tu próximo evento sea inolvidable!</h1>
            <br />
            <div className='promo'>
                <div className='mainText'><p>En panadería Riojalandia, ofrecemos queques y bocadillos personalizados, perfectos para cualquier ocasión. Desde celebraciones familiares hasta eventos corporativos, cada delicia está hecha a medida para satisfacer tus necesidades y sorprender a tus invitados.</p>
                <p>Consulta por nuestro<a href="https://wa.me/50683045484" target="_blank" rel="noopener noreferrer"> {/* Cambia el número por el tuyo */}
              <FaWhatsapp /> WhatsApp
            </a></p></div>
                <div><img src="src\img\Betterimage.ai_1727240773271.jpeg" alt="" width={500} /></div>
            </div>
            <br />
            <h1>¡Tu Pan Fresco Todos los Días!</h1>
            <br />
            <div className='promo'>
                <div><img src="src\img\Betterimage.ai_1727240966331.jpeg" alt="" width={550} /></div>
                <div className='mainText'><p>Imagina despertar cada mañana con el delicioso aroma del pan recién horneado llenando tu hogar. No hay nada como la textura crujiente de la corteza y la suavidad del interior. Ya sea que prefieras un baguette dorado, un delicioso pan dulce, disfrutar de pan fresco todos los días no solo es un placer, sino también una forma de nutrir tu cuerpo y alma. Con recetas sencillas y ingredientes de calidad, puedes hacer de cada bocado una celebración.</p></div>
            </div>

        </div>
    )
}
export default Main