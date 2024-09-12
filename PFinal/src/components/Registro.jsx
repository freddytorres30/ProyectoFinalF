import { useState } from "react";
import postUsers from "../services/PostReg";
import { useNavigate } from "react-router-dom";


function FormRegister() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [indicator,setIndicator]=useState("none")
    const navigate = useNavigate();

    

    let funcionBoton = async (e) => {
        e.preventDefault()
        if (!name || !email || !password) {
            return setIndicator("inline")
        }
        try {
            const data = {
                name: name,
                email: email,
                password: password
            }
            alert('registro exitoso')
            
            await postUsers(data)
            navigate('/Login');
        } catch (error) {
            alert("Error al registrar usuario")
        }
    }
    return (
        <>
            <div className="center">
                <div className="containerR">
                    <h2 className="reg-title">Registro</h2>

                    <form className="reg-form">
                        <div>
                            <label htmlFor="name">nombre de usuario </label>
                            <input id="name" type="text" placeholder="Nombre de usuario" name="name" required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">correo </label>
                            <input id="email" type="email" placeholder="me@example.com" name="email" required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password">contraseña </label>
                            <input id="password" type="password" placeholder="Contraseña" name="password" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <span id="vacios" style={{display: indicator}} className="vacios">Completa todos los datos</span>
                        </div>
                        <button className="btn btn--reg" type="submit" value="Register" onClick={funcionBoton}>
                            Registro
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default FormRegister
