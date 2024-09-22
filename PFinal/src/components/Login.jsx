import { useState, useEffect } from "react";
import getUsers from "../services/GetLogin";
import { useNavigate, Link } from "react-router-dom";

function Modal({ message, onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    );
}

function FormLogin() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [indicator, setIndicator] = useState("none");
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                setModalMessage('Error al cargar usuarios');
                setShowModal(true);
                setTimeout(() => setShowModal(false), 1500);
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setIndicator("inline");
            return;
        }
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            setModalMessage('Login exitoso');
            setShowModal(true);
            localStorage.setItem('Autenticado', true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/Admin');
            }, 1500);
        } else {
            setModalMessage('Datos incorrectos');
            setShowModal(true);
            setTimeout(() => setShowModal(false), 1500);
        }
    };

    const closeModal = () => {
        setShowModal(false);
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
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email" type="email" placeholder="me@example.com"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <input
                                id="password" type="password" placeholder="Contraseña"
                                name="password"
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
                            <p>No tienes cuenta?, Click <Link to="/Registro">aquí</Link></p>
                        </div>
                    </form>
                </div>
            </div>

            {showModal && <Modal message={modalMessage} onClose={closeModal} />}
        </>
    );
}

export default FormLogin;
