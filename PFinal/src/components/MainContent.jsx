import '../style/Home.css'
import Button from 'react-bootstrap/Button';


function Main() {
    return (
        <div >
            <br />
            <div className='promo'>
                <div><img src="https://www.hola.com/horizon/landscape/918cb28d3a78-pan-leche-t.jpg" alt="" width={500}/></div>
                <div className='mainText'><p>This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.</p><Button variant="primary">Primary</Button>{' '}</div>
            </div>
            <br />
            <h1>Pasteles</h1>
            <br />
            <div className='promo'>
                <div className='mainText'><p>This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.</p></div>
                <div><img src="https://www.hola.com/horizon/landscape/918cb28d3a78-pan-leche-t.jpg" alt="" width={500}/></div>
            </div>
            <br />
            <div className='promo'>
                <div><img src="https://www.hola.com/horizon/landscape/918cb28d3a78-pan-leche-t.jpg" alt="" width={500}/></div>
                <div className='mainText'><p>This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.</p></div>
            </div>

        </div>
    )
}
export default Main