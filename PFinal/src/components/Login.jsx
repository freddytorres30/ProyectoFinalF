import { useState, useEffect } from "react";
import getUsers from "../services/GetLogin";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"


function FormLogin() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [indicator,setIndicator]=useState("none")
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                setError('error');
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            return setIndicator("inline")
        }
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            alert('Login exitoso');
            localStorage.setItem('Autenticado',true)
            navigate('/');
        } else {
            alert('Datos incorrectos');
        }
    };

    return (
        <>
            <div className="center">
                <div className="containerL">
                    <h2 className="login-title">Log in</h2>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nombre de usuario</label>
                            <input
                                id="name" type="text" placeholder="Nombre de usuario"
                                name="name"
                                required
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email" type="email" placeholder="me@example.com"
                                name="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input
                                id="password" type="password" placeholder="Contraseña"
                                name="password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div>
                            <span id="vacios" style={{ display: indicator }} className="vacios">Completa todos los datos</span>
                        </div>
                        <button className="btn btn--form" type="submit">
                            Log in
                        </button>
                        <div>
                            <p>No tienes cuenta?, Click <Link to="/Register">aquí</Link></p>
                        </div>

                        {error && <p className="error">{error}</p>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormLogin;
